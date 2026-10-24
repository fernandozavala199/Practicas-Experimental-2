import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-section pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-5">
          {/* Brand */}
          <div className="col-lg-4">
            <a className="navbar-brand fw-bold fs-4 d-flex align-items-center gap-2 mb-3" href="#home">
              <i className="bi bi-rocket-takeoff text-primary fs-3"></i>
              <span className="brand-gradient-footer">LaunchPad</span>
            </a>
            <p className="text-secondary mb-4" style={{maxWidth:300}}>
              Transformamos ideas en productos digitales excepcionales. Creamos el futuro, hoy.
            </p>
            <div className="d-flex gap-2">
              {['bi-twitter-x', 'bi-linkedin', 'bi-instagram', 'bi-github', 'bi-youtube'].map((icon, i) => (
                <a key={i} href="#"
                  className="social-btn d-flex align-items-center justify-content-center rounded-circle text-secondary"
                  style={{ width: 38, height: 38 }}>
                  <i className={`bi ${icon}`} style={{ fontSize: 15 }}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Producto',
              links: ['Características', 'Precios', 'Changelog', 'Roadmap', 'Integraciones'],
            },
            {
              title: 'Empresa',
              links: ['Nosotros', 'Blog', 'Careers', 'Prensa', 'Partners'],
            },
            {
              title: 'Soporte',
              links: ['Documentación', 'Centro de ayuda', 'Comunidad', 'Estado', 'Contacto'],
            },
          ].map((col, i) => (
            <div className="col-6 col-lg-2" key={i}>
              <h6 className="fw-bold text-white mb-3">{col.title}</h6>
              <ul className="list-unstyled">
                {col.links.map((link, j) => (
                  <li key={j} className="mb-2">
                    <a href="#" className="footer-link text-secondary">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="footer-divider mb-3"></div>

        {/* Bottom */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2">
          <p className="text-secondary small mb-0">
            © {year} LaunchPad. Todos los derechos reservados.
          </p>
          <div className="d-flex gap-3">
            {['Privacidad', 'Términos', 'Cookies'].map((item, i) => (
              <a key={i} href="#" className="footer-link text-secondary small">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
