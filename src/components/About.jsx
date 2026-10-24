import './About.css'

const team = [
  { name: 'Ana García', role: 'CEO & Fundadora', emoji: '👩‍💼', color: '#6c63ff' },
  { name: 'Carlos López', role: 'CTO', emoji: '👨‍💻', color: '#a78bfa' },
  { name: 'María Torres', role: 'Head of Design', emoji: '👩‍🎨', color: '#38bdf8' },
]

export default function About() {
  return (
    <section id="about" className="about-section py-6">
      <div className="container">
        <div className="row align-items-center g-5 mb-6">
          <div className="col-lg-6">
            <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">
              <i className="bi bi-info-circle me-1"></i> Nosotros
            </span>
            <h2 className="display-5 fw-bold mb-4">
              Somos apasionados por crear <span className="text-gradient-about">experiencias digitales</span>
            </h2>
            <p className="text-secondary fs-5 mb-4">
              Desde 2020, hemos ayudado a más de 5,000 empresas a transformar su presencia digital. Nuestro equipo combina creatividad y tecnología para construir productos que la gente ama.
            </p>
            <div className="row g-3 mb-4">
              {[
                { icon: 'bi-award-fill', text: '4 años de experiencia', color: '#fbbf24' },
                { icon: 'bi-people-fill', text: 'Equipo de 20+ expertos', color: '#34d399' },
                { icon: 'bi-trophy-fill', text: '3 premios de innovación', color: '#f87171' },
                { icon: 'bi-globe', text: 'Presencia en 12 países', color: '#38bdf8' },
              ].map((item, i) => (
                <div key={i} className="col-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className={`bi ${item.icon}`} style={{color: item.color}}></i>
                    <span className="text-secondary small">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn btn-primary rounded-pill px-4">
              <i className="bi bi-envelope me-2"></i>Trabaja con nosotros
            </a>
          </div>

          <div className="col-lg-6">
            <div className="about-visual p-4">
              <div className="row g-3 mb-3">
                <div className="col-6">
                  <div className="about-stat-card p-4 text-center h-100">
                    <div className="display-5 fw-bold text-primary mb-1">5K+</div>
                    <div className="text-secondary small">Clientes activos</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="about-stat-card p-4 text-center h-100">
                    <div className="display-5 fw-bold text-success mb-1">98%</div>
                    <div className="text-secondary small">Satisfacción</div>
                  </div>
                </div>
              </div>
              <div className="about-stat-card p-4 text-center">
                <div className="display-5 fw-bold mb-1" style={{color:'#a78bfa'}}>200%</div>
                <div className="text-secondary small">ROI promedio de clientes en el primer año</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-4">
          <h3 className="fw-bold">Conoce al equipo</h3>
        </div>
        <div className="row g-4 justify-content-center">
          {team.map((member, i) => (
            <div className="col-md-4" key={i}>
              <div className="team-card p-4 text-center">
                <div
                  className="team-avatar mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                  style={{ background: `${member.color}25`, width: 80, height: 80, fontSize: 36 }}
                >
                  {member.emoji}
                </div>
                <h6 className="fw-bold mb-1">{member.name}</h6>
                <p className="text-secondary small mb-3">{member.role}</p>
                <div className="d-flex justify-content-center gap-2">
                  {['bi-linkedin', 'bi-twitter-x', 'bi-github'].map((icon, j) => (
                    <a key={j} href="#" className="btn btn-sm btn-outline-secondary rounded-circle" style={{width:32,height:32,padding:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <i className={`bi ${icon}`} style={{fontSize:13}}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
