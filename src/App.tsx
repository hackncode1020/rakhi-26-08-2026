import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BackgroundFloatingElements } from './components/BackgroundFloatingElements';
import { IntroScreen } from './components/IntroScreen';
import { MainCardScreen } from './components/MainCardScreen';
import { LetterScreen } from './components/LetterScreen';
import { MemoriesScreen } from './components/MemoriesScreen';
import { QuestionCard } from './components/QuestionCard';
import { CelebrationView } from './components/CelebrationView';
import { SoundToggle } from './components/SoundToggle';
import { HeartCursorTrail } from './components/HeartCursorTrail';
import { Stage, InteractiveParticle } from './types';
import { playSparkle, startBackgroundMusic } from './utils/audio';

const STAGE_ORDER: Stage[] = ['intro', 'mainCard', 'letter', 'memories', 'question', 'celebration'];

export default function App() {
  const [stage, setStage] = useState<Stage>('intro');
  const [interactiveParticles, setInteractiveParticles] = useState<InteractiveParticle[]>([]);

  // Spawn floating particle at coordinates or random center
  const spawnParticle = (emoji: string, x?: number, y?: number) => {
    const defaultX = typeof window !== 'undefined' ? window.innerWidth / 2 : 200;
    const defaultY = typeof window !== 'undefined' ? window.innerHeight / 2 : 300;

    const newParticle: InteractiveParticle = {
      id: Date.now() + Math.random(),
      x: x !== undefined ? x : defaultX + (Math.random() * 80 - 40),
      y: y !== undefined ? y : defaultY + (Math.random() * 80 - 40),
      emoji,
    };

    setInteractiveParticles((prev) => [...prev.slice(-15), newParticle]);
  };

  // Background tap handler to spawn cute hearts/sparkles
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    startBackgroundMusic();

    // Only spawn if not clicking an interactive button
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('.cursor-pointer')) {
      return;
    }

    const emojis = ['💙', '🌸', '✨', '🧿', '🤍'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    spawnParticle(randomEmoji, e.clientX, e.clientY);
    playSparkle();
  };

  const currentStepIndex = STAGE_ORDER.indexOf(stage);

  return (
    <div
      onClick={handleBackgroundClick}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden select-none vibrant-bg"
    >
      {/* Background Animated Atmosphere */}
      <BackgroundFloatingElements interactiveParticles={interactiveParticles} />

      {/* Subtle fading heart cursor trail during question & interaction phase */}
      <HeartCursorTrail active={stage === 'question' || stage === 'memories'} />

      {/* Header bar with Progress Indicator & Floating Audio Controls */}
      <header className="relative z-30 w-full max-w-5xl mx-auto px-4 pt-4 pb-2 flex items-center justify-between">
        {/* Subtle Step Dots (visible from stage 2 onward) */}
        {stage !== 'intro' && stage !== 'celebration' ? (
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-blue-200">
            {STAGE_ORDER.slice(1, 5).map((s, idx) => {
              const isActive = s === stage;
              const isPast = STAGE_ORDER.indexOf(s) < currentStepIndex;
              return (
                <div
                  key={s}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    isActive
                      ? 'w-7 bg-blue-600'
                      : isPast
                      ? 'w-2.5 bg-blue-400'
                      : 'w-2.5 bg-blue-200'
                  }`}
                  title={`Step ${idx + 1}`}
                />
              );
            })}
          </div>
        ) : (
          <div />
        )}

        <SoundToggle />
      </header>

      {/* Main Flow Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center w-full px-3 sm:px-6 py-4">
        <AnimatePresence mode="wait">
          {stage === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(4px)' }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <IntroScreen onStart={() => setStage('mainCard')} />
            </motion.div>
          )}

          {stage === 'mainCard' && (
            <motion.div
              key="mainCard"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <MainCardScreen onNext={() => setStage('letter')} />
            </motion.div>
          )}

          {stage === 'letter' && (
            <motion.div
              key="letter"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <LetterScreen onNext={() => setStage('memories')} />
            </motion.div>
          )}

          {stage === 'memories' && (
            <motion.div
              key="memories"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <MemoriesScreen onNext={() => setStage('question')} />
            </motion.div>
          )}

          {stage === 'question' && (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <QuestionCard
                onYes={() => setStage('celebration')}
                onSpawnParticle={(emoji) => spawnParticle(emoji)}
              />
            </motion.div>
          )}

          {stage === 'celebration' && (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <CelebrationView
                onReplay={() => setStage('intro')}
                onSpawnParticle={(emoji) => spawnParticle(emoji)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Cute Footer */}
      <footer className="relative z-10 py-4 text-center text-xs sm:text-sm font-semibold text-blue-400 font-fredoka flex items-center justify-center gap-1.5 pointer-events-none">
        <span>Made with eternal love for the best brother</span>
        <span>💙</span>
        <span>🌸</span>
        <span>🧿</span>
      </footer>
    </div>
  );
}
