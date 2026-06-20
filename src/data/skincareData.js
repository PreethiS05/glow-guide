/**
 * Skincare Routine Data & Logic
 * Glow Guide – Personalized Skincare Routine Builder
 */

// ─── Constants ────────────────────────────────────────────────────────────────

export const SKIN_TYPES = [
  { id: 'oily',        label: 'Oily',        emoji: '💧', description: 'Excess sebum production' },
  { id: 'dry',         label: 'Dry',         emoji: '🌵', description: 'Lacks moisture & oil' },
  { id: 'combination', label: 'Combination', emoji: '⚖️', description: 'Oily T-zone, dry cheeks' },
  { id: 'sensitive',   label: 'Sensitive',   emoji: '🌸', description: 'Easily irritated skin' },
  { id: 'normal',      label: 'Normal',      emoji: '✨', description: 'Balanced & healthy skin' },
]

export const SKIN_CONCERNS = [
  { id: 'acne',       label: 'Acne',        emoji: '🔴', description: 'Breakouts & blemishes' },
  { id: 'dark_spots', label: 'Dark Spots',  emoji: '🟤', description: 'Post-inflammatory marks' },
  { id: 'pigmentation',label: 'Pigmentation',emoji: '🎨', description: 'Uneven skin tone' },
  { id: 'dullness',   label: 'Dullness',    emoji: '😶', description: 'Lack of radiance' },
  { id: 'fine_lines', label: 'Fine Lines',  emoji: '〰️', description: 'Early signs of aging' },
  { id: 'redness',    label: 'Redness',     emoji: '🌹', description: 'Inflammation & flushing' },
]

export const ROUTINE_TIMES = [
  { id: 'morning', label: 'Morning', emoji: '☀️' },
  { id: 'night',   label: 'Night',   emoji: '🌙' },
]

// ─── Product Database ─────────────────────────────────────────────────────────

