import { useState } from 'react'
import { Instagram, Facebook, MessageCircle } from 'lucide-react'

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Nandita Beauty Studio</h3>
            <p>"Where beauty feels personal."</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="WhatsApp"><MessageCircle size={16} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Makeup</a></li>
              <li><a href="#services">Hair</a></li>
              <li><a href="#services">Skin</a></li>
              <li><a href="#services">Nails</a></li>
              <li><a href="#services">Spa</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>A little inspiration, occasionally</h4>
            {subscribed ? (
              <p className="newsletter-success">You're on the list — no spam, just occasional beauty inspiration.</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary" style={{ padding: '0 20px', minHeight: 40 }}>Subscribe</button>
              </form>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Nandita Ghosh. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="https://github.com/nanditaghosh" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/nanditaghosh" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
