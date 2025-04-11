import React from 'react';

// Custom hook for smooth scrolling
const useSmoothScroll = () => {
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return { scrollToSection };
};

export default useSmoothScroll;
