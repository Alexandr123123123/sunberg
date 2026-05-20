import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { supabase } from '../../../../shared/api/supabase';
import styles from '../ChatWidget.module.css';

export const ChatWidget = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([
    { id: 'welcome', isTranslable: true, transKey: 'chatWidget.welcomeMessage', sender: 'operator' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Session & Database Initialization
  useEffect(() => {
    // 1. Generate or load Session ID from localStorage
    let currentSessionId = localStorage.getItem('sunberg_chat_session');
    if (!currentSessionId) {
      currentSessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('sunberg_chat_session', currentSessionId);
    }
    setSessionId(currentSessionId);

    // 2. Fetch Chat History from Supabase
    const fetchHistory = async () => {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', currentSessionId)
        .order('created_at', { ascending: true });

      if (data && data.length > 0) {
        setMessages([
          { id: 'welcome', isTranslable: true, transKey: 'chatWidget.welcomeMessage', sender: 'operator' },
          ...data
        ]);
      }
    };
    fetchHistory();

    // 3. Subscribe to Real-Time Updates from Supabase
    const channel = supabase
      .channel('chat_updates')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `session_id=eq.${currentSessionId}`,
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
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || !sessionId) return;

    const textToSend = inputValue;
    setInputValue('');

    // 1. Optimistic Update (Show instantly in UI)
    const tempMessage = { id: Date.now().toString(), text: textToSend, sender: 'user' };
    setMessages(prev => [...prev, tempMessage]);

    // 2. Save to Supabase DB
    try {
      await supabase.from('chat_messages').insert([
        { session_id: sessionId, text: textToSend, sender: 'user' }
      ]);
    } catch (err) {
      console.error('Supabase DB Error:', err);
    }

    // 3. Notify Slack via Edge Function (handles threads automatically)
    try {
      const currentThreadTs = localStorage.getItem(`sunberg_chat_thread_${sessionId}`);
      
      const { data, error } = await supabase.functions.invoke('slack-webhook', {
        body: {
          source: 'website',
          sessionId: sessionId,
          text: textToSend,
          threadTs: currentThreadTs
        }
      });

      // Save the thread timestamp if this was the first message
      if (data && data.ts && !currentThreadTs) {
        localStorage.setItem(`sunberg_chat_thread_${sessionId}`, data.ts);
      }
      
      if (error) console.error('Edge Function Error:', error);
    } catch (err) {
      console.error('Failed to send message to Slack', err);
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
                onClick={() => setIsOpen(false)} 
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.5rem' }}
              >
                &times;
              </button>
            </div>

            <div className={styles.messages}>
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`${styles.message} ${msg.sender === 'user' ? styles.message_user : styles.message_operator}`}
                >
                  {msg.isTranslable ? t(msg.transKey) : msg.text}
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

      <button className={`${styles.toggleBtn} ${isOpen ? styles.toggleBtnOpen : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>&times;</span>
        ) : (
          'Chat'
        )}
      </button>
    </div>
  );
};

