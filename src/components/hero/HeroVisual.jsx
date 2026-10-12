import Icon from '../Icon'

/* An illustrated panel in place of patient photographs: a red arch carrying a
   line drawing of hair strands rising from a follicle, with three floating
   treatment tags. Pure SVG + CSS — no image request, and no claim about any
   particular patient. */
const STRANDS = [
  'M110 330 C104 270 128 232 120 170 C115 130 130 96 126 58',
  'M150 330 C150 262 176 226 170 160 C166 120 182 86 180 46',
  'M190 330 C196 268 168 236 178 178 C184 140 168 106 176 70',
  'M230 330 C238 276 262 240 252 182 C246 146 262 112 258 78',
  'M270 330 C268 280 292 250 286 196 C282 160 296 130 294 100',
]

export default function HeroVisual() {
  return (
    <div className="hv" role="img" aria-label="Illustration of healthy hair strands growing from the scalp">
      <div className="hv__arch">
        <svg className="hv__art" viewBox="0 0 400 420" fill="none" aria-hidden="true">
          <circle cx="200" cy="330" r="150" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
          <circle cx="200" cy="330" r="108" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
          <circle cx="200" cy="330" r="64" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          {STRANDS.map((d, i) => (
            <path
              key={d}
              className="hv__strand"
              style={{ '--i': i }}
              d={d}
              stroke="#fff"
              strokeWidth={i === 2 ? 5 : 3.5}
              strokeLinecap="round"
              pathLength="1"
            />
          ))}
          <ellipse cx="200" cy="334" rx="120" ry="14" fill="rgba(255,255,255,0.92)" />
          <circle cx="200" cy="334" r="6" fill="#d71920" />
        </svg>
      </div>

      <span className="hv__tag hv__tag--a">
        <Icon name="Microscope" size={15} />
        Scalp Analysis
      </span>
      <span className="hv__tag hv__tag--b">
        <Icon name="TestTubes" size={15} />
        GFC Therapy
      </span>
      <span className="hv__tag hv__tag--c">
        <Icon name="Sprout" size={15} />
        Hair Transplant
      </span>

      <p className="hv__place">
        <Icon name="MapPin" size={15} />
        Nellai Bypass Road, Kovilpatti
      </p>
    </div>
  )
}
