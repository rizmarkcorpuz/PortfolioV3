import useReveal from '../hooks/useReveal'
import AnimatedText from './AnimatedText'

const base = '/PortfolioV3/assets/skills/'

const automationTools = [
  { name: 'N8N',              icon: `${base}n8n.svg` },
  { name: 'Make',             icon: `${base}make.svg` },
  { name: 'Zapier',           icon: `${base}zapier.svg` },
  { name: 'HubSpot',          icon: `${base}hubspot.svg` },
  { name: 'Airtable',         icon: `${base}airtable.svg` },
  { name: 'GoHighLevel',      icon: `${base}gohighlevel.svg` },
  { name: 'Apps Script',      icon: `${base}googleappsscript.svg` },
  { name: 'Monday',           icon: `${base}monday.svg` },
  { name: 'Prismatic',        icon: `${base}prismatic.svg` },
]

const aiTools = [
  { name: 'Claude',   icon: `${base}claude.svg` },
  { name: 'OpenAI',   icon: `${base}chatgpt.svg` },
  { name: 'Gemini',   icon: `${base}gemini.svg` },
]

const techStack = [
  { name: 'Python',      color: '#3776AB' },
  { name: 'JavaScript',  color: '#F7DF1E' },
  { name: 'React',       color: '#61DAFB' },
  { name: 'Node.js',     color: '#339933' },
  { name: 'HTML',        color: '#E34F26' },
  { name: 'CSS',         color: '#1572B6' },
  { name: 'Tailwind',    color: '#06B6D4' },
  { name: 'GitHub',      color: '#ffffff' },
]

function SkillCard({ icon, name }) {
  return (
    <div className="skill-card">
      <div className="skill-card__icon">
        <img src={icon} alt={name} />
      </div>
      <p className="skill-card__name">{name}</p>
    </div>
  )
}

function TechCard({ name, color }) {
  return (
    <div className="skill-card">
      <div className="skill-card__dot" style={{ background: color, boxShadow: `0 0 10px ${color}88` }} />
      <p className="skill-card__name">{name}</p>
    </div>
  )
}

export default function Skills() {
  const titleRef  = useReveal()
  const autoRef   = useReveal()
  const aiRef     = useReveal()
  const techRef   = useReveal()

  return (
    <section id="skills">
      <div className="section-label" data-num="04">Skills</div>
      <h2 className="section-title" ref={titleRef}>
        <AnimatedText>Tools I use to</AnimatedText>
        <br /><AnimatedText className="accent">get things done.</AnimatedText>
      </h2>
      <div className="section-divider" />

      {/* Automation & No-Code */}
      <div className="skills-group reveal" ref={autoRef}>
        <p className="skills-group__label">Automation &amp; No-Code Tools</p>
        <div className="skill-grid">
          {automationTools.map(t => <SkillCard key={t.name} {...t} />)}
        </div>
      </div>

      {/* AI Tools */}
      <div className="skills-group reveal" ref={aiRef}>
        <p className="skills-group__label">AI Tools</p>
        <div className="skill-grid skill-grid--sm">
          {aiTools.map(t => <SkillCard key={t.name} {...t} />)}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="skills-group reveal" ref={techRef}>
        <p className="skills-group__label">Tech Stack</p>
        <div className="skill-grid">
          {techStack.map(t => <TechCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  )
}
