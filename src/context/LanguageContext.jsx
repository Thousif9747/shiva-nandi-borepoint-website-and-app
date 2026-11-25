// ============================================================
// LANGUAGE CONTEXT - English / Kannada, remembered in memory
// only (no localStorage, as requested). Every component reads
// text through useLanguage() -> { lang, t, tr, setLang }.
// ============================================================

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

/** Resolve 'a.b.c' dot path inside the active translations table. */
function lookup(table, key) {
  if (!table) return undefined
  return key
    .split('.')
    .reduce((node, part) => (node != null ? node[part] : undefined), table)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  // Keep <html lang> correct for screen readers + fonts.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'kn' ? 'kn-IN' : 'en'
    }
  }, [lang])

  /** t('form.name') -> translated UI string (or object for 'form' style keys). */
  const t = useCallback(
    (key) => {
      const active = lookup(translations[lang], key)
      if (active !== undefined) return active
      const en = lookup(translations.en, key)
      return en !== undefined ? en : key
    },
    [lang],
  )

  /** tr({en:'...', kn:'...'}) -> text in the active language. */
  const tr = useCallback(
    (obj) => {
      if (!obj) return ''
      if (typeof obj === 'string') return obj
      return obj[lang] ?? obj.en ?? ''
    },
    [lang],
  )

  const value = useMemo(
    () => ({ lang, setLang, toggleLang: () => setLang((l) => (l === 'en' ? 'kn' : 'en')), t, tr }),
    [lang, t, tr],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    // Safe fallback so components never crash outside the provider.
    return {
      lang: 'en',
      setLang: () => { },
      toggleLang: () => { },
      t: (key) => key,
      tr: (obj) => (obj?.en ?? ''),
    }
  }
  return ctx
}
