import React from 'react'
import './About.css'

export default function About() {
  return (
    <section id="skills" className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__text">
            <p className="section-label">Skills</p>
            <h2 className="section-title">My<br /><span className="accent-text">Tech Stack</span></h2>
            <p className="about__body">
              Hi, I'm <strong>Shriniwas Kulkarni</strong> — a final-year IT engineering student focused on
              building efficient, scalable systems and solving real-world problems through full-stack development.
            </p>
            <p className="about__body">
              My current toolkit includes Java, Python, React, JavaScript, SQL, MongoDB, and REST APIs,
              backed by a solid foundation in data structures, algorithms, and object-oriented programming.
              I'm actively looking for internship opportunities where I can contribute from day one.
            </p>
            <div className="about__chips">
              <div className="about__chip">
                <span className="about__chip-icon">🎯</span>
                <span>Seeking Internship</span>
              </div>
              <div className="about__chip">
                <span className="about__chip-icon">📍</span>
                <span>Pune, India</span>
              </div>
              <div className="about__chip">
                <span className="about__chip-icon">⚡</span>
                <span>Problem Solver</span>
              </div>
            </div>
            <div className="about__actions">
              <a href="#contact" className="btn btn-primary">Get In Touch →</a>
              <a href="/Shriniwas_Resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">Download CV ↓</a>
            </div>
          </div>
          <div className="about__visual">
            <div className="about__tech-grid">
              {[
                { name: 'Java', color: '#f89820', icon: '☕' },
                { name: 'Python', color: '#3776ab', icon: '🐍' },
                { name: 'JavaScript', color: '#f7df1e', icon: '🟡' },
                { name: 'React', color: '#61dafb', icon: '⚛️' },
                { name: 'HTML', color: '#e34f26', icon: '🔶' },
                { name: 'CSS', color: '#264de4', icon: '🔷' },
                { name: 'SQL', color: '#336791', icon: '🧠' },
                { name: 'MongoDB', color: '#47a248', icon: '🍃' },
                { name: 'MySQL', color: '#4479a1', icon: '🛢️' },
                { name: 'Git', color: '#f05032', icon: '🔀' },
                { name: 'GitHub', color: '#888', icon: '🐙' },
                { name: 'VS Code', color: '#007acc', icon: '💻' },
                { name: 'REST APIs', color: '#14b8a6', icon: '🔌' },
              ].map((tech, i) => (
                <div
                  key={tech.name}
                  className="about__tech-badge"
                  style={{ '--tech-color': tech.color, '--delay': `${i * 0.05}s` }}
                >
                  <span className="about__tech-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
