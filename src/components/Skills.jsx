import AnimatedText from './AnimatedText'
import useReveal from '../hooks/useReveal'

const base = '/PortfolioV3/assets/skills/'

const automationTools = [
  { name: 'N8N',         icon: `${base}n8n.svg` },
  { name: 'Make',        icon: `${base}make.svg` },
  { name: 'Zapier',      icon: `${base}zapier.svg` },
  { name: 'HubSpot',     icon: `${base}hubspot.svg` },
  { name: 'Airtable',    icon: `${base}airtable.svg` },
  { name: 'GoHighLevel', icon: `${base}gohighlevel.svg` },
  { name: 'Apps Script', icon: `${base}googleappsscript.svg` },
  { name: 'Monday',      icon: `${base}monday.svg` },
  { name: 'Prismatic',   icon: `${base}prismatic.svg` },
]

const aiTools = [
  { name: 'Claude',  icon: `${base}claude.svg` },
  { name: 'OpenAI',  icon: `${base}chatgpt.svg` },
  { name: 'Gemini',  icon: `${base}gemini.svg` },
]

const techStack = [
  { name: 'HTML',       icon: `${base}html.png` },
  { name: 'CSS',        icon: `${base}css.png` },
  { name: 'JavaScript', icon: `${base}javascript.png` },
  { name: 'Python',     icon: `${base}python.svg` },
  { name: 'React',      icon: `${base}react.png` },
  { name: 'GitHub',     icon: `${base}github.png` },
  { name: 'Node.js',    icon: `${base}node.png` },
  { name: 'Tailwind',   icon: `${base}tailwind.png` },
]

/* Duplicate items so the marquee can loop seamlessly */
function Marquee({ items, reverse = false, speed = 30 }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div className="marquee-viewport">
      <div
        className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}
        style={{ '--speed': `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div className="marquee-card" key={i}>
            <div className="marquee-card__icon">
              <img src={item.icon} alt={item.name} />
            </div>
            <span className="marquee-card__name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillRow({ label, items, reverse, speed }) {
  const ref = useReveal()
  return (
    <div className="skills-group reveal" ref={ref}>
      <p className="skills-group__label">{label}</p>
      <Marquee items={items} reverse={reverse} speed={speed} />
    </div>
  )
}

export default function Skills() {
  const titleRef = useReveal()

  return (
    <section id="skills" className="skills-section">
      <div className="section-label" data-num="04">Skills</div>
      <h2 className="section-title" ref={titleRef}>
        <AnimatedText>Tools I use to</AnimatedText>
        <br /><AnimatedText className="accent">get things done.</AnimatedText>
      </h2>
      <div className="section-divider" />

      <SkillRow label="Automation &amp; No-Code Tools" items={automationTools} speed={28} />
      <SkillRow label="AI Tools"   items={aiTools}        reverse speed={18} />
      <SkillRow label="Tech Stack" items={techStack}      speed={25} />
    </section>
  )
}
