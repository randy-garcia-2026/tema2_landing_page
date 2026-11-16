import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import './FeatureCard.css'

/** Tarjeta con icono, título y texto. variant: 'default' | 'problem' */
export default function FeatureCard({ icon, title, text, tag, variant = 'default', delay = 0 }) {
  return (
    <Reveal className={`card fcard fcard--${variant}`} delay={delay}>
      <div className="fcard__top">
        <span className="fcard__icon"><Icon name={icon} /></span>
        {tag && <span className="fcard__tag">{tag}</span>}
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  )
}
