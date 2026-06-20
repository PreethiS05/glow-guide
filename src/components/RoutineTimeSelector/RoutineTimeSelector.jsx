import { ROUTINE_TIMES } from '../../data/skincareData'
import { IconClock, IconSun, IconMoon, IconLayers } from '../Icons/Icons'
import './RoutineTimeSelector.css'

const TIME_THEMES = {
  morning: {
    from: '#fde68a', to: '#fbbf24', glow: 'rgba(251,191,36,0.35)',
    accent: '#92400e', icon: <IconSun size={22} />,
    sub: 'AM Wake-up routine', gradient: 'linear-gradient(135deg, #fff9f0, #fef3c7, #fde68a)',
  },
  night: {
    from: '#ddd6fe', to: '#8b5cf6', glow: 'rgba(139,92,246,0.35)',
    accent: '#4c1d95', icon: <IconMoon size={22} />,
    sub: 'PM Bedtime routine', gradient: 'linear-gradient(135deg, #f5f3ff, #ede9fe, #ddd6fe)',
  },
}

const BOTH_THEME = {
  from: '#fda4af', to: '#a78bfa', glow: 'rgba(167,139,250,0.30)',
  accent: '#4c1d95',
}

function RoutineTimeSelector({ selected, onChange }) {
  return (
    <section className="rts-section section-card" aria-labelledby="routine-time-heading">
      <div className="section-header">
        <div className="section-icon-wrap">
          <IconClock size={18} className="section-icon" />
        </div>
        <div className="section-header-text">
          <h2 className="section-title" id="routine-time-heading">Routine Time</h2>
          <p className="section-desc">Choose when you'll apply your skincare</p>
        </div>
        <div className="section-step-badge">Step 3</div>
      </div>

      <div className="rts-grid" role="radiogroup" aria-labelledby="routine-time-heading">

        {/* Morning */}
        {ROUTINE_TIMES.map((time) => {
          const theme = TIME_THEMES[time.id]
          const isSel = selected === time.id
          return (
            <button
              key={time.id}
              id={`routine-time-${time.id}`}
              className={`rts-card rts-card--${time.id} ${isSel ? 'rts-card--selected' : ''}`}
              onClick={() => onChange(time.id)}
              role="radio"
              aria-checked={isSel}
              style={{
                '--rt-from':  theme.from,
                '--rt-to':    theme.to,
                '--rt-glow':  theme.glow,
                '--rt-accent':theme.accent,
              }}
            >
              <div className="rts-card-glass" />
              <div className="rts-orb">
                {theme.icon}
              </div>
              <span className="rts-label">{time.label}</span>
              <span className="rts-sub">{theme.sub}</span>
              {isSel && <div className="rts-check">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5"/>
                </svg>
              </div>}
            </button>
          )
        })}

        {/* Both */}
        <button
          id="routine-time-both"
          className={`rts-card rts-card--both ${selected === 'both' ? 'rts-card--selected' : ''}`}
          onClick={() => onChange('both')}
          role="radio"
          aria-checked={selected === 'both'}
          style={{
            '--rt-from':   BOTH_THEME.from,
            '--rt-to':     BOTH_THEME.to,
            '--rt-glow':   BOTH_THEME.glow,
            '--rt-accent': BOTH_THEME.accent,
          }}
        >
          <div className="rts-card-glass" />
          <div className="rts-orb rts-orb--both">
            <IconLayers size={22} />
          </div>
          <span className="rts-label">Both</span>
          <span className="rts-sub">Complete AM & PM</span>
          <div className="rts-recommended" aria-hidden="true">✨ Recommended</div>
          {selected === 'both' && <div className="rts-check">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>}
        </button>

      </div>
    </section>
  )
}

export default RoutineTimeSelector
