import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import WhatsAppIcon from './icons/WhatsAppIcon'

/**
 * Rate card shown as a popup (portal to <body>) so nothing on the home
 * page shifts or stretches. Opened from the service card's price chip.
 */
export default function RateCardModal({ rateCard, serviceName, onClose, onEnquire }) {
  const { t, tr } = useLanguage()
  const rc = rateCard

  // close on Escape + lock background scroll while open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  const tableHead =
    'border-b border-ink-900/15 text-left text-[11px] font-bold uppercase tracking-wide text-ink-900/50'
  const rowBase = 'text-[13px] text-ink-800'

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink-950/55 p-0 backdrop-blur-[2px] sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={tr(rc.title)}
    >
      <div
        className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-t-3xl bg-white p-5 shadow-lift sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <p className="flex items-center gap-2 text-[15px] font-bold text-ink-950">
            <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-teal-600" />
            {tr(rc.title)}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('actions.hideDetails')}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-700 hover:bg-ink-800/5"
          >
            <X size={18} />
          </button>
        </div>

        {/* depth rates */}
        <table className="w-full text-[13px] tabular-nums">
          <thead>
            <tr>
              <th className={`${tableHead} py-2 font-bold`}>{tr(rc.depthHead)}</th>
              <th className={`${tableHead} py-2 text-right font-bold`}>{tr(rc.rateHead)}</th>
            </tr>
          </thead>
          <tbody>
            {rc.depth.map((row, i) => (
              <tr key={row.range} className={rowBase}>
                <td
                  className={`rounded-l-lg py-2 pl-2.5 font-semibold ${
                    i % 2 === 0 ? 'bg-cream-100' : ''
                  }`}
                >
                  {row.range}
                </td>
                <td
                  className={`rounded-r-lg py-2.5 pr-2.5 text-right font-bold text-teal-800 ${
                    i % 2 === 0 ? 'bg-cream-100' : ''
                  }`}
                >
                  ₹{row.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* extras */}
        <p className="mb-1 mt-5 text-[11px] font-bold uppercase tracking-wide text-ink-900/50">
          {tr(rc.extrasHead)}
        </p>
        <table className="w-full text-[13px] tabular-nums">
          <thead>
            <tr>
              <th className={`${tableHead} py-2 font-bold`}>{tr(rc.itemHead)}</th>
              <th className={`${tableHead} py-2 text-right font-bold`}>{tr(rc.rateHead)}</th>
            </tr>
          </thead>
          <tbody>
            {rc.extras.map((row, i) => (
              <tr key={row.name.en} className={rowBase}>
                <td
                  className={`rounded-l-lg py-2 pl-2.5 font-semibold ${
                    i % 2 === 0 ? 'bg-cream-100' : ''
                  }`}
                >
                  {tr(row.name)}
                </td>
                <td
                  className={`rounded-r-lg py-2.5 pr-2.5 text-right font-bold text-teal-800 ${
                    i % 2 === 0 ? 'bg-cream-100' : ''
                  }`}
                >
                  ₹{row.rate}
                  {row.unit === 'ft' ? (
                    <span className="font-semibold text-ink-900/45"> /ft</span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4 rounded-xl bg-cream-100 p-3 text-[12px] leading-relaxed text-slate-600">
          {tr(rc.note)}
        </p>

        {/* actions */}
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => {
              onClose()
              onEnquire()
            }}
            className="btn btn-wa flex-1"
          >
            <WhatsAppIcon size={16} />
            {t('actions.enquire')}
          </button>
          <button type="button" onClick={onClose} className="btn btn-outline">
            {t('actions.hideDetails')}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
