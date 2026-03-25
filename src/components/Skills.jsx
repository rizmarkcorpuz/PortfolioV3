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
  { name: 'HTML',        icon: `${base}html.png` },
  { name: 'CSS',         icon: `${base}css.png` },
  { name: 'JavaScript',  icon: `${base}javascript.png` },
  { name: 'Python',      icon: `${base}python.svg` },
  { name: 'React',       icon: `${base}react.png` },
  { name: 'GitHub',      icon: `${base}github.png` },
  { name: 'Node.js',     icon: `${base}node.png` },
  { name: 'Tailwind',    icon: `${base}tailwind.png` },
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
        <div className="skill-grid skill-grid--ai">
          {aiTools.map(t => <SkillCard key={t.name} {...t} />)}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="skills-group reveal" ref={techRef}>
        <p className="skills-group__label">Tech Stack</p>
        <div className="skill-grid skill-grid--tech">
          {techStack.map(t => <SkillCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  )
}
