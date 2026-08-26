import React from 'react';
import { motion } from 'motion/react';
import { EvilEyeBadge } from './EvilEyeBadge';

export type CharacterMood = 'idle' | 'no1' | 'no2' | 'no3' | 'no-removed' | 'celebrate';

interface CuteCharacterProps {
  mood: CharacterMood;
  size?: number;
}

export const CuteCharacter: React.FC<CuteCharacterProps> = ({
  mood,
  size = 180,
}) => {
  return (
    <div
      className="relative flex items-center justify-center select-none mx-auto"
      style={{ width: size, height: size }}
    >
      {/* Dynamic Aura Glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-300/30 blur-xl"
        animate={{
          scale: mood === 'celebrate' ? [1, 1.3, 1] : [0.95, 1.05, 0.95],
          opacity: mood === 'celebrate' ? [0.4, 0.8, 0.4] : [0.3, 0.5, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: mood === 'celebrate' ? 1.2 : 2.5,
          ease: 'easeInOut',
        }}
      />

      {/* Main Character Body Container */}
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        animate={
          mood === 'celebrate'
            ? { y: [0, -18, 0, -12, 0], rotate: [-2, 2, -2, 2, 0] }
            : mood === 'no2'
            ? { x: [-4, 4, -4, 4, 0], y: [0, -2, 0] }
            : mood === 'no3'
            ? { y: [0, -6, 0] }
            : { y: [0, -8, 0] }
        }
        transition={{
          repeat: Infinity,
          duration: mood === 'celebrate' ? 0.9 : mood === 'no2' ? 0.4 : 3,
          ease: 'easeInOut',
        }}
      >
        <svg viewBox="0 0 200 200" width={size} height={size} className="overflow-visible">
          <defs>
            {/* Soft Blue Gradients */}
            <linearGradient id="bearBodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
            <linearGradient id="earInnerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            <linearGradient id="crownGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* Crown if celebrating */}
          {mood === 'celebrate' && (
            <motion.g
              initial={{ y: -30, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: 'spring', damping: 12, stiffness: 200 }}
            >
              {/* Crown Base */}
              <path
                d="M 68 38 L 80 16 L 100 28 L 120 16 L 132 38 Z"
                fill="url(#crownGrad)"
                stroke="#d97706"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <circle cx="80" cy="16" r="3.5" fill="#ef4444" />
              <circle cx="100" cy="28" r="4" fill="#3b82f6" />
              <circle cx="120" cy="16" r="3.5" fill="#10b981" />
            </motion.g>
          )}

          {/* Left Ear */}
          <circle cx="58" cy="62" r="24" fill="url(#bearBodyGrad)" stroke="#7dd3fc" strokeWidth="3" />
          <circle cx="58" cy="62" r="14" fill="url(#earInnerGrad)" opacity="0.8" />

          {/* Right Ear */}
          <circle cx="142" cy="62" r="24" fill="url(#bearBodyGrad)" stroke="#7dd3fc" strokeWidth="3" />
          <circle cx="142" cy="62" r="14" fill="url(#earInnerGrad)" opacity="0.8" />

          {/* Main Face / Head */}
          <circle
            cx="100"
            cy="105"
            r="65"
            fill="url(#bearBodyGrad)"
            stroke="#7dd3fc"
            strokeWidth="3.5"
          />

          {/* Soft White Muzzle */}
          <ellipse cx="100" cy="118" rx="28" ry="22" fill="#ffffff" opacity="0.95" />

          {/* Cute Little Blue Nose */}
          <path
            d="M 94 108 C 94 105 106 105 106 108 C 106 113 94 113 94 108 Z"
            fill="#0284c7"
          />

          {/* Blushing Cheeks */}
          <ellipse
            cx="62"
            cy="118"
            rx="10"
            ry="6"
            fill="#f472b6"
            opacity={mood === 'no2' || mood === 'celebrate' ? 0.75 : 0.55}
          />
          <ellipse
            cx="138"
            cy="118"
            rx="10"
            ry="6"
            fill="#f472b6"
            opacity={mood === 'no2' || mood === 'celebrate' ? 0.75 : 0.55}
          />

          {/* Dynamic Eyes & Mouth depending on mood */}
          {mood === 'celebrate' ? (
            <>
              {/* Happy squinting/arched eyes */}
              <path
                d="M 68 96 Q 78 84 88 96"
                fill="none"
                stroke="#0369a1"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M 112 96 Q 122 84 132 96"
                fill="none"
                stroke="#0369a1"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* Big joyful open smile */}
              <path
                d="M 88 118 Q 100 138 112 118"
                fill="#f43f5e"
                stroke="#0369a1"
                strokeWidth="3"
              />
              {/* Little cute tooth */}
              <path d="M 96 118 L 104 118 L 100 122 Z" fill="#ffffff" />
            </>
          ) : mood === 'no2' ? (
            <>
              {/* Sobbing eyes */}
              <path
                d="M 68 98 Q 78 106 88 98"
                fill="none"
                stroke="#0369a1"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 112 98 Q 122 106 132 98"
                fill="none"
                stroke="#0369a1"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Comic water stream tears */}
              <path
                d="M 72 104 Q 66 128 70 144"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <path
                d="M 128 104 Q 134 128 130 144"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              {/* Sad open wobbly mouth */}
              <path
                d="M 92 126 Q 100 118 108 126"
                fill="none"
                stroke="#0369a1"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </>
          ) : mood === 'no1' ? (
            <>
              {/* Surprised round eyes */}
              <circle cx="78" cy="95" r="7" fill="#0c4a6e" />
              <circle cx="76" cy="93" r="2.5" fill="#ffffff" />
              <circle cx="122" cy="95" r="7" fill="#0c4a6e" />
              <circle cx="120" cy="93" r="2.5" fill="#ffffff" />
              {/* Small round surprised 'o' mouth */}
              <circle cx="100" cy="124" r="5" fill="#0c4a6e" />
            </>
          ) : mood === 'no3' ? (
            <>
              {/* Puppy begging large sparkling eyes */}
              <circle cx="77" cy="94" r="9" fill="#0369a1" />
              <circle cx="74" cy="91" r="4" fill="#ffffff" />
              <circle cx="80" cy="97" r="1.5" fill="#ffffff" />
              <circle cx="123" cy="94" r="9" fill="#0369a1" />
              <circle cx="120" cy="91" r="4" fill="#ffffff" />
              <circle cx="126" cy="97" r="1.5" fill="#ffffff" />
              {/* Pleading wobbly mouth */}
              <path
                d="M 92 125 Q 100 120 108 125"
                fill="none"
                stroke="#0369a1"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </>
          ) : mood === 'no-removed' ? (
            <>
              {/* Playful wink & smirk */}
              <circle cx="78" cy="94" r="7.5" fill="#0369a1" />
              <circle cx="76" cy="92" r="2.5" fill="#ffffff" />
              <path
                d="M 114 96 Q 124 88 132 94"
                fill="none"
                stroke="#0369a1"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Smug cute grin */}
              <path
                d="M 94 122 Q 106 130 112 118"
                fill="none"
                stroke="#0369a1"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </>
          ) : (
            <>
              {/* Standard Cute Sparkling Eyes */}
              <circle cx="78" cy="95" r="7" fill="#0369a1" />
              <circle cx="76" cy="92" r="3" fill="#ffffff" />
              <circle cx="81" cy="97" r="1" fill="#ffffff" />
              <circle cx="122" cy="95" r="7" fill="#0369a1" />
              <circle cx="120" cy="92" r="3" fill="#ffffff" />
              <circle cx="125" cy="97" r="1" fill="#ffffff" />
              {/* Gentle sweet smile */}
              <path
                d="M 92 122 Q 100 128 108 122"
                fill="none"
                stroke="#0369a1"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </>
          )}

          {/* Paws */}
          {mood === 'no3' ? (
            // Clasped begging paws in front
            <g>
              <ellipse cx="94" cy="148" rx="14" ry="12" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2.5" />
              <ellipse cx="106" cy="148" rx="14" ry="12" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2.5" />
            </g>
          ) : mood === 'celebrate' ? (
            // Paws waving up in the air
            <g>
              <ellipse cx="38" cy="70" rx="14" ry="12" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2.5" transform="rotate(-30 38 70)" />
              <ellipse cx="162" cy="70" rx="14" ry="12" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2.5" transform="rotate(30 162 70)" />
            </g>
          ) : (
            // Resting cute paws holding a mini heart
            <g>
              <ellipse cx="56" cy="148" rx="14" ry="12" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2.5" />
              <ellipse cx="144" cy="148" rx="14" ry="12" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2.5" />
            </g>
          )}
        </svg>

        {/* Small accessory badge resting next to character */}
        <div className="absolute -bottom-2 -right-1 pointer-events-none">
          {mood === 'celebrate' ? (
            <span className="text-3xl animate-bounce">🎉</span>
          ) : (
            <EvilEyeBadge size={32} />
          )}
        </div>
      </motion.div>
    </div>
  );
};
