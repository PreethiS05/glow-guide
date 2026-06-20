import { IconSparkles, IconArrowRight } from '../Icons/Icons'
import './GenerateButton.css'

function GenerateButton({ onClick, isLoading, disabled }) {
  return (
    <div className="gen-wrapper">
      <button
        id="generate-routine-btn"
        className={`gen-btn ${isLoading ? 'gen-btn--loading' : ''} ${disabled ? 'gen-btn--disabled' : ''}`}
        onClick={onClick}
        disabled={disabled || isLoading}
        aria-label="Generate your personalized skincare routine"
        aria-busy={isLoading}
      >
        {/* Animated gradient background layers */}
        <div className="gen-btn-bg" aria-hidden="true" />
        <div className="gen-btn-shimmer" aria-hidden="true" />
        <div className="gen-btn-glow"   aria-hidden="true" />

        {isLoading ? (
          <span className="gen-btn-content">
            <span className="gen-spinner" aria-hidden="true" />
            <span>Crafting your routine…</span>
          </span>
        ) : (
          <span className="gen-btn-content">
            <span className="gen-icon-wrap" aria-hidden="true">
              <IconSparkles size={18} />
            </span>
            <span>Generate Routine</span>
            <span className="gen-arrow" aria-hidden="true">
              <IconArrowRight size={18} />
            </span>
          </span>
        )}
      </button>

      {disabled && !isLoading && (
        <p className="gen-hint" role="status" aria-live="polite">
          Select your <span>skin type</span> &amp; at least one <span>concern</span> to get started
        </p>
      )}

      {!disabled && !isLoading && (
        <p className="gen-ready" aria-live="polite">
          ✨ Ready to generate your personalized routine
        </p>
      )}
    </div>
  )
}

export default GenerateButton
