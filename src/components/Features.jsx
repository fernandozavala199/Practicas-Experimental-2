import './Features.css'

const features = [
  {
    icon: 'bi-lightning-charge-fill',
    color: '#fbbf24',
    title: 'Ultra Rápido',
    desc: 'Optimizado para velocidad. Tiempos de carga menores a 1 segundo con tecnología de vanguardia.',
  },
  {
    icon: 'bi-shield-lock-fill',
    color: '#34d399',
    title: 'Seguridad Total',
    desc: 'Encriptación de extremo a extremo y cumplimiento GDPR. Tus datos siempre protegidos.',
  },
  {
    icon: 'bi-phone-fill',
    color: '#6c63ff',
    title: 'Responsive',
    desc: 'Diseño adaptativo que se ve perfecto en cualquier dispositivo, desde móvil hasta escritorio.',
  },
  {
    icon: 'bi-graph-up-arrow',
    color: '#f87171',
    title: 'Analytics Pro',
    desc: 'Métricas detalladas en tiempo real para tomar decisiones basadas en datos reales.',
  },
  {
    icon: 'bi-puzzle-fill',
    color: '#a78bfa',
    title: 'Integrable',
    desc: 'Compatible con más de 500 herramientas. Conecta con tus apps favoritas sin código.',
  },
  {
    icon: 'bi-headset',
    color: '#38bdf8',
    title: 'Soporte 24/7',
    desc: 'Equipo de expertos disponible en todo momento. Respuesta garantizada en menos de 1 hora.',
  },
]

export default function Features() {
  return (
    <section id="features" className="features-section py-6">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">
            <i className="bi bi-grid me-1"></i> Características
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Todo lo que necesitas, <span className="text-gradient-feat">en un solo lugar</span>
          </h2>
          <p className="text-secondary fs-5 mx-auto" style={{maxWidth: 560}}>
            Herramientas poderosas diseñadas para hacer crecer tu negocio sin complicaciones.
          </p>
        </div>

        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="feature-card p-4 h-100">
                <div
                  className="feature-icon mb-4 d-inline-flex align-items-center justify-content-center rounded-3"
                  style={{ background: `${f.color}20`, width: 56, height: 56 }}
                >
                  <i className={`bi ${f.icon} fs-4`} style={{ color: f.color }}></i>
                </div>
                <h5 className="fw-bold mb-2">{f.title}</h5>
                <p className="text-secondary mb-0">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
