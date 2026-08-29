import { Sparkles, Clock, Heart, MessageSquare } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

const ITEMS = [
  { icon: Sparkles, title: 'Clean & Comfortable', text: 'We keep our tools and workspaces clean between every appointment.' },
  { icon: Clock, title: 'No-Rush Consultations', text: "We'll talk through what you want before we start." },
  { icon: Heart, title: 'Your Comfort Matters', text: 'Too warm? Need a break? Just tell us.' },
  { icon: MessageSquare, title: 'Honest Recommendations', text: "We'll recommend what we genuinely think will work for you." },
]

export default function LittleThings() {
  const containerRef = useScrollAnimation()
  return (
    <section ref={containerRef}>
      <div className="container">
        <div className="section-heading center" data-reveal>
          <span className="eyebrow">Why clients stay</span>
          <h2>We care about the little things.</h2>
        </div>
        <div className="little-things-grid">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div className="little-thing-card glass" key={title} data-reveal>
              <div className="icon-wrap"><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