const PRODUCTS = {
  // Cleansers
  gentleCleanser:     { name: 'Gentle Foaming Cleanser',    category: 'Cleanse',    tip: 'Use lukewarm water, massage for 60 seconds', icon: '🧼' },
  hydratingCleanser:  { name: 'Hydrating Cream Cleanser',   category: 'Cleanse',    tip: 'Avoid over-washing; once daily is enough',   icon: '🧴' },
  salicylicCleanser:  { name: 'Salicylic Acid Cleanser',    category: 'Cleanse',    tip: 'Use 2-3× per week to avoid over-drying',     icon: '🧫' },
  milkCleanser:       { name: 'Micellar Milk Cleanser',     category: 'Cleanse',    tip: 'No rinse needed; ideal for sensitive skin',   icon: '🥛' },
  balancingCleanser:  { name: 'pH-Balanced Cleanser',       category: 'Cleanse',    tip: 'Maintains natural skin barrier',              icon: '⚖️' },

  // Toners / Essences
  niacinamideToner:   { name: 'Niacinamide Toner 5%',       category: 'Tone',       tip: 'Apply with hands, press into skin gently',   icon: '💎' },
  hyaluronicToner:    { name: 'Hyaluronic Acid Essence',     category: 'Tone',       tip: 'Apply on damp skin for maximum absorption',  icon: '💧' },
  calmingToner:       { name: 'Centella Calming Toner',      category: 'Tone',       tip: 'Refrigerate for an extra soothing effect',   icon: '🌿' },
  roseToner:          { name: 'Rose Water Toner',            category: 'Tone',       tip: 'Mist on or apply with a cotton pad',         icon: '🌹' },
  aha_bha_toner:      { name: 'AHA/BHA Exfoliating Toner',  category: 'Tone',       tip: 'Use 2-3× per week; avoid eye area',          icon: '🔬' },

  // Serums & Treatments
  vitaminC:           { name: 'Vitamin C Serum 15%',        category: 'Treat',      tip: 'Always follow with SPF; store in a cool place', icon: '🍊' },
  niacinamideSerum:   { name: 'Niacinamide Serum 10%',      category: 'Treat',      tip: 'Reduces pores, controls oil production',     icon: '💊' },
  salicylicAcid:      { name: 'Salicylic Acid 2% BHA',      category: 'Treat',      tip: 'Apply only to affected areas at night',      icon: '🧪' },
  hyaluronicSerum:    { name: 'Hyaluronic Acid Serum',      category: 'Treat',      tip: 'Layer under moisturizer for plump skin',     icon: '💉' },
  retinol:            { name: 'Retinol Serum 0.3%',         category: 'Treat',      tip: 'Start 2× per week; always use SPF next day', icon: '⚗️' },
  azaleicAcid:        { name: 'Azelaic Acid 10%',           category: 'Treat',      tip: 'Great for redness & pigmentation together', icon: '🔴' },
  alphaArbutin:       { name: 'Alpha Arbutin 2%',           category: 'Treat',      tip: 'Pair with Vitamin C for faster results',    icon: '🌟' },
  peptideSerum:       { name: 'Peptide Complex Serum',       category: 'Treat',      tip: 'Boosts collagen; use morning and night',    icon: '🔩' },
  calmingSerum:       { name: 'Allantoin Calming Serum',    category: 'Treat',      tip: 'Reduces redness in 2-4 weeks of consistent use', icon: '🌱' },
  glySerum:           { name: 'Glycolic Acid 5% Serum',     category: 'Treat',      tip: 'Exfoliates & brightens; avoid mixing with retinol', icon: '✨' },

  // Moisturizers
  oilFreeMoisturizer: { name: 'Oil-Free Gel Moisturizer',   category: 'Moisturize', tip: 'Lightweight formula that won\'t clog pores', icon: '🫧' },
  ceramideMoisturizer:{ name: 'Ceramide Barrier Cream',     category: 'Moisturize', tip: 'Repairs and strengthens the skin barrier',  icon: '🏺' },
  lightMoisturizer:   { name: 'Lightweight Fluid Moisturizer', category: 'Moisturize', tip: 'Non-greasy; perfect for layering',        icon: '🌊' },
  richCream:          { name: 'Rich Nourishing Cream',       category: 'Moisturize', tip: 'Best applied to slightly damp skin',        icon: '🧈' },
  sensitiveMoisturizer:{ name:'Fragrance-Free Moisturizer',  category: 'Moisturize', tip: 'Hypoallergenic; safe for reactive skin',   icon: '🌼' },
  squalaneMoisturizer:{ name: 'Squalane Daily Moisturizer', category: 'Moisturize', tip: 'Locks in moisture without greasiness',      icon: '💫' },

  // Eye Care
  eyeCream:           { name: 'Peptide Eye Cream',           category: 'Eye Care',   tip: 'Pat gently with ring finger; never rub',   icon: '👁️' },
  brightEye:          { name: 'Brightening Eye Serum',       category: 'Eye Care',   tip: 'Use AM & PM for best depuffing results',   icon: '💡' },

  // SPF
  spf50:              { name: 'SPF 50 Broad Spectrum Sunscreen', category: 'Protect',tip: 'Apply 15 min before going outside',        icon: '☀️' },
  spfTinted:          { name: 'Tinted SPF 50 Sunscreen',     category: 'Protect',    tip: 'Covers redness while protecting skin',     icon: '🌤️' },
  mineralSpf:         { name: 'Mineral SPF 45+ Sunscreen',   category: 'Protect',    tip: 'Ideal for sensitive skin; zinc-based',     icon: '🛡️' },

  // Night / Overnight
  sleepingMask:       { name: 'Overnight Hydrating Mask',    category: 'Overnight',  tip: 'Use 2-3× per week as final step',          icon: '😴' },
  faceOil:            { name: 'Rosehip Face Oil',            category: 'Overnight',  tip: 'Press in with hands; mix with moisturizer', icon: '🌹' },
}

// ─── Routine Generation Logic ─────────────────────────────────────────────────

/**
 * Generates a personalized morning routine based on skin type and concerns.
 * @param {string} skinType
 * @param {string[]} concerns
 * @returns {Array<{step: number, product: object}>}
 */
