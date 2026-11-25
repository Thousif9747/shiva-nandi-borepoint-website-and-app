import { useLanguage } from '../context/LanguageContext'

/** Segmented EN / Kannada toggle. Choice stays in memory only. */
export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage()
  return (
    <div
      role="group"
      aria-label="Language / ಭಾಷೆ"
      className={`inline-flex overflow-hidden rounded-full border border-teal-600/20 bg-white p-0.5 shadow-sm ${className}`}
    >
      {['en', 'kn'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors sm:px-3 ${
            lang === code
              ? 'bg-teal-600 text-white'
              : 'text-slate-600 hover:bg-teal-600/10 hover:text-teal-700'
          }`}
        >
          {code === 'en' ? 'EN' : 'ಕನ್ನಡ'}
        </button>
      ))}
    </div>
  )
}
