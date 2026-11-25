import WhatsAppIcon from './icons/WhatsAppIcon'
import { useLanguage } from '../context/LanguageContext'
import { buildWhatsAppUrl } from '../utils/whatsapp'

/** Floating WhatsApp bubble, bottom-right (above the mobile call bar). */
export default function FloatingWhatsApp() {
  const { t } = useLanguage()
  const href = buildWhatsAppUrl(
    `${t('whatsapp.greeting')}\n${t('whatsapp.areaPrompt')} `,
  )
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('a11y.whatsappButton')}
      className="pulse-ring floating-wa inline-flex h-14 w-14 items-center justify-center rounded-full bg-wa-500 text-white shadow-lift transition-transform hover:scale-105"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
