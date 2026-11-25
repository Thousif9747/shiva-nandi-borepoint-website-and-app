// ============================================================
// VALIDATORS - pure business logic, no UI, no browser APIs.
// Handy for reuse inside a future React Native app.
// ============================================================

/** Keep only digits, drop spaces/dashes and country/leading codes. */
export function normalizePhone(raw) {
  if (!raw) return ''
  let digits = String(raw).replace(/\D/g, '')
  // 0XXXXXXXXXX -> drop leading 0
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)
  // 91XXXXXXXXXX -> drop leading 91
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  // +91XXXXXXXXXX typed with 0 before 91 -> 0191... handle by trimming zeros after 91 logic above
  return digits
}

/** Indian mobile: 10 digits, starts with 6-9. */
export function isValidIndianMobile(raw) {
  const digits = normalizePhone(raw)
  return /^[6-9]\d{9}$/.test(digits)
}

/** 6-digit PIN code, first digit 1-9. */
export function isValidPin(raw) {
  if (!raw) return false
  return /^[1-9]\d{5}$/.test(String(raw).trim())
}

/** Name: at least 2 letters after trimming. */
export function isValidName(raw) {
  return !!raw && String(raw).trim().length >= 2
}

/**
 * Validate the enquiry form values.
 * Returns { valid, errors } where errors is an object mapping
 * field -> error key (translated in the component with translations.js).
 * This stays UI-free so the same file works in RN/Expo later.
 */
export function validateEnquiry(values) {
  const errors = {}

  if (!values.name || !String(values.name).trim()) {
    errors.name = 'nameRequired'
  } else if (!isValidName(values.name)) {
    errors.name = 'nameShort'
  }

  if (!values.phone || !String(values.phone).trim()) {
    errors.phone = 'phoneRequired'
  } else if (!isValidIndianMobile(values.phone)) {
    errors.phone = 'phoneInvalid'
  }

  if (!values.site || !String(values.site).trim()) {
    errors.site = 'siteRequired'
  }

  if (!values.area || !String(values.area).trim()) {
    errors.area = 'areaRequired'
  }

  if (!values.pin || !String(values.pin).trim()) {
    errors.pin = 'pinRequired'
  } else if (!isValidPin(values.pin)) {
    errors.pin = 'pinInvalid'
  }

  if (!values.serviceId || !String(values.serviceId).trim()) {
    errors.serviceId = 'serviceRequired'
  }

  return { valid: Object.keys(errors).length === 0, errors }
}

/** Build the final area string for the WhatsApp message. */
export function formatArea(values) {
  const pin = String(values.pin || '').trim()
  const area = String(values.area || '').trim()
  return pin ? `${area}, Bengaluru - ${pin}` : `${area}, Bengaluru`
}

/** Fix phone to a clean 10-digit string for the message. */
export function formatPhone(raw) {
  const digits = normalizePhone(raw)
  return '+91 ' + digits
}

/** Trim helper for optional text fields. */
export function cleanText(raw) {
  return String(raw || '').trim()
}
