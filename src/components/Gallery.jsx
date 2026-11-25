import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ImageOff, X } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'
import { lockBodyScroll } from '../utils/browser'

export default function Gallery() {
  const { t, tr } = useLanguage()
  const s = t('sections.gallery')
  const items = siteConfig.gallery
  const [active, setActive] = useState(null) // index or null
  const closeRef = useRef(null)

  // empty state when the owner has not added photos yet
  if (!items.length) {
    return (
      <section id="gallery" className="section bg-white">
        <div className="wrap">
          <SectionHeading eyebrow={s.eyebrow} title={s.title} />
          <div className="card mx-auto mt-8 flex max-w-md flex-col items-center gap-3 p-8 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream-200 text-earth-500">
              <ImageOff size={26} aria-hidden="true" />
            </span>
            <h3 className="text-lg font-bold text-ink-950">{s.emptyTitle}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{s.emptyText}</p>
          </div>
        </div>
      </section>
    )
  }

  const show = (i) => setActive(i)
  const hide = () => setActive(null)
  const step = useCallback(
    (dir) =>
      setActive((cur) => (cur == null ? cur : (cur + dir + items.length) % items.length)),
    [items.length],
  )

  // keyboard support for the lightbox
  useEffect(() => {
    if (active == null) return undefined
    lockBodyScroll(true)
    const onKey = (e) => {
      if (e.key === 'Escape') hide()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      lockBodyScroll(false)
      document.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active == null, step])

  return (
    <section id="gallery" className="section bg-white">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div
          className={
            items.length === 1
              ? 'mx-auto mt-10 max-w-2xl'
              : 'mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4'
          }
        >
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 70} as="figure" className="group relative m-0">
              <button
                type="button"
                onClick={() => show(i)}
                aria-label={`${t('actions.viewPhoto')}: ${tr(item.alt)}`}
                className="block w-full overflow-hidden rounded-2xl border border-ink-900/10 bg-cream-100 shadow-card transition-shadow hover:shadow-lift"
              >
                <img
                  src={item.src}
                  alt={tr(item.alt)}
                  loading="lazy"
                  width="800"
                  height="600"
                  className="aspect-[4/3] w-full object-cover"
                />
              </button>
              {item.placeholder ? (
                <figcaption className="absolute left-2 top-2 rounded-full bg-ink-950/75 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-aqua-300">
                  {s.placeholder}
                </figcaption>
              ) : (
                <figcaption className="sr-only">{tr(item.alt)}</figcaption>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {/* lightbox */}
      {active != null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={s.lightboxLabel}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
          onClick={hide}
        >
          <div className="relative max-h-full w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={items[active].src}
              alt={tr(items[active].alt)}
              className="mx-auto max-h-[76vh] w-auto max-w-full rounded-2xl"
            />
            <p className="mt-3 text-center text-sm font-medium text-cream-200">
              {tr(items[active].alt)}
            </p>

            <button
              ref={closeRef}
              type="button"
              onClick={hide}
              aria-label={t('actions.close')}
              className="absolute -top-3 right-0 grid h-11 w-11 items-center justify-center rounded-full bg-white text-ink-950 shadow-lift sm:-right-3 sm:-top-3"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={t('actions.previous')}
              className="absolute left-2 top-[38%] grid h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-950 shadow-lift"
            >
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={t('actions.next')}
              className="absolute right-2 top-[38%] grid h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-ink-950 shadow-lift"
            >
              <ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
