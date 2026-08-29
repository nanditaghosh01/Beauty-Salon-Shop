import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function SalonStory() {
  const containerRef = useScrollAnimation()

  return (
    <section ref={containerRef}>
      <div className="container">
        <div className="story-section" style={{ padding: 'clamp(40px, 6vw, 72px) clamp(24px, 6vw, 64px)' }} data-reveal>
          <div className="story-inner">
            <span className="eyebrow">Our story</span>
            <h2>A studio built around people, not trends.</h2>
            <ul className="story-list">
              <li>We listen before we suggest anything.</li>
              <li>Every recommendation is personalised to you, not a season's trend.</li>
              <li>Appointments run at a comfortable, unhurried pace.</li>
              <li>We use quality products we'd recommend to our own friends.</li>
              <li>We pay attention to the small details that are easy to skip.</li>
            </ul>
            <p className="handwritten-note">"We want you to feel comfortable enough to stay a little longer."</p>
          </div>
        </div>
      </div>
    </section>
  )
}
