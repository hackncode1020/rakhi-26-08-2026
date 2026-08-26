import React from 'react';

interface EvilEyeProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export const EvilEyeBadge: React.FC<EvilEyeProps> = ({
  size = 48,
  className = '',
  animate = true,
}) => {
  return (
    <span
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className={`drop-shadow-md ${animate ? 'hover:scale-110 transition-transform duration-300' : ''}`}
      >
        <defs>
          <radialGradient id="eyeGlow" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Deep Cobalt Blue */}
        <circle cx="50" cy="50" r="48" fill="#1d4ed8" stroke="#1e40af" strokeWidth="2" />
        
        {/* Soft cyan inner aura */}
        <circle cx="50" cy="50" r="42" fill="#2563eb" />

        {/* Crisp White Ring */}
        <circle cx="50" cy="50" r="32" fill="#ffffff" />

        {/* Light Sky/Turquoise Blue Ring */}
        <circle cx="50" cy="50" r="22" fill="#38bdf8" />

        {/* Center Deep Pupil */}
        <circle cx="50" cy="50" r="12" fill="#0f172a" />

        {/* Glint / Light Reflection highlight */}
        <circle cx="43" cy="43" r="4" fill="#ffffff" opacity="0.9" />
        <circle cx="55" cy="55" r="1.5" fill="#ffffff" opacity="0.6" />
      </svg>
    </span>
  );
};
