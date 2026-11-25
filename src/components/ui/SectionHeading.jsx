import Reveal from './Reveal'

/** Shared section heading: eyebrow + title + optional intro. */
export default function SectionHeading({ eyebrow, title, intro, align = 'center' }) {
  const alignCls = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  return (
    <Reveal className={`flex flex-col gap-2 ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink-950 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}
