import {
  Radar, Zap, CircleDot, Handshake, Cog, Camera, CloudRain, Wrench,
  Truck, MessageCircle, MapPin, IndianRupee, HeartHandshake, Drill,
  Droplets, Waves,
} from 'lucide-react'

/**
 * Maps icon names written in data files (services.js / siteConfig.js)
 * to lucide-react icons. The owner can change an icon by editing the
 * data file only.
 */
const ICONS = {
  Radar,
  Zap,
  CircleDot,
  Handshake,
  Cog,
  Camera,
  CloudRain,
  Wrench,
  Truck,
  MessageCircle,
  MapPin,
  IndianRupee,
  HeartHandshake,
  Drill,
  Droplets,
  Waves,
}

export default function ServiceIcon({ name, size = 22, className = '' }) {
  const Icon = ICONS[String(name || '').trim()] || Droplets
  return <Icon size={size} className={className} aria-hidden="true" strokeWidth={1.8} />
}
