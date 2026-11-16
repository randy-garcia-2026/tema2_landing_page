import Logo from './Logo.jsx'
import { footer as c } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand"><Logo /><p>{c.tagline}</p></div>
        {c.columns.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>{col.links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="container">
        <div className="footer__bottom">© {new Date().getFullYear()} Automatiza360. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
