import React, { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../../../shared/api/supabase';
import styles from '../ChatWidget.module.css';

const MAX_RETRIES = 3;
const RETRY_BASE_DELAY = 1000;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  const uaMatch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  const screenMatch = window.innerWidth <= 768;
  return uaMatch || screenMatch;
};

export const ChatWidget = () => {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState('none'); // 'none' | 'selector' | 'slack'
  const isOpen = activeView !== 'none';

  const [sessionId] = useState(() => {
    let currentSessionId = localStorage.getItem('sunberg_chat_session');
    if (!currentSessionId) {
      currentSessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('sunberg_chat_session', currentSessionId);
    }
    return currentSessionId;
  });

  const [messages, setMessages] = useState([
    { id: 'welcome', isTranslable: true, transKey: 'chatWidget.welcomeMessage', sender: 'operator' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const whatsappNumber = t('chatWidget.whatsappNumber', { defaultValue: '15120000000' });
  const whatsappWelcome = t('chatWidget.whatsappWelcome', { defaultValue: 'Hi! I have a question about Sunberg solar systems.' });
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappWelcome)}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Session & Database Initialization
  useEffect(() => {
    if (!sessionId) return;

    // Fetch Chat History from Supabase
    const fetchHistory = async () => {
      const { data } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (data && data.length > 0) {
        setMessages([
          { id: 'welcome', isTranslable: true, transKey: 'chatWidget.welcomeMessage', sender: 'operator' },
          ...data
        ]);
      }
    };
    fetchHistory();

    // Subscribe to Real-Time Updates from Supabase
    const channel = supabase
      .channel('chat_updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          // Only add messages sent by operator (our own messages are added optimistically)
          if (payload.new.sender === 'operator') {
            setMessages((prev) => [...prev, payload.new]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [sessionId]);

  const sendMessageWithRetry = async (msgId, text, retryCount = 0) => {
    setMessages(prev => prev.map(m =>
      m.id === msgId ? { ...m, status: 'sending' } : m
    ));

    try {
      const { error } = await supabase.from('chat_messages').insert([
        { session_id: sessionId, text, sender: 'user' }
      ]);
      if (error) throw error;

      // DB save succeeded — mark as sent
      setMessages(prev => prev.map(m =>
        m.id === msgId ? { ...m, status: 'sent' } : m
      ));

      // Notify Slack (non-critical — don't fail the message if this errors)
      try {
        const currentThreadTs = localStorage.getItem(`sunberg_chat_thread_${sessionId}`);

        const { data, error: fnError } = await supabase.functions.invoke('slack-webhook', {
          body: {
            source: 'website',
            sessionId: sessionId,
            text,
            threadTs: currentThreadTs
          }
        });

        if (data && data.ts && (!currentThreadTs || data.threadReset)) {
          localStorage.setItem(`sunberg_chat_thread_${sessionId}`, data.ts);
        }

        if (data && data.ok === false) {
          console.warn('Slack API Error, clearing thread timestamp:', data.error);
          localStorage.removeItem(`sunberg_chat_thread_${sessionId}`);
        }

        if (fnError) console.error('Edge Function Error:', fnError);
      } catch (err) {
        console.error('Failed to send message to Slack:', err);
      }
    } catch (err) {
      console.error(`Send failed (attempt ${retryCount + 1}/${MAX_RETRIES}):`, err);

      if (retryCount < MAX_RETRIES - 1) {
        await sleep(RETRY_BASE_DELAY * Math.pow(2, retryCount));
        return sendMessageWithRetry(msgId, text, retryCount + 1);
      }

      // All retries exhausted — mark as error
      setMessages(prev => prev.map(m =>
        m.id === msgId ? { ...m, status: 'error' } : m
      ));
    }
  };

  const handleRetry = (msgId) => {
    const msg = messages.find(m => m.id === msgId);
    if (msg?.text) {
      sendMessageWithRetry(msgId, msg.text);
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !sessionId) return;

    const textToSend = inputValue;
    setInputValue('');

    const tempId = Date.now().toString();
    const tempMessage = { id: tempId, text: textToSend, sender: 'user', status: 'sending' };
    setMessages(prev => [...prev, tempMessage]);

    await sendMessageWithRetry(tempId, textToSend);
  };

  const handleToggle = () => {
    if (isOpen) {
      setActiveView('none');
    } else {
      if (!isMobileDevice()) {
        setActiveView('slack');
      } else {
        const preferred = sessionStorage.getItem('sunberg_preferred_chat');
        if (preferred === 'slack') {
          setActiveView('slack');
        } else {
          setActiveView('selector');
        }
      }
    }
  };

  const handleSelectSlack = () => {
    sessionStorage.setItem('sunberg_preferred_chat', 'slack');
    setActiveView('slack');
  };

  const handleSelectWhatsApp = () => {
    sessionStorage.setItem('sunberg_preferred_chat', 'whatsapp');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setActiveView('none');
  };

  return (
    <div className={styles.wrapper}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            {activeView === 'selector' ? (
              <>
                <div className={styles.header}>
                  <div>
                    <div className={styles.headerTitle}>{t('chatWidget.title')}</div>
                    <div className={styles.headerStatus}>
                      <span className={styles.statusDot}></span>
                      {t('chatWidget.status')}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveView('none')}
                    style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.5rem' }}
                  >
                    &times;
                  </button>
                </div>

                <div className={styles.selectorBody}>
                  <p className={styles.selectorIntro}>{t('chatWidget.chooseChannel')}</p>

                  <button onClick={handleSelectWhatsApp} className={styles.whatsappBtn}>
                    <svg className={styles.whatsappIcon} viewBox="0 0 24 24" width="20" height="20">
                      <path fill="currentColor" d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.808 1.236h.005c5.507 0 9.99-4.478 9.99-9.987C22.005 6.479 17.52 2 12.012 2zm5.836 14.199c-.32.902-1.6 1.657-2.228 1.764-.539.092-1.24.168-3.61-.817-3.033-1.26-4.994-4.343-5.146-4.545-.152-.203-1.232-1.637-1.232-3.13 0-1.493.78-2.228 1.059-2.532.279-.304.609-.38.812-.38.203 0 .406.002.584.01.19.009.444-.073.697.538.26.627.888 2.167.964 2.32.076.152.127.33.025.533-.101.203-.152.33-.304.507-.152.177-.32.395-.457.532-.152.152-.31.317-.134.621.176.304.786 1.293 1.686 2.093.114.102.852.767 1.632 1.077.291.114.494.076.67-.127.177-.203.76-.887.964-1.191.203-.304.406-.253.67-.152.266.101 1.686.799 1.977.94.292.14.484.21.558.337.076.127.076.73-.244 1.632z" />
                    </svg>
                    {t('chatWidget.chatOnWhatsApp')}
                  </button>

                  <button onClick={handleSelectSlack} className={styles.liveChatBtn}>
                    <svg className={styles.chatIcon} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    {t('chatWidget.chatOnSite')}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.header}>
                  <div>
                    <div className={styles.headerTitle}>{t('chatWidget.title')}</div>
                    <div className={styles.headerStatus}>
                      <span className={styles.statusDot}></span>
                      {t('chatWidget.status')}
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveView('none')}
                    style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.5rem' }}
                  >
                    &times;
                  </button>
                </div>

                <div className={styles.messages}>
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`${styles.message} ${msg.sender === 'user' ? styles.message_user : styles.message_operator} ${msg.status === 'error' ? styles.message_error : ''}`}
                    >
                      {msg.isTranslable ? t(msg.transKey) : msg.text}
                      {msg.sender === 'user' && msg.status === 'sending' && (
                        <span className={styles.msgSending}>⏳</span>
                      )}
                      {msg.status === 'error' && (
                        <div className={styles.msgErrorWrap}>
                          <span className={styles.msgErrorText}>⚠ {t('chatWidget.sendError', { defaultValue: 'Ошибка отправки' })}</span>
                          <button onClick={() => handleRetry(msg.id)} className={styles.retryBtn}>
                            ↻ {t('chatWidget.retry', { defaultValue: 'Повторить' })}
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <form className={styles.inputArea} onSubmit={handleSend}>
                  <input
                    type="text"
                    placeholder={t('chatWidget.placeholder')}
                    className={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button type="submit" className={styles.sendBtn}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button className={`${styles.toggleBtn} ${isOpen ? styles.toggleBtnOpen : ''}`} onClick={handleToggle}>
        {isOpen ? (
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>&times;</span>
        ) : (
          'Chat'
        )}
      </button>
    </div>
  );
};
