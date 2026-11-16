import Icon from './ui/Icon.jsx'
import './HeroVisual.css'

/** Panel tipo dashboard con un flujo de automatización animado. */
const FLOW = [
  { icon: 'form', label: 'Nuevo lead', sub: 'Formulario web' },
  { icon: 'sparkles', label: 'IA clasifica', sub: 'Lead caliente · 92/100' },
  { icon: 'whatsapp', label: 'WhatsApp enviado', sub: 'En 38 segundos' },
  { icon: 'calendar', label: 'Reunión agendada', sub: 'Mañana · 10:30' },
]

export default function HeroVisual() {
  return (
    <div className="hv" aria-hidden="true">
      <div className="hv__glow" />
      <div className="hv__panel">
        <div className="hv__bar"><i /><i /><i /><span>Flujo · Captación y ventas</span><em><b />Activo</em></div>

        <ol className="hv__flow">
          {FLOW.map((n, i) => (
            <li key={n.label} className="hv__node" style={{ '--i': i }}>
              <span className="hv__icon"><Icon name={n.icon} size={20} /></span>
              <div><strong>{n.label}</strong><small>{n.sub}</small></div>
              <Icon name="check" size={16} className="hv__check" />
            </li>
          ))}
        </ol>

        <div className="hv__stats">
          <div><small>Leads hoy</small><strong>47</strong></div>
          <div><small>Resp. media</small><strong>0:42</strong></div>
          <div className="hv__spark">
            <small>Reuniones</small><strong>+38%</strong>
            <svg viewBox="0 0 100 28" preserveAspectRatio="none"><path d="M0 24 L15 20 L30 22 L45 14 L60 16 L75 8 L100 3" /></svg>
          </div>
        </div>
      </div>

      <div className="hv__chip hv__chip--a"><Icon name="mail" size={16} /> Seguimiento enviado</div>
      <div className="hv__chip hv__chip--b"><Icon name="db" size={16} /> CRM sincronizado</div>
    </div>
  )
}
