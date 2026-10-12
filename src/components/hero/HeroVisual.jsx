/* Decorative backdrop for the hero: concentric rings and a few hair strands
   rising from the bottom edge, drawn in pale lines on the red ground. Pure
   SVG — no image request, and no claim about any particular patient. */
const STRANDS = [
  'M110 330 C104 270 128 232 120 170 C115 130 130 96 126 58',
  'M150 330 C150 262 176 226 170 160 C166 120 182 86 180 46',
  'M190 330 C196 268 168 236 178 178 C184 140 168 106 176 70',
  'M230 330 C238 276 262 240 252 182 C246 146 262 112 258 78',
  'M270 330 C268 280 292 250 286 196 C282 160 296 130 294 100',
]

export default function HeroVisual() {
  return (
    <svg className="hv" viewBox="0 0 400 420" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMax slice">
      <circle cx="200" cy="330" r="190" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
      <circle cx="200" cy="330" r="140" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
      <circle cx="200" cy="330" r="90" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      {STRANDS.map((d, i) => (
        <path
          key={d}
          className="hv__strand"
          style={{ '--i': i }}
          d={d}
          stroke="rgba(255,255,255,0.16)"
          strokeWidth={i === 2 ? 4 : 3}
          strokeLinecap="round"
          pathLength="1"
        />
      ))}
    </svg>
  )
}
