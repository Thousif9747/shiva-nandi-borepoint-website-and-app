import { Phone } from 'lucide-react'
import Logo from './icons/Logo'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const LINKS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.howItWorks', href: '#how-it-works' },
  { key: 'nav.whyUs', href: '#why-us' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.faq', href: '#faq' },
  { key: 'nav.contact', href: '#contact' },
]

export default function Footer() {
  const { t, tr } = useLanguage()
  const s = t('sections.footer')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-950 pb-8 pt-14 text-cream-200">
      <div className="wrap grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        {/* about */}
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={38} />
            <span className="text-lg font-bold text-white">{siteConfig.businessName}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-200/70">
            {s.about}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-wa-500/40 bg-wa-500/10 px-3 py-1.5 text-[12px] font-bold text-aqua-300">
            {tr(siteConfig.serviceArea)}
          </p>
        </div>

        {/* quick links */}
        <nav aria-label={s.quickLinks}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{s.quickLinks}</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream-200/75 transition-colors hover:text-white"
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">{s.contactTitle}</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-cream-200/75">
            <li>
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 font-semibold hover:text-white">
                <Phone size={15} aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={buildWhatsAppUrl(`${t('whatsapp.greeting')}\n`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold hover:text-white"
              >
                <WhatsAppIcon size={15} />
                {t('actions.whatsappUs')}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-white"
              >
                {s.followLabel ?? s.followTitle}: {siteConfig.instagramHandle}
              </a>
            </li>
            <li className="leading-relaxed">
              {s.serviceAreaTitle}:<br />
              <span className="font-semibold text-white">{siteConfig.address.formatted}</span>
            </li>
            <li className="text-[13px] text-cream-200/60">{tr(siteConfig.hours)}</li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="wrap mt-12 border-t border-white/10 pt-6 text-center">
        <p className="text-[12px] text-cream-200/60">
          © {year} {siteConfig.businessName}. {s.rights}
        </p>
        <p className="mt-1.5 text-[12px] max-w-xl mx-auto text-cream-200/45">{s.disclaimer}</p>
      </div>
    </footer>
  )
}
