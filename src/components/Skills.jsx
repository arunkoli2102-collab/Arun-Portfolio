import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Database,
  FileCode,
  Github,
  Cpu,
  Sparkles,
  Braces
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const skillsData = [
    { name: 'C', category: 'Languages', level: 'Core Fundamental', icon: Terminal, desc: 'Procedural programming, pointers, low-level memory management' },
    { name: 'C++', category: 'Languages', level: 'Primary Focus', icon: Code, desc: 'OOP, STL algorithms, competitive programming, memory optimization' },
    { name: 'Python', category: 'Languages', level: 'Advanced Practice', icon: FileCode, desc: 'Scripting, data analysis with Pandas/NumPy, machine learning' },
    { name: 'Java', category: 'Languages', level: 'Object-Oriented', icon: Braces, desc: 'Class structures, inheritance, polymorphism, core syntax' },
    { name: 'SQL', category: 'Databases', level: 'Database Core', icon: Database, desc: 'Relational queries, joins, schema design, data aggregation' },
    { name: 'GitHub', category: 'Tools', level: 'Collaboration', icon: Github, desc: 'Repositories, open source contributions, portfolio showcases' },
    { name: 'Data Structures', category: 'Core CS', level: 'Algorithmic Foundation', icon: Cpu, desc: 'Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Maps' }
  ];

  const categories = ['All', 'Languages', 'Databases', 'Tools', 'Core CS'];

  const filteredSkills = activeTab === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ TECHNICAL COMPETENCIES</span>
          <h2 className="section-title">SKILLS</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, tools, and computer science concepts I work with.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.8rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          {categories.map((cat) => {
            const isSelected = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.5rem 1.2rem',
                  borderRadius: '9999px',
                  border: isSelected ? '1px solid var(--gold-primary)' : '1px solid rgba(143, 129, 117, 0.3)',
                  background: isSelected ? 'rgba(212, 175, 55, 0.2)' : 'rgba(33, 27, 22, 0.6)',
                  color: isSelected ? 'var(--gold-light)' : 'var(--cream-secondary)',
                  fontWeight: isSelected ? '600' : '400',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSelected ? '0 0 15px rgba(212, 175, 55, 0.2)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="luxury-card skill-card"
                style={{
                  background: 'var(--bg-dark-3)',
                  border: '1px solid var(--taupe-muted)',
                  padding: '1.6rem',
                  cursor: 'pointer',
                  perspective: '1000px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.4s var(--transition-smooth), border-color 0.4s ease, box-shadow 0.4s ease'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.2rem'
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        background: 'rgba(212, 175, 55, 0.12)',
                        border: '1px solid rgba(212, 175, 55, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--gold-primary)'
                      }}
                      className="skill-icon-wrapper"
                    >
                      <IconComponent size={22} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--taupe-light)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '12px',
                        background: 'rgba(15, 13, 11, 0.6)',
                        border: '1px solid rgba(143, 129, 117, 0.2)'
                      }}
                    >
                      {skill.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--cream-primary)',
                      marginBottom: '0.4rem',
                      fontWeight: '600'
                    }}
                  >
                    {skill.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--cream-muted)',
                      lineHeight: '1.5',
                      marginBottom: '1rem'
                    }}
                  >
                    {skill.desc}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: '0.8rem',
                    borderTop: '1px solid rgba(143, 129, 117, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.8rem',
                    color: 'var(--gold-primary)',
                    fontWeight: '500'
                  }}
                >
                  <Sparkles size={13} /> {skill.level}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-card:hover {
          border-color: var(--gold-primary) !important;
          transform: translateY(-8px) rotateX(4deg) scale(1.02) !important;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 175, 55, 0.3) !important;
        }
        .skill-card:hover .skill-icon-wrapper {
          background: var(--gradient-gold) !important;
          color: var(--bg-dark-1) !important;
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.6) !important;
        }
      `}</style>
    </section>
  );
}
