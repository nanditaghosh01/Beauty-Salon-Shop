import { useState } from 'react'
import { services, consultationMap } from '../data/services.js'

const OCCASIONS = Object.keys(consultationMap)

export default function Consultation() {
  const [selected, setSelected] = useState(null)

  const recommended = selected
    ? consultationMap[selected].map((id) => services.find((s) => s.id === id)).filter(Boolean)
    : []

  return (
    <section>
      <div className="container">
        <div className="consultation glass" data-reveal>
          <span className="eyebrow">Not sure what you need?</span>
          <h2>What are you getting ready for?</h2>
          <div className="consultation-options">
            {OCCASIONS.map((occasion) => (
              <button
                key={occasion}
                className={`petal-btn ${selected === occasion ? 'active' : ''}`}
                onClick={() => setSelected(occasion)}
                aria-pressed={selected === occasion}
              >
                {occasion}
              </button>
            ))}
          </div>
          <div className={`consultation-result ${selected ? 'show' : ''}`} aria-live="polite">
            {recommended.length > 0 && (
              <>
                <p style={{ width: '100%', marginBottom: '4px' }}>We think you'll love:</p>
                {recommended.map((s) => (
                  <a key={s.id} href="#services" className="consultation-pill glass">✨ {s.name}</a>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
