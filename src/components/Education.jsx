import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (C++)',
    'Python Programming & Data Analysis',
    'Database Management Systems (SQL)',
    'Web Development Fundamentals (HTML/CSS/JS)',
    'Computer System Architecture'
  ];

  return (
    <section id="education" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ ACADEMIC FOUNDATION</span>
          <h2 className="section-title">EDUCATION</h2>
          <p className="section-subtitle">
            Rigorous engineering education focusing on computer science principles and software engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glowing Gold Line */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '2rem',
              width: '3px',
              background: 'linear-gradient(180deg, var(--gold-primary) 0%, var(--gold-deep) 60%, rgba(143, 129, 117, 0.2) 100%)',
              borderRadius: '2px',
              boxShadow: '0 0 12px rgba(212, 175, 55, 0.5)'
            }}
            className="timeline-line"
          />

          {/* Timeline Item Card */}
          <div
            style={{
              position: 'relative',
              paddingLeft: '5rem',
              marginBottom: '2rem'
            }}
          >
            {/* Glowing Golden Circle Node */}
            <div
              style={{
                position: 'absolute',
                left: '1.25rem',
                top: '1.5rem',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--gradient-gold)',
                border: '4px solid var(--bg-dark-1)',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.8)',
                zIndex: 2
              }}
            />

            <div
              className="luxury-card"
              style={{
                borderLeft: '4px solid var(--gold-primary)',
                padding: '2.5rem'
              }}
            >
              {/* Top Header info */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(143, 129, 117, 0.25)',
                  paddingBottom: '1.2rem'
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      background: 'rgba(212, 175, 55, 0.15)',
                      color: 'var(--gold-primary)',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      marginBottom: '0.6rem'
                    }}
                  >
                    <GraduationCap size={16} /> Bachelor of Technology (B.Tech)
                  </span>
                  <h3
                    style={{
                      fontSize: '1.6rem',
                      color: 'var(--cream-primary)',
                      lineHeight: '1.3'
                    }}
                  >
                    Computer Science and Information Technology
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      marginTop: '0.5rem',
                      color: 'var(--taupe-light)',
                      fontSize: '0.95rem'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={16} color="var(--gold-primary)" /> REVA University
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={16} color="var(--gold-primary)" /> Undergraduation
                    </span>
                  </div>
                </div>
              </div>

              {/* Coursework & Focus Areas */}
              <div>
                <h4
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--cream-primary)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <Award size={18} color="var(--gold-primary)" /> Key Coursework & Technical Modules
                </h4>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '0.8rem'
                  }}
                >
                  {coursework.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.9rem',
                        color: 'var(--cream-secondary)',
                        background: 'rgba(15, 13, 11, 0.5)',
                        padding: '0.6rem 0.9rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(143, 129, 117, 0.2)'
                      }}
                    >
                      <CheckCircle2 size={16} color="var(--gold-primary)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-line { left: 1rem !important; }
          .timeline-line + div { padding-left: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
