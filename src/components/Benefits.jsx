import SectionHeader from './ui/SectionHeader.jsx'
import FeatureCard from './ui/FeatureCard.jsx'
import { benefits as c } from '../data/content.js'
import './Grid.css'

export default function Benefits() {
  return (
    <section className="section section--alt" id="beneficios">
      <div className="container">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
        <div className="grid grid--3">
          {c.items.map((it, i) => <FeatureCard key={it.title} {...it} delay={(i % 3) * 80} />)}
        </div>
      </div>
    </section>
  )
}
