import { useEffect, useState } from 'react'

export default function Preloader({ onDone }) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const bar = document.querySelector('.preloader-bar-fill')
    const t1 = setTimeout(() => { if (bar) bar.style.width = '100%' }, 80)
    const t2 = setTimeout(() => {
      setHide(true)
      onDone?.()
    }, 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div className={`preloader ${hide ? 'done' : ''}`} aria-hidden={hide}>
      <span className="preloader-mark">Nandita Beauty Studio</span>
      <div className="preloader-bar"><div className="preloader-bar-fill" /></div>
    </div>
  )
}
