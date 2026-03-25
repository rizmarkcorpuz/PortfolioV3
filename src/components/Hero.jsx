import AnimatedText from './AnimatedText'

export default function Hero() {
  return (
    <div style={{ maxWidth: 'var(--max)', margin: '0 auto', position: 'relative' }}>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-eyebrow">Hi, my name is</div>
          <h1 className="hero-name">
            <AnimatedText>Riz Mark</AnimatedText>
            <br />
            <AnimatedText className="accent">Corpuz.</AnimatedText>
          </h1>
          <h2 className="hero-title">
            <AnimatedText>I'm an AI Automation</AnimatedText>
            <br />
            <AnimatedText>Specialist.</AnimatedText>
          </h2>
          <p className="hero-desc">
            I'm focused on creating{' '}
            <strong>no-code and low-code automation workflows</strong>{' '}
            that enhance efficiency and productivity. My primary focus is developing
            streamlined processes and integrations to optimize business operations,
            including workflows.
          </p>
          <div className="hero-actions">
            <a
              href="https://calendly.com/rizmark-corpuz/30min"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Call
            </a>
            <a href="#work" className="btn-outline">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              View My Work
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-ring">
            <img src="/PortfolioV3/assets/picture.JPG" alt="Riz Mark Corpuz" />
          </div>
          <div className="hero-photo-badge">⚡</div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </div>
  )
}
