import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials.js'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function Testimonials() {
  const containerRef = useScrollAnimation()
  const [index, setIndex] = useState(0)
  const current = testimonials[index]

  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)

  return (
    <section id="reviews" ref={containerRef}>
      <div className="container">
        <div className="section-heading center" data-reveal>
          <span className="eyebrow">Reviews</span>
          <h2>What clients tell us afterward.</h2>
        </div>
        <div className="testimonials-wrap" data-reveal>
          <div className="testimonial-card glass">
            <div className="testimonial-stars" aria-hidden="true">{'★'.repeat(current.rating)}{'☆'.repeat(5 - current.rating)}</div>
            <p className="testimonial-text">"{current.text}"</p>
            <div className="testimonial-meta">
              <strong>{current.name}</strong> · {current.service}
              {current.verified && <span className="verified-badge">Verified appointment</span>}
            </div>
          </div>
          <div className="testimonial-nav">
            <button onClick={() => go(-1)} aria-label="Previous review"><ChevronLeft size={18} /></button>
            <button onClick={() => go(1)} aria-label="Next review"><ChevronRight size={18} /></button>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((t, i) => (
              <span key={t.id} className={i === index ? 'active' : ''} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
