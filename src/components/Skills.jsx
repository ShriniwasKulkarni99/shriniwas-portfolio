import React, { useState } from 'react'
import './Skills.css'

const categories = [
  {
    id: 'languages',
    label: 'Languages',
    icon: '{ }',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 84 },
      { name: 'JavaScript', level: 90 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    icon: '⬡',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 88 },
      { name: 'REST APIs', level: 82 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: '◧',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 82 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: '⚙',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'OOP', level: 84 },
      { name: 'DSA', level: 87 },
    ],
  },
]

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ '--target': `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('languages')

  const currentCat = categories.find(c => c.id === active)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">What I Know</p>
        <h2 className="section-title">Skills & <span className="accent-text">Expertise</span></h2>

        <div className="skills__tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`skills__tab ${active === cat.id ? 'skills__tab--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              <span className="skills__tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <div className="skills__panel">
          <div className="skills__grid">
            {currentCat.skills.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          <div className="skills__summary">
            <div className="skills__summary-card">
              <span className="skills__summary-num">{currentCat.skills.length}</span>
              <span className="skills__summary-label">Technologies</span>
            </div>
            <div className="skills__summary-card">
              <span className="skills__summary-num">
                {Math.round(currentCat.skills.reduce((a, s) => a + s.level, 0) / currentCat.skills.length)}%
              </span>
              <span className="skills__summary-label">Avg Proficiency</span>
            </div>
            <div className="skills__summary-pills">
              {currentCat.skills.map(s => (
                <span key={s.name} className="skills__pill">{s.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
