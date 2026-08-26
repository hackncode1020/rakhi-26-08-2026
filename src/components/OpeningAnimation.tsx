import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EvilEyeBadge } from './EvilEyeBadge';
import { playPop, playSparkle, startBackgroundMusic } from '../utils/audio';

interface OpeningAnimationProps {
  onComplete: () => void;
}

export const OpeningAnimation: React.FC<OpeningAnimationProps> = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;
    startBackgroundMusic();
    setIsOpen(true);
    playPop();
    playSparkle();
    setTimeout(() => {
      onComplete();
    }, 1100);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center z-10">
      <AnimatePresence>
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.15, y: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-lg w-full"
          >
            {/* Top cute pill header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill text-blue-800 font-semibold text-lg sm:text-xl shadow-sm mb-8"
            >
              <EvilEyeBadge size={22} />
              <span>Special message for my brother</span>
              <span className="text-xl">✨</span>
            </motion.div>

            {/* Glowing Interactive Envelope Card */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: 1 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleOpen}
              className="cursor-pointer relative w-72 h-48 sm:w-88 sm:h-56 bg-gradient-to-br from-blue-500 via-sky-500 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center border-4 border-white/80 p-4 transition-all duration-300 animate-pulse-glow"
            >
              {/* Envelope Flap Lines Decor */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-white/15 rounded-t-3xl clip-path-polygon pointer-events-none" />
              
              {/* Floating Sparkles on card */}
              <span className="absolute top-4 left-5 text-2xl animate-sparkle">✨</span>
              <span className="absolute bottom-4 right-5 text-2xl animate-sparkle" style={{ animationDelay: '1s' }}>🌸</span>
              <span className="absolute top-4 right-5 text-xl animate-float-slow">💙</span>

              {/* Center Wax Seal / Heart Emblem */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-xl flex items-center justify-center flex-col gap-1 border-2 border-blue-200">
                <span className="text-3xl sm:text-4xl animate-bounce">💌</span>
                <span className="text-xs font-bold text-blue-600 tracking-wider font-fredoka">OPEN</span>
              </div>
            </motion.div>

            {/* Big Teaser Text */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight font-fredoka leading-tight"
            >
              Hey Brother... <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                I have a secret question 🥹💙
              </span>
            </motion.h2>

            {/* Big Action Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="mt-8 px-10 py-5 sm:px-14 sm:py-6 text-2xl sm:text-3xl font-bold btn-vibrant-yes rounded-full transition-all cursor-pointer font-fredoka flex items-center gap-3"
            >
              <span>Tap to Open</span>
              <span className="text-3xl">✨</span>
            </motion.button>
          </motion.div>
        ) : (
          /* Unfolding burst transition */
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="text-7xl sm:text-8xl animate-bounce">
              💙✨🌸
            </div>
            <p className="text-3xl sm:text-4xl font-black text-blue-600 font-fredoka">
              Unfolding... 🥹
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
