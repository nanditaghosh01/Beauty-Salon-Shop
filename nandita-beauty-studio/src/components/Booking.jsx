import { useEffect, useState } from 'react'
import { services } from '../data/services.js'

const VISIT_OPTIONS = ['Regular appointment', 'Wedding', 'Party', 'Consultation', 'First visit']

const initialForm = {
  name: '', phone: '', email: '', service: '', date: '', time: '', message: '', visitType: 'Regular appointment',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = "Please enter your name so we know who we're welcoming."
  if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) errors.phone = "That doesn't look like a valid phone number yet."
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = "We'll need a valid email to confirm your appointment."
  if (!form.service) errors.service = 'Let us know which service you\u2019d like.'
  if (!form.date) errors.date = 'Choose the day that works best for you.'
  return errors
}

export default function Booking({ prefillService }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (prefillService) setForm((f) => ({ ...f, service: prefillService }))
  }, [prefillService])

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      // Demo booking submission — no backend is connected. Wire this up to
      // your booking system or an email/API endpoint before going live.
      setSubmitted(true)
    }
  }

  const reset = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="booking">
      <div className="container">
        <div className="booking-wrap glass">
          <div className="booking-side">
            <span className="eyebrow" style={{ color: 'var(--color-petal)' }}>Book an appointment</span>
            <h3>Your appointment, your way.</h3>
            <p>Tell us a little about what you're looking for, and we'll take care of the details.</p>
            <ul>
              <li>We recommend arriving 10 minutes before your appointment so you have time to settle in.</li>
              <li>Running late? Just give us a call — we'll do our best to accommodate you.</li>
              <li>We'll only use your number to confirm your appointment.</li>
            </ul>
          </div>

          {submitted ? (
            <div className="booking-success">
              <div className="spark">✨</div>
              <h3>Request received!</h3>
              <p>Thank you, {form.name.split(' ')[0] || 'friend'}.</p>
              <p>We've received your appointment request. We'll confirm your time shortly.</p>
              <div style={{ marginTop: 24 }}>
                <button className="btn btn-primary" onClick={reset}>Back to booking</button>
              </div>
              <p className="field-hint" style={{ marginTop: 16 }}>This is a demo form — no message was actually sent.</p>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <input id="name" placeholder=" " value={form.name} onChange={update('name')} />
                <label htmlFor="name">Full Name</label>
                {errors.name && <p className="field-error">{errors.name}</p>}
              </div>

              <div className="field">
                <input id="phone" placeholder=" " value={form.phone} onChange={update('phone')} />
                <label htmlFor="phone">Phone Number</label>
                {errors.phone && <p className="field-error">{errors.phone}</p>}
              </div>

              <div className="field">
                <input id="email" type="email" placeholder=" " value={form.email} onChange={update('email')} />
                <label htmlFor="email">Email</label>
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>

              <div className="field">
                <select id="service" className={form.service ? 'filled' : ''} value={form.service} onChange={update('service')}>
                  <option value="" disabled hidden> </option>
                  {services.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
                <label htmlFor="service">Preferred Service</label>
                {errors.service && <p className="field-error">{errors.service}</p>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="field">
                  <input id="date" type="date" placeholder=" " value={form.date} onChange={update('date')} />
                  <label htmlFor="date">Preferred Date</label>
                  {errors.date && <p className="field-error">{errors.date}</p>}
                </div>
                <div className="field">
                  <input id="time" type="time" placeholder=" " value={form.time} onChange={update('time')} />
                  <label htmlFor="time">Preferred Time</label>
                </div>
              </div>

              <div>
                <p className="field-hint" style={{ marginBottom: 8 }}>What are you visiting us for?</p>
                <div className="visit-options">
                  {VISIT_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      className={`visit-chip ${form.visitType === opt ? 'active' : ''}`}
                      onClick={() => setForm((f) => ({ ...f, visitType: opt }))}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <textarea id="message" placeholder=" " value={form.message} onChange={update('message')} />
                <label htmlFor="message">Message (optional)</label>
              </div>

              <button type="submit" className="btn btn-primary btn-block">Request Appointment</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
