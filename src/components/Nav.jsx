import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'experience', 'work', 'contact']
      let current = ''
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkStyle = (id) => ({
    color: active === id ? 'var(--gold)' : '',
  })

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#home" className="nav-logo">
        <img src="/PortfolioV3/assets/logo.png" alt="Riz Mark Corpuz logo" />
        <span className="nav-logo-name">Riz<span>.</span></span>
      </a>
      <ul className="nav-links">
        <li><a href="#about" style={linkStyle('about')}>About</a></li>
        <li><a href="#experience" style={linkStyle('experience')}>Experience</a></li>
        <li><a href="#work" style={linkStyle('work')}>Work</a></li>
        <li><a href="#contact" style={linkStyle('contact')}>Contact</a></li>
      </ul>
      <a href="https://calendly.com/rizmark-corpuz/30min" target="_blank" rel="noreferrer" className="nav-cta">
        Book a Call
      </a>
    </nav>
  )
}
