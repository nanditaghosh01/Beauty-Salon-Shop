import { Instagram } from 'lucide-react'
import { team } from '../data/team.js'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function Team() {
  const containerRef = useScrollAnimation()
  return (
    <section id="team" ref={containerRef}>
      <div className="container">
        <div className="section-heading center" data-reveal>
          <span className="eyebrow">Our team</span>
          <h2>Meet the people behind the studio.</h2>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <div className="team-card" key={member.id} data-reveal>
              <div className="team-photo">
                <img src={member.image} alt={`${member.name}, ${member.role} at Nandita Beauty Studio`} loading="lazy" />
              </div>
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <div className="team-exp">{member.experience}</div>
              <p className="team-note">"{member.note}"</p>
              <div className="team-social">
                <a href="#" aria-label={`${member.name} on Instagram`}><Instagram size={16} /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
