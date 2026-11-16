import Button from './ui/Button.jsx'
import Icon from './ui/Icon.jsx'
import HeroVisual from './HeroVisual.jsx'
import { hero, BOOKING_URL } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__badge"><b />{hero.badge}</span>
          <h1>{hero.title} <span className="gradient-text">{hero.titleAccent}</span></h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <Button href={BOOKING_URL} size="lg">{hero.primary}</Button>
            <Button href="#como-funciona" variant="secondary" size="lg">{hero.secondary}</Button>
          </div>
          <p className="hero__note"><Icon name="check" size={16} /> {hero.note}</p>
        </div>
        <div className="hero__visual"><HeroVisual /></div>
      </div>
    </section>
  )
}
