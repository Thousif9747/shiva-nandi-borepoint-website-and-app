import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { useLanguage } from '../context/LanguageContext'
import { faq } from '../data/faq'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function FAQ() {
  const { t, tr } = useLanguage()
  const s = t('sections.faq')
  const [openId, setOpenId] = useState(faq[0]?.id ?? null)

  return (
    <section id="faq" className="section bg-white">
      <div className="wrap max-w-3xl">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-10 flex flex-col gap-3">
          {faq.map((item, i) => {
            const open = openId === item.id
            const panelId = `faq-panel-${item.id}`
            const btnId = `faq-btn-${item.id}`
            return (
              <Reveal key={item.id} delay={(i % 4) * 50} as="div" className="card overflow-hidden">
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[15px] font-semibold leading-snug text-ink-950">
                      {tr(item.q)}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-teal-700 transition-transform ${
                        open ? 'rotate-180 bg-teal-600/10' : 'bg-cream-200'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown size={16} strokeWidth={2.5} />
                    </span>
                  </button>
                </h3>
                {open ? (
                  <div id={panelId} role="region" aria-labelledby={btnId} className="border-t border-ink-900/8 bg-cream-50/60 px-5 py-4">
                    <p className="text-sm leading-relaxed text-slate-600">{tr(item.a)}</p>
                  </div>
                ) : null}
              </Reveal>
            )
          })}
        </div>

        {/* still have a question */}
        <Reveal className="mt-8 flex flex-col items-center gap-3 rounded-3xl bg-cream-100 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[15px] font-semibold text-ink-950">{s.moreQuestions}</p>
          <a
            href={buildWhatsAppUrl(`${t('whatsapp.greeting')}\n`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-sm"
          >
            <WhatsAppIcon size={16} />
            {s.askLink}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
