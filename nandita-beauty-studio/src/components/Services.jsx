import { useScrollAnimation } from '../hooks/useScrollAnimation.js'
import { services } from '../data/services.js'

export default function Services({ onBook }) {
  const containerRef = useScrollAnimation()

  return (
    <section id="services" ref={containerRef}>
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Services</span>
          <h2>What can we do for you?</h2>
          <p>From everyday self-care to your biggest day, we've got you. Not sure which one is right for you? Ask us.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id} data-reveal>
              <div className="service-card-media">
                <img src={service.image} alt={`${service.name} at Nandita Beauty Studio`} loading="lazy" />
                {service.badge && (
                  <span className="service-badge glass" style={{ color: 'var(--accent)' }}>{service.badge}</span>
                )}
              </div>
              <div className="service-card-body">
                <h3>{service.name}</h3>
                <div className="service-meta">
                  <span>{service.priceLabel}</span>
                  <span>{service.duration}</span>
                </div>
                <p>{service.description}</p>
                <div className="service-best-for">
                  {service.bestFor.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="service-card-footer">
                  <button className="btn btn-outline btn-block" onClick={() => onBook?.(service.name)}>
                    Book this service
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
