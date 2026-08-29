import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const STATS = [
  { end: 10, suffix: '+', label: 'Years of Experience' },
  { end: 2500, suffix: '+', label: 'Happy Appointments' },
  { end: 15, suffix: '+', label: 'Beauty Services' },
  { end: 4.9, suffix: '/5', label: 'Client Rating', decimal: true },
]

function Counter({ end, suffix, decimal }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          if (prefersReduced) { setValue(end); return }
          const duration = 1400
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration)
            setValue(decimal ? +(end * progress).toFixed(1) : Math.floor(end * progress))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, decimal])

  return <span className="num" ref={ref}>{value}{suffix}</span>
}

export default function About() {
  const containerRef = useScrollAnimation()

  return (
    <section id="about" ref={containerRef}>
      <div className="container about-grid">
        <div className="about-image" data-reveal>
          <img src="https://picsum.photos/seed/nbs-about/700/900" alt="Interior of Nandita Beauty Studio" loading="lazy" />
        </div>
        <div data-reveal>
          <span className="eyebrow">A little about us</span>
          <h2>Beauty should feel like you.</h2>
          <p>
            We believe the best beauty experiences aren't about changing who you are.
            They're about bringing out the details you already love. Every visit starts
            with a conversation, not a checklist — because your appointment should feel
            like time well spent.
          </p>
          <div className="about-stats">
            {STATS.map((s) => (
              <div className="stat-card glass" key={s.label}>
                <Counter end={s.end} suffix={s.suffix} decimal={s.decimal} />
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
