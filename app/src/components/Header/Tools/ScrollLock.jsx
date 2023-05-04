import React, { useLayoutEffect } from 'react';

export default function ScrollLock({ isActive }) {
  useLayoutEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      window.scrollTo(0, 0);
    };
    if (isActive) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleScroll);
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive]);

  return null;
}