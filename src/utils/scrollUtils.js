// Efficient scroll handling utilities
let scrollTimeout;
let ticking = false;

/**
 * Throttles scroll events using requestAnimationFrame
 * @param {Function} callback - The function to call on scroll
 */
export const throttleScroll = (callback) => {
  if (!ticking) {
    requestAnimationFrame(() => {
      callback();
      ticking = false;
    });
    ticking = true;
  }
};

/**
 * Debounces scroll events
 * @param {Function} callback - The function to call after scroll stops
 * @param {number} delay - Delay in milliseconds
 */
export const debounceScroll = (callback, delay = 100) => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(callback, delay);
};

/**
 * Efficient scroll event listener that combines throttling and debouncing
 * @param {Function} onScroll - Function to call during scroll
 * @param {Function} onScrollEnd - Function to call when scroll ends
 * @param {number} delay - Delay for debounce
 */
export const addOptimizedScrollListener = (onScroll, onScrollEnd, delay = 100) => {
  const handleScroll = () => {
    throttleScroll(onScroll);
    debounceScroll(onScrollEnd, delay);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll, { passive: true });
};