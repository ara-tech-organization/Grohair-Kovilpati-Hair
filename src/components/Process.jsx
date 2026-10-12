import { scrollToBooking } from '../callStore'
import { useReveal } from '../hooks'
import Icon from './Icon'

const STEPS = [
  {
    icon: 'Microscope',
    title: 'Scalp & hair analysis',
    copy: 'A close look at your scalp, hair density and history to find what is actually causing the loss.',
  },
  {
    icon: 'ClipboardList',
    title: 'A plan built for you',
    copy: 'The treatment, the number of sessions and the home care — set out clearly before you commit.',
  },
  {
    icon: 'TestTubes',
    title: 'Treatment sessions',
    copy: 'GFC, mesotherapy, scalp care or transplant, carried out by trained specialists at our clinic.',
  },
  {
    icon: 'Sprout',
    title: 'Review & regrowth',
    copy: 'Regular follow-ups to track progress and adjust the plan as your hair responds.',
  },
]

/* Dot grids standing in for follicle density. Deterministic, so the picture is
   the same on every render. */
const dots = (keep) => Array.from({ length: 48 }, (_, i) => ({ i, on: (i * 7) % 10 < keep }))

function Density({ label, keep, tone }) {
  return (
    <figure className={`proc__density proc__density--${tone}`}>
      <div className="proc__dots" aria-hidden="true">
        {dots(keep).map((d) => (
          <span key={d.i} className={d.on ? 'is-on' : undefined} />
        ))}
      </div>
      <figcaption>{label}</figcaption>
    </figure>
  )
}

export default function Process() {
  const ref = useReveal()

  return (
    <section className="section proc" id="process" ref={ref}>
      <div className="shell">
        <div className="proc__head reveal">
          <span className="eyebrow">
            <Icon name="Sparkles" size={13} />
            How We Work
          </span>
          <h2>
            From first scan to <span className="gold-text">visible regrowth</span>
          </h2>
          <p>Four clear steps, explained at every stage — no generic packages.</p>
        </div>

        <ol className="proc__steps">
          {STEPS.map((step, i) => (
            <li key={step.title} className="proc__step reveal" style={{ '--delay': `${i * 90}ms` }}>
              <span className="proc__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="proc__ic">
                <Icon name={step.icon} size={22} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>

        <div className="proc__aside reveal">
          <div className="proc__compare" role="img" aria-label="Illustration of hair density before and after treatment">
            <Density label="Thinning" keep={4} tone="before" />
            <span className="proc__arrow" aria-hidden="true">
              <Icon name="ArrowRight" size={22} />
            </span>
            <Density label="Fuller density" keep={9} tone="after" />
          </div>

          <div className="proc__cta">
            <h3>Start with a scalp consultation</h3>
            <p>Illustration only — your own plan and timeline are set after your examination.</p>
            <button type="button" className="btn btn--gold" onClick={scrollToBooking}>
              Book a Consultation
              <Icon name="ArrowRight" size={17} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
