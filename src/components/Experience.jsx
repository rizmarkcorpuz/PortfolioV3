import useReveal from '../hooks/useReveal'
import { experiences } from '../data/data'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience">
      <div className="section-label" data-num="02">Experience</div>
      <h2 className="section-title">
        Where I've worked<br />and what I've <span className="accent">built</span>.
      </h2>
      <div className="section-divider" />

      <div className="exp-timeline reveal" ref={ref}>
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item">
            <div className={`exp-dot${exp.current ? ' current' : ''}`} />
            <div>
              <div className="exp-header">
                <div className="exp-role">{exp.role}</div>
                <span className={`exp-badge ${exp.current ? 'current' : 'past'}`}>
                  {exp.period}
                </span>
              </div>
              <div className="exp-company">{exp.company}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
