import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../data/siteConfig'
import { services } from '../data/services'
import { faq } from '../data/faq'

const META = {
  en: {
    title: 'Borewell Point Identification in Bengaluru | Shivanandi Borewell Point',
    description:
      'Borewell point identification, water point finding, camera scanning, recharge, repair, lorry and robotic drilling - serving all areas of Bengaluru. Call +91 63637 35171.',
  },
  kn: {
    title: 'ಬೆಂಗಳೂರಿನಲ್ಲಿ ಬೋರವೆಲ್ ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ | ಶಿವಾನಂದಿ ಬೋರವೆಲ್ ಪಾಯಿಂಟ್',
    description:
      'ಬೋರವೆಲ್ ಪಾಯಿಂಟ್ ಗುರುತಿಸುವಿಕೆ, ಕ್ಯಾಮರಾ ಸ್ಕ್ಯಾನಿಂಗ್, ರೀಚಾರ್ಜ್, ದುರಸ್ತಿ, ಲಾರಿ ಮತ್ತು ರೋಬೋಟಿಕ್ ಡ್ರಿಲ್ಲಿಂಗ್ - ಬೆಂಗಳೂರಿನ ಎಲ್ಲಾ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೇವೆ. ಕರೆ ಮಾಡಿ: +91 63637 35171.',
  },
}

function upsertJsonLd(id, data) {
  if (typeof document === 'undefined') return
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/** LocalBusiness + FAQPage JSON-LD driven by the data files, plus meta updates. */
export default function Seo() {
  const { lang } = useLanguage()

  useEffect(() => {
    const meta = META[lang] || META.en
    document.title = meta.title

    const descEl = document.querySelector('meta[name="description"]')
    if (descEl) descEl.setAttribute('content', meta.description)

    const base = siteConfig.website

    upsertJsonLd('ld-business', {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${base}#business`,
      name: siteConfig.businessName,
      description: META.en.description,
      url: base,
      telephone: siteConfig.phoneHref.replace('tel:', ''),
      image: `${base}images/og-cover.png`,
      logo: `${base}icons/icon-512.png`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pinCode,
        addressCountry: siteConfig.address.formatted.split(',').pop()?.trim() || 'India',
      },
      areaServed: { '@type': 'City', name: 'Bengaluru' },
      sameAs: [siteConfig.instagram],
      openingHours: 'Mo-Su 07:00-20:00',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Borewell services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.name.en },
        })),
      },
    })

    upsertJsonLd('ld-faq', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q.en,
        acceptedAnswer: { '@type': 'Answer', text: item.a.en },
      })),
    })
  }, [lang])

  return null
}
