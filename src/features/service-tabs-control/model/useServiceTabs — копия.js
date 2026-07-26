import { useState } from 'react';

/**
 * Hook for managing active tabs across multiple service blocks.
 * @param {Object} initialState - Initial active tabs for each block.
 */
export const useServiceTabs = (initialState) => {
  const [activeTabs, setActiveTabs] = useState(initialState);

  const handleTabChange = (blockId, tabId) => {
    setActiveTabs(prev => ({
      ...prev,
      [blockId]: tabId
    }));
  };

  return {
    activeTabs,
    handleTabChange
  };
};
