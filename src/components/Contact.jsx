import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact-section py-6">
      <div className="container">
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-25 rounded-pill px-3 py-2 mb-3">
            <i className="bi bi-chat-dots me-1"></i> Contacto
          </span>
          <h2 className="display-5 fw-bold mb-3">
            ¿Listo para <span className="text-gradient-contact">comenzar?</span>
          </h2>
          <p className="text-secondary fs-5">Cuéntanos tu proyecto, respondemos en menos de 24 horas.</p>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Info */}
          <div className="col-lg-4">
            <div className="contact-info p-4 h-100">
              <h5 className="fw-bold mb-4">Información de contacto</h5>
              {[
                { icon: 'bi-envelope-fill', label: 'Email', val: 'hola@launchpad.dev', color: '#6c63ff' },
                { icon: 'bi-telephone-fill', label: 'Teléfono', val: '+52 55 1234 5678', color: '#34d399' },
                { icon: 'bi-geo-alt-fill', label: 'Oficina', val: 'Ciudad de México, CDMX', color: '#f87171' },
                { icon: 'bi-clock-fill', label: 'Horario', val: 'Lun - Vie: 9am - 7pm', color: '#fbbf24' },
              ].map((item, i) => (
                <div key={i} className="d-flex align-items-start gap-3 mb-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ background: `${item.color}20`, width: 44, height: 44 }}
                  >
                    <i className={`bi ${item.icon}`} style={{ color: item.color }}></i>
                  </div>
                  <div>
                    <div className="text-secondary small mb-1">{item.label}</div>
                    <div className="fw-semibold">{item.val}</div>
                  </div>
                </div>
              ))}

              <div className="d-flex gap-2 mt-4">
                {['bi-twitter-x', 'bi-linkedin', 'bi-instagram', 'bi-github'].map((icon, i) => (
                  <a key={i} href="#" className="btn btn-outline-secondary btn-sm rounded-circle"
                    style={{ width: 38, height: 38, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`bi ${icon}`} style={{ fontSize: 14 }}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-7">
            <div className="contact-form-card p-4 p-md-5">
              {sent && (
                <div className="alert alert-success d-flex align-items-center gap-2 mb-4" role="alert">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>¡Mensaje enviado! Te contactaremos pronto.</span>
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Nombre *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} required
                      className="form-control contact-input"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary small">Email *</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} required
                      className="form-control contact-input"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-secondary small">Asunto</label>
                  <input
                    type="text" name="subject" value={form.subject}
                    onChange={handleChange}
                    className="form-control contact-input"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-secondary small">Mensaje *</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} required
                    rows={5} className="form-control contact-input"
                    placeholder="Cuéntanos más sobre tu proyecto..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg rounded-pill w-100 shadow-glow-btn">
                  <i className="bi bi-send me-2"></i>Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
