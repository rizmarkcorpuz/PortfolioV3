import useReveal from '../hooks/useReveal'
import AnimatedText from './AnimatedText'

const services = [
  {
    title: 'AI Agent Development',
    desc: 'Build multi-step AI agents that reason through complex tasks, make decisions, and execute autonomously — with full auditability and control.',
    tags: ['Claude', 'GPT-4', 'LangChain', 'RAG'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Workflow Automation',
    desc: 'Map, design, and automate your most time-consuming processes using the right mix of no-code platforms and custom Python scripts.',
    tags: ['Make', 'n8n', 'Zapier', 'Python'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'API & Systems Integration',
    desc: 'Connect your entire tool stack — CRMs, databases, cloud services, and internal systems — so data flows where it needs to, automatically.',
    tags: ['REST APIs', 'Webhooks', 'OAuth', 'SQL'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Data Pipelines',
    desc: 'Design automated data collection, transformation, and reporting systems that give your team real-time insights without manual effort.',
    tags: ['ETL', 'Airtable', 'Google Sheets', 'BigQuery'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'AI Content Systems',
    desc: 'Build content generation pipelines powered by LLMs — from research to drafting to publishing — maintaining your brand voice at scale.',
    tags: ['Prompt Eng.', 'Fine-tuning', 'Claude'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Automation Strategy',
    desc: "Not sure where to start? I'll audit your current processes, identify the highest-ROI automation opportunities, and give you a clear roadmap.",
    tags: ['Process Audit', 'ROI Analysis', 'Roadmap'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
]

function ServiceCard({ service }) {
  const ref = useReveal()
  return (
    <div className="service-card reveal" ref={ref}>
      <div className="service-icon">{service.icon}</div>
      <div className="service-title">{service.title}</div>
      <p className="service-desc">{service.desc}</p>
      <div className="service-tags">
        {service.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Services() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const divRef = useReveal()

  return (
    <div className="services-section" id="services">
      <div className="services-inner">
        <div className="section-label reveal" data-num="03" ref={labelRef}>What I Do</div>
        <h2 className="section-title reveal" ref={titleRef}>
          <AnimatedText>Services built for</AnimatedText>
          <br /><AnimatedText>teams who </AnimatedText><AnimatedText className="accent">move fast.</AnimatedText>
        </h2>
        <div className="section-divider reveal" ref={divRef} />
        <div className="services-grid">
          {services.map(s => <ServiceCard key={s.title} service={s} />)}
        </div>
      </div>
    </div>
  )
}
