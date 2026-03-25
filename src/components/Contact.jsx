import useReveal from '../hooks/useReveal'
import AnimatedText from './AnimatedText'

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

export default function Contact() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const divRef = useReveal()
  const textRef = useReveal()
  const infoRef = useReveal()
  const formRef = useReveal()

  return (
    <div className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-grid">
          <div className="contact-text">
            <div className="section-label reveal" data-num="07" ref={labelRef}>Contact</div>
            <h2 className="section-title reveal" ref={titleRef}>
              <AnimatedText>Have a workflow</AnimatedText>
              <br /><AnimatedText>that needs </AnimatedText><AnimatedText className="accent">fixing?</AnimatedText>
            </h2>
            <div className="section-divider reveal" ref={divRef} />
            <p className="reveal" ref={textRef}>
              Fill out the form or send me an email — I'm always happy to talk about automation,
              integrations, or anything you'd like to streamline.
            </p>
            <div className="contact-info reveal" ref={infoRef}>
              <div className="contact-item">
                <EmailIcon />
                <a href="mailto:rizmark.corpuz@gmail.com">rizmark.corpuz@gmail.com</a>
              </div>
              <div className="contact-item">
                <LinkedInIcon />
                <a href="https://linkedin.com/in/rizmarkcorpuz" target="_blank" rel="noreferrer">
                  linkedin.com/in/rizmarkcorpuz
                </a>
              </div>
              <div className="contact-item">
                <GithubIcon />
                <a href="https://github.com/rizmarkcorpuz" target="_blank" rel="noreferrer">
                  github.com/rizmarkcorpuz
                </a>
              </div>
            </div>
          </div>

          <form
            className="contact-form reveal"
            method="POST"
            action="https://getform.io/f/a5553385-c8e9-45b4-8789-e89318a2b6fc"
            ref={formRef}
          >
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input className="form-input" type="text" name="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                className="form-textarea"
                name="message"
                placeholder="Tell me about your workflow and what you'd like to automate..."
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              <SendIcon />
              Let's Collaborate
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
