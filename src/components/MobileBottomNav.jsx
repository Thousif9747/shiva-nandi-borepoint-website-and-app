import { useState } from 'react'
import { House, Image, PhoneCall, Wrench } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { scrollToId } from '../utils/browser'

/**
 * App-style bottom tab bar for phones (visible under md only).
 * 4 items: Home, Services, Gallery, Contact.
 * The green floating WhatsApp button sits just above this bar.
 */
export default function MobileBottomNav() {
  const { t } = useLanguage()
  const [active, setActive] = useState('home')

  const items = [
    { id: 'home', icon: House, label: t('nav.home') },
    { id: 'services', icon: Wrench, label: t('nav.services') },
    { id: 'gallery', icon: Image, label: t('nav.gallery') },
    { id: 'contact', icon: PhoneCall, label: t('nav.contact') },
  ]

  const go = (item) => {
    setActive(item.id)
    scrollToId(item.id)
  }

  return (
    <nav
      aria-label="Bottom navigation"
      className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-ink-900/10 bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 6px)', paddingTop: '6px' }}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => go(item)}
            aria-label={item.label}
            className={`flex min-h-[56px] flex-col items-center justify-center gap-1 px-1 text-[10.5px] font-semibold transition-colors ${
              isActive ? 'text-teal-700' : 'text-ink-900/55 hover:text-ink-900'
            }`}
          >
            <Icon
              size={21}
              strokeWidth={isActive ? 2.4 : 1.9}
              aria-hidden="true"
            />
            <span className="max-w-full truncate leading-none">{item.label}</span>
            <span
              aria-hidden="true"
              className={`h-1 w-6 rounded-full transition-colors ${isActive ? 'bg-teal-600' : 'bg-transparent'}`}
            />
          </button>
        )
      })}
    </nav>
  )
}
