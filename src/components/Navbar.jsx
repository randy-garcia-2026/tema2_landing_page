import { useEffect, useState } from 'react'
import Button from './ui/Button.jsx'
import Logo from './Logo.jsx'
import { nav, BOOKING_URL } from '../data/content.js'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled || open ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <Logo />
        <nav className={`navbar__links ${open ? 'is-open' : ''}`} aria-label="Principal">
          {nav.map((l) => (<a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>))}
        </nav>
        <div className="navbar__cta"><Button href={BOOKING_URL} size="md">Reserva una llamada</Button></div>
        <button className="navbar__toggle" aria-label="Menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  )
}
