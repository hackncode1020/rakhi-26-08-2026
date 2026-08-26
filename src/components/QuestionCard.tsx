import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CuteCharacter, CharacterMood } from './CuteCharacter';
import { EvilEyeBadge } from './EvilEyeBadge';
import { playPop, playDodge, playSparkle, startBackgroundMusic } from '../utils/audio';

interface QuestionCardProps {
  onYes: () => void;
  onSpawnParticle: (emoji: string) => void;
}

interface ButtonOffset {
  x: number;
  y: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  onYes,
  onSpawnParticle,
}) => {
  const [noCount, setNoCount] = useState<number>(0);
  const [noOffset, setNoOffset] = useState<ButtonOffset>({ x: 0, y: 0 });
  const [isNoRemoved, setIsNoRemoved] = useState<boolean>(false);
  const [noShake, setNoShake] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine message based on NO count
  const getCuteMessage = () => {
    if (isNoRemoved) {
      return "Now you only have one true choice! 😌💙";
    }
    switch (noCount) {
      case 1:
        return "Are you sure? 🥺";
      case 2:
        return "Think again! 😭💙";
      case 3:
        return "Okayyy… one last chance! 🥹🤍";
      default:
        return null;
    }
  };

  // Determine character mood
  const getCharacterMood = (): CharacterMood => {
    if (isNoRemoved) return 'no-removed';
    switch (noCount) {
      case 1:
        return 'no1';
      case 2:
        return 'no2';
      case 3:
        return 'no3';
      default:
        return 'idle';
    }
  };

  // Calculate safe offset within container bounds
  const computeSafeOffset = (step: number): ButtonOffset => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const maxX = isMobile ? 80 : 180;
    const maxY = isMobile ? 60 : 110;

    let targetX = 0;
    let targetY = 0;

    if (step === 1) {
      targetX = isMobile ? 65 : 140;
      targetY = isMobile ? 45 : 70;
    } else if (step === 2) {
      targetX = isMobile ? -65 : -140;
      targetY = isMobile ? -45 : -60;
    } else if (step === 3) {
      targetX = isMobile ? 50 : 110;
      targetY = isMobile ? -50 : -80;
    }

    return { x: targetX, y: targetY };
  };

  const handleNoClick = () => {
    const nextCount = noCount + 1;
    playDodge(nextCount);
    onSpawnParticle('💨');

    if (nextCount === 1) {
      setNoCount(1);
      setNoOffset(computeSafeOffset(1));
    } else if (nextCount === 2) {
      setNoCount(2);
      setNoShake(true);
      setTimeout(() => setNoShake(false), 500);
      setNoOffset(computeSafeOffset(2));
    } else if (nextCount >= 3) {
      setNoCount(3);
      setNoOffset(computeSafeOffset(3));
      // Move one final time and then remove NO option
      setTimeout(() => {
        setIsNoRemoved(true);
        playSparkle();
        onSpawnParticle('✨');
      }, 700);
    }
  };

  const handleYesClick = () => {
    startBackgroundMusic();
    playPop();
    onYes();
  };

  const cuteMessage = getCuteMessage();

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-6 text-center z-10 max-w-4xl mx-auto w-full"
    >
      {/* Top Protection Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-pill text-blue-900 font-bold text-base sm:text-lg mb-6 shadow-sm border border-blue-200"
      >
        <EvilEyeBadge size={22} />
        <span>A question from the heart</span>
        <span>🌸</span>
      </motion.div>

      {/* Cute Responsive Mascot */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-6"
      >
        <CuteCharacter mood={getCharacterMood()} size={190} />
      </motion.div>

      {/* VERY VERY LARGE FONT - Main Question */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black main-question-text tracking-tight font-fredoka leading-tight px-2"
      >
        I am your best brother <span className="inline-block">🥹💙</span>
      </motion.h1>

      {/* Sub-question: "Yes or No?" */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-3 text-2xl sm:text-4xl md:text-5xl font-medium text-slate-500 font-outfit tracking-wide"
      >
        Yes or No?
      </motion.p>

      {/* Cute Dynamic Message Bubble */}
      <div className="min-h-[48px] flex items-center justify-center my-4">
        <AnimatePresence mode="wait">
          {cuteMessage && (
            <motion.div
              key={cuteMessage}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.3, type: 'spring' }}
              className="px-6 py-2.5 rounded-2xl bg-blue-50 text-blue-900 font-black text-xl sm:text-2xl font-fredoka shadow-md border-2 border-blue-200 inline-flex items-center gap-2 animate-bounce"
            >
              <span>{cuteMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Button Section */}
      <div className="relative w-full min-h-[140px] flex items-center justify-center mt-2">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {/* YES Button */}
          <motion.button
            whileHover={{ scale: isNoRemoved ? 1.12 : 1.08 }}
            whileTap={{ scale: 0.94 }}
            onClick={handleYesClick}
            className={`cursor-pointer font-fredoka font-bold rounded-full btn-vibrant-yes transition-all duration-300 flex items-center justify-center gap-3 ${
              isNoRemoved
                ? 'px-14 py-6 sm:px-20 sm:py-8 text-3xl sm:text-5xl animate-pulse-glow ring-8 ring-blue-200/80 scale-105'
                : 'px-10 py-5 sm:px-14 sm:py-6 text-2xl sm:text-4xl'
            }`}
          >
            <span>YES 💙</span>
            {isNoRemoved && <span className="text-3xl sm:text-4xl animate-spin">✨</span>}
          </motion.button>

          {/* NO Button with Playful Motion */}
          <AnimatePresence>
            {!isNoRemoved && (
              <motion.button
                layout
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  x: noOffset.x,
                  y: noOffset.y,
                  rotate: noShake ? [-10, 10, -10, 10, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.1,
                  rotate: 45,
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
                transition={{
                  x: { type: 'spring', stiffness: 400, damping: 22 },
                  y: { type: 'spring', stiffness: 400, damping: 22 },
                  rotate: { duration: 0.4, ease: 'easeInOut' },
                  scale: { duration: 0.2 },
                  opacity: { duration: 0.2 },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNoClick}
                className="cursor-pointer font-fredoka font-bold px-9 py-5 sm:px-12 sm:py-6 text-2xl sm:text-4xl btn-vibrant-no rounded-full flex items-center justify-center gap-2 select-none"
              >
                <span>NO 😏</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Helpful Hint on bottom */}
      <p className="mt-8 text-sm sm:text-base font-semibold text-slate-500 font-outfit">
        {isNoRemoved ? "Click YES to make it official! 💙✨" : "Choose carefully... your brother is watching 🥹"}
      </p>
    </div>
  );
};
