/**
 * Builds public/og-image.png (1200x630) for link previews: the favicon icon in
 * brand red on white, with the clinic name beneath. Reads public/favicon.png.
 */
import sharp from 'sharp'

const ICON = 'public/favicon.png'
const OUT = 'public/og-image.png'
const RED = { r: 215, g: 25, b: 32 }

const { data, info } = await sharp(ICON).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
/* Recolour: dark pixels become brand red; light/transparent pixels vanish. */
for (let i = 0; i < data.length; i += info.channels) {
  const lum = (data[i] + data[i + 1] + data[i + 2]) / 3
  const a = (data[i + 3] / 255) * (1 - lum / 255)
  data[i] = RED.r
  data[i + 1] = RED.g
  data[i + 2] = RED.b
  data[i + 3] = Math.round(a * 255)
}
const icon = await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
  .resize(300, 300)
  .png()
  .toBuffer()

const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect x="0" y="0" width="1200" height="14" fill="#d71920"/>
  <text x="600" y="470" font-family="Georgia, serif" font-size="58" font-weight="700" fill="#1c1112" text-anchor="middle">AdGro Hair and GloSkin</text>
  <text x="600" y="530" font-family="Arial, sans-serif" font-size="30" letter-spacing="8" fill="#b8161e" text-anchor="middle">KOVILPATTI</text>
</svg>`)

await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#ffffff' } })
  .composite([
    { input: icon, left: 450, top: 90 },
    { input: text, left: 0, top: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(OUT)
console.log('wrote', OUT)
