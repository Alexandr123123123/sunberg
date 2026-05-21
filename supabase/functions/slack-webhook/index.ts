import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3"

const SLACK_BOT_TOKEN = Deno.env.get("SLACK_BOT_TOKEN") || "";
const SLACK_CHANNEL_ID = Deno.env.get("SLACK_CHANNEL_ID") || "";

serve(async (req) => {
  // CORS Headers for browser requests
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }

  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const bodyText = await req.text()
  
  let payload;
  try {
    payload = JSON.parse(bodyText);
  } catch (e) {
    return new Response("Invalid JSON", { status: 400, headers: corsHeaders })
  }

  // Create Supabase client for DB operations
  const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
  const supabaseClient = createClient(supabaseUrl, supabaseKey);

  // 1. From Website: Send to Slack
  if (payload.source === 'website') {
    const { sessionId, text, threadTs, messageType } = payload;
    
    let header = `*Сообщение с сайта (Сессия ${sessionId}):*`;
    if (messageType === 'consultation') {
      header = `*📞 ЗАЯВКА НА КОНСУЛЬТАЦИЮ (Форма обратной связи, Сессия ${sessionId}):*`;
    }
    
    const slackBody: any = {
      channel: SLACK_CHANNEL_ID,
      text: `${header}\n> ${text}`
    };
    
    let threadReset = false;
    if (threadTs) {
      slackBody.thread_ts = threadTs;
    }
    
    try {
      let res = await fetch("https://slack.com/api/chat.postMessage", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(slackBody)
      });
      let data = await res.json();
      
      // If thread not found, retry without thread_ts to auto-create a new thread
      if (!data.ok && data.error === "thread_not_found" && slackBody.thread_ts) {
        console.log(`Slack thread ${slackBody.thread_ts} not found. Retrying without thread_ts...`);
        delete slackBody.thread_ts;
        threadReset = true;
        
        res = await fetch("https://slack.com/api/chat.postMessage", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(slackBody)
        });
        data = await res.json();
      }

      // Save thread mapping for new threads
      const isNewThread = !threadTs || threadReset;
      if (data.ok && data.ts && isNewThread) {
        try {
          await supabaseClient.from("chat_threads").upsert(
            { thread_ts: data.ts, session_id: sessionId },
            { onConflict: 'thread_ts' }
          );
        } catch (e) {
          console.error("Failed to save thread mapping:", e);
        }
      }
      
      return new Response(JSON.stringify({ 
        ok: data.ok, 
        ts: data.ts, 
        error: data.error,
        threadReset: threadReset
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
    }
  }

  // 2. Slack URL Verification Challenge
  if (payload.type === "url_verification") {
    return new Response(payload.challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }

  // 3. Handle incoming messages from Slack (Operator Reply)
  if (payload.type === "event_callback") {
    const event = payload.event;
    
    if (event && event.type === "message" && !event.bot_id && event.thread_ts) {
      try {
        // 1. Look up session from chat_threads table
        const { data: threadData } = await supabaseClient
          .from("chat_threads")
          .select("session_id")
          .eq("thread_ts", event.thread_ts)
          .single();

        let resolvedSessionId = threadData?.session_id;

        // 2. Fallback: parse from Slack message text (for legacy threads without DB mapping)
        if (!resolvedSessionId) {
          const repliesRes = await fetch(`https://slack.com/api/conversations.replies?channel=${event.channel}&ts=${event.thread_ts}&limit=1`, {
            headers: {
              "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
              "Content-Type": "application/x-www-form-urlencoded"
            }
          });
          const repliesData = await repliesRes.json();

          if (repliesData.ok && repliesData.messages && repliesData.messages.length > 0) {
            const match = repliesData.messages[0].text.match(/Сессия (session_[a-zA-Z0-9]+)/);
            if (match && match[1]) {
              resolvedSessionId = match[1];
              // Save mapping for future lookups
              try {
                await supabaseClient.from("chat_threads").upsert(
                  { thread_ts: event.thread_ts, session_id: resolvedSessionId },
                  { onConflict: 'thread_ts' }
                );
              } catch (_) { /* best effort */ }
            }
          }
        }

        // 3. Save operator message to DB
        if (resolvedSessionId) {
          await supabaseClient.from("chat_messages").insert([
            { session_id: resolvedSessionId, text: event.text, sender: 'operator' }
          ]);
        }
      } catch (err) {
        console.error("Error processing Slack event:", err);
      }
    }
  }

  return new Response("OK", { status: 200, headers: corsHeaders })
})
