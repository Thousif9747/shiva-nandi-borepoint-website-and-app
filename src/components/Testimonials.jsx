import { Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const { t, tr } = useLanguage()
  const s = t('sections.testimonials')

  return (
    <section id="testimonials" className="section bg-water-dots">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 80}
              as="figure"
              className="card relative flex flex-col p-6"
            >
              {item.sample ? (
                <span className="absolute right-4 top-4 rounded-full border border-earth-500/40 bg-earth-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-earth-700">
                  {s.sampleBadge}
                </span>
              ) : null}

              <Quote size={26} className="text-aqua-300" aria-hidden="true" />

              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-ink-900">
                {tr(item.quote)}
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-ink-900/12 pt-4">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-teal-700/10 text-sm font-bold text-teal-800"
                >
                  {(item.name.replace('Sample - ', '') || 'A').trim().charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block text-[13px] font-bold text-ink-950">{item.name}</span>
                  <span className="block text-[12px] text-slate-500">{item.area}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        {testimonials.some((item) => item.sample) ? (
          <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-cream-200/70 px-4 py-3 text-center text-[12px] font-medium leading-relaxed text-earth-700">
            {s.sampleNote}
          </p>
        ) : null}
      </div>
    </section>
  )
}
