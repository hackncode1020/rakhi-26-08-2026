import React, { useEffect, useRef } from 'react';

interface HeartCursorTrailProps {
  active: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  emoji: string;
  life: number;
  maxLife: number;
}

export const HeartCursorTrail: React.FC<HeartCursorTrailProps> = ({ active }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const lastPosRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const animFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) {
      particlesRef.current = [];
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle canvas resizing
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Heart emojis (alternating subtle blue and white hearts)
    const heartEmojis = ['💙', '🤍', '💙', '🤍', '🩵'];

    const addParticle = (x: number, y: number) => {
      const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      const maxLife = 40 + Math.random() * 25; // ~0.7s - 1.1s at 60fps
      particlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: -0.8 - Math.random() * 1.2, // float upward
        size: 16 + Math.random() * 12, // subtle 16px - 28px
        opacity: 0.9,
        rotation: (Math.random() - 0.5) * 0.4,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        emoji,
        life: 0,
        maxLife,
      });

      // Keep maximum particle count bounded for optimal performance
      if (particlesRef.current.length > 50) {
        particlesRef.current.shift();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const dist = Math.hypot(dx, dy);

      // Spawn heart if moved at least 20px or every 70ms while in motion
      if (dist > 22 || (dist > 8 && now - lastPosRef.current.time > 65)) {
        addParticle(e.clientX, e.clientY);
        lastPosRef.current = { x: e.clientX, y: e.clientY, time: now };
      }
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;

        const progress = p.life / p.maxLife;
        // Fade in quickly, then smoothly fade out
        const currentOpacity = (1 - progress) * 0.85;

        if (progress >= 1 || currentOpacity <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = Math.max(0, currentOpacity);
        // Add subtle soft glow around heart
        ctx.shadowColor = p.emoji === '💙' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(255, 255, 255, 0.6)';
        ctx.shadowBlur = 6;
        ctx.font = `${p.size}px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(p.emoji, 0, 0);
        ctx.restore();
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    };
  }, [active]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};
