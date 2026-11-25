import { createClient } from '@supabase/supabase-js'
import { services } from './services'
import { siteConfig } from './siteConfig'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
export const supabase = url && key ? createClient(url, key) : null
export const galleryBucket = 'borepoint-gallery'

export const defaultContent = {
  gallery: siteConfig.gallery,
  reels: siteConfig.instagramReels,
  prices: {},
}

export function instagramPost(urlValue) {
  try {
    const url = new URL(urlValue)
    if (url.protocol !== 'https:' || !['instagram.com', 'www.instagram.com'].includes(url.host)) return null
    const match = url.pathname.match(/^\/(reel|p|tv)\/([A-Za-z0-9_-]+)\/?$/)
    return match ? { type: match[1], code: match[2] } : null
  } catch {
    return null
  }
}

export function withPublishedPrices(prices) {
  return services.map((service) => (
    Object.hasOwn(prices, service.id) ? { ...service, price: prices[service.id] } : service
  ))
}

export async function readPublishedContent(signal) {
  let query = supabase.from('borepoint_content').select('content, revision').eq('id', 1)
  if (signal) query = query.abortSignal(signal)
  const { data, error } = await query.single()
  if (error) throw error
  return { content: data.content ?? defaultContent, revision: data.revision }
}
