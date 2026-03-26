import React, { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mark" aria-hidden="true">
            <span className="navbar__logo-s">S</span>
            <span className="navbar__logo-k">K</span>
          </span>
        </a>
        <div className="navbar__right">
          <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`navbar__link ${active === l.href ? 'navbar__link--active' : ''}`}
                onClick={() => { setActive(l.href); setMenuOpen(false) }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="navbar__theme-icon">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </button>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>
      </div>
    </header>
  )
}
