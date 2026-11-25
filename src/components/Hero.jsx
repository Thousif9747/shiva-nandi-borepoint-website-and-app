import { ArrowRight, CalendarDays, ChevronRight, MapPin, Phone } from 'lucide-react'
import ServiceIcon from './icons/ServiceIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function Hero({ onBook }) {
  const { t, tr } = useLanguage()
  const hero = siteConfig.hero
  const waHref = buildWhatsAppUrl(
    `${t('whatsapp.greeting')} ${tr({ en: 'point identification', kn: 'ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ' })}\n${t('whatsapp.areaPrompt')} `,
  )

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#e7f7f4_0%,#f2fbf9_42%,#fbf9f4_100%)] pt-24 pb-14 md:pt-32 md:pb-20"
    >
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
        {/* copy */}
        <div className="flex flex-col items-start gap-5">
          {/* service-area chip (app-style) */}
          <a
            href="#contact"
            className="group flex w-full items-center gap-3 rounded-2xl border border-teal-600/15 bg-white/85 px-4 py-3 shadow-sm sm:w-auto sm:rounded-full"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <MapPin size={18} aria-hidden="true" />
            </span>
            <span className="flex min-w-0 flex-col leading-tight text-left">
              <span className="text-[14px] font-bold text-ink-950">{tr(hero.location.city)}</span>
              <span className="text-[11.5px] font-medium text-slate-500">{tr(hero.location.label)}</span>
            </span>
            <ChevronRight
              size={17}
              aria-hidden="true"
              className="ml-auto shrink-0 text-teal-700/60 transition-colors group-hover:text-teal-700"
            />
          </a>

          <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-ink-950 sm:text-4xl lg:text-[2.85rem]">
            {tr(hero.titleLead)}{' '}
            <span className="relative whitespace-nowrap text-teal-700">
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 220 12" fill="none" aria-hidden="true">
                <path d="M3 9c34-5.5 74-7.5 106-6.5 38 1 74 3 108 6" stroke="#38BFB2" strokeWidth="5" strokeLinecap="round" opacity=".55" />
              </svg>
              {tr(hero.titleHighlight)}
            </span>{' '}
            {tr(hero.titleTrailing)}
          </h1>

          <p className="max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
            {tr(hero.description)}
          </p>

          {/* CTAs: stacked full-width pills on mobile */}
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto">
            <button
              type="button"
              onClick={onBook}
              className="btn btn-primary w-full justify-between gap-3 px-5 sm:w-auto"
            >
              <span className="inline-flex items-center gap-2.5">
                <CalendarDays size={18} aria-hidden="true" />
                {t('actions.bookPoint')}
              </span>
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-ink-900"
              >
                <ArrowRight size={16} />
              </span>
            </button>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline w-full sm:w-auto">
              <WhatsAppIcon size={18} />
              {t('actions.chatWhatsApp')}
            </a>
          </div>

          {/* feature rows on mobile, pill badges on desktop */}
          <ul className="flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-2">
            {siteConfig.hero.badges.map((badge) => (
              <li
                key={badge.icon.trim()}
                className="flex items-center gap-3 text-[15px] font-medium text-ink-900 sm:gap-1.5 sm:rounded-full sm:border sm:border-ink-900/10 sm:bg-white/80 sm:px-3 sm:py-1.5 sm:text-xs sm:font-semibold sm:text-ink-800"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 sm:h-auto sm:w-auto sm:bg-transparent sm:text-teal-600">
                  <ServiceIcon name={badge.icon} size={18} className="sm:h-3.5 sm:w-3.5" />
                </span>
                {tr(badge.label)}
              </li>
            ))}
          </ul>

          {/* quick call card */}
          <a href={siteConfig.phoneHref} className="card flex w-full items-center gap-3 px-4 py-3 sm:w-auto">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <Phone size={18} aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-tight text-left">
              <span className="text-[15px] font-bold text-teal-700">{siteConfig.phoneDisplay}</span>
              <span className="text-[11.5px] text-slate-500">{t('actions.callSupport')}</span>
            </span>
            <span
              aria-hidden="true"
              className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wa-500 text-white shadow-md"
            >
              <Phone size={17} fill="currentColor" />
            </span>
          </a>
        </div>

        {/* real work photo (replaces the old animated illustration) */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="card relative overflow-hidden p-4 sm:p-6">
            <img
              src="/images/lorry-photo.png"
              alt={tr({ en: 'Borewell lorry drilling rig at a site', kn: 'ಸ್ಥಳದಲ್ಲಿ ಬೋರವೆಲ್ ಲಾರಿ ಡ್ರಿಲ್ಲಿಂಗ್ ರಿಗ್' })}
              width="800"
              height="486"
              className="h-auto w-full rounded-xl"
            />
            <div className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center rounded-full bg-ink-950/90 px-3 py-2 text-center text-[11px] font-semibold text-aqua-300 sm:text-xs">
              {tr(siteConfig.hero.eyebrow)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
