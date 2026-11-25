// Dev helper: rasterize SVG sources into PWA icons + OG image.
// Run: node scripts/generate-assets.mjs   (only needed when art changes)
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pub = path.join(root, 'public')

async function run() {
  const icon = fs.readFileSync(path.join(pub, 'icons/icon-512.svg'))
  const maskable = fs.readFileSync(path.join(pub, 'icons/icon-maskable-512.svg'))

  await sharp(icon).resize(512, 512).png().toFile(path.join(pub, 'icons/icon-512.png'))
  await sharp(icon).resize(192, 192).png().toFile(path.join(pub, 'icons/icon-192.png'))
  await sharp(maskable).resize(512, 512).png().toFile(path.join(pub, 'icons/icon-maskable-512.png'))
  await sharp(maskable).resize(192, 192).png().toFile(path.join(pub, 'icons/icon-maskable-192.png'))
  await sharp(maskable).resize(180, 180).png().toFile(path.join(pub, 'icons/apple-touch-icon.png'))

  // Open Graph cover 1200x630
  const cover = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#052633"/><stop offset="1" stop-color="#0E8A86"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <g fill="none" stroke="#7FD8CF" opacity=".25">
      <circle cx="980" cy="315" r="150"/><circle cx="980" cy="315" r="230"/><circle cx="980" cy="315" r="310"/>
    </g>
    <rect x="60" y="60" width="1080" height="510" rx="34" fill="none" stroke="#F6E7D2" opacity=".22"/>
    <g transform="translate(90 90)">
      <rect x="0" y="0" width="96" height="96" rx="24" fill="#FBF9F4"/>
      <path d="M48 18c8.5 11 17 21 17 30.7a17 17 0 1 1-34 0c0-9.7 8.5-19.7 17-30.7Z" fill="#0E8A86"/>
      <path d="M28 74c11-7 24-7 35 0" stroke="#8A5A35" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M33 84c8-5 18-5 26 0" stroke="#8A5A35" stroke-width="4" stroke-linecap="round" fill="none"/>
    </g>
    <text x="90" y="290" font-family="Arial, Helvetica, sans-serif" font-size="30" letter-spacing="6" fill="#7FD8CF">BOREWELL POINT IDENTIFICATION</text>
    <text x="88" y="380" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="bold" fill="#FBF9F4">Shivanandi Borewell Point</text>
    <text x="90" y="450" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#E3CFB2">Serving all areas of Bengaluru</text>
    <text x="90" y="530" font-family="Arial, Helvetica, sans-serif" font-size="34" font-weight="bold" fill="#FBF9F4">+91 63637 35171</text>
  </svg>`
  await sharp(Buffer.from(cover)).png().toFile(path.join(pub, 'images/og-cover.png'))

  console.log('Icons and OG cover generated.')
}

run()
