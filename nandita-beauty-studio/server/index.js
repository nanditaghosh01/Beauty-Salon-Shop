import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BOOKINGS_FILE = path.join(__dirname, 'data', 'bookings.json')
const NEWSLETTER_FILE = path.join(__dirname, 'data', 'newsletter.json')

const app = express()
app.use(cors())
app.use(express.json())

async function readJson(file) {
  const raw = await fs.readFile(file, 'utf-8')
  return JSON.parse(raw)
}
async function writeJson(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2))
}

// ── Bookings ──────────────────────────────────────────────
app.post('/api/bookings', async (req, res) => {
  const { name, email, phone, service, date, time, message } = req.body

  if (!name || !email || !phone || !service || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const bookings = await readJson(BOOKINGS_FILE)
  const newBooking = {
    id: Date.now(),
    name, email, phone, service, date, time,
    message: message || '',
    createdAt: new Date().toISOString(),
  }
  bookings.push(newBooking)
  await writeJson(BOOKINGS_FILE, bookings)

  res.status(201).json({ success: true, booking: newBooking })
})

// simple admin view — just visit this URL in your browser to see all bookings
app.get('/api/bookings', async (req, res) => {
  const bookings = await readJson(BOOKINGS_FILE)
  res.json(bookings)
})

// ── Newsletter ────────────────────────────────────────────
app.post('/api/newsletter', async (req, res) => {
  const { email } = req.body
  if (!email) return res.status(400).json({ error: 'Email is required' })

  const list = await readJson(NEWSLETTER_FILE)
  if (list.some((entry) => entry.email === email)) {
    return res.status(200).json({ success: true, alreadySubscribed: true })
  }

  list.push({ email, subscribedAt: new Date().toISOString() })
  await writeJson(NEWSLETTER_FILE, list)
  res.status(201).json({ success: true })
})

app.get('/api/newsletter', async (req, res) => {
  const list = await readJson(NEWSLETTER_FILE)
  res.json(list)
})

const PORT = 4000
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`))