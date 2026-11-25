import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import ServiceIcon from './icons/ServiceIcon'
import WhatsAppIcon from './icons/WhatsAppIcon'
import RateCardModal from './RateCardModal'
import { useLanguage } from '../context/LanguageContext'
import { buildQuickEnquiryUrl } from '../utils/whatsapp'

// soft icon-tile background rotating teal / sand / earth
const TILE_STYLES = [
  'bg-teal-600/10 text-teal-700',
  'bg-earth-500/15 text-earth-600',
  'bg-ink-800/10 text-ink-800',
]

export default function ServiceCard({ service, index = 0, onEnquire }) {
  const { t, tr } = useLanguage()
  const [open, setOpen] = useState(false)
  const [rateOpen, setRateOpen] = useState(false)
  const detailsId = `service-details-${service.id}`

  // price may be a plain string or a bilingual { en, kn } object
  const priceLabel = service.price
    ? typeof service.price === 'object'
      ? tr(service.price)
      : `₹ ${service.price}`
    : t('actions.callForPrice')

  const hasRateCard = !!service.rateCard
  const rc = service.rateCard

  const quickEnquiryHref = buildQuickEnquiryUrl(
    service.name?.en || '',
    t('whatsapp.greeting'),
    t('whatsapp.areaPrompt'),
  )

  return (
    <article className="card group flex flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {/* icon + number */}
      <div className="mb-4 flex items-start justify-between">
        <span className={`grid h-12 w-12 place-items-center rounded-xl ${TILE_STYLES[index % 3]}`}>
          <ServiceIcon name={service.icon} size={24} />
        </span>
        <span className="text-[13px] font-bold tabular-nums text-ink-900/20">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-[15px] font-bold leading-snug text-ink-950">
        {tr(service.name)}
      </h3>

      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
        {tr(service.short)}
      </p>

      {/* price - tap opens the rate card when the service has one */}
      <div className="mt-3">
        {hasRateCard ? (
          <button
            type="button"
            onClick={() => setRateOpen(true)}
            aria-haspopup="dialog"
            className="inline-flex items-center gap-1.5 rounded-full bg-teal-700/10 px-3 py-1 text-[13px] font-bold text-teal-800 transition-colors hover:bg-teal-700/20"
          >
            {service.price ? priceLabel : t('actions.callForPrice')}
            <ChevronDown size={13} />
          </button>
        ) : service.price ? (
          <span className="inline-flex items-center rounded-full bg-teal-700/10 px-3 py-1 text-[13px] font-bold text-teal-800">
            {priceLabel}
          </span>
        ) : (
          <span className="inline-flex items-center rounded-full bg-cream-200/70 px-3 py-1 text-[13px] font-bold text-earth-600">
            {t('actions.callForPrice')}
          </span>
        )}
      </div>

      {/* expandable detail section */}
      <div
        id={detailsId}
        hidden={!open}
        className="mt-3 rounded-xl border border-dashed border-ink-900/15 bg-cream-100/60 p-3"
      >
        <p className="text-[13px] leading-relaxed text-slate-700">{tr(service.details)}</p>
        <p className="mt-2 flex items-start gap-1.5 text-[12px] font-semibold text-ink-700">
          <span className="mt-[2px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
          {tr(service.bestFor)}
        </p>
      </div>

      <div className="mt-auto pt-4" />

      {/* actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onEnquire(service.id)}
          className="btn btn-outline btn-sm flex-1"
        >
          {t('actions.enquire')}
        </button>
        <a
          href={quickEnquiryHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t('actions.quickWhatsApp')}: ${tr(service.name)}`}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wa-500/10 text-wa-600 transition-colors hover:bg-wa-500 hover:text-white"
        >
          <WhatsAppIcon size={18} />
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="inline-flex h-10 items-center gap-1 rounded-full px-3 text-[13px] font-semibold text-ink-700 hover:bg-ink-800/5"
        >
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {open ? t('actions.hideDetails') : t('actions.details')}
        </button>
      </div>

      {/* rate card opens as a popup, not inline on the home page */}
      {hasRateCard && rateOpen ? (
        <RateCardModal
          rateCard={rc}
          serviceName={tr(service.name)}
          onClose={() => setRateOpen(false)}
          onEnquire={() => onEnquire(service.id)}
        />
      ) : null}
    </article>
  )
}
