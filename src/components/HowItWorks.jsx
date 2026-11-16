import SectionHeader from './ui/SectionHeader.jsx'
import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'
import { steps as c, BOOKING_URL } from '../data/content.js'
import './HowItWorks.css'

export default function HowItWorks() {
  return (
    <section className="section" id="como-funciona">
      <div className="container">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <ol className="steps">
          {c.items.map((s, i) => (
            <Reveal as="li" key={s.title} className="card step" delay={i * 120}>
              <span className="step__num">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="steps__cta"><Button href={BOOKING_URL} size="lg">Empieza con el diagnóstico gratis</Button></Reveal>
      </div>
    </section>
  )
}
