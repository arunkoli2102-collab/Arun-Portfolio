import React, { useEffect, useRef, useState } from 'react';

export default function CursorWave() {
  const canvasRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch screens or if user prefers reduced motion
    const touchDevice = window.matchMedia('(hover: none)').matches || window.innerWidth < 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (touchDevice || reducedMotion) {
      setIsDisabled(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    let mouse = { x: width / 2, y: height / 2 };
    let secondary = { x: width / 2, y: height / 2 };

    const ripples = [];
    const particles = [];

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Add liquid ripple on move periodically
      if (Math.random() < 0.4) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 4,
          maxRadius: 35 + Math.random() * 25,
          alpha: 0.7,
          color: Math.random() > 0.3 ? '#D4AF37' : '#A89A8C'
        });
      }

      // Add trailing sparkle particle
      if (Math.random() < 0.3) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8 - 0.5,
          size: Math.random() * 2.5 + 1,
          alpha: 0.8,
          color: '#E6C65C'
        });
      }
    };

    const handleClick = (e) => {
      for (let i = 0; i < 3; i++) {
        ripples.push({
          x: e.clientX,
          y: e.clientY,
          radius: 2 + i * 8,
          maxRadius: 60 + i * 25,
          alpha: 0.9 - i * 0.2,
          color: i === 0 ? '#E6C65C' : '#D4AF37'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lag for secondary glow
      secondary.x += (mouse.x - secondary.x) * 0.15;
      secondary.y += (mouse.y - secondary.y) * 0.15;

      // 1. Primary Gold Glow around cursor
      const primaryGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        60
      );
      primaryGlow.addColorStop(0, 'rgba(212, 175, 55, 0.25)');
      primaryGlow.addColorStop(0.5, 'rgba(212, 175, 55, 0.08)');
      primaryGlow.addColorStop(1, 'rgba(212, 175, 55, 0)');

      ctx.beginPath();
      ctx.fillStyle = primaryGlow;
      ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
      ctx.fill();

      // 2. Secondary Warm Taupe Glow trailing behind
      const secondaryGlow = ctx.createRadialGradient(
        secondary.x,
        secondary.y,
        0,
        secondary.x,
        secondary.y,
        90
      );
      secondaryGlow.addColorStop(0, 'rgba(168, 154, 140, 0.2)');
      secondaryGlow.addColorStop(0.6, 'rgba(143, 129, 117, 0.05)');
      secondaryGlow.addColorStop(1, 'rgba(143, 129, 117, 0)');

      ctx.beginPath();
      ctx.fillStyle = secondaryGlow;
      ctx.arc(secondary.x, secondary.y, 90, 0, Math.PI * 2);
      ctx.fill();

      // 3. Render Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.2;
        r.alpha *= 0.95;

        if (r.alpha < 0.02 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = r.alpha;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // 4. Render Sparkle Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.94;

        if (p.alpha < 0.02) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // 5. Bright Central Cursor Point
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#E6C65C';
      ctx.shadowColor = '#D4AF37';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isDisabled) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen'
      }}
    />
  );
}
