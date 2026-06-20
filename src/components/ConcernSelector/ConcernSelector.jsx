import { SKIN_CONCERNS } from '../../data/skincareData'
import { IconSearch } from '../Icons/Icons'
import './ConcernSelector.css'

const CONCERN_THEMES = {
  acne:          { from: '#fecdd3', to: '#fb7185', glow: 'rgba(251,113,133,0.30)', text: '#9f1239', icon: '🔴' },
  dark_spots:    { from: '#fde68a', to: '#fbbf24', glow: 'rgba(251,191,36,0.30)',  text: '#92400e', icon: '🟤' },
  pigmentation:  { from: '#e9d5ff', to: '#a78bfa', glow: 'rgba(167,139,250,0.30)', text: '#4c1d95', icon: '🎨' },
  dullness:      { from: '#fed7aa', to: '#fb923c', glow: 'rgba(251,146,60,0.30)',  text: '#7c2d12', icon: '💫' },
  fine_lines:    { from: '#a7f3d0', to: '#34d399', glow: 'rgba(52,211,153,0.30)',  text: '#065f46', icon: '〰️' },
  redness:       { from: '#fda4af', to: '#f43f5e', glow: 'rgba(244,63,94,0.30)',   text: '#881337', icon: '🌹' },
}

function ConcernSelector({ selected, onChange }) {
  const toggle = (id) => {
    onChange(selected.includes(id)
      ? selected.filter(c => c !== id)
      : [...selected, id]
    )
  }

  return (
    <section className="cs-section section-card" aria-labelledby="concerns-heading">
      <div className="section-header">
        <div className="section-icon-wrap">
          <IconSearch size={18} className="section-icon" />
        </div>
        <div className="section-header-text">
          <h2 className="section-title" id="concerns-heading">Skin Concerns</h2>
          <p className="section-desc">Select all that apply — multiple allowed</p>
        </div>
        <div className="section-step-badge">Step 2</div>
      </div>

      <div className="cs-grid" role="group" aria-labelledby="concerns-heading">
        {SKIN_CONCERNS.map((concern, idx) => {
          const theme = CONCERN_THEMES[concern.id]
          const isSel = selected.includes(concern.id)
          return (
            <button
              key={concern.id}
              id={`concern-${concern.id}`}
              className={`cs-chip ${isSel ? 'cs-chip--selected' : ''}`}
              onClick={() => toggle(concern.id)}
              aria-pressed={isSel}
              style={{
                '--c-from':  theme.from,
                '--c-to':    theme.to,
                '--c-glow':  theme.glow,
                '--c-text':  theme.text,
                animationDelay: `${idx * 0.07}s`,
              }}
            >
              {/* Glass surface */}
              <div className="cs-chip-glass" />

              {/* Icon orb */}
              <div className="cs-chip-orb" aria-hidden="true">
                <span className="cs-chip-emoji">{theme.icon}</span>
              </div>

              {/* Text */}
              <div className="cs-chip-text">
                <span className="cs-chip-label">{concern.label}</span>
                <span className="cs-chip-sub">{concern.description}</span>
              </div>

              {/* Selected check */}
              {isSel && (
                <div className="cs-chip-check" aria-hidden="true">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>

      {selected.length > 0 && (
        <div className="cs-summary" aria-live="polite" role="status">
          <div className="cs-summary-pills">
            {selected.map(id => {
              const c = SKIN_CONCERNS.find(sc => sc.id === id)
              const t = CONCERN_THEMES[id]
              return (
                <span
                  key={id}
                  className="cs-summary-pill"
                  style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})`, color: t.text }}
                >
                  {t.icon} {c?.label}
                </span>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}

export default ConcernSelector
