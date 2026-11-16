// =========================================================
// CONTENIDO — todo el copy de la landing vive aquí
// =========================================================
// Enlace de reserva: define VITE_BOOKING_URL en .env (Calendly / Cal.com). Mientras tanto abre un correo.
export const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || 'mailto:hola@automatiza360.com?subject=Reservar%20llamada%20de%20diagn%C3%B3stico'

export const nav = [
  { label: 'Problemas', href: '#problemas' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Casos de uso', href: '#casos' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  badge: 'Diagnóstico gratuito de automatización',
  title: 'Tu negocio vendiendo y atendiendo,',
  titleAccent: 'incluso cuando tú no estás.',
  subtitle:
    'Implementamos automatizaciones e inteligencia artificial que conectan WhatsApp, email, CRM y calendario para que captes más clientes, respondas al instante y dejes de depender de tareas manuales.',
  primary: 'Reserva una llamada',
  secondary: 'Ver cómo funciona',
  note: 'Llamada de 30 min · Sin compromiso · Plan de acción incluido',
}

export const metrics = [
  { value: '+12h', label: 'ahorradas por semana y equipo' },
  { value: '< 1 min', label: 'tiempo medio de respuesta a leads' },
  { value: '+38%', label: 'más reuniones comerciales agendadas' },
  { value: '40+', label: 'flujos activos en producción' },
]
export const metricsNote = 'Resultados medios en proyectos de clientes. Cifras de ejemplo: sustitúyelas por tus datos reales.'

export const problems = {
  eyebrow: 'El problema',
  title: 'Si te suena alguno de estos, estás perdiendo dinero cada semana',
  items: [
    { icon: 'clock', title: 'Contestas tarde', text: 'Un lead que espera horas por una respuesta ya está hablando con tu competencia.' },
    { icon: 'repeat', title: 'Copias y pegas todo el día', text: 'Pasar datos de formularios a hojas de cálculo y CRM roba horas que no facturas.' },
    { icon: 'funnel', title: 'Leads sin seguimiento', text: 'Nadie recuerda a quién escribir y cuándo. Las ventas se enfrían en silencio.' },
    { icon: 'puzzle', title: 'Herramientas que no se hablan', text: 'WhatsApp, email, CRM y agenda funcionan por separado y tú haces de puente.' },
    { icon: 'users', title: 'Crecer exige contratar', text: 'Más clientes significa más trabajo manual, más coste fijo y más errores.' },
    { icon: 'eye', title: 'Cero visibilidad', text: 'No sabes qué leads son buenos, qué se cae en el embudo ni dónde se pierde la venta.' },
  ],
}

export const benefits = {
  eyebrow: 'Beneficios',
  title: 'Más eficiencia sin contratar más personal',
  subtitle: 'Sistemas conectados que trabajan 24/7 y se integran con lo que ya usas.',
  items: [
    { icon: 'zap', title: 'Respuesta inmediata', text: 'Cada consulta recibe respuesta en segundos, a cualquier hora y por el canal que prefiera el cliente.' },
    { icon: 'target', title: 'Mejor seguimiento comercial', text: 'Recordatorios y secuencias automáticas para que ningún lead se quede sin contactar.' },
    { icon: 'hourglass', title: 'Menos tareas manuales', text: 'Eliminamos el trabajo repetitivo para que tu equipo se dedique a lo que genera ingresos.' },
    { icon: 'link', title: 'Herramientas conectadas', text: 'WhatsApp, email, CRM, formularios, calendarios y bases de datos trabajando como un solo sistema.' },
    { icon: 'sparkles', title: 'IA con criterio de negocio', text: 'Agentes que clasifican, responden y priorizan siguiendo tus reglas, no respuestas genéricas.' },
    { icon: 'trend', title: 'Escala sin fricción', text: 'Duplica el volumen de clientes sin duplicar la carga operativa ni la plantilla.' },
  ],
}

export const steps = {
  eyebrow: 'Cómo funciona',
  title: 'De la llamada a tu sistema funcionando, en tres pasos',
  items: [
    { title: 'Diagnóstico gratuito', text: 'Analizamos tus procesos en una llamada estratégica y detectamos cuellos de botella, tareas repetitivas y oportunidades con IA.' },
    { title: 'Diseño e implementación', text: 'Diseñamos los flujos, conectamos tus herramientas y construimos los agentes. Tú validas cada etapa antes de activarla.' },
    { title: 'Medimos y optimizamos', text: 'Monitorizamos resultados, afinamos las automatizaciones y te damos soporte para que el sistema mejore con el tiempo.' },
  ],
}

export const useCases = {
  eyebrow: 'Casos de uso',
  title: 'Automatizaciones que ya funcionan en negocios como el tuyo',
  items: [
    { icon: 'inbox', tag: 'Captación', title: 'Captación automática de leads', text: 'Formularios, anuncios y web enviando cada contacto a tu CRM en tiempo real.' },
    { icon: 'chat', tag: 'Seguimiento', title: 'Seguimiento por email o WhatsApp', text: 'Secuencias personalizadas que se detienen solas cuando el cliente responde.' },
    { icon: 'calendar', tag: 'Ventas', title: 'Agendado automático de reuniones', text: 'El lead elige hueco, recibe confirmación y recordatorios sin que muevas un dedo.' },
    { icon: 'sparkles', tag: 'IA', title: 'Clasificación de leads con IA', text: 'Puntúa y prioriza oportunidades según tus criterios para que vendas primero a los mejores.' },
    { icon: 'headset', tag: 'Soporte', title: 'Atención al cliente automatizada', text: 'Un agente resuelve dudas frecuentes y escala a una persona cuando hace falta.' },
    { icon: 'doc', tag: 'Operaciones', title: 'Presupuestos y recordatorios', text: 'Generación y envío de propuestas, con avisos automáticos de seguimiento y cobro.' },
    { icon: 'sync', tag: 'Integración', title: 'Sincronización CRM y herramientas', text: 'Datos coherentes en todos tus sistemas, sin exportar ni importar a mano.' },
    { icon: 'trend', tag: 'Analítica', title: 'Informes y métricas automáticos', text: 'Paneles e informes semanales con tus leads, ventas y tiempos de respuesta, sin hojas de cálculo.' },
  ],
}

// Testimonios de ejemplo: sustituir por reales antes de publicar
export const testimonials = {
  eyebrow: 'Testimonios',
  title: 'Equipos que recuperaron su tiempo',
  items: [
    { quote: 'Antes tardábamos medio día en contestar a un lead. Ahora responde el sistema en un minuto y llegamos a la llamada con el contexto completo.', name: 'Laura M.', role: 'Directora, agencia de marketing', metric: '+41% reuniones' },
    { quote: 'Automatizaron presupuestos y recordatorios. Mi equipo de tres personas ahora gestiona el volumen que antes pedía cinco.', name: 'Carlos R.', role: 'Gerente, empresa de servicios', metric: '-15h / semana' },
    { quote: 'Lanzo cada programa con un flujo que califica, responde y agenda solo. Yo me centro en el contenido y en las llamadas que cierran.', name: 'Elena P.', role: 'Infoproductora', metric: '2x conversión' },
  ],
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Preguntas frecuentes',
  items: [
    { q: '¿Qué incluye el diagnóstico gratuito?', a: 'Una llamada de unos 30 minutos donde revisamos tus procesos actuales, identificamos las tareas con más impacto y te entregamos un plan priorizado de automatización, aunque decidas no trabajar con nosotros.' },
    { q: '¿Necesito cambiar las herramientas que ya uso?', a: 'No. Nos integramos con tu CRM, WhatsApp, email, calendario y bases de datos actuales. Solo proponemos cambios si realmente aportan valor.' },
    { q: '¿Cuánto tarda la implementación?', a: 'Una primera automatización útil suele estar funcionando en 2 a 4 semanas, según la complejidad. Trabajamos por fases para que veas resultados pronto.' },
    { q: '¿Es seguro conectar mis datos y los de mis clientes?', a: 'Sí. Trabajamos con accesos mínimos necesarios, conexiones cifradas y buenas prácticas de protección de datos, y nos ajustamos a la normativa aplicable.' },
    { q: '¿La IA responderá cosas incorrectas a mis clientes?', a: 'Diseñamos los agentes con tus reglas, tu información y límites claros. Cuando una consulta se sale del guion, se deriva a una persona de tu equipo.' },
    { q: '¿Cuánto cuesta?', a: 'Depende del alcance. En la llamada estimamos el retorno y te damos una propuesta cerrada, sin sorpresas.' },
  ],
}

export const finalCta = {
  title: 'Descubre cuánto tiempo y dinero te está costando hacerlo todo a mano',
  subtitle: 'Reserva tu diagnóstico gratuito y sal de la llamada con un plan claro de automatización para tu negocio.',
  button: 'Reserva una llamada',
  note: 'Plazas limitadas cada semana · Sin compromiso',
}

export const footer = {
  tagline: 'Automatizaciones e IA para negocios que quieren vender más y trabajar menos en lo repetitivo.',
  columns: [
    { title: 'Navegación', links: [{ label: 'Beneficios', href: '#beneficios' }, { label: 'Cómo funciona', href: '#como-funciona' }, { label: 'Casos de uso', href: '#casos' }, { label: 'FAQ', href: '#faq' }] },
    { title: 'Contacto', links: [{ label: 'hola@automatiza360.com', href: 'mailto:hola@automatiza360.com' }, { label: 'Reservar llamada', href: BOOKING_URL }] },
    { title: 'Legal', links: [{ label: 'Aviso legal', href: '#' }, { label: 'Privacidad', href: '#' }, { label: 'Cookies', href: '#' }] },
  ],
}
