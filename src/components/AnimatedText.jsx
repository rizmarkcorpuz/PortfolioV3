/**
 * Wraps each character in a <span> so they can be individually animated on hover.
 * Words are wrapped in a flex container so they don't break mid-word.
 *
 * Usage:
 *   <AnimatedText tag="h1" className="hero-name">Riz Mark Corpuz.</AnimatedText>
 */
export default function AnimatedText({ tag: Tag = 'span', className = '', children, style }) {
  const text = String(children)
  const words = text.split(' ')

  return (
    <Tag className={`animated-text ${className}`} style={style}>
      {words.map((word, wi) => (
        <span key={wi} className="animated-word">
          {word.split('').map((char, ci) => (
            <span
              key={ci}
              className="animated-char"
              style={{ '--i': wi * 6 + ci }}
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 && <span className="animated-space">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  )
}
