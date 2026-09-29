import React, { useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CursorWave from './components/CursorWave';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations across sections
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const hiddenElements = document.querySelectorAll('.reveal-hidden');

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* Background Animated Canvas */}
      <BackgroundCanvas />

      {/* Interactive Golden Wave Cursor Trail */}
      <CursorWave />

      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <div className="reveal-hidden">
          <About />
        </div>
        <div className="reveal-hidden">
          <Education />
        </div>
        <div className="reveal-hidden">
          <Skills />
        </div>
        <div className="reveal-hidden">
          <Projects />
        </div>
        <div className="reveal-hidden">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
