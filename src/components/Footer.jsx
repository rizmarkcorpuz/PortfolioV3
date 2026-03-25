export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            <img src="/PortfolioV3/assets/logo.png" alt="Riz Mark Corpuz" />
          </a>
          <p className="footer-copy">
            &copy; 2026 Riz Mark Corpuz — Built with intention.
          </p>
        </div>
        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