function getMorningRoutine(skinType, concerns) {
  const steps = []

  // Step 1: Cleanser
  if (skinType === 'dry') {
    steps.push(PRODUCTS.hydratingCleanser)
  } else if (skinType === 'oily') {
    if (concerns.includes('acne')) {
      steps.push(PRODUCTS.salicylicCleanser)
    } else {
      steps.push(PRODUCTS.gentleCleanser)
    }
  } else if (skinType === 'sensitive') {
    steps.push(PRODUCTS.milkCleanser)
  } else if (skinType === 'combination') {
    steps.push(PRODUCTS.balancingCleanser)
  } else {
    steps.push(PRODUCTS.gentleCleanser)
  }

  // Step 2: Toner
  if (skinType === 'sensitive' || concerns.includes('redness')) {
    steps.push(PRODUCTS.calmingToner)
  } else if (skinType === 'oily') {
    steps.push(PRODUCTS.niacinamideToner)
  } else if (skinType === 'dry') {
    steps.push(PRODUCTS.hyaluronicToner)
  } else {
    steps.push(PRODUCTS.roseToner)
  }

  // Step 3: Targeted Serum(s)
  const serumAdded = new Set()
  if (concerns.includes('dark_spots') || concerns.includes('pigmentation') || concerns.includes('dullness')) {
    steps.push(PRODUCTS.vitaminC)
    serumAdded.add('vitC')
  }
  if (concerns.includes('acne') && !serumAdded.has('niacinamide')) {
    steps.push(PRODUCTS.niacinamideSerum)
    serumAdded.add('niacinamide')
  }
  if (concerns.includes('fine_lines') && !serumAdded.has('peptide')) {
    steps.push(PRODUCTS.peptideSerum)
    serumAdded.add('peptide')
  }
  if (concerns.includes('redness') && !serumAdded.has('calming')) {
    steps.push(PRODUCTS.calmingSerum)
    serumAdded.add('calming')
  }
  if (serumAdded.size === 0) {
    steps.push(PRODUCTS.hyaluronicSerum)
  }

  // Step 4: Eye Cream (if fine lines or dark spots)
  if (concerns.includes('fine_lines') || concerns.includes('dark_spots')) {
    steps.push(PRODUCTS.brightEye)
  }

  // Step 5: Moisturizer
  if (skinType === 'oily') {
    steps.push(PRODUCTS.oilFreeMoisturizer)
  } else if (skinType === 'dry') {
    steps.push(PRODUCTS.ceramideMoisturizer)
  } else if (skinType === 'sensitive') {
    steps.push(PRODUCTS.sensitiveMoisturizer)
  } else if (skinType === 'combination') {
    steps.push(PRODUCTS.lightMoisturizer)
  } else {
    steps.push(PRODUCTS.squalaneMoisturizer)
  }

  // Step 6: SPF (always last in AM)
  if (skinType === 'sensitive' || concerns.includes('redness')) {
    steps.push(PRODUCTS.mineralSpf)
  } else if (concerns.includes('pigmentation') || concerns.includes('dark_spots')) {
    steps.push(PRODUCTS.spfTinted)
  } else {
    steps.push(PRODUCTS.spf50)
  }

  return steps.map((product, index) => ({ step: index + 1, product }))
}

/**
 * Generates a personalized night routine based on skin type and concerns.
 * @param {string} skinType
 * @param {string[]} concerns
 * @returns {Array<{step: number, product: object}>}
 */
