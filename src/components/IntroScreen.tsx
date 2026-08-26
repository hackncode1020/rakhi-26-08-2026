import React from 'react';
import { motion } from 'motion/react';
import { EvilEyeBadge } from './EvilEyeBadge';
import { playPop, playSparkle, startBackgroundMusic } from '../utils/audio';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  const handleProceed = () => {
    startBackgroundMusic();
    playPop();
    playSparkle();
    onStart();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -30 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl flex flex-col items-center"
      >
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 px-5 py-2 rounded-full bg-blue-100/90 text-blue-800 border border-blue-300/80 shadow-md inline-flex items-center gap-2"
        >
          <span className="text-xl">🤍</span>
          <span className="font-fredoka font-semibold text-sm sm:text-base tracking-wide uppercase">
            A Special Surprise
          </span>
          <span className="text-xl">💙</span>
        </motion.div>

        {/* Large Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 font-fredoka leading-tight tracking-tight px-2"
        >
          “I created this special website just for you <span className="inline-block text-blue-600">🤍💙”</span>
        </motion.h1>

        {/* Central Glowing Symbol / Talisman */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
          className="my-8 sm:my-10 relative cursor-pointer group"
          onClick={handleProceed}
        >
          {/* Outer glow rings */}
          <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-2xl animate-pulse scale-150 pointer-events-none" />
          <div className="relative p-6 sm:p-8 rounded-full bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-2xl border-4 border-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <EvilEyeBadge size={90} className="drop-shadow-lg" />
          </div>

          {/* Floating Orbiting Sparkles */}
          <div className="absolute -top-3 -right-3 text-3xl animate-bounce">✨</div>
          <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌸</div>
        </motion.div>

        {/* Subtitle instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg sm:text-2xl font-medium text-slate-600 font-outfit mb-8"
        >
          Tap below to step inside our world ✨
        </motion.p>

        {/* Big Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={handleProceed}
          className="px-10 py-5 sm:px-14 sm:py-6 text-2xl sm:text-3xl font-bold font-fredoka text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 rounded-full shadow-xl shadow-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/60 transition-all cursor-pointer flex items-center gap-3 border-2 border-white/60"
        >
          <span>Open My Surprise</span>
          <span className="text-3xl animate-pulse">🎁</span>
        </motion.button>
      </motion.div>
    </div>
  );
};
