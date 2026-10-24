import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#home">
          <i className="bi bi-rocket-takeoff me-2 text-primary"></i>
          <span className="brand-gradient">LaunchPad</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{ color: '#fff' }}
        >
          <i className="bi bi-list fs-3"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            {['Inicio', 'Características', 'Nosotros', 'Precios', 'Contacto'].map((item, i) => {
              const hrefs = ['#home', '#features', '#about', '#pricing', '#contact']
              return (
                <li className="nav-item" key={i}>
                  <a className="nav-link nav-link-custom" href={hrefs[i]}>{item}</a>
                </li>
              )
            })}
            <li className="nav-item">
              <a href="#contact" className="btn btn-primary rounded-pill px-4">Comenzar</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