function getNightRoutine(skinType, concerns) {
  const steps = []

  // Step 1: Cleanser
  if (skinType === 'dry') {
    steps.push(PRODUCTS.hydratingCleanser)
  } else if (skinType === 'oily' || concerns.includes('acne')) {
    steps.push(PRODUCTS.gentleCleanser)
  } else if (skinType === 'sensitive') {
    steps.push(PRODUCTS.milkCleanser)
  } else {
    steps.push(PRODUCTS.balancingCleanser)
  }

  // Step 2: Toner
  if (skinType === 'sensitive' || concerns.includes('redness')) {
    steps.push(PRODUCTS.calmingToner)
  } else if (concerns.includes('acne') || concerns.includes('dullness')) {
    steps.push(PRODUCTS.aha_bha_toner)
  } else if (skinType === 'dry') {
    steps.push(PRODUCTS.hyaluronicToner)
  } else {
    steps.push(PRODUCTS.niacinamideToner)
  }

  // Step 3: Targeted Treatment(s)
  const treatAdded = new Set()

  if (concerns.includes('acne')) {
    steps.push(PRODUCTS.salicylicAcid)
    treatAdded.add('salicylic')
  }

  if ((concerns.includes('dark_spots') || concerns.includes('pigmentation')) && !treatAdded.has('alphaArbutin')) {
    steps.push(PRODUCTS.alphaArbutin)
    treatAdded.add('alphaArbutin')
  }

  if (concerns.includes('redness') && !treatAdded.has('azelaic')) {
    steps.push(PRODUCTS.azaleicAcid)
    treatAdded.add('azelaic')
  }

  if (concerns.includes('dullness') && !treatAdded.has('glycolic')) {
    steps.push(PRODUCTS.glySerum)
    treatAdded.add('glycolic')
  }

  if (!concerns.includes('acne') && !concerns.includes('redness') && treatAdded.size === 0) {
    steps.push(PRODUCTS.hyaluronicSerum)
    treatAdded.add('ha')
  } else if (skinType === 'dry' && !treatAdded.has('ha')) {
    steps.push(PRODUCTS.hyaluronicSerum)
    treatAdded.add('ha')
  }

  // Step 4: Retinol (for anti-aging / dark spots – not for acne/sensitive combo)
  if (
    (concerns.includes('fine_lines') || concerns.includes('dark_spots')) &&
    skinType !== 'sensitive' &&
    !concerns.includes('acne')
  ) {
    steps.push({ ...PRODUCTS.retinol, tip: 'Use 2–3× per week; always use SPF the next morning' })
  }

  // Step 5: Eye Care
  if (concerns.includes('fine_lines') || concerns.includes('dark_spots') || concerns.includes('dullness')) {
    steps.push(PRODUCTS.eyeCream)
  }

  // Step 6: Moisturizer
  if (skinType === 'oily') {
    steps.push(PRODUCTS.lightMoisturizer)
  } else if (skinType === 'dry') {
    steps.push(PRODUCTS.richCream)
  } else if (skinType === 'sensitive') {
    steps.push(PRODUCTS.sensitiveMoisturizer)
  } else {
    steps.push(PRODUCTS.ceramideMoisturizer)
  }

  // Step 7: Overnight extras
  if (skinType === 'dry' || concerns.includes('fine_lines')) {
    steps.push(PRODUCTS.sleepingMask)
  } else if (concerns.includes('dark_spots') || concerns.includes('pigmentation')) {
    steps.push(PRODUCTS.faceOil)
  }

  return steps.map((product, index) => ({ step: index + 1, product }))
}

/**
 * Main entry point: generate full routine (morning + night)
 * @param {string} skinType
 * @param {string[]} concerns
 * @param {'morning'|'night'|'both'} routineTime
 * @returns {{ morning: Array|null, night: Array|null }}
 */
export function generateRoutine(skinType, concerns, routineTime) {
  return {
    morning: routineTime === 'morning' || routineTime === 'both'
      ? getMorningRoutine(skinType, concerns)
      : null,
    night: routineTime === 'night' || routineTime === 'both'
      ? getNightRoutine(skinType, concerns)
      : null,
  }
}

/**
 * Returns a friendly headline for the generated routine card
 */
export function getRoutineHeadline(skinType, concerns) {
  const typeLabel = SKIN_TYPES.find(s => s.id === skinType)?.label || skinType
  const concernLabels = concerns
    .map(c => SKIN_CONCERNS.find(sc => sc.id === c)?.label)
    .filter(Boolean)
    .slice(0, 2)
    .join(' & ')

  return concernLabels
    ? `${typeLabel} Skin · ${concernLabels}`
    : `${typeLabel} Skin Routine`
}
