import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Terminal, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'rgba(10, 8, 7, 0.95)',
        borderTop: '1px solid rgba(212, 175, 55, 0.2)',
        padding: '3.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(143, 129, 117, 0.2)'
          }}
        >
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'var(--gradient-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0F0D0B'
                }}
              >
                <Code2 size={18} strokeWidth={2.5} />
              </div>
              <span className="font-heading" style={{ fontSize: '1.2rem', color: 'var(--cream-primary)', letterSpacing: '1px' }}>
                ARUN <span style={{ color: 'var(--gold-primary)' }}>KUMAR</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--cream-muted)', maxWidth: '400px' }}>
              Computer Science & Information Technology student at REVA University. Dedicated to algorithmic excellence and scalable software engineering.
            </p>
          </div>

          {/* Social Quick Links */}
          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/arunkoli2102-collab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(33, 27, 22, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: 'var(--cream-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="footer-social-icon"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/arun-koli-3511b0385/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(33, 27, 22, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: 'var(--cream-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="footer-social-icon"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://leetcode.com/u/Arunkoli123/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              title="LeetCode Profile"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(33, 27, 22, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: 'var(--cream-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="footer-social-icon"
            >
              <Code2 size={20} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/arunkoli2102"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank Profile"
              title="HackerRank Profile"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(33, 27, 22, 0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: 'var(--cream-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              className="footer-social-icon"
            >
              <Terminal size={20} />
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
          >
            <ArrowUp size={16} color="var(--gold-primary)" /> Back to Top
          </button>
        </div>

        {/* Copyright Bar */}
        <div
          style={{
            paddingTop: '1.8rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.88rem',
            color: 'var(--cream-muted)'
          }}
        >
          <div>© 2026 Arun Kumar. All Rights Reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--taupe-light)' }}>
            <Sparkles size={14} color="var(--gold-primary)" /> Designed & Crafted with Luxury + Technology Theme
          </div>
        </div>
      </div>

      <style>{`
        .footer-social-icon:hover {
          background: rgba(212, 175, 55, 0.2) !important;
          border-color: var(--gold-primary) !important;
          color: var(--gold-primary) !important;
          transform: translateY(-3px) !important;
        }
      `}</style>
    </footer>
  );
}
