import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Fades and lifts children marked with [data-reveal] as they enter the viewport.
// Respects prefers-reduced-motion by skipping animation and just showing content.
export function useScrollAnimation(deps = []) {
  const containerRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = containerRef.current
    if (!el) return

    const targets = el.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    if (prefersReduced) {
      targets.forEach((t) => t.classList.add('is-visible'))
      return
    }

    const triggers = []
    targets.forEach((target, i) => {
      gsap.set(target, { opacity: 0, y: 28 })
      const trigger = ScrollTrigger.create({
        trigger: target,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(target, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (i % 4) * 0.08,
            ease: 'power3.out',
          })
        },
      })
      triggers.push(trigger)
    })

    return () => triggers.forEach((t) => t.kill())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return containerRef
}
