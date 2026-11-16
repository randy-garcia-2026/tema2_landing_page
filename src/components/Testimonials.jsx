import SectionHeader from './ui/SectionHeader.jsx'
import Reveal from './ui/Reveal.jsx'
import { testimonials as c } from '../data/content.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="section" id="testimonios">
      <div className="container">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="grid grid--3">
          {c.items.map((t, i) => (
            <Reveal as="figure" key={t.name} className="card quote" delay={i * 100}>
              <span className="quote__metric">{t.metric}</span>
              <blockquote>“{t.quote}”</blockquote>
              <figcaption>
                <span className="quote__avatar">{t.name[0]}</span>
                <span><strong>{t.name}</strong><small>{t.role}</small></span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
