import ServiceIcon from './icons/ServiceIcon'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'

export default function WhyUs() {
  const { t, tr } = useLanguage()
  const s = t('sections.whyUs')

  return (
    <section id="why-us" className="section bg-cream-100">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.whyUs.map((point, i) => (
            <Reveal
              key={point.id}
              delay={(i % 3) * 70}
              as="article"
              className="card flex gap-4 p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink-800/6 text-teal-700">
                <ServiceIcon name={point.icon} size={22} />
              </span>
              <div>
                <h3 className="text-[15px] font-bold text-ink-950">{tr(point.title)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{tr(point.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
