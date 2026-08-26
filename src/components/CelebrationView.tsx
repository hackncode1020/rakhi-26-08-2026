import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { CuteCharacter } from './CuteCharacter';
import { EvilEyeBadge } from './EvilEyeBadge';
import { playCelebrationFanfare, playPop, playSparkle } from '../utils/audio';

interface CelebrationViewProps {
  onReplay: () => void;
  onSpawnParticle: (emoji: string) => void;
}

export const CelebrationView: React.FC<CelebrationViewProps> = ({
  onReplay,
  onSpawnParticle,
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  useEffect(() => {
    // Play celebratory victory fanfare
    playCelebrationFanfare();

    // 1. Immediate explosive multi-cannon opening sequence
    confetti({
      particleCount: 160,
      spread: 140,
      startVelocity: 55,
      origin: { x: 0.5, y: 0.55 },
      colors: ['#2563eb', '#38bdf8', '#ffffff', '#f472b6', '#fbbf24', '#60a5fa', '#93c5fd', '#3b82f6'],
      ticks: 300,
    });

    setTimeout(() => {
      confetti({
        particleCount: 90,
        angle: 60,
        spread: 90,
        startVelocity: 50,
        origin: { x: 0.05, y: 0.8 },
        colors: ['#1d4ed8', '#38bdf8', '#ffffff', '#fbbf24'],
        ticks: 250,
      });
      confetti({
        particleCount: 90,
        angle: 120,
        spread: 90,
        startVelocity: 50,
        origin: { x: 0.95, y: 0.8 },
        colors: ['#2563eb', '#60a5fa', '#ffffff', '#f472b6'],
        ticks: 250,
      });
    }, 120);

    // 2. Prolonged high-density continuous celebration (14.0 seconds)
    const duration = 14.0 * 1000;
    const end = Date.now() + duration;

    const interval: ReturnType<typeof setInterval> = setInterval(() => {
      const timeLeft = end - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = Math.floor(65 * (timeLeft / duration)) + 45;

      // Left cannon shooting upward-right
      confetti({
        particleCount,
        angle: 55 + Math.random() * 20,
        startVelocity: 48 + Math.random() * 10,
        spread: 85,
        ticks: 180,
        origin: { x: Math.random() * 0.15, y: Math.random() * 0.3 + 0.6 },
        colors: ['#2563eb', '#38bdf8', '#ffffff', '#f472b6', '#fbbf24', '#60a5fa', '#93c5fd'],
        shapes: ['circle', 'square'],
      });

      // Right cannon shooting upward-left
      confetti({
        particleCount,
        angle: 125 - Math.random() * 20,
        startVelocity: 48 + Math.random() * 10,
        spread: 85,
        ticks: 180,
        origin: { x: Math.random() * 0.15 + 0.85, y: Math.random() * 0.3 + 0.6 },
        colors: ['#1d4ed8', '#0ea5e9', '#ffffff', '#ec4899', '#fef08a', '#93c5fd', '#38bdf8'],
        shapes: ['circle', 'square'],
      });

      // Periodic central sky shower
      if (Math.random() < 0.6) {
        confetti({
          particleCount: 60,
          startVelocity: 35,
          spread: 160,
          ticks: 150,
          origin: { x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.3 + 0.15 },
          colors: ['#3b82f6', '#93c5fd', '#ffffff', '#f43f5e', '#fbbf24', '#60a5fa'],
        });
      }
    }, 160);

    const timer = setTimeout(() => {
      setShowCertificate(true);
    }, 800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleOpenGift = () => {
    playPop();
    playSparkle();
    setIsGiftOpened(true);
    confetti({
      particleCount: 140,
      spread: 120,
      startVelocity: 45,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#fbbf24', '#f59e0b', '#3b82f6', '#ffffff', '#60a5fa', '#f472b6'],
      ticks: 200,
    });
  };

  const handleMoreConfetti = () => {
    playPop();
    playSparkle();
    onSpawnParticle('💙');
    onSpawnParticle('🌸');
    onSpawnParticle('✨');

    // Massive multi-angle super burst
    confetti({
      particleCount: 150,
      spread: 130,
      startVelocity: 50,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#2563eb', '#38bdf8', '#ffffff', '#fbbf24', '#f472b6', '#93c5fd'],
      ticks: 220,
    });
    setTimeout(() => {
      confetti({
        particleCount: 90,
        angle: 60,
        spread: 90,
        startVelocity: 48,
        origin: { y: 0.75, x: 0.15 },
        colors: ['#1d4ed8', '#60a5fa', '#ffffff', '#f472b6'],
        ticks: 200,
      });
      confetti({
        particleCount: 90,
        angle: 120,
        spread: 90,
        startVelocity: 48,
        origin: { y: 0.75, x: 0.85 },
        colors: ['#0ea5e9', '#93c5fd', '#ffffff', '#fbbf24'],
        ticks: 200,
      });
    }, 140);
  };

  const handleShare = () => {
    playPop();
    const text = "He is officially my best brother! 🥹💙🤍🧿 Verified 100%!";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 py-8 text-center z-10 max-w-3xl mx-auto">
      {/* Top Floating Badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/90 shadow-lg border-2 border-blue-300 text-blue-900 font-bold text-xl sm:text-2xl mb-6 font-fredoka"
      >
        <span className="text-2xl animate-bounce">👑</span>
        <span>OFFICIALLY VERIFIED</span>
        <EvilEyeBadge size={28} />
      </motion.div>

      {/* Celebrating Cute Character */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
        className="mb-4"
      >
        <CuteCharacter mood="celebrate" size={200} />
      </motion.div>

      {/* VERY VERY LARGE FONT - Primary Message */}
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black celebration-vibrant-text tracking-tight font-fredoka leading-none drop-shadow-sm"
      >
        YAYYY! I KNEW IT! 🥹💙
      </motion.h1>

      {/* VERY VERY LARGE FONT - Subtitle Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-600 tracking-normal font-fredoka leading-tight"
      >
        You are officially my best brother! <br className="hidden sm:inline" />
        <span className="inline-flex items-center gap-2 mt-2">
          <span>🤍</span>
          <EvilEyeBadge size={44} className="inline-block align-middle" />
          <span>✨</span>
        </span>
      </motion.div>

      {/* Interactive Wrapped Gift Box Module (matching reference video gift unbox) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-8 w-full max-w-md mx-auto"
      >
        <div
          onClick={handleOpenGift}
          className={`cursor-pointer rounded-3xl p-6 transition-all duration-500 shadow-2xl border-4 ${
            isGiftOpened
              ? 'bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 border-white text-white scale-105'
              : 'bg-white hover:bg-blue-50/80 border-blue-300 text-blue-950 hover:scale-105 animate-pulse-glow'
          }`}
        >
          {!isGiftOpened ? (
            <div className="flex flex-col items-center gap-3">
              <div className="text-6xl sm:text-7xl animate-bounce">🎁</div>
              <span className="font-fredoka font-black text-xl sm:text-2xl text-blue-900 tracking-wide">
                TAP TO OPEN YOUR GIFT 🤍
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-500 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Special Brother Surprise Inside ✨
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl sm:text-6xl animate-pulse">🏆</div>
              <span className="font-fredoka font-black text-2xl sm:text-3xl text-amber-300 drop-shadow-md">
                UNLOCKED: BEST BROTHER AWARD 💙
              </span>
              <span className="text-sm sm:text-base font-outfit text-sky-100 font-medium">
                Claimed: Unlimited Hugs, Zero Teasing immunity & 100% Love 🧿
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Official Best Brother Pass / Certificate Card */}
      {showCertificate && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="mt-10 w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-blue-200 text-left relative overflow-hidden"
        >
          {/* Subtle watermarked evil eye decor in background */}
          <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
            <EvilEyeBadge size={180} />
          </div>

          <div className="flex items-center justify-between border-b-2 border-blue-100 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <EvilEyeBadge size={36} />
              <div>
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block font-outfit">Official Document</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-fredoka">Best Brother Certificate</h3>
              </div>
            </div>
            <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider font-fredoka">
              100% MATCH 💙
            </div>
          </div>

          <div className="space-y-3 text-slate-700 text-base sm:text-lg">
            <p className="font-medium">
              <strong className="text-blue-900">Brother Status:</strong> Undisputed #1 Best Brother in the Universe 🏆
            </p>
            <p className="font-medium">
              <strong className="text-blue-900">Perks Unlocked:</strong> Unlimited love, free favors, lifetime advice & sisterly blessings 🧿
            </p>
            <p className="font-medium">
              <strong className="text-blue-900">Protection:</strong> Guarded by eternal evil-eye protection 🧿🤍
            </p>
          </div>

          {/* Stamp */}
          <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
              <span>🌸 Certified with Love</span>
            </div>
            <div className="border-2 border-dashed border-blue-400 bg-blue-50/70 text-blue-800 font-black px-4 py-1.5 rounded-xl text-sm rotate-[-3deg] uppercase tracking-wider font-fredoka shadow-sm">
              NO RETURNS ALLOWED 😏💙
            </div>
          </div>
        </motion.div>
      )}

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
      >
        <button
          onClick={handleMoreConfetti}
          className="px-8 py-4 sm:px-10 sm:py-5 text-xl sm:text-2xl font-bold btn-vibrant-yes rounded-full cursor-pointer font-fredoka flex items-center gap-2"
        >
          <span>Send More Love 💙</span>
          <span>🎉</span>
        </button>

        <button
          onClick={handleShare}
          className="px-7 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl font-bold text-blue-900 bg-white hover:bg-blue-50 rounded-full shadow-md border-2 border-blue-200 hover:scale-105 active:scale-95 transition-all cursor-pointer font-fredoka flex items-center gap-2"
        >
          <span>Share Joy 📸</span>
        </button>

        <button
          onClick={() => {
            playPop();
            onReplay();
          }}
          className="px-7 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl font-bold btn-vibrant-no rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer font-fredoka flex items-center gap-2"
        >
          <span>Replay 🔄</span>
        </button>
      </motion.div>

      {/* Toast Notification */}
      {copiedToast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-8 bg-blue-900 text-white px-6 py-3 rounded-full font-bold shadow-2xl font-fredoka text-lg z-50 flex items-center gap-2 border-2 border-sky-300"
        >
          <span>Copied message to clipboard! 🥹💙</span>
        </motion.div>
      )}
    </div>
  );
};
