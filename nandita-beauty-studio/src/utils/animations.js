import gsap from 'gsap'

// Shared magnetic-button behaviour: gentle pull toward the cursor, smoothed
// with quickTo so we never set transforms instantly on a raw mouse event.
export function attachMagnetic(el, strength = 0.3) {
  if (!el) return () => {}
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isTouch = window.matchMedia('(pointer: coarse)').matches
  if (prefersReduced || isTouch) return () => {}

  const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
  const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

  const handleMove = (e) => {
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    xTo(relX * strength)
    yTo(relY * strength)
  }
  const handleLeave = () => {
    xTo(0)
    yTo(0)
  }

  el.addEventListener('mousemove', handleMove)
  el.addEventListener('mouseleave', handleLeave)
  return () => {
    el.removeEventListener('mousemove', handleMove)
    el.removeEventListener('mouseleave', handleLeave)
  }
}

export function formatINR(value) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value)
}
