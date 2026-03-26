import React, { useState } from 'react'
import './Contact.css'

const contactLinks = [
  { label: 'Email', value: 'shriniwaskulkarni99@gmail.com', href: 'mailto:shriniwaskulkarni99@gmail.com', icon: '✉️' },
  { label: 'Phone', value: '+91 7517738394', href: 'tel:+917517738394', icon: '📞' },
  { label: 'GitHub', value: 'github.com/ShriniwasKulkarni99', href: 'https://github.com/ShriniwasKulkarni99', icon: '🐙' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shriniwaskulkarni07', href: 'https://linkedin.com/in/shriniwaskulkarni07', icon: '💼' },
  { label: 'LeetCode', value: 'leetcode.com/u/ShriniwasKulkarni', href: 'https://leetcode.com/u/ShriniwasKulkarni', icon: '🧠' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3500)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__cta">
          <p className="section-label">Ready to work together?</p>
          <h2 className="section-title contact__heading">
            Let's Build Something<br />
            <span className="accent-text">Remarkable.</span>
          </h2>
          <p className="contact__sub">
            I'm actively looking for internship opportunities and entry-level software roles.
            Reach out for projects, collaborations, or hiring conversations.
          </p>
        </div>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              {sent ? '✓ Message Sent!' : 'Send Message →'}
            </button>
            {sent && <p className="contact__success">Thanks! I'll get back to you soon.</p>}
          </form>

          <div className="contact__links">
            <p className="contact__links-title">Find me on</p>
            {contactLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="contact__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact__link-icon">{link.icon}</span>
                <div>
                  <span className="contact__link-label">{link.label}</span>
                  <span className="contact__link-value">{link.value}</span>
                </div>
                <span className="contact__link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
