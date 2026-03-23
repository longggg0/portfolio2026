import { Mail, Phone, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

export default function Contact() {
  const isMobile = useIsMobile()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return alert('Please fill in all required fields.')

    const BOT_TOKEN = '8252689913:AAF7NhCvWU8lEOoDFlHl1UJr4AAEjlY-LIw'
    const CHAT_ID   = '1384205752'

    const text = `
📩 *New Portfolio Message*

👤 *Name:* ${form.name}
✉️ *Email:* ${form.email}
📌 *Subject:* ${form.subject || 'N/A'}
💬 *Message:* ${form.message}
    `.trim()

    setLoading(true)
    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
      })
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSent(false), 2000)
    } catch (err) {
      alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', background: '#0d1117', border: '1px solid #30363d',
    borderRadius: 8, padding: '12px 16px', color: '#e6edf3',
    fontSize: 14, outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const contacts = [
    { label: 'EMAIL ME', value: 'hornbunlong0@gmail.com', icon: <Mail size={20} color="#2563eb" />, href: 'mailto:hornbunlong0@gmail.com' },
    { label: 'PHONE',    value: '098 4634 614',            icon: <Phone size={20} color="#2563eb" />, href: 'tel:+855984634614' },
    { label: 'LOCATION', value: 'Phnom Penh, Toul Sangke', icon: <MapPin size={20} color="#2563eb" />, href: null },
  ]

  return (
    <section id="contact">
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: isMobile ? '48px 20px' : '80px 40px',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? 40 : 80,
        alignItems: 'start',
      }}>

        {/* Left */}
        <div>
          <h1 style={{ fontSize: isMobile ? 36 : 52, fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
            Let's Build<br />Something<br />Together
          </h1>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 40 }}>
            Have a project in mind or want to collaborate? I'm open to internship opportunities,
            freelance projects, and entry-level roles in web development.
          </p>

          {contacts.map(item => (
            <a
              key={item.label}
              href={item.href || undefined}
              style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
            >
              <div
                style={{
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '16px 20px', background: '#161b22', border: '1px solid #30363d',
                  borderRadius: 12, marginBottom: 12,
                  transition: 'border-color 0.2s',
                  cursor: item.href ? 'pointer' : 'default',
                }}
                onMouseEnter={e => { if (item.href) e.currentTarget.style.borderColor = '#2563eb' }}
                onMouseLeave={e => { if (item.href) e.currentTarget.style.borderColor = '#30363d' }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, background: '#21262d', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 10, color: '#8b949e', letterSpacing: '0.1em', marginBottom: 4 }}>{item.label}</p>
                  <p style={{ fontWeight: 600, fontSize: isMobile ? 13 : 15, wordBreak: 'break-word' }}>{item.value}</p>
                </div>
              </div>
            </a>
          ))}

          <p style={{ color: '#8b949e', fontSize: 13, marginTop: 28, marginBottom: 12 }}>
            Languages: English & Khmer
          </p>
        </div>

        {/* Right: form */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 16, padding: isMobile ? 20 : 32 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 16,
            marginBottom: 16,
          }}>
            <div>
              <label style={{ fontSize: 13, color: '#8b949e', display: 'block', marginBottom: 8 }}>Your Name</label>
              <input name="name" placeholder="John Doe" value={form.name} onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#2563eb'}
                onBlur={e => e.target.style.borderColor = '#30363d'}
              />
            </div>
            <div>
              <label style={{ fontSize: 13, color: '#8b949e', display: 'block', marginBottom: 8 }}>Email Address</label>
              <input name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange}
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#2563eb'}
                onBlur={e => e.target.style.borderColor = '#30363d'}
              />
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 13, color: '#8b949e', display: 'block', marginBottom: 8 }}>Subject</label>
            <input name="subject" placeholder="Project Inquiry" value={form.subject} onChange={handleChange}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#2563eb'}
              onBlur={e => e.target.style.borderColor = '#30363d'}
            />
          </div>

          <div style={{ marginBottom: 24 }}>
            <label style={{ fontSize: 13, color: '#8b949e', display: 'block', marginBottom: 8 }}>Message</label>
            <textarea name="message" rows={6} placeholder="Tell me about your project..."
              value={form.message} onChange={handleChange}
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = '#2563eb'}
              onBlur={e => e.target.style.borderColor = '#30363d'}
            />
          </div>

          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={loading}
            style={{ width: '100%', padding: '14px', fontSize: 15, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? '⏳ Sending...' : sent ? '✅ Message Sent!' : 'Send Message →'}
          </button>
        </div>

      </div>
    </section>
  )
}