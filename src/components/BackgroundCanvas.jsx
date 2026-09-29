import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
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

    // Ambient floating spheres with slow-motion speeds (15s-30s cycle)
    const blobs = [
      { x: width * 0.2, y: height * 0.3, r: 350, color: 'rgba(212, 175, 55, 0.05)', vx: 0.15, vy: 0.1 },
      { x: width * 0.8, y: height * 0.6, r: 420, color: 'rgba(168, 154, 140, 0.06)', vx: -0.1, vy: 0.12 },
      { x: width * 0.5, y: height * 0.8, r: 380, color: 'rgba(201, 162, 39, 0.04)', vx: 0.12, vy: -0.15 },
      { x: width * 0.1, y: height * 0.9, r: 300, color: 'rgba(143, 129, 117, 0.05)', vx: -0.08, vy: -0.1 }
    ];

    // Subtle floating dust particles
    const particleCount = Math.min(35, Math.floor(width / 35));
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      speedY: Math.random() * 0.15 + 0.05,
      speedX: (Math.random() - 0.5) * 0.1,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(244, 235, 221, '
    }));

    let waveTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep dark luxury base
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, '#0F0D0B');
      bgGradient.addColorStop(0.5, '#17130F');
      bgGradient.addColorStop(1, '#0F0D0B');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Render Slow-motion Blobs
      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        // Bounce gently at screen margins
        if (b.x - b.r < -100 || b.x + b.r > width + 100) b.vx *= -1;
        if (b.y - b.r < -100 || b.y + b.r > height + 100) b.vy *= -1;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, b.color);
        g.addColorStop(1, 'transparent');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render Floating Dust Particles
      particles.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.fill();
      });

      // Subtle Waves across canvas bottom
      waveTime += 0.005; // Slow ambient wave rhythm
      ctx.beginPath();
      ctx.moveTo(0, height * 0.85);

      for (let x = 0; x <= width; x += 30) {
        const y = Math.sin(x * 0.003 + waveTime) * 20 + Math.cos(x * 0.002 + waveTime * 0.8) * 15 + height * 0.85;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      const waveGrad = ctx.createLinearGradient(0, height * 0.8, 0, height);
      waveGrad.addColorStop(0, 'rgba(212, 175, 55, 0.02)');
      waveGrad.addColorStop(1, 'rgba(15, 13, 11, 0.95)');
      ctx.fillStyle = waveGrad;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
        zIndex: -1
      }}
    />
  );
}
