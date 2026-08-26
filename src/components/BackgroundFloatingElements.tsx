import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EvilEyeBadge } from './EvilEyeBadge';
import { FloatingElement, InteractiveParticle } from '../types';

interface BackgroundProps {
  interactiveParticles: InteractiveParticle[];
}

export const BackgroundFloatingElements: React.FC<BackgroundProps> = ({
  interactiveParticles,
}) => {
  // Predefined floating elements with smooth drift
  const staticFloatingItems = useMemo<FloatingElement[]>(() => {
    return [
      { id: 1, x: 8, y: 12, size: 28, duration: 6, delay: 0, type: 'heart', opacity: 0.65 },
      { id: 2, x: 88, y: 18, size: 24, duration: 7.5, delay: 1, type: 'flower', opacity: 0.75 },
      { id: 3, x: 82, y: 75, size: 30, duration: 6.5, delay: 0.5, type: 'evil-eye', opacity: 0.8 },
      { id: 4, x: 12, y: 80, size: 22, duration: 8, delay: 2, type: 'sparkle', opacity: 0.7 },
      { id: 5, x: 92, y: 45, size: 26, duration: 7, delay: 1.5, type: 'heart', opacity: 0.6 },
      { id: 6, x: 6, y: 48, size: 24, duration: 6.8, delay: 0.8, type: 'flower', opacity: 0.7 },
      { id: 7, x: 45, y: 8, size: 20, duration: 8.5, delay: 2.2, type: 'sparkle', opacity: 0.65 },
      { id: 8, x: 75, y: 10, size: 22, duration: 7.2, delay: 1.2, type: 'heart', opacity: 0.7 },
      { id: 9, x: 25, y: 90, size: 26, duration: 9, delay: 0.3, type: 'flower', opacity: 0.65 },
      { id: 10, x: 65, y: 88, size: 28, duration: 7.8, delay: 1.7, type: 'evil-eye', opacity: 0.75 },
      { id: 11, x: 35, y: 15, size: 18, duration: 6.2, delay: 2.5, type: 'sparkle', opacity: 0.6 },
      { id: 12, x: 60, y: 78, size: 22, duration: 8.1, delay: 1.9, type: 'heart', opacity: 0.6 },
    ];
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft Romantic Ambient Gradient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/45 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-sky-200/35 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[32rem] h-[32rem] bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-50/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Background Icons */}
      {staticFloatingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-8, 8, -8],
            rotate: [-8, 8, -8],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          {item.type === 'heart' && (
            <svg
              width={item.size * 1.2}
              height={item.size * 1.2}
              viewBox="0 0 24 24"
              className="drop-shadow-sm filter"
              style={{ fill: 'var(--primary-blue)' }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {item.type === 'flower' && (
            <svg
              width={item.size * 1.2}
              height={item.size * 1.2}
              viewBox="0 0 24 24"
              className="drop-shadow-sm filter"
              style={{ fill: '#93C5FD' }}
            >
              <path d="M12 2c.55 0 1 .45 1 1v2.11c1.37.19 2.62.77 3.61 1.63l1.5-1.5c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-1.5 1.5c.86.99 1.44 2.24 1.63 3.61H21c.55 0 1 .45 1 1s-.45 1-1 1h-2.11c-.19 1.37-.77 2.62-1.63 3.61l1.5 1.5c.39.39.39 1.02 0 1.41-.2.2-.45.3-.71.3s-.51-.1-.71-.3l-1.5-1.5c-.99.86-2.24 1.44-3.61 1.63V21c0 .55-.45 1-1 1s-1-.45-1-1v-2.11c-1.37-.19-2.62-.77-3.61-1.63l-1.5 1.5c-.2.2-.45.3-.71.3s-.51-.1-.71-.3c-.39-.39-.39-1.02 0-1.41l1.5-1.5c-.86-.99-1.44-2.24-1.63-3.61H3c-.55 0-1-.45-1-1s.45-1 1-1h2.11c.19-1.37.77-2.62 1.63-3.61l-1.5-1.5c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l1.5 1.5c.99-.86 2.24-1.44 3.61-1.63V3c0-.55.45-1 1-1z" />
            </svg>
          )}
          {item.type === 'sparkle' && (
            <div className="relative flex items-center justify-center">
              <span className="text-xl animate-sparkle">✨</span>
            </div>
          )}
          {item.type === 'evil-eye' && (
            <EvilEyeBadge size={item.size} />
          )}
        </motion.div>
      ))}

      {/* Dynamic interactive particles spawned on click/tap */}
      <AnimatePresence>
        {interactiveParticles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 1, scale: 0.6, x: particle.x - 14, y: particle.y - 14 }}
            animate={{
              opacity: 0,
              scale: 1.6,
              y: particle.y - 100,
              x: particle.x - 14 + (Math.random() * 40 - 20),
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute text-2xl font-bold pointer-events-none z-50 drop-shadow-md"
          >
            {particle.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
