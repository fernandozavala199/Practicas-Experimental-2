import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="hero-bg-blur"></div>
      <div className="container position-relative z-1">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6 text-center text-lg-start py-5">
            <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-4 fs-6">
              <i className="bi bi-stars me-1"></i> Nuevo · Versión 2.0
            </span>
            <h1 className="display-3 fw-bold lh-sm mb-4">
              Lleva tu{' '}
              <span className="text-gradient">negocio digital</span>
              {' '}al siguiente nivel
            </h1>
            <p className="lead text-secondary mb-5 fs-5">
              Creamos soluciones modernas, rápidas y escalables que convierten visitantes en clientes. Diseño profesional, código limpio.
            </p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
              <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-5 shadow-glow">
                <i className="bi bi-rocket me-2"></i>Empezar gratis
              </a>
              <a href="#features" className="btn btn-outline-light btn-lg rounded-pill px-5">
                <i className="bi bi-play-circle me-2"></i>Ver demo
              </a>
            </div>
            <div className="d-flex flex-wrap gap-4 mt-5 justify-content-center justify-content-lg-start">
              {[
                { icon: 'bi-people-fill', val: '5,000+', label: 'Clientes' },
                { icon: 'bi-star-fill', val: '4.9★', label: 'Rating' },
                { icon: 'bi-shield-check', val: '99.9%', label: 'Uptime' },
              ].map((s, i) => (
                <div key={i} className="stat-item text-center">
                  <div className="text-primary mb-1"><i className={`bi ${s.icon} fs-5`}></i></div>
                  <div className="fw-bold fs-5">{s.val}</div>
                  <div className="text-secondary small">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-flex justify-content-center">
            <div className="hero-card-stack">
              <div className="hero-card hero-card-main p-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{width:48,height:48}}>
                    <i className="bi bi-graph-up-arrow text-white fs-5"></i>
                  </div>
                  <div>
                    <div className="fw-bold">Métricas en tiempo real</div>
                    <div className="text-secondary small">Dashboard actualizado</div>
                  </div>
                </div>
                {[80, 65, 90].map((w, i) => (
                  <div key={i} className="mb-3">
                    <div className="d-flex justify-content-between mb-1 small text-secondary">
                      <span>{['Ventas', 'Tráfico', 'Conversión'][i]}</span>
                      <span>{w}%</span>
                    </div>
                    <div className="progress" style={{height:6, backgroundColor:'rgba(255,255,255,0.1)'}}>
                      <div className="progress-bar bg-primary" style={{width:`${w}%`, borderRadius:4}}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-card hero-card-float p-3 d-flex align-items-center gap-3">
                <div className="badge bg-success rounded-circle p-2">
                  <i className="bi bi-check-lg text-white"></i>
                </div>
                <div>
                  <div className="fw-semibold small">¡Nuevo cliente!</div>
                  <div className="text-secondary" style={{fontSize:12}}>hace 2 minutos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
