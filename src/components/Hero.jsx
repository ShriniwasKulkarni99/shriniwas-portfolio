import React from 'react'
import './Hero.css'
import profile from '/profile.jpg'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg-blob" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__greeting">Hey, I'm —</p>
          <h1 className="hero__name">
            Shriniwas<br />
            <span className="hero__name-role">Final-Year IT Student & Full-Stack Developer</span>
          </h1>
          <p className="hero__bio">
            Final-year Information Technology engineering student with strong problem-solving skills
            and hands-on experience in full-stack development using React, Java, Python, and modern web tools.
          </p>
          <div className="hero__tags">
            {['Java', 'Python', 'React.js', 'JavaScript', 'DSA'].map(t => (
              <span key={t} className="hero__tag">{t}</span>
            ))}
          </div>
          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">View Projects ↓</a>
            <a href="/Shriniwas_Resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">View Resume ↗</a>
          </div>
        </div>
        <div className="hero__side">
          <div className="hero__avatar">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar-inner">
              <img className='hero__avatar-img' src={profile} alt="SK" />
            </div>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">4</span>
              <span className="hero__stat-label">Projects Built</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">8.94</span>
              <span className="hero__stat-label">Current CGPA</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">2</span>
              <span className="hero__stat-label">AI Quest Levels</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
