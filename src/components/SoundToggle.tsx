import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { setMuted, getMuted, playPop, startBackgroundMusic } from '../utils/audio';

export const SoundToggle: React.FC = () => {
  const [muted, setLocalMuted] = useState(getMuted());

  const toggleSound = () => {
    const nextState = !muted;
    setLocalMuted(nextState);
    setMuted(nextState);
    if (!nextState) {
      startBackgroundMusic();
      playPop();
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={muted ? 'Unmute music & sounds' : 'Mute music & sounds'}
      className="fixed top-4 right-4 z-50 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-full bg-white/95 shadow-md border border-blue-200 text-blue-700 hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md flex items-center gap-2"
    >
      {muted ? (
        <>
          <VolumeX className="w-5 h-5 text-slate-400" />
          <span className="text-xs font-bold font-fredoka text-slate-400 hidden sm:inline">Muted</span>
        </>
      ) : (
        <>
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 text-blue-600 animate-pulse" />
            <Music className="w-3 h-3 text-sky-500 absolute -top-1.5 -right-2 animate-bounce" />
          </div>
          <span className="text-xs font-bold font-fredoka text-blue-600 hidden sm:inline">Music ON 🎵</span>
        </>
      )}
    </button>
  );
};
