import SectionHeader from './ui/SectionHeader.jsx'
import FeatureCard from './ui/FeatureCard.jsx'
import { useCases as c } from '../data/content.js'
import './Grid.css'

export default function UseCases() {
  return (
    <section className="section section--alt" id="casos">
      <div className="container">
        <SectionHeader eyebrow={c.eyebrow} title={c.title} />
        <div className="grid grid--4">
          {c.items.map((it, i) => <FeatureCard key={it.title} {...it} delay={(i % 4) * 70} />)}
        </div>
      </div>
    </section>
  )
}
