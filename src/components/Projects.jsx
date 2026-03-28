import React, { useState } from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'Authenticity Validator for Academia',
    duration: 'Academic Project',
    description:
      'Built a plagiarism detection system using keyword matching and similarity analysis, with a rule-based text analysis pipeline that flags suspicious content patterns and reduces manual validation effort.',
    tags: ['Python', 'NLP', 'React', 'Node.js'],
    category: 'Full Stack + NLP',
    liveUrl: 'https://degreeguard.vercel.app/',
    githubUrl: 'https://github.com/karanainule/Authenticity-Validator-for-Academia',
    highlight: true,
  },
  {
    id: 2,
    title: 'PharmaGuard',
    duration: 'Academic Project',
    description:
      'Developed a pharmacogenomic risk prediction system that analyzes VCF genetic data, classifies clinically significant genes, and provides secure upload, visualization, and report generation.',
    tags: ['Python', 'React', 'Genomics', 'VCF'],
    category: 'HealthTech',
    liveUrl: 'https://pharma-guard-rho.vercel.app/',
    githubUrl: 'https://github.com/ShriniwasKulkarni99/PharmaGuard',
    highlight: false,
  },
  {
    id: 3,
    title: 'Library Management System',
    duration: 'Academic Project',
    description:
      'Developed a full-stack library platform with role-based authentication for admins and students, book issue and return tracking, user record management, and optimized MySQL transactions.',
    tags: ['React', 'Node.js', 'MySQL', 'Authentication'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
    highlight: false,
  },
  {
    id: 4,
    title: 'Tic Tac Toe Android App',
    duration: 'Android Project',
    description:
      'Built a mobile Tic Tac Toe game in Android with responsive game-state handling, turn-based logic, winner detection, and a clean interface focused on smooth gameplay.',
    tags: ['Android', 'Java', 'Gradle', 'UI Logic'],
    category: 'Mobile App',
    liveUrl: '#',
    githubUrl: '#',
    highlight: false,
  },
  {
    id: 5,
    title: 'Personal Portfolio Website',
    duration: 'Personal Project',
    description:
      'Designed and developed a responsive portfolio website to showcase my projects, skills, education, and achievements with a polished UI, theme switching, and contact integration.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS3'],
    category: 'Frontend',
    liveUrl: 'https://shriniwas-kulkarni.netlify.app/',
    githubUrl: 'https://github.com/ShriniwasKulkarni99/shriniwas-portfolio',
    highlight: true,
  },
]

const tagColors = {
  'Python': '#3776ab', 'NLP': '#8b5cf6', 'Genomics': '#ec4899', 'VCF': '#0ea5e9',
  'React': '#61dafb', 'Node.js': '#339933', 'MongoDB': '#47a248',
  'Vite': '#646cff', 'JavaScript': '#f7df1e', 'CSS3': '#1572b6',
  'MySQL': '#4479a1', 'Authentication': '#f59e0b',
  'Android': '#3ddc84', 'Java': '#f89820', 'Gradle': '#66cdd9', 'UI Logic': '#14b8a6',
}

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">Selected <span className="accent-text">Projects</span></h2>

        <div className="projects__list">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`project-card ${project.highlight ? 'project-card--highlight' : ''} ${hovered === project.id ? 'project-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-card__index">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="project-card__body">
                <div className="project-card__header">
                  <div>
                    <span className="project-card__category">{project.category}</span>
                    <h3 className="project-card__title">{project.title}</h3>
                    <span className="project-card__duration">⏱ {project.duration}</span>
                  </div>
                  {project.highlight && (
                    <span className="project-card__badge">Featured</span>
                  )}
                </div>

                <p className="project-card__description">{project.description}</p>

                <div className="project-card__footer">
                  <div className="project-card__tags">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="project-card__tag"
                        style={{ '--tag-color': tagColors[tag] || 'var(--accent)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__actions">
                    {project.githubUrl !== '#' && (
                      <a href={project.githubUrl} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                        GitHub ↗
                      </a>
                    )}
                    {project.liveUrl !== '#' && (
                      <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-card__glow" />
            </article>
          ))}
        </div>

        <div className="projects__more">
          <a href="https://github.com/ShriniwasKulkarni99" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
