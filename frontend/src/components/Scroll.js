// @ts-nocheck
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Adds event listener to the given object.
 * @param {Object} obj - The target object to attach the event listener to.
 * @param {...any} args - Arguments for addEventListener.
 */
export function on(obj, ...args) {
  if (obj && obj.addEventListener) {
    obj.addEventListener(...args);
  }
}

/**
 * Removes event listener from the given object.
 * @param {Object} obj - The target object to remove the event listener from.
 * @param {...any} args - Arguments for removeEventListener.
 */
export function off(obj, ...args) {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(...args);
  }
}

/**
 * useScrollingUp custom React hook to determine if the page is scrolling up.
 * @returns {Object} - Scrolling up state, screen beginning state, and Y offset.
 */
const useScrollingUp = () => {
  const prevScrollRef = useRef(
    typeof window !== 'undefined' ? window.pageYOffset : 0,
  );
  const [scrollingUp, setScrollingUp] = useState(true);
  const [screenBegining, setScreenBeginning] = useState(true);
  const [YOffset, setYOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') {
      return; // Exit early if we're on the server
    }
    const currScroll = window.pageYOffset;
    setYOffset(currScroll);
    const isScrolled = prevScrollRef.current > currScroll;
    setScrollingUp(isScrolled);
    currScroll !== 0 ? setScreenBeginning(false) : setScreenBeginning(true);
    prevScrollRef.current = currScroll;
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return; // Exit early if we're on the server
    }
    on(window, 'scroll', handleScroll, { passive: true });
    return () => {
      off(window, 'scroll', handleScroll, { passive: true });
    };
  }, [handleScroll]);

  return { scrollingUp, screenBegining, YOffset };
};

export default useScrollingUp;
