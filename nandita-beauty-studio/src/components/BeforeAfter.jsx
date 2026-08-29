import { useRef } from 'react'
import { beforeAfterItems } from '../data/gallery.js'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

function Slider({ item }) {
  const wrapRef = useRef(null)

  const setReveal = (clientX) => {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    el.style.setProperty('--reveal', `${pct}%`)
  }

  const handleMouseMove = (e) => { if (e.buttons === 1) setReveal(e.clientX) }
  const handleTouchMove = (e) => setReveal(e.touches[0].clientX)

  const handleKeyDown = (e) => {
    const el = wrapRef.current
    if (!el) return
    const current = parseFloat(getComputedStyle(el).getPropertyValue('--reveal')) || 50
    if (e.key === 'ArrowLeft') el.style.setProperty('--reveal', `${Math.max(0, current - 5)}%`)
    if (e.key === 'ArrowRight') el.style.setProperty('--reveal', `${Math.min(100, current + 5)}%`)
  }

  return (
    <div>
      <div
        className="ba-slider"
        ref={wrapRef}
        style={{ '--reveal': '50%' }}
        onMouseDown={(e) => setReveal(e.clientX)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => setReveal(e.touches[0].clientX)}
        onTouchMove={handleTouchMove}
      >
        <img src={item.before} alt={`${item.title} before`} loading="lazy" />
        <img className="after-img" src={item.after} alt={`${item.title} after`} loading="lazy" />
        <span className="ba-label before-label">Before</span>
        <span className="ba-label after-label">After</span>
        <div
          className="ba-handle"
          role="slider"
          tabIndex={0}
          aria-label={`Reveal ${item.title} transformation`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={50}
          onKeyDown={handleKeyDown}
        />
      </div>
      <p className="ba-title">{item.title}</p>
    </div>
  )
}

export default function BeforeAfter() {
  const containerRef = useScrollAnimation()
  return (
    <section ref={containerRef}>
      <div className="container">
        <div className="section-heading center" data-reveal>
          <span className="eyebrow">Transformations</span>
          <h2>Small changes. Big confidence.</h2>
          <p>Drag the slider — with your mouse, your finger, or the arrow keys.</p>
        </div>
        <div className="ba-grid">
          {beforeAfterItems.map((item) => (
            <div key={item.id} data-reveal>
              <Slider item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
