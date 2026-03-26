import React from 'react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <a href="#" className="footer__logo">
            <span className="footer__logo-a">S</span>K
          </a>
          <p className="footer__tagline">Final-Year IT Student · Full-Stack Developer · Open to Internship</p>
        </div>
        <div className="footer__links">
          {[
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Achievements', href: '#achievements' },
            { label: 'Contact', href: '#contact' },
          ].map(link => (
            <a key={link.label} href={link.href} className="footer__link">{link.label}</a>
          ))}
        </div>
        <div className="footer__right">
          <p className="footer__copy">© {year} Shriniwas Kulkarni. All rights reserved.</p>
          <p className="footer__made">Built with React + Vite ⚡</p>
        </div>
      </div>
    </footer>
  )
}
