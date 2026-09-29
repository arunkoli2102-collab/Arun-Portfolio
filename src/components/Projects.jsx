import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, Cpu, Layers } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      number: '01',
      title: 'LeetCode Solutions',
      description: 'A collection of programming solutions focused on problem solving and algorithmic thinking.',
      tags: ['C++', 'Python', 'Data Structures', 'Algorithms', 'Problem Solving'],
      githubUrl: 'https://github.com/arunkoli2102-collab',
      platformUrl: 'https://leetcode.com/u/Arunkoli123/',
      platformName: 'LeetCode Profile',
      details: [
        'Comprehensive problem solutions categorized by topics: Arrays, Two Pointers, Dynamic Programming, and Trees.',
        'Focus on optimal time and space complexity optimizations.',
        'Clean C++ and Python implementations with detailed comments and test cases.'
      ]
    },
    {
      id: 2,
      number: '02',
      title: 'HackerRank 3rd Semester Portfolio',
      description: 'A collection of HackerRank programming solutions including Diagonal Difference, Dynamic Array, Time Conversion, Compare the Triplets and Sparse Arrays.',
      tags: ['C++', 'Problem Solving', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/arunkoli2102-collab',
      platformUrl: 'https://www.hackerrank.com/profile/arunkoli2102',
      platformName: 'HackerRank Profile',
      details: [
        'Includes solutions for Diagonal Difference, Dynamic Array, Time Conversion, Compare the Triplets, and Sparse Arrays.',
        'Demonstrates structured problem-solving approach under strict time limits.',
        'Focus on array manipulation, matrix operations, and edge-case handling.'
      ]
    },
    {
      id: 3,
      number: '03',
      title: 'Python Programs',
      description: 'Python programming practice covering arrays, strings, basic programming and data visualization.',
      tags: ['Python', 'Data Visualization', 'Arrays', 'Strings', 'Matplotlib'],
      githubUrl: 'https://github.com/arunkoli2102-collab',
      details: [
        'Explores Pythonic string manipulation, list comprehensions, and dictionaries.',
        'Includes data visualization experiments using Matplotlib to chart mathematical and statistical outputs.',
        'Builds a strong foundation for data structures and analytical coding.'
      ]
    },
    {
      id: 4,
      number: '04',
      title: 'C++ Programs',
      description: 'C++ programming practice covering beginner concepts, arrays and algorithms.',
      tags: ['C++', 'Object-Oriented Programming', 'Arrays', 'Algorithms'],
      githubUrl: 'https://github.com/arunkoli2102-collab',
      details: [
        'Covers low-level C++ concepts: memory allocation, pointers, references, and structures.',
        'Object-oriented programming implementation featuring classes, inheritance, and method overloading.',
        'Array sorting and searching algorithm benchmarking.'
      ]
    },
    {
      id: 5,
      number: '05',
      title: 'Energy Consumption Prediction',
      description: 'A machine learning project using Python, Pandas, NumPy, Matplotlib and Scikit-learn to explore and predict energy consumption.',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Machine Learning'],
      githubUrl: 'https://github.com/arunkoli2102-collab',
      details: [
        'Data preprocessing, feature engineering, and exploratory data analysis (EDA) using Pandas & NumPy.',
        'Visualized consumption patterns over time using Matplotlib charts.',
        'Applied regression models using Scikit-learn to predict energy usage patterns with metrics evaluation.'
      ]
    }
  ];

  return (
    <section id="projects" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">✦ FEATURED WORK</span>
          <h2 className="section-title">PROJECTS</h2>
          <p className="section-subtitle">
            Demonstrating algorithmic problem solving, software design, data structures, and machine learning.
          </p>
        </div>

        {/* Projects Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="luxury-card project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.2rem',
                border: '1px solid rgba(143, 129, 117, 0.3)',
                background: 'var(--bg-dark-3)'
              }}
            >
              <div>
                {/* Project Header Row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.2rem'
                  }}
                >
                  <span
                    className="font-heading"
                    style={{
                      fontSize: '1.4rem',
                      color: 'var(--gold-primary)',
                      letterSpacing: '1px'
                    }}
                  >
                    {project.number}
                  </span>
                  <div
                    style={{
                      padding: '0.4rem',
                      borderRadius: '8px',
                      background: 'rgba(212, 175, 55, 0.12)',
                      color: 'var(--gold-primary)'
                    }}
                  >
                    <Code size={20} />
                  </div>
                </div>

                {/* Project Title */}
                <h3
                  style={{
                    fontSize: '1.4rem',
                    color: 'var(--cream-primary)',
                    marginBottom: '0.8rem',
                    fontWeight: '600',
                    lineHeight: '1.3'
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.98rem',
                    color: 'var(--cream-muted)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}
                >
                  "{project.description}"
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    marginBottom: '1.8rem'
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.25rem 0.7rem',
                        borderRadius: '16px',
                        background: 'rgba(15, 13, 11, 0.8)',
                        border: '1px solid rgba(143, 129, 117, 0.25)',
                        color: 'var(--taupe-light)',
                        fontSize: '0.78rem'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      flex: 1,
                      padding: '0.7rem 1.2rem',
                      fontSize: '0.88rem'
                    }}
                  >
                    <Github size={16} /> View Project
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-secondary"
                    style={{
                      padding: '0.7rem',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Inspect Details"
                    aria-label="Inspect project details"
                  >
                    <ExternalLink size={16} color="var(--gold-primary)" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detailed Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
