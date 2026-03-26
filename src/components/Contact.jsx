import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const contactLinks = [
  { label: 'Email', value: 'shriniwaskulkarni99@gmail.com', href: 'mailto:shriniwaskulkarni99@gmail.com', icon: '✉️' },
  { label: 'Phone', value: '+91 7517738394', href: 'tel:+917517738394', icon: '📞' },
  { label: 'GitHub', value: 'github.com/ShriniwasKulkarni99', href: 'https://github.com/ShriniwasKulkarni99', icon: '🐙' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shriniwaskulkarni07', href: 'https://linkedin.com/in/shriniwaskulkarni07', icon: '💼' },
  { label: 'LeetCode', value: 'leetcode.com/u/ShriniwasKulkarni', href: 'https://leetcode.com/u/ShriniwasKulkarni', icon: '🧠' },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ user_name: '', user_email: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setFeedback('Email service is not configured yet. Add your EmailJS keys to the Vite env file.')
      return
    }

    try {
      setStatus('sending')
      setFeedback('')

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })

      setStatus('success')
      setFeedback("Thanks! Your message has been sent. I'll get back to you soon.")
      setForm({ user_name: '', user_email: '', message: '' })
    } catch (error) {
      setStatus('error')
      setFeedback('Message failed to send. Please try again or contact me directly by email.')
    }
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
          <form ref={formRef} className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  value={form.user_name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.user_email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
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
                disabled={status === 'sending'}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message →'}
            </button>
            {feedback && (
              <p className={`contact__status contact__status--${status === 'error' ? 'error' : 'success'}`}>
                {feedback}
              </p>
            )}
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
