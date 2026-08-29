import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import Preloader from './components/Preloader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import SalonStory from './components/SalonStory.jsx'
import Services from './components/Services.jsx'
import Consultation from './components/Consultation.jsx'
import Gallery from './components/Gallery.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import Team from './components/Team.jsx'
import Testimonials from './components/Testimonials.jsx'
import LittleThings from './components/LittleThings.jsx'
import Pricing from './components/Pricing.jsx'
import Booking from './components/Booking.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import BackToTop from './components/BackToTop.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [prefillService, setPrefillService] = useState(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return undefined

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  const handleBookService = (serviceName) => {
    setPrefillService(serviceName)
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-orb one" />
        <div className="aurora-orb two" />
        <div className="aurora-orb three" />
      </div>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <SalonStory />
        <Services onBook={handleBookService} />
        <Consultation />
        <Gallery />
        <BeforeAfter />
        <Team />
        <Testimonials />
        <LittleThings />
        <Pricing />
        <Booking prefillService={prefillService} />
        <Contact />
      </main>
      <Footer />
      <div className="floating-controls">
        <WhatsAppButton />
        <BackToTop />
      </div>
    </>
  )
}
