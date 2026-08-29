import { useState } from 'react'
import { MessageCircle } from 'lucide-react'

// Editable demo data — replace with the studio's real WhatsApp number.
const WHATSAPP_NUMBER = '917063019482'

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      {open && (
        <div className="glass whatsapp-tooltip">
          Need help choosing a service? <br />
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>
            Chat with us
          </a>
        </div>
      )}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="fab whatsapp"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <MessageCircle size={24} />
      </a>
    </div>
  )
}
