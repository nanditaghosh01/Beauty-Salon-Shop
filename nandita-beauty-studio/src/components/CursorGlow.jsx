import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch || !ref.current) return undefined

    const xTo = gsap.quickTo(ref.current, 'x', { duration: 0.35, ease: 'power3.out' })
    const yTo = gsap.quickTo(ref.current, 'y', { duration: 0.35, ease: 'power3.out' })

    const move = (e) => { xTo(e.clientX); yTo(e.clientY) }
    const onEnter = (e) => {
      if (e.target.closest('button, a, .glass')) ref.current.classList.add('expand')
    }
    const onLeave = (e) => {
      if (e.target.closest('button, a, .glass')) ref.current.classList.remove('expand')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return <div className="cursor-glow" ref={ref} aria-hidden="true" />
}
