import { withPublishedPrices } from '../data/publishedContent'
import ServiceCard from './ServiceCard'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLanguage } from '../context/LanguageContext'

export default function ServicesGrid({ onEnquire, prices }) {
  const { t } = useLanguage()
  const s = t('sections.services')
  return (
    <section id="services" className="section bg-water-dots">
      <div className="wrap">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} intro={s.intro} />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {withPublishedPrices(prices).map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 70}>
              <ServiceCard service={service} index={i} onEnquire={onEnquire} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
