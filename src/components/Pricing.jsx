import { useState } from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    desc: 'Perfecto para empezar tu viaje digital',
    color: '#6c63ff',
    features: [
      '1 proyecto',
      '5 GB de almacenamiento',
      'Soporte por email',
      'Analíticas básicas',
      'SSL gratuito',
    ],
    missing: ['API acceso', 'Soporte 24/7', 'Reportes avanzados'],
    cta: 'Empezar gratis',
    popular: false,
  },
  {
    name: 'Pro',
    price: { monthly: 29, yearly: 19 },
    desc: 'La elección de los profesionales',
    color: '#a78bfa',
    features: [
      '10 proyectos',
      '50 GB de almacenamiento',
      'Soporte prioritario',
      'Analíticas avanzadas',
      'SSL gratuito',
      'API acceso',
      'Soporte 24/7',
    ],
    missing: ['Reportes avanzados'],
    cta: 'Elegir Pro',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: { monthly: 99, yearly: 69 },
    desc: 'Soluciones a medida para grandes equipos',
    color: '#38bdf8',
    features: [
      'Proyectos ilimitados',
      '500 GB de almacenamiento',
      'Soporte dedicado',
      'Analíticas completas',
      'SSL gratuito',
      'API acceso',
      'Soporte 24/7',
      'Reportes avanzados',
    ],
    missing: [],
    cta: 'Contactar ventas',
    popular: false,
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="pricing-section py-6">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">
            <i className="bi bi-tag me-1"></i> Precios
          </span>
          <h2 className="display-5 fw-bold mb-3">
            Planes <span className="text-gradient-price">simples y transparentes</span>
          </h2>
          <p className="text-secondary fs-5 mb-4">Sin sorpresas, sin letras pequeñas.</p>

          {/* Toggle */}
          <div className="d-flex align-items-center justify-content-center gap-3">
            <span className={`fw-semibold ${!yearly ? 'text-white' : 'text-secondary'}`}>Mensual</span>
            <div className="form-check form-switch m-0">
              <input
                className="form-check-input pricing-toggle"
                type="checkbox"
                checked={yearly}
                onChange={() => setYearly(!yearly)}
                style={{width: 52, height: 28, cursor:'pointer'}}
              />
            </div>
            <span className={`fw-semibold ${yearly ? 'text-white' : 'text-secondary'}`}>
              Anual <span className="badge bg-success ms-1">-35%</span>
            </span>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {plans.map((plan, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className={`pricing-card p-4 h-100 d-flex flex-column ${plan.popular ? 'pricing-popular' : ''}`}>
                {plan.popular && (
                  <div className="text-center mb-3">
                    <span className="badge rounded-pill px-3 py-2" style={{background: 'linear-gradient(135deg,#6c63ff,#a78bfa)'}}>
                      <i className="bi bi-star-fill me-1"></i> Más popular
                    </span>
                  </div>
                )}
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="rounded-circle p-1" style={{background:`${plan.color}25`, width:36, height:36, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <i className="bi bi-box" style={{color:plan.color}}></i>
                  </div>
                  <h5 className="fw-bold mb-0">{plan.name}</h5>
                </div>
                <p className="text-secondary small mb-3">{plan.desc}</p>

                <div className="mb-4">
                  <span className="display-4 fw-bold">
                    {plan.price[yearly ? 'yearly' : 'monthly'] === 0
                      ? 'Gratis'
                      : `\$${plan.price[yearly ? 'yearly' : 'monthly']}`}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-secondary ms-1">/mes</span>
                  )}
                </div>

                <ul className="list-unstyled flex-grow-1 mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-check-circle-fill text-success"></i>
                      <span className="small">{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f, j) => (
                    <li key={j} className="d-flex align-items-center gap-2 mb-2 text-secondary">
                      <i className="bi bi-x-circle"></i>
                      <span className="small">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn rounded-pill w-100 ${plan.popular ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
