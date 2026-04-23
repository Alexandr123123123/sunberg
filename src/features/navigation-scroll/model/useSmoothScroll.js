/**
 * Hook for handling smooth scrolling to specific elements on the page.
 * Useful for single-page navigation and CTA buttons.
 */
export const useSmoothScroll = () => {
  const scrollToSection = (id, offset = 100) => {
    const element = document.getElementById(id);
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  };

  return { scrollToSection };
};
