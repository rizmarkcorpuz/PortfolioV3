import useReveal from '../hooks/useReveal'
import AnimatedText from './AnimatedText'

const steps = [
  { num: '01 — Discover', title: 'Understand Your Workflow', desc: 'Deep-dive into your current processes, pain points, and goals. Map every step, tool, and handoff.' },
  { num: '02 — Design', title: 'Architect the Solution', desc: 'Choose the right tools and architecture. Define inputs, outputs, edge cases, and failure modes before writing a single line of code.' },
  { num: '03 — Build', title: 'Build & Test', desc: 'Develop the automation iteratively. Each component is tested independently and as a system before deployment.' },
  { num: '04 — Optimize', title: 'Monitor & Improve', desc: 'Track performance, catch edge cases in the wild, and continuously refine the system based on real-world data.' },
]

function Step({ step }) {
  const ref = useReveal()
  return (
    <div className="process-step reveal" ref={ref}>
      <span className="step-num">{step.num}</span>
      <div className="step-title">{step.title}</div>
      <p className="step-desc">{step.desc}</p>
    </div>
  )
}

export default function Process() {
  const labelRef = useReveal()
  const titleRef = useReveal()
  const divRef = useReveal()

  return (
    <div className="process-section">
      <div className="process-inner">
        <div className="section-label reveal" data-num="04" ref={labelRef}>How It Works</div>
        <h2 className="section-title reveal" ref={titleRef}>
          <AnimatedText>From messy process</AnimatedText>
          <br /><AnimatedText>to </AnimatedText><AnimatedText className="accent">clean automation.</AnimatedText>
        </h2>
        <div className="section-divider reveal" ref={divRef} />
        <div className="process-steps">
          {steps.map(s => <Step key={s.num} step={s} />)}
        </div>
      </div>
    </div>
  )
}
