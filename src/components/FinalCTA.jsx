import Button from './ui/Button.jsx'
import Reveal from './ui/Reveal.jsx'
import { finalCta as c, BOOKING_URL } from '../data/content.js'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="section" id="reserva">
      <div className="container">
        <Reveal className="cta">
          <div className="cta__glow" aria-hidden="true" />
          <h2>{c.title}</h2>
          <p>{c.subtitle}</p>
          <Button href={BOOKING_URL} size="lg">{c.button}</Button>
          <small>{c.note}</small>
        </Reveal>
      </div>
    </section>
  )
}
