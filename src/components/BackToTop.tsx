import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button only when user has scrolled past the hero section
      const heroEl = document.getElementById('home');
      const threshold = heroEl ? heroEl.offsetHeight * 0.8 : 450;
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
      setIsVisible(currentScroll > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.75, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 16 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll back to top"
          title="Back to top"
          className="fixed bottom-21 right-6 z-40 group flex items-center justify-center w-11 h-11 rounded-full bg-[#091124]/90 hover:bg-blue-600 border border-slate-700/80 hover:border-blue-400 text-slate-300 hover:text-white shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
