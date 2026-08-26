import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OrnateFrame } from './OrnateFrame';
import { EvilEyeBadge } from './EvilEyeBadge';
import { Mail, Sparkles, Heart } from 'lucide-react';
import { playPop, playSparkle, startBackgroundMusic } from '../utils/audio';

interface LetterScreenProps {
  onNext: () => void;
}

export const LetterScreen: React.FC<LetterScreenProps> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true); // Default open or toggleable

  const handleNext = () => {
    startBackgroundMusic();
    playPop();
    playSparkle();
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[82vh] w-full px-3 sm:px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -25 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-4xl"
      >
        <OrnateFrame>
          <div className="flex flex-col items-center py-4 sm:py-6">
            {/* Header Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-5 py-2 rounded-full bg-blue-100/90 text-blue-900 border border-blue-300 shadow-sm inline-flex items-center gap-2 mb-3"
            >
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="font-fredoka font-semibold text-sm sm:text-base tracking-wide uppercase">
                A Letter Sealed with Love
              </span>
              <span>💌</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 font-fredoka leading-tight tracking-tight px-2"
            >
              For My Favorite Person <span className="inline-block text-blue-600">💙</span>
            </motion.h1>

            {/* Heartfelt Letter Card (matching video popup card) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.45, type: 'spring', stiffness: 220, damping: 20 }}
              className="mt-6 mb-8 w-full max-w-2xl bg-white/95 rounded-3xl p-6 sm:p-10 shadow-xl border-2 border-blue-200 text-left relative overflow-hidden"
              style={{
                backgroundImage: 'radial-gradient(#dbeafe 0.75px, transparent 0.75px)',
                backgroundSize: '16px 16px',
              }}
            >
              {/* Corner Watermarks */}
              <div className="absolute top-3 right-3 text-blue-200 pointer-events-none opacity-40">
                <Sparkles className="w-10 h-10" />
              </div>
              <div className="absolute -bottom-6 -right-6 text-blue-100 pointer-events-none opacity-60">
                <Heart className="w-24 h-24 fill-blue-100" />
              </div>

              {/* Evil Eye Stamp */}
              <div className="flex items-center justify-between border-b border-blue-100 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <EvilEyeBadge size={34} />
                  <span className="font-fredoka font-bold text-blue-800 text-base sm:text-lg">
                    Official Brother Note • 100% Genuine
                  </span>
                </div>
                <span className="text-2xl">✨</span>
              </div>

              {/* Message Body with large, comfortable typography */}
              <div className="space-y-4 text-slate-700 font-outfit text-base sm:text-xl md:text-2xl leading-relaxed">
                <p className="font-semibold text-blue-950">
                  Hey you, 🥹💙
                </p>
                <p>
                  All those silly childhood fights, teasing each other endlessly, laughing till our stomachs hurt at the most random things, and always protecting each other...
                </p>
                <p>
                  You are truly one of a kind. Having you in my life makes everything brighter, funnier, and a whole lot better! 🤍
                </p>
                <p className="font-handwriting text-2xl sm:text-3xl text-blue-600 font-bold pt-2">
                  Always here for you, no matter what! 🧿✨
                </p>
              </div>
            </motion.div>

            {/* Large NEXT Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleNext}
              className="px-12 py-5 sm:px-16 sm:py-6 text-2xl sm:text-3xl font-black font-fredoka text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 rounded-full shadow-xl shadow-blue-500/40 hover:shadow-blue-600/60 transition-all cursor-pointer flex items-center gap-3 border-2 border-white/60"
            >
              <span>NEXT</span>
              <span className="text-3xl">→</span>
            </motion.button>
          </div>
        </OrnateFrame>
      </motion.div>
    </div>
  );
};
