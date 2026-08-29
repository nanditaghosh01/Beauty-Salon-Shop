import { Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

// Editable demo data — update to match your actual package pricing.
const PLANS = [
  {
    name: 'Essential',
    desc: 'For everyday self-care.',
    price: '₹1,499',
    items: ['Basic facial', 'Hair wash', 'Styling', 'Brow shaping'],
  },
  {
    name: 'Signature',
    desc: 'For a complete beauty refresh.',
    price: '₹2,999',
    items: ['Premium facial', 'Hair spa', 'Styling', 'Manicure', 'Brow shaping'],
    popular: true,
  },
  {
    name: 'Bridal',
    desc: 'For your biggest day.',
    price: '₹8,999',
    priceSuffix: 'starting at',
    items: ['Bridal consultation', 'Makeup trial', 'Bridal makeup', 'Hair styling', 'Touch-up assistance'],
  },
]

export default function Pricing() {
  const containerRef = useScrollAnimation()
  return (
    <section id="pricing" ref={containerRef}>
      <div className="container">
        <div className="section-heading center" data-reveal>
          <span className="eyebrow">Pricing</span>
          <h2>Transparent, no surprises.</h2>
        </div>
        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div className={`pricing-card glass ${plan.popular ? 'popular' : ''}`} key={plan.name} data-reveal>
              {plan.popular && <span className="popular-tag">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing-desc">{plan.desc}</p>
              <div className="pricing-price">
                {plan.priceSuffix && <span>{plan.priceSuffix} </span>}
                {plan.price}
              </div>
              <ul className="pricing-list">
                {plan.items.map((item) => (
                  <li key={item}><Check size={16} /> {item}</li>
                ))}
              </ul>
              <a href="#booking" className="btn btn-outline btn-block">Book this plan</a>
            </div>
          ))}
        </div>
        <p className="pricing-note">Prices may vary depending on hair length, product selection and customization.</p>
      </div>
    </section>
  )
}
