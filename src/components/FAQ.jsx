import { useState } from 'react'
import SectionHeader from './ui/SectionHeader.jsx'
import Reveal from './ui/Reveal.jsx'
import { faq as c } from '../data/content.js'
import './FAQ.css'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section section--alt" id="faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: c.items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.a } })),
      }) }} />
      <div className="container faq">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <Reveal className="faq__list">
          {c.items.map((it, i) => {
            const isOpen = open === i
            return (
              <div key={it.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
                <button className="faq__q" id={`faq-q-${i}`} aria-controls={`faq-a-${i}`} aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{it.q}</span><i aria-hidden="true" />
                </button>
                <div className="faq__a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}><div><p>{it.a}</p></div></div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
