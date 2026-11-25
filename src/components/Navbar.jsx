import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import Logo from './icons/Logo'
import WhatsAppIcon from './icons/WhatsAppIcon'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import { listenScroll } from '../utils/browser'

const NAV_LINKS = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.howItWorks', href: '#how-it-works' },
  { key: 'nav.whyUs', href: '#why-us' },
  { key: 'nav.gallery', href: '#gallery' },
  { key: 'nav.contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => listenScroll(() => setScrolled(window.scrollY > 8)), [])

  // lock background scroll while the mobile menu is open
  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', open && window.innerWidth < 768)
    return () => document.documentElement.classList.remove('no-scroll')
  }, [open])

  const waHref = buildWhatsAppUrl(
    `${t('whatsapp.greeting')} ${t('nav.services').toLowerCase()}\n${t('whatsapp.areaPrompt')} `,
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-cream-50/95 shadow-card backdrop-blur'
          : 'bg-cream-50/70 backdrop-blur-sm'
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between gap-3 md:h-[72px]" aria-label="Main">
        {/* brand */}
        <a href="#home" className="flex items-center gap-2.5 rounded-lg py-1" aria-label={t('a11y.logoLabel')}>
          <Logo size={38} />
          <span className="flex flex-col leading-tight">
            <span className="text-[15px] font-bold tracking-tight text-ink-950 sm:text-base">
              {siteConfig.businessName}
            </span>
            <span className="hidden text-[11px] font-medium text-teal-700 sm:block">
              Borewell services - Bengaluru
            </span>
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-800 transition-colors hover:bg-ink-800/5 hover:text-ink-950"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* desktop actions */}
        <div className="flex items-center gap-2.5">
          <LanguageToggle className="shrink-0" />
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-wa btn-sm hidden sm:inline-flex"
          >
            <WhatsAppIcon size={16} />
            {t('actions.whatsappUs')}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.menu')}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-ink-900/10 bg-white text-ink-900 lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-ink-900/5 transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="wrap flex flex-col gap-1 py-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-[15px] font-semibold text-ink-900 hover:bg-white"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
          <li className="mt-2 flex flex-wrap items-center gap-2.5 border-t border-ink-900/10 pt-3">
            <LanguageToggle />
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-sm"
              onClick={() => setOpen(false)}
            >
              <WhatsAppIcon size={16} />
              {t('actions.whatsappUs')}
            </a>
            <a href={siteConfig.phoneHref} className="btn btn-outline btn-sm">
              <Phone size={16} aria-hidden="true" />
              {t('actions.callNow')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
