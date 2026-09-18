import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Our Team', href: '#team' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return undefined
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
  }, [drawerOpen])

  return (
    <>
      <nav className={`navbar glass glass-strong ${scrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="navbar-logo">
          <span className="mark">✿</span>
        </a>
        <ul className="navbar-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={active === link.href ? 'active' : ''}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a href="#booking" className="btn btn-primary navbar-book-btn">
            Book Now
          </a>
          <button className="navbar-burger" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!drawerOpen}>
        <div className="mobile-drawer-top">
          <span className="navbar-logo">Nandita Beauty Studio</span>
          <button className="mobile-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <ul className="mobile-drawer-links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setDrawerOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href="#booking" className="btn btn-primary btn-block" onClick={() => setDrawerOpen(false)}>
          Book Appointment
        </a>
      </div>
    </>
  )
}
