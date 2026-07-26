import { useState } from 'react';

/**
 * Hook for managing accordion state in FAQ or similar sections.
 * Supports single-open mode by default.
 */
export const useFaqControl = (initialId = null) => {
  const [openId, setOpenId] = useState(initialId);

  const toggleItem = (id) => {
    setOpenId(prevId => (prevId === id ? null : id));
  };

  const isOpen = (id) => openId === id;

  return {
    openId,
    toggleItem,
    isOpen
  };
};
