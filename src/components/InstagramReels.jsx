import InstagramIcon from './icons/InstagramIcon'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'
import { instagramPost } from '../data/publishedContent'

/**
 * Instagram video section: each reel plays inline (official Instagram
 * embed, no login needed - tap the play button inside the video).
 */
export default function InstagramReels({ items }) {
  const { t, tr } = useLanguage()
  const s = t('sections.reels')

  const reels = items
    .map((r) => ({ ...r, embed: instagramPost(r.url) }))
    .filter((r) => r.embed && r.url)

  return (
    <section id="reels" className="section bg-cream-100">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        {reels.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reels.map((reel, i) => (
              <Reveal
                key={reel.id}
                delay={(i % 3) * 70}
                as="article"
                className="card overflow-hidden p-0"
              >
                <div className="ig-reel">
                  <iframe
                    src={`https://www.instagram.com/${reel.embed.type}/${reel.embed.code}/embed/`}
                    title={`${tr(reel.title)} - ${s.play}`}
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-ink-900/8 p-4">
                  <p className="text-[13px] font-semibold leading-snug text-ink-950">
                    {tr(reel.title)}
                  </p>
                  <a
                    href={reel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm shrink-0 !min-h-[36px] !px-3 !text-xs"
                  >
                    <InstagramIcon size={14} />
                    {s.watch}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}

        {/* follow banner - also the fallback if no reels are added yet */}
        <Reveal className="mt-6 flex flex-col items-center gap-4 rounded-3xl bg-white p-6 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-earth-500/15 text-earth-600">
              <InstagramIcon size={22} />
            </span>
            <div>
              <p className="text-sm font-bold text-ink-950">{s.follow}</p>
              <p className="text-[13px] text-slate-500" lang="en">
                {siteConfig.instagramHandle}
              </p>
            </div>
          </div>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            {s.watch}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
