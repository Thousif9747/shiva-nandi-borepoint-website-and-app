import { Clock, MapPin, Phone } from 'lucide-react'
import InstagramIcon from './icons/InstagramIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'
import Logo from './icons/Logo'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import EnquiryForm from './EnquiryForm'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function Contact({ prefill }) {
  const { t, tr } = useLanguage()
  const s = t('sections.contact')

  return (
    <section id="contact" className="section bg-white">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* ------- contact details ------- */}
          <Reveal as="div" className="flex flex-col gap-5">
            <div className="card p-5 sm:p-6">
              <h3 className="text-base font-bold text-ink-950">{s.detailsTitle}</h3>

              <ul className="mt-4 flex flex-col gap-4">
                {/* phone / click to call */}
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-600/10 text-teal-700">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-wide text-ink-900/50">{s.phoneLabel}</p>
                    <a
                      href={siteConfig.phoneHref}
                      className="text-[15px] font-bold text-teal-800 underline decoration-2 underline-offset-4 decoration-aqua-400 hover:text-teal-700"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      <a
                        href={buildWhatsAppUrl(`${t('whatsapp.greeting')}\n${t('whatsapp.areaPrompt')} `)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-wa btn-sm"
                      >
                        <WhatsAppIcon size={15} />
                        {t('actions.whatsappUs')}
                      </a>
                    </div>
                  </div>
                </li>

                {/* instagram */}
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-earth-500/15 text-earth-600">
                    <InstagramIcon size={18} />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-wide text-ink-900/50">{s.instagramLabel}</p>
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-bold text-ink-900 hover:text-teal-700"
                    >
                      {siteConfig.instagramHandle}
                    </a>
                  </div>
                </li>

                {/* address */}
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-800/10 text-ink-800">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-wide text-ink-900/50">{s.addressLabel}</p>
                    <p className="text-[15px] font-semibold text-ink-900" lang="en">{siteConfig.address.formatted}</p>
                    <a
                      href={siteConfig.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-[13px] font-semibold text-teal-700 hover:text-teal-800"
                    >
                      {s.mapCta}
                    </a>
                  </div>
                </li>

                {/* hours */}
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cream-200 text-earth-600">
                    <Clock size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-wide text-ink-900/50">{s.hoursLabel}</p>
                    <p className="text-[15px] font-semibold text-ink-900">{tr(siteConfig.hours)}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* served areas tags */}
            <div className="card p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-base font-bold text-ink-950">
                <span className="inline-block h-2 w-2 rounded-full bg-wa-500" />
                {s.areasTitle}
              </h3>
              <p className="mt-1 text-[13px] font-medium text-teal-800">{tr(siteConfig.serviceArea)}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {siteConfig.serviceArea.areas.map((area) => (
                  <li key={area} className="tag">{area}</li>
                ))}
              </ul>
            </div>

            {/* map */}
            <div className="card overflow-hidden">
              <iframe
                src={siteConfig.mapEmbedUrl}
                title={s.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-56 w-full border-0"
              />
            </div>
          </Reveal>

          {/* ------- enquiry form ------- */}
          <Reveal
            as="div"
            delay={80}
            className={`flex flex-col gap-4${prefill?.nonce ? ' is-visible' : ''}`}
          >
            <div className="flex items-center gap-3">
              <Logo size={34} />
              <div>
                <h3 className="text-lg font-bold text-ink-950">{s.formTitle}</h3>
                <p className="text-[13px] text-slate-500">{s.formNote}</p>
              </div>
            </div>
            <EnquiryForm prefill={prefill} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
