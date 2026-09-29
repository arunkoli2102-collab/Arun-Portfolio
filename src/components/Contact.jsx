import React, { useState } from 'react';
import {
  Mail,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Send,
  CheckCircle,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/arunkoli2102-collab',
      username: '@arunkoli2102-collab',
      available: true
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/arun-koli-3511b0385/',
      username: 'Arun Koli',
      available: true
    },
    {
      name: 'LeetCode',
      icon: Code2,
      url: 'https://leetcode.com/u/Arunkoli123/',
      username: '@Arunkoli123',
      available: true
    },
    {
      name: 'HackerRank',
      icon: Terminal,
      url: 'https://www.hackerrank.com/profile/arunkoli2102',
      username: '@arunkoli2102',
      available: true
    }
  ];

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ REACH OUT</span>
          <h2 className="section-title">CONTACT ME</h2>
          <p className="section-subtitle">
            "Let's connect and build something meaningful."
          </p>
        </div>

        {/* Contact Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Left Column: Social Profile Cards */}
          <div>
            <h3
              style={{
                fontSize: '1.4rem',
                color: 'var(--gold-light)',
                marginBottom: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <Sparkles size={20} color="var(--gold-primary)" /> Connect Across Platforms
            </h3>

            {/* Email Main Card */}
            <div
              className="luxury-card"
              style={{
                marginBottom: '1.5rem',
                borderLeft: '4px solid var(--gold-primary)',
                background: 'linear-gradient(135deg, rgba(33, 27, 22, 0.9), rgba(212, 175, 55, 0.08))'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'var(--gradient-gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--bg-dark-1)',
                    boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)'
                  }}
                >
                  <Mail size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--taupe-light)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Direct Email
                  </div>
                  <a
                    href="mailto:arun.kumar.reva@example.com"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: '600',
                      color: 'var(--cream-primary)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--cream-primary)')}
                  >
                    arun.kumar.reva@example.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem'
              }}
            >
              {socialLinks.map((item) => {
                const IconComp = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target={item.url !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="luxury-card"
                    style={{
                      textDecoration: 'none',
                      padding: '1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      background: 'var(--bg-dark-3)',
                      border: '1px solid rgba(143, 129, 117, 0.3)',
                      transition: 'all 0.35s var(--transition-smooth)'
                    }}
                  >
                    <div
                      style={{
                        padding: '0.7rem',
                        borderRadius: '50%',
                        background: 'rgba(212, 175, 55, 0.12)',
                        color: 'var(--gold-primary)',
                        marginBottom: '0.8rem'
                      }}
                    >
                      <IconComp size={22} />
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--cream-primary)' }}>
                      {item.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--taupe-light)', marginTop: '0.2rem' }}>
                      {item.available ? item.username : 'Profile Link'}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Location & Response Note */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(15, 13, 11, 0.5)',
                border: '1px solid rgba(143, 129, 117, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: 'var(--cream-muted)',
                fontSize: '0.85rem'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--gold-primary)" /> REVA University, Bengaluru
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={16} color="var(--gold-primary)" /> Quick Response
              </span>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="luxury-card" style={{ padding: '2.5rem' }}>
            <h3
              style={{
                fontSize: '1.4rem',
                color: 'var(--cream-primary)',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}
            >
              Send Me a Direct Message
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '2rem',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.15)',
                  border: '1px solid var(--gold-primary)',
                  textAlign: 'center',
                  color: 'var(--cream-primary)'
                }}
              >
                <CheckCircle size={48} color="var(--gold-primary)" style={{ margin: '0 auto 1rem auto' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--gold-light)' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--cream-muted)' }}>
                  Thank you for connecting, Arun Kumar will read your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--taupe-light)',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 13, 11, 0.8)',
                      border: '1px solid rgba(143, 129, 117, 0.3)',
                      color: 'var(--cream-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(143, 129, 117, 0.3)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--taupe-light)',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Your Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 13, 11, 0.8)',
                      border: '1px solid rgba(143, 129, 117, 0.3)',
                      color: 'var(--cream-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(143, 129, 117, 0.3)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--taupe-light)',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Project Inquiry / Collaboration"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 13, 11, 0.8)',
                      border: '1px solid rgba(143, 129, 117, 0.3)',
                      color: 'var(--cream-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(143, 129, 117, 0.3)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      color: 'var(--taupe-light)',
                      marginBottom: '0.4rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Hello Arun, I noticed your portfolio and would like to talk..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(15, 13, 11, 0.8)',
                      border: '1px solid rgba(143, 129, 117, 0.3)',
                      color: 'var(--cream-primary)',
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(143, 129, 117, 0.3)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
