import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sparkles, Github } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Scroll Spy to detect current active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.4s ease',
        padding: isScrolled ? '1rem 0' : '1.5rem 0',
        background: isScrolled
          ? 'rgba(15, 13, 11, 0.85)'
          : 'rgba(15, 13, 11, 0.4)',
        backdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(143, 129, 117, 0.3)'
          : '1px solid rgba(212, 175, 55, 0.1)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'var(--gradient-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0F0D0B',
              boxShadow: '0 0 15px rgba(212, 175, 55, 0.4)'
            }}
          >
            <Code2 size={22} strokeWidth={2.5} />
          </div>
          <span
            className="font-heading"
            style={{
              fontSize: '1.25rem',
              letterSpacing: '1px',
              color: 'var(--cream-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            ARUN <span style={{ color: 'var(--gold-primary)' }}>KUMAR</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  position: 'relative',
                  color: isActive ? 'var(--gold-primary)' : 'var(--cream-secondary)',
                  textDecoration: 'none',
                  fontWeight: isActive ? '600' : '400',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  transition: 'color 0.3s ease',
                  padding: '0.4rem 0'
                }}
                className="nav-item-link"
              >
                {link.name}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--gradient-gold)',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px rgba(212, 175, 55, 0.8)'
                    }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="https://github.com/arunkoli2102-collab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(33, 27, 22, 0.8)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: 'var(--cream-primary)',
              transition: 'all 0.3s ease'
            }}
            className="nav-github-btn"
            title="GitHub Profile"
          >
            <Github size={18} color="var(--gold-primary)" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-secondary"
            style={{ padding: '0.5rem 1.2rem', fontSize: '0.88rem' }}
          >
            <Sparkles size={14} color="var(--gold-primary)" /> Connect
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          style={{
            background: 'rgba(33, 27, 22, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: 'var(--cream-primary)',
            padding: '0.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? <X size={24} color="var(--gold-primary)" /> : <Menu size={24} color="var(--gold-primary)" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(15, 13, 11, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
          }}
          className="mobile-menu-drawer"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: activeSection === link.href.substring(1) ? 'var(--gold-primary)' : 'var(--cream-primary)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid rgba(143, 129, 117, 0.15)'
              }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && <Sparkles size={16} color="var(--gold-primary)" />}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary"
            style={{ width: '100%', marginTop: '0.5rem', textAlign: 'center' }}
          >
            Contact Me
          </a>
        </div>
      )}

      {/* Embedded Responsive CSS for Nav */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
          .mobile-menu-drawer { display: none !important; }
        }
        .nav-item-link:hover {
          color: var(--gold-primary) !important;
        }
      `}</style>
    </header>
  );
}
