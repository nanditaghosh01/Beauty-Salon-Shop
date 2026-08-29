import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

// Editable demo data — replace with your studio's real details before publishing.
const CONTACT = {
  address: '12 Rose Avenue, Kolkata, West Bengal',
  phone: '+91 XXXXX XXXXX',
  email: 'hello@nanditabeautystudio.com',
  hours: [
    { days: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '11:00 AM – 6:00 PM' },
  ],
}

export default function Contact() {
  const containerRef = useScrollAnimation()
  return (
    <section id="contact" ref={containerRef}>
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Contact</span>
          <h2>Come say hello.</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info-card glass" data-reveal>
            <div className="contact-row">
              <MapPin size={20} className="icon" />
              <div>
                <strong>Nandita Beauty Studio</strong>
                <span>{CONTACT.address}</span>
                <p className="field-hint">Demo address — update with your real location.</p>
              </div>
            </div>
            <div className="contact-row">
              <Phone size={20} className="icon" />
              <div><strong>Phone</strong><span>{CONTACT.phone}</span></div>
            </div>
            <div className="contact-row">
              <Mail size={20} className="icon" />
              <div><strong>Email</strong><span>{CONTACT.email}</span></div>
            </div>
            <div className="contact-row">
              <Clock size={20} className="icon" />
              <div>
                <strong>Opening Hours</strong>
                {CONTACT.hours.map((h) => (
                  <p key={h.days} style={{ margin: 0 }}>{h.days}: {h.time}</p>
                ))}
              </div>
            </div>
            <div className="contact-row">
              <Instagram size={20} className="icon" />
              <div><strong>Instagram</strong><span>@nanditabeautystudio</span></div>
            </div>
            <div className="contact-row">
              <MessageCircle size={20} className="icon" />
              <div><strong>WhatsApp</strong><span>Chat with us for quick questions</span></div>
            </div>
          </div>
          <div className="map-embed glass" data-reveal>
            <iframe
              title="Studio location map placeholder"
              src="https://www.openstreetmap.org/export/embed.html?bbox=88.34%2C22.68%2C88.42%2C22.74&layer=mapnik"
              loading="lazy"
              aria-label="Map placeholder — replace with your studio's real location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
