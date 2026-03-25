import useReveal from '../hooks/useReveal'
import AnimatedText from './AnimatedText'
import { testimonials } from '../data/data'

function TestimonialCard({ t }) {
  const ref = useReveal()
  return (
    <div className="testimonial-card reveal" ref={ref}>
      <div className="testimonial-quote">"</div>
      <p className="testimonial-text">{t.quote}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{t.initials}</div>
        <div>
          <div className="author-name">{t.name}</div>
          <div className="author-role">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const divRef = useReveal()

  return (
    <div className="services-section">
      <div className="services-inner">
        <div className="section-label reveal" data-num="06" ref={labelRef}>Testimonials</div>
        <h2 className="section-title reveal" ref={titleRef}>
          <AnimatedText>What clients</AnimatedText>
          <br /><AnimatedText className="accent">say.</AnimatedText>
        </h2>
        <div className="section-divider reveal" ref={divRef} />
        <div className="testimonials-grid">
          {testimonials.map(t => <TestimonialCard key={t.name} t={t} />)}
        </div>
      </div>
    </div>
  )
}
