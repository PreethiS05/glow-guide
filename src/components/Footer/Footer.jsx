import { IconExternalLink, IconHeart } from '../Icons/Icons'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">

        {/* Rainbow gradient top line */}
        <div className="footer-rainbow" aria-hidden="true" />

        {/* Glass panel */}
        <div className="footer-glass">

          {/* Main row */}
          <div className="footer-main">

            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-brand-orb" aria-hidden="true">
                <span>✨</span>
              </div>
              <div className="footer-brand-text">
                <p className="footer-brand-name">Glow Guide</p>
                <p className="footer-brand-tagline">Personalized Skincare Builder</p>
              </div>
            </div>

            {/* Divider */}
            <div className="footer-sep" aria-hidden="true" />

            {/* Built by */}
            <div className="footer-built">
              <p className="footer-built-label">
                <IconHeart size={12} className="footer-heart" />
                Built by
              </p>
              <p className="footer-author">Your Name</p>
              <a
                href="mailto:youremail@example.com"
                className="footer-email"
                aria-label="Email the developer"
              >
                youremail@example.com
              </a>
            </div>

            {/* CTA */}
            <div className="footer-cta">
              <a
                id="digital-heroes-btn"
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-cta-btn"
                aria-label="Visit Digital Heroes Co"
              >
                <div className="footer-cta-btn-bg" aria-hidden="true" />
                <div className="footer-cta-btn-shimmer" aria-hidden="true" />
                <span className="footer-cta-content">
                  <span>🚀 Built for Digital Heroes</span>
                  <IconExternalLink size={13} className="footer-cta-icon" />
                </span>
              </a>
            </div>

          </div>

          {/* Bottom row */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {year} Glow Guide · Made with{' '}
              <IconHeart size={12} className="footer-heart-inline" aria-label="love" />
              {' '}for healthy skin
            </p>
            <div className="footer-badges">
              <span className="footer-badge">🌿 Natural</span>
              <span className="footer-badge">🔬 Science-backed</span>
              <span className="footer-badge">✨ Personalized</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
