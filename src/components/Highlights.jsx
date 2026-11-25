import { Check } from 'lucide-react'
import ServiceIcon from './icons/ServiceIcon'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'

const CARD_BG = {
  teal: 'border-teal-600/20 bg-gradient-to-b from-teal-600/[0.06] to-white',
  earth: 'border-earth-500/25 bg-gradient-to-b from-earth-500/[0.08] to-white',
}

export default function Highlights({ onEnquire }) {
  const { t, tr } = useLanguage()
  const s = t('sections.highlights')

  return (
    <section id="highlights" className="section bg-white">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {siteConfig.highlights.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 90}
              as="article"
              className={`card relative overflow-hidden rounded-3xl border p-6 sm:p-7 ${CARD_BG[item.theme]}`}
            >
              {/* corner ripple decoration */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border-[12px] border-current opacity-[0.05]"
              />

              <div className="flex items-center gap-3">
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: item.iconBg }}
                >
                  <ServiceIcon name={item.icon} size={24} className="text-ink-800" />
                </span>
                <h3 className="text-lg font-bold leading-snug text-ink-950">{tr(item.title)}</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600">{tr(item.text)}</p>

              <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-ink-900/45">
                {s.benefits}
              </p>
              <ul className="mt-2 flex flex-col gap-2">
                {item.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-start gap-2.5 text-sm text-ink-900">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-600/15 text-teal-700">
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    {tr(b)}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => onEnquire(item.serviceHint)}
                className="btn btn-outline btn-sm mt-6"
              >
                {tr(item.cta)}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
