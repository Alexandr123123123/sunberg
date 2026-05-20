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

  // 1. From Website: Send to Slack
  if (payload.source === 'website') {
    const { sessionId, text, threadTs } = payload;
    
    const slackBody: any = {
      channel: SLACK_CHANNEL_ID,
      text: `*Сообщение с сайта (Сессия ${sessionId}):*\n> ${text}`
    };
    
    if (threadTs) {
      slackBody.thread_ts = threadTs;
    }
    
    try {
      const res = await fetch("https://slack.com/api/chat.postMessage", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(slackBody)
      });
      const data = await res.json();
      return new Response(JSON.stringify({ ok: data.ok, ts: data.ts, error: data.error }), {
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
        const repliesRes = await fetch(`https://slack.com/api/conversations.replies?channel=${event.channel}&ts=${event.thread_ts}&limit=1`, {
          headers: {
            "Authorization": `Bearer ${SLACK_BOT_TOKEN}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });
        
        const repliesData = await repliesRes.json();
        
        if (repliesData.ok && repliesData.messages && repliesData.messages.length > 0) {
          const parentMessage = repliesData.messages[0];
          const match = parentMessage.text.match(/Сессия (session_[a-zA-Z0-9]+)/);
          
          if (match && match[1]) {
            const sessionId = match[1];
            const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
            const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
            const supabase = createClient(supabaseUrl, supabaseKey);
            
            await supabase.from("chat_messages").insert([
              { session_id: sessionId, text: event.text, sender: 'operator' }
            ]);
          }
        }
      } catch (err) {
        console.error("Error processing Slack event:", err);
      }
    }
  }

  return new Response("OK", { status: 200, headers: corsHeaders })
})
