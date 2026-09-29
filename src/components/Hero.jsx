import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Terminal, Sparkles, BookOpen, Award, Github } from 'lucide-react';

export default function Hero() {
  const [animStep, setAnimStep] = useState(0);

  useEffect(() => {
    // Cinematic entrance animation timeline
    const t1 = setTimeout(() => setAnimStep(1), 200);  // Soft golden glow & badge
    const t2 = setTimeout(() => setAnimStep(2), 700);  // "ARUN KUMAR" reveal
    const t3 = setTimeout(() => setAnimStep(3), 1200); // Subtitle
    const t4 = setTimeout(() => setAnimStep(4), 1700); // Description text
    const t5 = setTimeout(() => setAnimStep(5), 2200); // CTA buttons
    const t6 = setTimeout(() => setAnimStep(6), 2600); // Highlight cards

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Soft Ambient Golden Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(168, 154, 140, 0.05) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          opacity: animStep >= 1 ? 1 : 0,
          transition: 'opacity 2s ease'
        }}
      />

      <div className="container" style={{ textAlign: 'center', zIndex: 2, maxWidth: '900px' }}>
        {/* Step 1: Welcome Badge */}
        <div
          style={{
            opacity: animStep >= 1 ? 1 : 0,
            transform: animStep >= 1 ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 0.9s var(--transition-smooth)',
            marginBottom: '1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.2rem',
            borderRadius: '9999px',
            background: 'rgba(33, 27, 22, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)'
          }}
        >
          <Sparkles size={16} color="var(--gold-primary)" />
          <span
            className="font-accent"
            style={{
              color: 'var(--gold-light)',
              fontSize: '0.95rem',
              letterSpacing: '1px'
            }}
          >
            WELCOME TO MY PROFILE
          </span>
        </div>

        {/* Step 2: Main Name Heading - Gravitas One */}
        <h1
          className="font-heading text-gold-gradient"
          style={{
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            letterSpacing: '2px',
            lineHeight: 1.1,
            marginBottom: '1.2rem',
            textTransform: 'uppercase',
            opacity: animStep >= 2 ? 1 : 0,
            transform: animStep >= 2 ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.96)',
            transition: 'all 1s var(--transition-smooth)',
            textShadow: '0 0 35px rgba(212, 175, 55, 0.3)'
          }}
        >
          ARUN KUMAR
        </h1>

        {/* Step 3: Role Subtitle */}
        <h2
          style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 1.8rem)',
            fontWeight: '400',
            color: 'var(--cream-primary)',
            marginBottom: '1.5rem',
            letterSpacing: '0.5px',
            opacity: animStep >= 3 ? 1 : 0,
            transform: animStep >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.9s var(--transition-smooth)'
          }}
        >
          Computer Science & Information Technology Student
        </h2>

        {/* Step 4: Description Paragraph */}
        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
            color: 'var(--cream-muted)',
            maxWidth: '720px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.7,
            opacity: animStep >= 4 ? 1 : 0,
            transform: animStep >= 4 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.9s var(--transition-smooth)'
          }}
        >
          Passionate about programming, problem solving, software development and building meaningful projects.
        </p>

        {/* Step 5: Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.2rem',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            opacity: animStep >= 5 ? 1 : 0,
            transform: animStep >= 5 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.9s var(--transition-smooth)'
          }}
        >
          <a href="#projects" onClick={scrollToProjects} className="btn-primary">
            <Terminal size={18} /> View My Projects
          </a>
          <a
            href="https://github.com/arunkoli2102-collab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={18} /> GitHub Profile
          </a>
          <a href="#contact" onClick={scrollToContact} className="btn-secondary">
            Contact Me
          </a>
        </div>

        {/* Step 6: Luxury Quick Stat Badges */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.2rem',
            maxWidth: '850px',
            margin: '0 auto',
            opacity: animStep >= 6 ? 1 : 0,
            transform: animStep >= 6 ? 'translateY(0)' : 'translateY(25px)',
            transition: 'all 1s var(--transition-smooth)'
          }}
        >
          <div className="luxury-card" style={{ padding: '1.2rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.7rem', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-primary)' }}>
              <BookOpen size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--taupe-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Education</div>
              <div style={{ fontSize: '0.98rem', fontWeight: '600', color: 'var(--cream-primary)' }}>B.Tech CS & IT</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>REVA University</div>
            </div>
          </div>

          <div className="luxury-card" style={{ padding: '1.2rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.7rem', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-primary)' }}>
              <Award size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--taupe-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Portfolio Work</div>
              <div style={{ fontSize: '0.98rem', fontWeight: '600', color: 'var(--cream-primary)' }}>5+ Key Projects</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>Algorithms & ML</div>
            </div>
          </div>

          <div className="luxury-card" style={{ padding: '1.2rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '0.7rem', borderRadius: '12px', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-primary)' }}>
              <Code size={22} />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--taupe-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Core Expertise</div>
              <div style={{ fontSize: '0.98rem', fontWeight: '600', color: 'var(--cream-primary)' }}>C++, Python & React</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>Data Structures & Algos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to About section"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--gold-primary)',
          textDecoration: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          opacity: 0.7,
          transition: 'opacity 0.3s ease',
          animation: 'floatSlow 4s ease-in-out infinite'
        }}
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--taupe-light)' }}>Scroll</span>
        <ArrowDown size={18} color="var(--gold-primary)" />
      </a>
    </section>
  );
}
