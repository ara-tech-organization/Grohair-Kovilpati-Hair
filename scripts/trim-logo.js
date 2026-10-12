/**
 * Trims the white margin off src/assets/Logo.png (a square canvas) and writes
 * src/assets/logo-trim.png, so the header and footer show the mark at a useful
 * size. The source logo is only read.
 */
import sharp from 'sharp'

const SRC = 'src/assets/Logo.png'
const OUT = 'src/assets/logo-trim.png'

const trimmed = await sharp(SRC).flatten({ background: '#ffffff' }).trim({ threshold: 12 }).toBuffer()
const { width, height } = await sharp(trimmed).metadata()
const padX = Math.round(width * 0.02)
const padY = Math.round(height * 0.04)
await sharp(trimmed)
  .extend({ top: padY, bottom: padY, left: padX, right: padX, background: '#ffffff' })
  .png({ compressionLevel: 9 })
  .toFile(OUT)
const meta = await sharp(OUT).metadata()
console.log(`${OUT}: ${meta.width}x${meta.height}`)
