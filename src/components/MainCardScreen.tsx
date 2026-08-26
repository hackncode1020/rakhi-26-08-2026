import React from 'react';
import { motion } from 'motion/react';
import { OrnateFrame } from './OrnateFrame';
import { CuteCharacter } from './CuteCharacter';
import { EvilEyeBadge } from './EvilEyeBadge';
import { playPop, playSparkle, startBackgroundMusic } from '../utils/audio';

interface MainCardScreenProps {
  onNext: () => void;
}

export const MainCardScreen: React.FC<MainCardScreenProps> = ({ onNext }) => {
  const handleNext = () => {
    startBackgroundMusic();
    playPop();
    playSparkle();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-3 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl"
      >
        <OrnateFrame>
          <div className="flex flex-col items-center py-4 sm:py-6">
            {/* Top Pill / Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-5 py-2 rounded-full bg-blue-100/80 text-blue-900 border border-blue-300 shadow-sm inline-flex items-center gap-2 mb-4"
            >
              <EvilEyeBadge size={22} />
              <span className="font-fredoka font-semibold text-sm sm:text-base tracking-wide">
                Special Bond • Forever & Always
              </span>
              <span>💙</span>
            </motion.div>

            {/* Main Heading - Extra Large */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 font-fredoka leading-tight tracking-tight px-2"
            >
              A Special Message For You <span className="inline-block text-blue-600">🤍</span>
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600/90 font-outfit"
            >
              A bond that grows stronger with every moment 💙✨
            </motion.p>

            {/* Central Circular Illustration Frame - Like the video */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.55, type: 'spring', stiffness: 200, damping: 18 }}
              className="my-6 sm:my-8 relative"
            >
              {/* Glowing Outer Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-sky-300 blur-xl opacity-40 animate-pulse scale-110 pointer-events-none" />

              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-sky-300 to-blue-600 shadow-2xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-4 border-4 border-white shadow-inner overflow-hidden relative">
                  {/* Subtle cute background rays */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100 via-white to-blue-50" />
                  
                  <div className="relative z-10 scale-90 sm:scale-100">
                    <CuteCharacter mood="happy" size={130} />
                  </div>
                </div>
              </div>

              {/* Little Floating Badges */}
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg border-2 border-blue-200 text-2xl animate-bounce">
                🧿
              </div>
              <div className="absolute -top-2 -left-2 bg-white rounded-full p-2 shadow-lg border-2 border-blue-200 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                🌸
              </div>
            </motion.div>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="max-w-xl text-base sm:text-xl text-slate-600 font-outfit px-4 mb-6 leading-relaxed"
            >
              Every memory we share is a treasure. Let me take you through a little journey made with lots of love! 🤍✨
            </motion.p>

            {/* Large NEXT Button - Replicating Video Style */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleNext}
              className="px-12 py-5 sm:px-16 sm:py-6 text-2xl sm:text-3xl font-black font-fredoka text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 rounded-full shadow-xl shadow-blue-500/40 hover:shadow-blue-600/60 transition-all cursor-pointer flex items-center gap-3 border-2 border-white/60"
            >
              <span>NEXT</span>
              <span className="text-3xl transition-transform group-hover:translate-x-2">→</span>
            </motion.button>
          </div>
        </OrnateFrame>
      </motion.div>
    </div>
  );
};
