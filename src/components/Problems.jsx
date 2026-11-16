import SectionHeader from './ui/SectionHeader.jsx'
import FeatureCard from './ui/FeatureCard.jsx'
import { problems as c } from '../data/content.js'
import './Grid.css'

export default function Problems() {
  return (
    <section className="section" id="problemas">
      <div className="container">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="grid grid--3">
          {c.items.map((it, i) => <FeatureCard key={it.title} {...it} variant="problem" delay={(i % 3) * 80} />)}
        </div>
      </div>
    </section>
  )
}
