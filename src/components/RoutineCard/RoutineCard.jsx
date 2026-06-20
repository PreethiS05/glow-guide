import { SKIN_TYPES, SKIN_CONCERNS } from '../../data/skincareData'
import { IconStar, IconDroplet, IconZap, IconShield } from '../Icons/Icons'
import './RoutineCard.css'

const CATEGORY_STYLES = {
  Cleanse:     { from: '#bae6fd', to: '#38bdf8', color: '#0c4a6e', icon: <IconDroplet size={13} /> },
  Tone:        { from: '#fecdd3', to: '#fb7185', color: '#9f1239', icon: <IconZap size={13} />     },
  Treat:       { from: '#fde68a', to: '#fbbf24', color: '#92400e', icon: <IconZap size={13} />     },
  Moisturize:  { from: '#a7f3d0', to: '#34d399', color: '#065f46', icon: <IconDroplet size={13} /> },
  'Eye Care':  { from: '#e9d5ff', to: '#a78bfa', color: '#4c1d95', icon: <IconStar size={13} />   },
  Protect:     { from: '#fed7aa', to: '#fb923c', color: '#7c2d12', icon: <IconShield size={13} />  },
  Overnight:   { from: '#c7d2fe', to: '#818cf8', color: '#1e1b4b', icon: <IconStar size={13} />   },
}

function StepItem({ step, product }) {
  const cat = CATEGORY_STYLES[product.category] || CATEGORY_STYLES.Treat
  return (
    <li
      className="step-item"
      style={{ animationDelay: `${step * 0.07}s` }}
    >
      {/* Step number */}
      <div className="step-num" aria-label={`Step ${step}`}>{step}</div>

      {/* Product info */}
      <div className="step-body">
        <div className="step-row">
          <span className="step-emoji" aria-hidden="true">{product.icon}</span>
          <div className="step-info">
            <span className="step-name">{product.name}</span>
            <span
              className="step-cat"
              style={{
                background: `linear-gradient(135deg, ${cat.from}, ${cat.to})`,
                color: cat.color,
              }}
            >
              {cat.icon}
              {product.category}
            </span>
          </div>
        </div>
        {product.tip && (
          <p className="step-tip">
            <span className="tip-icon" aria-hidden="true">💡</span>
            {product.tip}
          </p>
        )}
      </div>
    </li>
  )
}

function RoutineColumn({ title, emoji, timeId, steps }) {
  const isMorning = timeId === 'morning'
  return (
    <div className={`rc-column rc-column--${timeId}`}>
      {/* Column header */}
      <div className="rc-col-header">
        <div className={`rc-col-orb rc-col-orb--${timeId}`}>
          <span aria-hidden="true">{emoji}</span>
        </div>
        <div className="rc-col-title-group">
          <h3 className="rc-col-title">{title}</h3>
          <span className="rc-col-count">{steps.length} steps</span>
        </div>
      </div>

      {/* Steps */}
      <ol className="steps-list" aria-label={`${title} steps`}>
        {steps.map(({ step, product }) => (
          <StepItem
            key={`${timeId}-${step}`}
            step={step}
            product={product}
          />
        ))}
      </ol>
    </div>
  )
}

function RoutineCard({ routine, skinType, concerns, routineTime, headline }) {
  const skinInfo    = SKIN_TYPES.find(s => s.id === skinType)
  const selConcerns = SKIN_CONCERNS.filter(c => concerns.includes(c.id))
  const showBoth    = routineTime === 'both'

  return (
    <article className="routine-card" aria-label="Your personalized skincare routine">

      {/* ── Card Header ───────────────────────── */}
      <div className="rc-header">
        <div className="rc-header-orb" aria-hidden="true">
          <span>🌟</span>
          <div className="rc-header-orb-ring" />
        </div>
        <div className="rc-header-text">
          <div className="rc-header-eyebrow">Your Personalized Routine</div>
          <h2 className="rc-header-title">{headline}</h2>
        </div>
      </div>

      {/* ── Skin profile tags ─────────────────── */}
      <div className="rc-tags" aria-label="Skin profile">
        {skinInfo && (
          <span className="rc-tag rc-tag--skin">
            {skinInfo.emoji} {skinInfo.label} Skin
          </span>
        )}
        {selConcerns.map(c => (
          <span key={c.id} className="rc-tag rc-tag--concern">
            {c.emoji} {c.label}
          </span>
        ))}
      </div>

      {/* ── Divider ───────────────────────────── */}
      <div className="rc-divider" aria-hidden="true" />

      {/* ── Routine columns ───────────────────── */}
      <div className={`rc-columns ${showBoth ? 'rc-columns--both' : ''}`}>
        {routine.morning && (
          <RoutineColumn title="Morning Routine" emoji="☀️" timeId="morning" steps={routine.morning} />
        )}
        {routine.night && (
          <RoutineColumn title="Night Routine" emoji="🌙" timeId="night" steps={routine.night} />
        )}
      </div>

      {/* ── Footer tip ────────────────────────── */}
      <div className="rc-footer">
        <div className="rc-footer-inner">
          <span className="rc-footer-icon" aria-hidden="true">⭐</span>
          <p className="rc-footer-text">
            Stick to your routine for <strong>4–6 weeks</strong> for visible results. Consistency is everything.
          </p>
        </div>
      </div>
    </article>
  )
}

export default RoutineCard
