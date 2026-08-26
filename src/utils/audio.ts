// Web Audio API Synthesizer for cute, cheerful interactive sounds & romantic background music
let audioCtx: AudioContext | null = null;
let isMuted = false;
let isMusicPlaying = false;
let musicSchedulerTimer: ReturnType<typeof setInterval> | null = null;
let musicGainNode: GainNode | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function setMuted(muted: boolean) {
  isMuted = muted;
  if (musicGainNode && audioCtx) {
    musicGainNode.gain.setTargetAtTime(muted ? 0 : 0.16, audioCtx.currentTime, 0.1);
  }
}

export function getMuted(): boolean {
  return isMuted;
}

export function isBgMusicActive(): boolean {
  return isMusicPlaying;
}

// ----------------------------------------------------
// Romantic Instrumental Background Music Synthesizer
// ----------------------------------------------------
// Plays a warm, soothing romantic music-box & piano acoustic progression
const ROMANTIC_CHORDS = [
  // Cmaj7 (warm, sweet)
  {
    bass: 130.81, // C3
    notes: [261.63, 329.63, 392.0, 493.88, 523.25, 659.25], // C4, E4, G4, B4, C5, E5
    melody: [523.25, 493.88, 392.0, 329.63],
  },
  // Am9 (tender, emotional)
  {
    bass: 110.0, // A2
    notes: [220.0, 261.63, 329.63, 392.0, 493.88, 523.25], // A3, C4, E4, G4, B4, C5
    melody: [440.0, 493.88, 523.25, 659.25],
  },
  // Fmaj7 (dreamy, heartfelt)
  {
    bass: 87.31, // F2
    notes: [174.61, 261.63, 329.63, 349.23, 440.0, 523.25], // F3, C4, E4, F4, A4, C5
    melody: [440.0, 523.25, 659.25, 523.25],
  },
  // Gsus4 to G (gentle resolution)
  {
    bass: 98.0, // G2
    notes: [196.0, 293.66, 392.0, 493.88, 587.33], // G3, D4, G4, B4, D5
    melody: [392.0, 493.88, 587.33, 493.88],
  },
];

let nextChordTime = 0;
let currentChordIndex = 0;

function playSoftNote(ctx: AudioContext, dest: AudioNode, freq: number, time: number, duration: number, volume: number = 0.15, type: OscillatorType = 'sine') {
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);

    // Warm, gentle attack & decaying release
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.linearRampToValueAtTime(volume, time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    osc.start(time);
    osc.stop(time + duration + 0.05);
  } catch {
    // Ignore audio timing exceptions
  }
}

function scheduleMusic() {
  const ctx = getAudioContext();
  if (!ctx || !musicGainNode) return;

  const lookahead = 0.6; // Schedule notes up to 600ms in advance
  const chordDuration = 3.2; // 3.2s per bar (~75 BPM gentle tempo)

  while (nextChordTime < ctx.currentTime + lookahead) {
    const chord = ROMANTIC_CHORDS[currentChordIndex];
    const startTime = Math.max(nextChordTime, ctx.currentTime);

    // 1. Warm Soft Bass Note
    playSoftNote(ctx, musicGainNode, chord.bass, startTime, chordDuration * 0.9, 0.22, 'triangle');

    // 2. Gentle Arpeggiated Piano / Music-box Chords
    chord.notes.forEach((freq, idx) => {
      const noteTime = startTime + idx * 0.38;
      playSoftNote(ctx, musicGainNode, freq, noteTime, 1.8, 0.11, 'sine');
    });

    // 3. Delicate High Melody Pluck
    chord.melody.forEach((freq, idx) => {
      const melodyTime = startTime + 0.5 + idx * 0.7;
      playSoftNote(ctx, musicGainNode, freq, melodyTime, 1.4, 0.14, 'sine');
    });

    currentChordIndex = (currentChordIndex + 1) % ROMANTIC_CHORDS.length;
    nextChordTime = startTime + chordDuration;
  }
}

export function startBackgroundMusic() {
  if (isMusicPlaying) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  if (!musicGainNode) {
    musicGainNode = ctx.createGain();
    musicGainNode.gain.setValueAtTime(isMuted ? 0 : 0.16, ctx.currentTime);
    musicGainNode.connect(ctx.destination);
  }

  isMusicPlaying = true;
  nextChordTime = ctx.currentTime + 0.05;
  currentChordIndex = 0;

  if (musicSchedulerTimer) clearInterval(musicSchedulerTimer);
  scheduleMusic();
  musicSchedulerTimer = setInterval(scheduleMusic, 250);
}

export function stopBackgroundMusic() {
  if (musicSchedulerTimer) {
    clearInterval(musicSchedulerTimer);
    musicSchedulerTimer = null;
  }
  isMusicPlaying = false;
}

// ----------------------------------------------------
// Sound Effects
// ----------------------------------------------------

// Cute high-pitch pop sound
export function playPop() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;

    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch {
    // ignore audio errors
  }
}

// Playful cartoon dodge/whoosh sound when NO button runs away
export function playDodge(step: number = 1) {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const baseFreq = 500 + step * 120;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.8, now + 0.06);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, now + 0.18);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.linearRampToValueAtTime(0.3, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.19);
  } catch {
    // ignore
  }
}

// Magic sparkle chime
export function playSparkle() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const freqs = [1046.5, 1318.5, 1567.98, 2093.0]; // C6, E6, G6, C7
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.04;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.12, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + 0.26);
    });
  } catch {
    // ignore
  }
}

// Grand celebratory victory fanfare when YES is clicked
export function playCelebrationFanfare() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    // Cheerful arpeggio melody (C major & F major triumphant chord progression)
    const melody = [
      { f: 523.25, t: 0.00, d: 0.12 }, // C5
      { f: 659.25, t: 0.10, d: 0.12 }, // E5
      { f: 783.99, t: 0.20, d: 0.14 }, // G5
      { f: 1046.5, t: 0.32, d: 0.35 }, // C6
      { f: 880.00, t: 0.50, d: 0.15 }, // A5
      { f: 1046.5, t: 0.65, d: 0.15 }, // C6
      { f: 1174.66, t: 0.80, d: 0.18 }, // D6
      { f: 1318.51, t: 0.98, d: 0.60 }, // E6
      { f: 1567.98, t: 1.05, d: 0.80 }, // G6
    ];

    melody.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + t;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + d);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + d + 0.05);
    });
  } catch {
    // ignore
  }
}

