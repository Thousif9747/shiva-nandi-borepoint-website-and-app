import { Info } from 'lucide-react'
import ServiceIcon from './icons/ServiceIcon'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'

const CARD_THEMES = {
  teal: { tile: 'bg-teal-600/10 text-teal-700', bar: '#0E8A86' },
  aqua: { tile: 'bg-aqua-500/10 text-aqua-500', bar: '#17A89B' },
  earth: { tile: 'bg-earth-500/15 text-earth-600', bar: '#A97449' },
}

export default function Methods() {
  const { t, tr } = useLanguage()
  const s = t('sections.methods')

  return (
    <section id="methods" className="section bg-white">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.methods.map((m, i) => {
            const theme = CARD_THEMES[m.theme] || CARD_TEAL
            return (
              <Reveal
                key={m.id}
                delay={i * 80}
                as="article"
                className="card relative flex flex-col overflow-hidden p-6"
              >
                {/* top accent line */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ background: theme.bar }}
                />
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${theme.tile}`}>
                    <ServiceIcon name={m.icon} size={22} />
                  </span>
                  <h3 className="text-[15px] font-bold leading-snug text-ink-950">{tr(m.name)}</h3>
                </div>

                <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-ink-900/45">
                  {s.what}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{tr(m.what)}</p>

                <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-ink-900/45">
                  {s.bestFor}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{tr(m.bestFor)}</p>
              </Reveal>
            )
          })}
        </div>

        {/* honest disclaimer */}
        <Reveal delay={120} className="mt-6 flex items-start gap-3 rounded-2xl border border-earth-500/25 bg-earth-100/60 p-4">
          <Info size={18} className="mt-0.5 shrink-0 text-earth-600" aria-hidden="true" />
          <p className="text-sm font-medium leading-relaxed text-earth-700">
            {tr(siteConfig.methodsDisclaimer)}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

const CARD_TEAL = { tile: 'bg-teal-600/10 text-teal-700', bar: '#0E8A86' }
