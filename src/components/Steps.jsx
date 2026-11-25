import ServiceIcon from './icons/ServiceIcon'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'

export default function Steps() {
  const { t, tr } = useLanguage()
  const s = t('sections.steps')

  return (
    <section id="how-it-works" className="section bg-water-dots">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <ol className="mx-auto mt-12 flex max-w-5xl flex-col gap-8 lg:grid lg:grid-cols-4 lg:gap-7">
          {siteConfig.steps.map((step, i) => (
            <Reveal
              key={step.id}
              as="li"
              delay={i * 90}
              className="relative flex gap-4 lg:flex-col lg:gap-0"
            >
              {/* vertical connector (mobile) */}
              <span
                aria-hidden="true"
                className="absolute left-[26px] top-14 h-[calc(100%-1rem)] border-l-2 border-dashed border-ink-900/15 lg:hidden"
              />
              {/* horizontal connector (desktop) */}
              <span
                aria-hidden="true"
                className="absolute left-14 right-[-1.75rem] top-[26px] hidden border-t-2 border-dashed border-ink-900/15 lg:block"
              />

              {/* numbered icon tile */}
              <span className="card relative z-10 grid h-[52px] w-[52px] shrink-0 place-items-center rounded-2xl !rounded-2xl text-teal-700">
                <ServiceIcon name={step.icon} size={24} />
                <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-ink-800 text-[11px] font-bold text-white">
                  {i + 1}
                </span>
              </span>

              <div className="lg:mt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-700">
                  {s.stepLabel} {i + 1}
                </p>
                <h3 className="mt-1 text-base font-bold text-ink-950">{tr(step.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{tr(step.text)}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
