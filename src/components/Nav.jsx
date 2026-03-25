import { useEffect, useState } from 'react'

const links = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills',     label: 'Skills' },
  { id: 'work',       label: 'Work' },
  { id: 'contact',    label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [active,   setActive]     = useState('')
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      let current = ''
      links.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav-pill ${scrolled ? 'nav-pill--scrolled' : ''}`}>
      <div className="nav-pill__inner">

        {/* Logo */}
        <a href="#home" className="nav-pill__logo" onClick={() => setMenuOpen(false)}>
          <img src="/PortfolioV3/assets/logo.png" alt="logo" />
          <span>Riz<span className="nav-pill__dot">.</span></span>
        </a>

        {/* Desktop links */}
        <ul className="nav-pill__links">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-pill__link ${active === id ? 'nav-pill__link--active' : ''}`}
              >
                {label}
                {active === id && <span className="nav-pill__indicator" />}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://calendly.com/rizmark-corpuz/30min"
          target="_blank"
          rel="noreferrer"
          className="nav-pill__cta"
        >
          Book a Call
        </a>

        {/* Mobile hamburger */}
        <button
          className={`nav-pill__burger ${menuOpen ? 'nav-pill__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`nav-pill__mobile ${menuOpen ? 'nav-pill__mobile--open' : ''}`}>
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-pill__mobile-link ${active === id ? 'nav-pill__mobile-link--active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="https://calendly.com/rizmark-corpuz/30min"
          target="_blank"
          rel="noreferrer"
          className="nav-pill__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Book a Call
        </a>
      </div>
    </nav>
  )
}
