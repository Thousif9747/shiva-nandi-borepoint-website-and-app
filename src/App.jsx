import { useEffect, useState } from 'react'
import { defaultContent, readPublishedContent, supabase } from './data/publishedContent'
import { LanguageProvider } from './context/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesGrid from './components/ServicesGrid'
import Methods from './components/Methods'
import Steps from './components/Steps'
import Highlights from './components/Highlights'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import InstagramReels from './components/InstagramReels'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import MobileBottomNav from './components/MobileBottomNav'
import Seo from './components/Seo'

export default function App() {
  const [content, setContent] = useState(defaultContent)
  useEffect(() => {
    if (!supabase) return undefined
    const controller = new AbortController()
    readPublishedContent(controller.signal)
      .then((published) => setContent(published.content))
      .catch((error) => {
        if (!controller.signal.aborted) console.error('Could not load published BorePoint content', error)
      })
    return () => controller.abort()
  }, [])

  // prefill = { serviceId, nonce } - bumping nonce re-selects a service
  const [prefill, setPrefill] = useState({ serviceId: '', nonce: 0 })

  const enquire = (serviceId) => {
    setPrefill((p) => ({ serviceId, nonce: p.nonce + 1 }))
  }

  return (
    <LanguageProvider>
      <Seo />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[70] focus:rounded-full focus:bg-ink-950 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero onBook={() => enquire('usa-technology')} />
        <ServicesGrid onEnquire={enquire} prices={content.prices} />
        <Methods />
        <Steps />
        <Highlights onEnquire={enquire} />
        <WhyUs />
        <Gallery items={content.gallery} />
        <InstagramReels items={content.reels} />
        <Testimonials />
        <FAQ />
        <Contact prefill={prefill} />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </LanguageProvider>
  )
}
