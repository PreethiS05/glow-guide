import { SKIN_TYPES } from '../../data/skincareData'
import { IconDna } from '../Icons/Icons'
import './SkinTypeSelector.css'

const SKIN_GRADIENTS = {
  oily:        { from: '#fde68a', to: '#fbbf24', glow: 'rgba(251,191,36,0.30)', text: '#92400e' },
  dry:         { from: '#bae6fd', to: '#38bdf8', glow: 'rgba(56,189,248,0.30)',  text: '#0c4a6e' },
  combination: { from: '#d9f99d', to: '#84cc16', glow: 'rgba(132,204,22,0.28)',  text: '#365314' },
  sensitive:   { from: '#fecdd3', to: '#fb7185', glow: 'rgba(251,113,133,0.30)', text: '#9f1239' },
  normal:      { from: '#c4b5fd', to: '#8b5cf6', glow: 'rgba(139,92,246,0.30)',  text: '#4c1d95' },
}

function SkinTypeSelector({ selected, onChange }) {
  return (
    <section className="st-section section-card" aria-labelledby="skin-type-heading">
      <div className="section-header">
        <div className="section-icon-wrap">
          <IconDna size={18} className="section-icon" />
        </div>
        <div className="section-header-text">
          <h2 className="section-title" id="skin-type-heading">Skin Type</h2>
          <p className="section-desc">Select your primary skin type</p>
        </div>
        <div className="section-step-badge">Step 1</div>
      </div>

      <div className="st-grid" role="radiogroup" aria-labelledby="skin-type-heading">
        {SKIN_TYPES.map((type, idx) => {
          const grad = SKIN_GRADIENTS[type.id]
          const isSelected = selected === type.id
          return (
            <button
              key={type.id}
              id={`skin-type-${type.id}`}
              className={`st-card ${isSelected ? 'st-card--selected' : ''}`}
              onClick={() => onChange(type.id)}
              role="radio"
              aria-checked={isSelected}
              style={{
                '--card-from': grad.from,
                '--card-to':   grad.to,
                '--card-glow': grad.glow,
                '--card-text': grad.text,
                animationDelay: `${idx * 0.06}s`,
              }}
            >
              {/* Glass bg */}
              <div className="st-card-glass" />

              {/* Gradient orb */}
              <div className="st-card-orb" aria-hidden="true">
                <span className="st-emoji">{type.emoji}</span>
              </div>

              {/* Selected glow ring */}
              {isSelected && <div className="st-card-glow-ring" aria-hidden="true" />}

              {/* Check badge */}
              {isSelected && (
                <div className="st-check" aria-hidden="true">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
              )}

              <span className="st-label">{type.label}</span>
              <span className="st-desc">{type.description}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default SkinTypeSelector
