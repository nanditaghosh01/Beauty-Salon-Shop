import { useRef } from 'react'
import { useMousePosition } from '../hooks/useMousePosition.js'

export default function Hero() {
  const imgRef = useRef(null)
  useMousePosition(imgRef, { strength: 14 })

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Nandita Beauty Studio</span>
          <h1>Beauty Beyond Imagination</h1>
          <p className="lead">
            Personalized beauty, thoughtful care, and a little time just for you.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn-primary">Book an Appointment</a>
            <a href="#services" className="btn btn-outline">Explore Services</a>
          </div>
        </div>
        <div className="hero-visual" data-reveal>
          <div className="hero-frame glass">
            <img
              ref={imgRef}
              src="https://picsum.photos/seed/nbs-hero/900/1125"
              alt="A client relaxing during a beauty treatment at Nandita Beauty Studio"
              loading="eager"
            />
          </div>
          <div className="hero-float-card glass rating">
            <span className="stars">★★★★★</span>
            <span className="big">4.9/5</span>
            <span>Loved by our clients</span>
          </div>
          <div className="hero-float-card glass experience">
            <span className="big">10+ Years</span>
            <span>of Beauty Expertise</span>
          </div>
        </div>
      </div>
    </section>
  )
}
