export type Stage = 'intro' | 'mainCard' | 'letter' | 'memories' | 'question' | 'celebration';

export interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'heart' | 'flower' | 'sparkle' | 'evil-eye';
  opacity: number;
}

export interface InteractiveParticle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

export interface MemoryPhoto {
  id: string;
  title: string;
  caption: string;
  dateTag: string;
  image: string;
  color: string;
}

