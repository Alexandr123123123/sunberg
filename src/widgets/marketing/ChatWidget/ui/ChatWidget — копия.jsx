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

  const whatsappNumber = t('chatWidget.whatsappNumber', { defaultValue: '32473366881' });
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
      setActiveView('slack');
    }
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
