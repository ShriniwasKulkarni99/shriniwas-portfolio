import React from 'react'
import './Education.css'

const timeline = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Information Technology',
    institution: 'JSPM’s Jayawantrao Sawant College of Engineering, Pune',
    period: 'Sep 2023 – Present',
    status: 'Pursuing',
    grade: 'CGPA: 8.94 / 10',
    highlights: ['Data Structures & Algorithms', 'OOP', 'Web Development', 'Problem Solving'],
    icon: '🎓',
    color: '#14b8a6',
  },
  {
    degree: 'Diploma',
    field: 'Engineering',
    institution: 'SVERI’s College of Engineering (Poly)',
    period: 'Jun 2020 – Jun 2023',
    status: 'Completed',
    grade: 'Percentage: 86.56',
    highlights: ['Engineering Fundamentals', 'Technical Training', 'Applied Learning', 'Academic Projects'],
    icon: '📚',
    color: '#61dafb',
  },
  {
    degree: 'Secondary School Certificate',
    field: 'SSC',
    institution: 'New English School, Mangalwedha',
    period: 'Jun 2019 – Apr 2020',
    status: 'Completed',
    grade: 'Percentage: 88.20',
    highlights: ['Mathematics', 'Science', 'English', 'Discipline'],
    icon: '🏫',
    color: '#47a248',
  },
]

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <p className="section-label">Academic Background</p>
        <h2 className="section-title">Education <span className="accent-text">Timeline</span></h2>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline__item" style={{ '--edu-color': item.color }}>
              <div className="timeline__left">
                <div className="timeline__dot">
                  <span className="timeline__dot-icon">{item.icon}</span>
                </div>
                {i < timeline.length - 1 && <div className="timeline__line" />}
              </div>

              <div className="timeline__card">
                <div className="timeline__card-top">
                  <div>
                    <span className="timeline__status">{item.status}</span>
                    <h3 className="timeline__degree">{item.degree}</h3>
                    <p className="timeline__field">{item.field}</p>
                  </div>
                  <div className="timeline__meta">
                    <span className="timeline__period">{item.period}</span>
                    <span className="timeline__grade">{item.grade}</span>
                  </div>
                </div>

                <div className="timeline__card-body">
                  <p className="timeline__institution">📍 {item.institution}</p>
                  <div className="timeline__subjects">
                    {item.highlights.map(h => (
                      <span key={h} className="timeline__subject">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
