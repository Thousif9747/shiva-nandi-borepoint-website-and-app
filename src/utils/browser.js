// ============================================================
// BROWSER HELPERS - every direct window/document use sits here,
// so components stay UI-only and can later move to React Native
// with a small platform swap.
// ============================================================

/** Open an external URL in a new tab. */
export function openExternal(url) {
  if (typeof window === 'undefined') return false
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) {
      window.location.href = url
      return true
    }
    return true
  } catch {
    return false
  }
}

/** Get the user's location as a Google Maps link. Returns a promise. */
export function getMapsLink() {
  return new Promise((resolve, reject) => {
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      reject(new Error('unsupported'))
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude, accuracy } = pos.coords
        resolve(
          `https://www.google.com/maps?q=${latitude},${longitude} (@${Math.round(accuracy)}m)`,
        )
      },
      (err) => reject(err),
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 60000 },
    )
  })
}

/** Read prefers-reduced-motion. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof matchMedia === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Scroll an element into view (used for prefilling the enquiry form). */
export function scrollToId(id, block = 'start') {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    block,
  })
}

/** Subscribes to window scroll events (returns an unsubscribe fn). */
export function listenScroll(cb) {
  if (typeof window === 'undefined') return () => { }
  window.addEventListener('scroll', cb, { passive: true })
  return () => window.removeEventListener('scroll', cb)
}

/** Focus a form field by id (used after failed validation). */
export function focusField(id) {
  if (typeof document === 'undefined') return
  const el = document.getElementById(id)
  if (el) el.focus()
}

/** Lock/unlock body scroll for modals (lightbox). */
export function lockBodyScroll(locked) {
  if (typeof document === 'undefined') return
  document.documentElement.style.overflow = locked ? 'hidden' : ''
}

/** Register the service worker (production PWA install). */
export function registerServiceWorker() {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return undefined
  if (import.meta && import.meta.env && import.meta.env.PROD) {
    return navigator.serviceWorker.register('/sw.js').catch(() => undefined)
  }
  return undefined
}
