import React from 'react';
import { X, ExternalLink, Github, Code, Sparkles, Terminal } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        background: 'rgba(15, 13, 11, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        className="luxury-card"
        style={{
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '1px solid var(--gold-primary)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px rgba(212, 175, 55, 0.25)',
          padding: '2.5rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(33, 27, 22, 0.8)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: 'var(--cream-primary)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <X size={20} color="var(--gold-primary)" />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
          <span
            className="font-heading"
            style={{
              fontSize: '1.2rem',
              color: 'var(--gold-primary)',
              padding: '0.2rem 0.8rem',
              borderRadius: '8px',
              background: 'rgba(212, 175, 55, 0.15)',
              border: '1px solid rgba(212, 175, 55, 0.3)'
            }}
          >
            {project.number}
          </span>
          <span style={{ fontSize: '0.85rem', color: 'var(--taupe-light)', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Portfolio Project Highlight
          </span>
        </div>

        <h2
          style={{
            fontSize: '1.8rem',
            color: 'var(--cream-primary)',
            marginBottom: '1rem',
            lineHeight: '1.3'
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            fontSize: '1.1rem',
            color: 'var(--cream-secondary)',
            lineHeight: '1.7',
            marginBottom: '1.8rem'
          }}
        >
          {project.description}
        </p>

        {/* Code / Implementation Highlight */}
        <div
          style={{
            background: 'rgba(15, 13, 11, 0.8)',
            border: '1px solid rgba(143, 129, 117, 0.25)',
            borderRadius: '12px',
            padding: '1.2rem',
            marginBottom: '1.8rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--gold-light)', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
            <Terminal size={18} /> Project Focus & Key Takeaways
          </div>
          <ul style={{ paddingLeft: '1.2rem', color: 'var(--cream-muted)', fontSize: '0.92rem', lineHeight: '1.8' }}>
            {project.details.map((detail, idx) => (
              <li key={idx} style={{ marginBottom: '0.4rem' }}>{detail}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--taupe-light)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.6rem' }}>
            Technologies Used
          </div>
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '20px',
                  background: 'rgba(212, 175, 55, 0.12)',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  color: 'var(--gold-light)',
                  fontSize: '0.85rem'
                }}
              >
                ✦ {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '0.7rem 1.6rem', fontSize: '0.95rem' }}
          >
            <Github size={18} /> Visit GitHub Repository
          </a>
          {project.platformUrl && (
            <a
              href={project.platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '0.7rem 1.6rem', fontSize: '0.95rem' }}
            >
              <ExternalLink size={18} color="var(--gold-primary)" /> {project.platformName || 'View Profile'}
            </a>
          )}
          <button
            onClick={onClose}
            className="btn-secondary"
            style={{ padding: '0.7rem 1.6rem', fontSize: '0.95rem' }}
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
