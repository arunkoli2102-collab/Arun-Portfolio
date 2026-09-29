import React from 'react';
import { User, Cpu, Code2, Database, Brain, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ GET TO KNOW ME</span>
          <h2 className="section-title">ABOUT ME</h2>
          <p className="section-subtitle">
            Bridging theoretical computer science with real-world software development.
          </p>
        </div>

        {/* Two-Column Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Left Column: About Bio Text */}
          <div>
            <div
              className="luxury-card"
              style={{
                marginBottom: '2rem',
                borderLeft: '4px solid var(--gold-primary)'
              }}
            >
              <h3
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--gold-light)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <User size={22} color="var(--gold-primary)" /> Engineering & Code Discipline
              </h3>

              <p style={{ fontSize: '1.1rem', color: 'var(--cream-primary)', lineHeight: '1.8', marginBottom: '1.2rem' }}>
                "I'm Arun Kumar, a Computer Science and Information Technology student at REVA University. I enjoy programming, solving problems, learning new technologies and building projects that improve my practical skills."
              </p>

              <p style={{ fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: '1.7' }}>
                My technical journey centers around mastering core fundamentals in Data Structures and Algorithms, modern object-oriented development in C++ and Python, and scalable full-stack web applications with React. I am committed to continuous improvement, clean architecture, and technical excellence.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(33, 27, 22, 0.5)',
                  border: '1px solid rgba(143, 129, 117, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
              >
                <Brain size={20} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--taupe-light)' }}>FOCUS</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--cream-primary)' }}>Problem Solving</div>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(33, 27, 22, 0.5)',
                  border: '1px solid rgba(143, 129, 117, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
              >
                <Cpu size={20} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--taupe-light)' }}>BRANCH</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--cream-primary)' }}>CS & IT</div>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(33, 27, 22, 0.5)',
                  border: '1px solid rgba(143, 129, 117, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
              >
                <Code2 size={20} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--taupe-light)' }}>STACK</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--cream-primary)' }}>C++, Python, React</div>
                </div>
              </div>

              <div
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'rgba(33, 27, 22, 0.5)',
                  border: '1px solid rgba(143, 129, 117, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}
              >
                <Database size={20} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--taupe-light)' }}>DATA</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--cream-primary)' }}>SQL & MySQL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Technology Visual */}
          <div style={{ position: 'relative' }}>
            {/* Glowing Backdrop */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }}
            />

            {/* Abstract Tech Terminal Box */}
            <div
              className="luxury-card animate-float"
              style={{
                padding: '1.8rem',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.15)'
              }}
            >
              {/* Terminal Bar Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  marginBottom: '1.2rem',
                  borderBottom: '1px solid rgba(143, 129, 117, 0.25)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F56' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27C93F' }} />
                </div>
                <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', color: 'var(--taupe-light)' }}>
                  arun_profile.cpp
                </span>
                <Sparkles size={16} color="var(--gold-primary)" />
              </div>

              {/* Code Snippet Highlight */}
              <pre
                style={{
                  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                  fontSize: '0.9rem',
                  color: 'var(--cream-secondary)',
                  lineHeight: '1.7',
                  overflowX: 'auto',
                  margin: 0
                }}
              >
                <code>
                  <span style={{ color: 'var(--gold-primary)' }}>#include</span> &lt;iostream&gt;{'\n'}
                  <span style={{ color: 'var(--gold-primary)' }}>#include</span> &lt;vector&gt;{'\n\n'}
                  <span style={{ color: 'var(--gold-light)' }}>class</span> Developer {'{'}{'\n'}
                  {'  '}<span style={{ color: 'var(--taupe-light)' }}>public:</span>{'\n'}
                  {'    '}std::string name = <span style={{ color: '#A8DADC' }}>"Arun Kumar"</span>;{'\n'}
                  {'    '}std::string university = <span style={{ color: '#A8DADC' }}>"REVA University"</span>;{'\n'}
                  {'    '}std::string degree = <span style={{ color: '#A8DADC' }}>"B.Tech CS & IT"</span>;{'\n\n'}
                  {'    '}<span style={{ color: 'var(--gold-light)' }}>void</span> buildFuture() {'{'}{'\n'}
                  {'      '}std::cout &lt;&lt; <span style={{ color: '#A8DADC' }}>"Code, Solve, Innovate!"</span>;{'\n'}
                  {'    '}{'}'}{'\n'}
                  {'}'};
                </code>
              </pre>

              {/* Decorative Tech Chips Floating at bottom */}
              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(143, 129, 117, 0.2)',
                  display: 'flex',
                  gap: '0.6rem',
                  flexWrap: 'wrap'
                }}
              >
                <span style={{ padding: '0.3rem 0.8rem', borderRadius: '20px', background: 'rgba(212, 175, 55, 0.12)', color: 'var(--gold-light)', fontSize: '0.78rem', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
                  ✦ Algorithmic Thinking
                </span>
                <span style={{ padding: '0.3rem 0.8rem', borderRadius: '20px', background: 'rgba(168, 154, 140, 0.12)', color: 'var(--taupe-light)', fontSize: '0.78rem', border: '1px solid rgba(168, 154, 140, 0.3)' }}>
                  ✦ Full-Stack Concepts
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
