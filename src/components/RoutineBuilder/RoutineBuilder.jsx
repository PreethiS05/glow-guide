import { useState, useRef, Fragment } from 'react'
import SkinTypeSelector from '../SkinTypeSelector/SkinTypeSelector'
import ConcernSelector from '../ConcernSelector/ConcernSelector'
import RoutineTimeSelector from '../RoutineTimeSelector/RoutineTimeSelector'
import GenerateButton from '../GenerateButton/GenerateButton'
import RoutineCard from '../RoutineCard/RoutineCard'
import { IconCheck } from '../Icons/Icons'
import { generateRoutine, getRoutineHeadline } from '../../data/skincareData'
import './RoutineBuilder.css'

const STEPS = [
  { num: 1, label: 'Skin Type' },
  { num: 2, label: 'Concerns' },
  { num: 3, label: 'Routine' },
]

function ProgressStep({ num, label, status }) {
  return (
    <div className="progress-step">
      <div className={`progress-circle ${status}`}>
        {status === 'done' ? <IconCheck size={13} /> : num}
      </div>
      <span className="progress-label">{label}</span>
    </div>
  )
}

function RoutineBuilder() {
  const [skinType, setSkinType] = useState('')
  const [concerns, setConcerns] = useState([])
  const [routineTime, setRoutineTime] = useState('both')
  const [routine, setRoutine] = useState(null)
  const [headline, setHeadline] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasGenerated, setHasGenerated] = useState(false)
  const resultRef = useRef(null)

  const isDisabled = !skinType || concerns.length === 0

  const getStepStatus = (step) => {
    if (step === 1) return skinType ? 'done' : 'active'
    if (step === 2) return concerns.length > 0 ? 'done' : skinType ? 'active' : ''
    if (step === 3) return skinType && concerns.length > 0 ? 'active' : ''
    return ''
  }

  const handleGenerate = () => {
    if (isDisabled) return
    setIsLoading(true)
    setRoutine(null)

    setTimeout(() => {
      const result = generateRoutine(skinType, concerns, routineTime)
      const hl = getRoutineHeadline(skinType, concerns)
      setRoutine(result)
      setHeadline(hl)
      setIsLoading(false)
      setHasGenerated(true)
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }, 1100)
  }

  const handleReset = () => {
    setSkinType('')
    setConcerns([])
    setRoutineTime('both')
    setRoutine(null)
    setHasGenerated(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="routine-builder">
      {/* ── Input Card ─────────────────────── */}
      <div className="builder-card">
        <div className="builder-card-top">
          <div className="builder-card-tag">
            <span className="builder-tag-dot" />
            Step-by-step builder
          </div>
          <h2 className="builder-card-heading">Build Your Routine</h2>
          <p className="builder-card-sub">
            Tell us about your skin and we'll craft a personalised routine with expert-curated products.
          </p>

          {/* Progress tracker */}
          <div className="builder-progress" role="progressbar" aria-label="Setup progress">
            {STEPS.map((s, i) => (
              <Fragment key={s.num}>
                <ProgressStep
                  num={s.num}
                  label={s.label}
                  status={getStepStatus(s.num)}
                />
                {i < STEPS.length - 1 && (
                  <div className="progress-connector" />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="builder-sections">
          <SkinTypeSelector selected={skinType} onChange={setSkinType} />
          <ConcernSelector selected={concerns} onChange={setConcerns} />
          <RoutineTimeSelector selected={routineTime} onChange={setRoutineTime} />
        </div>

        <div className="builder-action">
          <GenerateButton
            onClick={handleGenerate}
            isLoading={isLoading}
            disabled={isDisabled}
          />
        </div>
      </div>

      {/* ── Result Card ─────────────────────── */}
      {(routine || isLoading) && (
        <div className="result-section" ref={resultRef} aria-live="polite">
          {isLoading && !routine && (
            <div className="result-loading" aria-busy="true">
              <div className="loading-orb">
                <div className="loading-orb-inner">✨</div>
                <div className="loading-ring" />
              </div>
              <p className="result-loading-text">Crafting your personalized routine…</p>
              <p className="result-loading-sub">Analysing skin type & concerns</p>
            </div>
          )}

          {routine && (
            <>
              <RoutineCard
                routine={routine}
                skinType={skinType}
                concerns={concerns}
                routineTime={routineTime}
                headline={headline}
              />
              <div className="result-actions">
                <button
                  id="reset-routine-btn"
                  className="result-action-btn result-action-btn--secondary"
                  onClick={handleReset}
                >
                  ↩ Start Over
                </button>
                <button
                  id="regenerate-routine-btn"
                  className="result-action-btn result-action-btn--primary"
                  onClick={handleGenerate}
                >
                  ✨ Regenerate
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Empty state ─────────────────────── */}
      {!hasGenerated && !isLoading && (
        <div className="builder-empty-state" aria-hidden="true">
          <div className="empty-state-visual">
            <span className="empty-state-emoji">🌿</span>
            <div className="empty-state-ring" />
          </div>
          <p>Your personalized skincare routine will appear here once generated</p>
        </div>
      )}
    </div>
  )
}

export default RoutineBuilder
