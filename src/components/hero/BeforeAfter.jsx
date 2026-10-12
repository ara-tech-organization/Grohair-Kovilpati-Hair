import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

/* The hero's picture: an arched frame carrying a line drawing of hair strands
   rising from the scalp, over a plinth slab and a ring. It is an illustration
   rather than patient photography, so it makes no claim about any real case.
   The caption cycles through the treatments the clinic offers. */
const TREATMENTS = ['Hair Fall Treatment', 'GFC Therapy', 'Hair Transplant', 'Mesotherapy']

const STRANDS = [
  'M110 330 C104 270 128 232 120 170 C115 130 130 96 126 58',
  'M150 330 C150 262 176 226 170 160 C166 120 182 86 180 46',
  'M190 330 C196 268 168 236 178 178 C184 140 168 106 176 70',
  'M230 330 C238 276 262 240 252 182 C246 146 262 112 258 78',
  'M270 330 C268 280 292 250 286 196 C282 160 296 130 294 100',
]

const DWELL = 3200

export default function BeforeAfter() {
  const reduced = usePrefersReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduced) return
    const t = window.setInterval(() => setI((n) => (n + 1) % TREATMENTS.length), DWELL)
    return () => window.clearInterval(t)
  }, [reduced])

  return (
    <div className="ba" role="img" aria-label="Illustration of healthy hair strands growing from the scalp">
      <span className="ba__ghost ba__ghost--2" aria-hidden="true" />
      <span className="ba__ghost ba__ghost--1" aria-hidden="true" />

      <div className="ba__frame ba__frame--art">
        <svg className="ba__art" viewBox="0 0 400 500" fill="none" aria-hidden="true">
          <circle cx="200" cy="360" r="170" stroke="rgba(184,22,30,0.16)" strokeWidth="1.5" />
          <circle cx="200" cy="360" r="122" stroke="rgba(184,22,30,0.24)" strokeWidth="1.5" />
          <circle cx="200" cy="360" r="74" stroke="rgba(184,22,30,0.34)" strokeWidth="1.5" />
          <g transform="translate(0 30)">
            {STRANDS.map((d, k) => (
              <path
                key={d}
                className="ba__strand"
                style={{ '--i': k }}
                d={d}
                stroke="#b8161e"
                strokeWidth={k === 2 ? 5 : 3.5}
                strokeLinecap="round"
                pathLength="1"
              />
            ))}
          </g>
          <ellipse cx="200" cy="364" rx="124" ry="14" fill="#8f141b" />
          <circle cx="200" cy="364" r="6" fill="#fff" />
        </svg>

        <span className="ba__stamp" aria-hidden="true">
          Healthy hair <i>/</i> Kovilpatti
        </span>

        <span className="ba__vignette" aria-hidden="true" />

        <p className="ba__caption">
          <span className="ba__dot" aria-hidden="true" />
          {TREATMENTS[i]}
        </p>
      </div>
    </div>
  )
}
