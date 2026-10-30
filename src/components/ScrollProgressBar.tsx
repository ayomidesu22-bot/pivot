import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth out the scroll animation for an effortless, fluid feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle track background */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* Animated gradient progress indicator */}
      <motion.div
        className="h-full w-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
        style={{
          scaleX,
          transformOrigin: '0%',
        }}
      />
    </div>
  );
};
