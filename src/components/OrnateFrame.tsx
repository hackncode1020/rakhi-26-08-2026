import React from 'react';

interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  accentColor?: string;
}

export const OrnateFrame: React.FC<OrnateFrameProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`relative w-full max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 md:p-12 transition-all duration-500 ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 247, 255, 0.98) 100%)',
        boxShadow: '0 25px 50px -12px rgba(37, 99, 235, 0.22), 0 0 0 1px rgba(191, 219, 254, 0.9), inset 0 0 30px rgba(219, 234, 254, 0.5)',
      }}
    >
      {/* Decorative Ornate Double Border */}
      <div className="absolute inset-2 sm:inset-3 border-2 border-blue-300/80 rounded-2xl pointer-events-none" />
      <div className="absolute inset-3 sm:inset-4 border border-blue-200/60 rounded-xl pointer-events-none" />

      {/* Top Left Ornate Corner SVG */}
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none text-blue-500">
        <svg viewBox="0 0 60 60" fill="currentColor" className="w-full h-full opacity-85">
          <path d="M4,4 L28,4 C22,10 10,22 4,28 Z" opacity="0.4" />
          <path d="M2,2 L32,2 C32,6 26,10 20,10 C10,10 10,20 10,20 C10,26 6,32 2,32 Z" fill="#2563eb" />
          <circle cx="8" cy="8" r="3.5" fill="#1d4ed8" />
          <circle cx="20" cy="5" r="2" fill="#60a5fa" />
          <circle cx="5" cy="20" r="2" fill="#60a5fa" />
          <path d="M12,12 Q18,6 26,6 M12,12 Q6,18 6,26" stroke="#2563eb" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Top Right Ornate Corner SVG */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none text-blue-500 transform scale-x-[-1]">
        <svg viewBox="0 0 60 60" fill="currentColor" className="w-full h-full opacity-85">
          <path d="M4,4 L28,4 C22,10 10,22 4,28 Z" opacity="0.4" />
          <path d="M2,2 L32,2 C32,6 26,10 20,10 C10,10 10,20 10,20 C10,26 6,32 2,32 Z" fill="#2563eb" />
          <circle cx="8" cy="8" r="3.5" fill="#1d4ed8" />
          <circle cx="20" cy="5" r="2" fill="#60a5fa" />
          <circle cx="5" cy="20" r="2" fill="#60a5fa" />
          <path d="M12,12 Q18,6 26,6 M12,12 Q6,18 6,26" stroke="#2563eb" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Bottom Left Ornate Corner SVG */}
      <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none text-blue-500 transform scale-y-[-1]">
        <svg viewBox="0 0 60 60" fill="currentColor" className="w-full h-full opacity-85">
          <path d="M4,4 L28,4 C22,10 10,22 4,28 Z" opacity="0.4" />
          <path d="M2,2 L32,2 C32,6 26,10 20,10 C10,10 10,20 10,20 C10,26 6,32 2,32 Z" fill="#2563eb" />
          <circle cx="8" cy="8" r="3.5" fill="#1d4ed8" />
          <circle cx="20" cy="5" r="2" fill="#60a5fa" />
          <circle cx="5" cy="20" r="2" fill="#60a5fa" />
          <path d="M12,12 Q18,6 26,6 M12,12 Q6,18 6,26" stroke="#2563eb" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Bottom Right Ornate Corner SVG */}
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-10 h-10 sm:w-14 sm:h-14 pointer-events-none text-blue-500 transform scale-x-[-1] scale-y-[-1]">
        <svg viewBox="0 0 60 60" fill="currentColor" className="w-full h-full opacity-85">
          <path d="M4,4 L28,4 C22,10 10,22 4,28 Z" opacity="0.4" />
          <path d="M2,2 L32,2 C32,6 26,10 20,10 C10,10 10,20 10,20 C10,26 6,32 2,32 Z" fill="#2563eb" />
          <circle cx="8" cy="8" r="3.5" fill="#1d4ed8" />
          <circle cx="20" cy="5" r="2" fill="#60a5fa" />
          <circle cx="5" cy="20" r="2" fill="#60a5fa" />
          <path d="M12,12 Q18,6 26,6 M12,12 Q6,18 6,26" stroke="#2563eb" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      {/* Subtle Top & Bottom Center Filigree Diamond */}
      <div className="absolute top-1 sm:top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-blue-400 opacity-75 pointer-events-none">
        <span className="text-xs">✦</span>
        <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        <span className="text-sm text-blue-600">🧿</span>
        <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        <span className="text-xs">✦</span>
      </div>

      <div className="absolute bottom-1 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-blue-400 opacity-75 pointer-events-none">
        <span className="text-xs">✦</span>
        <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        <span className="text-xs text-blue-500">💙</span>
        <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
        <span className="text-xs">✦</span>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
