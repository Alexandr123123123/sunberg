import { useState, useMemo } from 'react';

/**
 * Hook for filtering a list of items based on a category.
 * @param {Array} items - The full list of projects.
 * @param {string} initialCategory - The category to start with (default 'all').
 */
export const useProjectFilter = (items, initialCategory = 'all') => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return items;
    return items.filter(item => item.category === activeCategory);
  }, [items, activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    filteredItems,
  };
};
