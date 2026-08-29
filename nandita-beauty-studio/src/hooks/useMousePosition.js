import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Smoothly interpolates a target element's transform toward the mouse position,
// using GSAP's ticker rather than setting transforms directly on every mousemove.
export function useMousePosition(ref, { strength = 20 } = {}) {
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !ref.current) return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      pos.current.x = ((e.clientX / innerWidth) - 0.5) * strength
      pos.current.y = ((e.clientY / innerHeight) - 0.5) * strength
    }

    const tick = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.08
      current.current.y += (pos.current.y - current.current.y) * 0.08
      if (ref.current) {
        gsap.set(ref.current, {
          x: current.current.x,
          y: current.current.y,
        })
      }
    }

    window.addEventListener('mousemove', handleMove)
    gsap.ticker.add(tick)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      gsap.ticker.remove(tick)
    }
  }, [ref, strength])
}
