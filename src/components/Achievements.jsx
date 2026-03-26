import React from 'react'
import './Achievements.css'

const achievements = [
  {
    icon: '🤖',
    title: 'Bharat AI Quest',
    org: 'NPCI & NVIDIA',
    year: '2025',
    description: 'Cleared 2 levels of Bharat AI Quest (GFF 2025), earning recognition in a national AI-focused challenge.',
    color: '#14b8a6',
  },
  {
    icon: '💼',
    title: 'Department Treasurer',
    org: 'Information Technology Department',
    year: '2025',
    description: 'Served as Treasurer of the Information Technology Department, handling responsibility, coordination, and student activities.',
    color: '#61dafb',
  },
  {
    icon: '🛠',
    title: 'Technical Training',
    org: 'Techno Wings',
    year: '2024',
    description: 'Completed a 7-week technical training program focused on practical development skills and software engineering fundamentals.',
    color: '#f59e0b',
  },
  {
    icon: '🧩',
    title: 'Strong DSA Foundation',
    org: 'Academic + Practice',
    year: 'Ongoing',
    description: 'Built a solid problem-solving base through data structures and algorithms practice alongside engineering coursework.',
    color: '#47a248',
  },
  {
    icon: '🎓',
    title: '8.94 CGPA',
    org: 'JSPM JSCOE, Pune',
    year: '2023-Present',
    description: 'Maintaining a strong academic record in B.E. Information Technology while building practical full-stack projects.',
    color: '#8b5cf6',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <p className="section-label">Recognition & Wins</p>
        <h2 className="section-title">Achievements <span className="accent-text">&amp; Certs</span></h2>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <div
              key={i}
              className="achievement-card"
              style={{ '--ach-color': item.color }}
            >
              <div className="achievement-card__top">
                <div className="achievement-card__icon">{item.icon}</div>
                <span className="achievement-card__year">{item.year}</span>
              </div>
              <h3 className="achievement-card__title">{item.title}</h3>
              <span className="achievement-card__org">{item.org}</span>
              <p className="achievement-card__desc">{item.description}</p>
              <div className="achievement-card__bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
