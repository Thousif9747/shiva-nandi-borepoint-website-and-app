// ============================================================
// WHATSAPP LINK BUILDER - pure business logic, no UI.
// Single place that knows the wa.me URL format and the message
// templates, so the code can move to React Native unchanged.
// ============================================================

import { siteConfig } from '../data/siteConfig'
import { cleanText, formatArea, formatPhone } from './validators'

const waBase = 'https://wa.me/'

/** Build a wa.me URL with an encoded text message. */
export function buildWhatsAppUrl(text) {
  return `${waBase}${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`
}

/** One-call helper for service cards and call-to-action buttons. */
export function buildQuickEnquiryUrl(serviceName, greeting, areaPrompt) {
  return buildWhatsAppUrl(buildQuickEnquiryMessage(serviceName, greeting, areaPrompt))
}

/** Open the URL in a new tab (browser only). See utils/browser.js. */
export function openWhatsApp(url) {
  if (typeof window === 'undefined') return false
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) {
      // popup blocked - fall back to same location so the user still reaches WhatsApp
      window.location.href = url
    }
    return true
  } catch {
    window.location.href = url
    return true
  }
}

/**
 * Full enquiry message from the form.
 * Template (fixed, English labels so the owner can parse it fast):
 *
 * New Enquiry - Shivanandi Borewell Point
 * Name: ...
 * Phone: ...
 * Area: ... Bengaluru - PIN
 * Service: ...
 * Land purpose: ...
 * Existing borewell: ...
 * Preferred date: ...
 * Message: ...
 * Location link: ...
 */
export function buildEnquiryMessage(values, service) {
  const lines = []
  lines.push(`*New Enquiry - ${siteConfig.businessName}*`)
  lines.push('')
  lines.push(`Name: ${cleanText(values.name)}`)
  lines.push(`Phone: ${formatPhone(values.phone)}`)
  lines.push(`Area: ${formatArea(values)}`)

  const serviceName = service?.name?.en || values.serviceName || 'Not selected'
  lines.push(`Service: ${serviceName}`)

  const purpose = cleanText(values.landType)
  const size = cleanText(values.landSize)
  lines.push(`Land purpose: ${purpose || 'Not specified'}${size ? ` (approx. size: ${size})` : ''}`)

  if (values.existing === 'yes') {
    const depth = cleanText(values.depth)
    const problem = cleanText(values.problem)
    const extra = [depth && `depth: ${depth}`, problem && `problem: ${problem}`].filter(Boolean).join(', ')
    lines.push(`Existing borewell: Yes${extra ? ` (${extra})` : ''}`)
  } else {
    lines.push('Existing borewell: No')
  }

  const date = cleanText(values.visitDate)
  lines.push(`Preferred date: ${date || 'Flexible'}`)

  const message = cleanText(values.message)
  lines.push(`Message: ${message || '-'}`)

  const locationLink = cleanText(values.locationLink)
  lines.push(`Location link: ${locationLink || 'Not shared'}`)

  return lines.join('\n')
}

/**
 * Quick enquiry from a service card:
 * "Hello, I want details about [Service]. My area in Bengaluru is: "
 */
export function buildQuickEnquiryMessage(serviceName, greeting, areaPrompt) {
  const g = greeting || 'Hello, I want details about'
  const prompt = areaPrompt || 'My area in Bengaluru is:'
  return `${g} ${serviceName}\n${prompt} `
}

/** Enquiry about a highlight/recharge/camera block. Same shape as quick. */
export function buildHighlightMessage(serviceName, greeting, areaPrompt) {
  return buildQuickEnquiryMessage(serviceName, greeting, areaPrompt)
}

/** Geolocation -> Google Maps link (the URL building part is pure). */
export function buildMapsLink(latitude, longitude, accuracy) {
  const url = accuracy
    ? `https://www.google.com/maps?q=${latitude},${longitude} (@${accuracy}m)`
    : `https://www.google.com/maps?q=${latitude},${longitude}`
  return url
}
