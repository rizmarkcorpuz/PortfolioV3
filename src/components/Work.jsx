import useReveal from '../hooks/useReveal'
import { projects } from '../data/data'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

function ProjectRow({ project, reverse }) {
  const ref = useReveal()
  return (
    <div className={`project-row${reverse ? ' reverse' : ''} reveal`} ref={ref}>
      <div className="project-meta">
        <div className="project-num">{project.num} / {project.type}</div>
        <h3 className="project-title">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map(t => <span key={t}>{t}</span>)}
        </div>
        {(project.github || project.live) && (
          <div className="project-links">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                <ExternalIcon />
                {project.type === 'Automation' ? 'View' : 'Live Site'}
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                <GithubIcon /> GitHub
              </a>
            )}
          </div>
        )}
      </div>
      <div className="project-visual">
        <div className="glow" />
        <img
          src={project.image}
          alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
        />
      </div>
    </div>
  )
}

export default function Work() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const divRef = useReveal()

  return (
    <section id="work">
      <div className="section-label reveal" data-num="05" ref={labelRef}>Selected Work</div>
      <h2 className="section-title reveal" ref={titleRef}>
        Automation that<br /><span className="accent">ships results</span>.
      </h2>
      <div className="section-divider reveal" ref={divRef} />
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} project={p} reverse={i % 2 !== 0} />
        ))}
      </div>
    </section>
  )
}
