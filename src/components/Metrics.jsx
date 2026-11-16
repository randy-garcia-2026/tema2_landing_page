import Reveal from './ui/Reveal.jsx'
import { metrics, metricsNote } from '../data/content.js'
import './Metrics.css'

export default function Metrics() {
  return (
    <section className="metrics" aria-label="Resultados">
      <div className="container">
        <Reveal className="metrics__grid">
          {metrics.map((m) => (
            <div key={m.label} className="metrics__item">
              <strong className="gradient-text">{m.value}</strong>
              <span>{m.label}</span>
            </div>
          ))}
        </Reveal>
        <p className="metrics__note">{metricsNote}</p>
      </div>
    </section>
  )
}
