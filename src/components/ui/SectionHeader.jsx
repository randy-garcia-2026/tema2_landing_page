import Reveal from './Reveal.jsx'
import './SectionHeader.css'

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <Reveal className={`section-header section-header--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  )
}
