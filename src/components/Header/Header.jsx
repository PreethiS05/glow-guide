import { IconSparkles } from '../Icons/Icons'
import './Header.css'

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-inner">

        {/* Floating logo orb */}
        <div className="header-orb" aria-hidden="true">
          <div className="orb-inner">
            <span className="orb-emoji">✨</span>
          </div>
          <div className="orb-ring orb-ring-1" />
          <div className="orb-ring orb-ring-2" />
          <div className="orb-ring orb-ring-3" />
        </div>

        {/* Title block */}
        <div className="header-text">
          <div className="header-eyebrow">
            <IconSparkles size={14} className="eyebrow-icon" />
            <span>AI-Powered Beauty</span>
            <IconSparkles size={14} className="eyebrow-icon" />
          </div>
          <h1 className="header-title">
            <span className="title-glow">Glow</span>
            <span className="title-separator"> </span>
            <span className="title-plain">Guide</span>
          </h1>
          <p className="header-subtitle">
            Personalized Skincare Routine Builder
          </p>
        </div>

        {/* Feature pills */}
        <div className="header-pills" aria-label="App features">
          <div className="pill pill--green">
            <span className="pill-dot" />
            100% Personalized
          </div>
          <div className="pill pill--violet">
            <span className="pill-dot" />
            Science-Backed
          </div>
          <div className="pill pill--rose">
            <span className="pill-dot" />
            Dermatologist Tips
          </div>
        </div>

        {/* Scroll hint */}
        <div className="header-scroll-hint" aria-hidden="true">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Build your routine</span>
        </div>

      </div>
    </header>
  )
}

export default Header
