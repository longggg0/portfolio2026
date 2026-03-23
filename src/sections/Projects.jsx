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

const PROJECTS = [
  {
    title: 'Full-Stack Web Mini-Ecommerce',
    desc: 'Final project at Ádity Academy. Built with React, Express.js, and PostgreSQL. Features a full shopping experience and an admin dashboard to manage products and stock.',
    adminNote: { email: 'admin@techstore.com', password: 'admin123' },
    tags: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Web Apps',
    image: '/src/assets/poster.png',
    url: 'https://mini-ecommerce-techstore-5v3b.vercel.app/',
    adminUrl: 'https://mini-ecommerce-techstore-5v3b.vercel.app/admin-dashboard',
  },
]

const CATEGORIES = ['All Projects', 'Web Apps']

export default function Projects() {
  const isMobile = useIsMobile()
  const [active, setActive] = useState('All Projects')

  const filtered = active === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section id="projects">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '48px 20px' : '60px 40px' }}>
        <h1 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, marginBottom: 12 }}>Selected Work</h1>
        <p style={{ color: '#8b949e', marginBottom: 40, maxWidth: 560, lineHeight: 1.7 }}>
          A showcase of web projects built through university coursework, self-study, and real-world training programs.
        </p>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 40, flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 20px', borderRadius: 8, border: '1px solid',
                borderColor: active === cat ? '#2563eb' : '#30363d',
                background: active === cat ? '#2563eb' : 'transparent',
                color: active === cat ? '#fff' : '#8b949e',
                cursor: 'pointer', fontSize: 14, transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 24,
        }}>
          {filtered.map((p, i) => (
            <div key={i} style={{ color: 'inherit', cursor: 'default' }}>
              <div
                style={{
                  background: '#161b22', border: '1px solid #30363d',
                  borderRadius: 12, overflow: 'hidden',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#2563eb'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#30363d'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ height: 160, background: '#21262d', overflow: 'hidden' }}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48 }}>🌐</div>
                  )}
                </div>
                <div style={{ padding: 20 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <h3 style={{ fontWeight: 700, fontSize: 16 }}>{p.title}</h3>
                    <span style={{ color: '#8b949e', fontSize: 16 }}>↗</span>
                  </div>
                  <p style={{ color: '#8b949e', fontSize: 13, lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>

                  {p.adminNote && (
                    <div style={{
                      background: '#0d1117', border: '1px solid #2563eb33',
                      borderRadius: 8, padding: '10px 14px', marginBottom: 12, fontSize: 12,
                    }}>
                      <p style={{ color: '#2563eb', fontWeight: 600, marginBottom: 6 }}>🔑 Admin Test Credentials</p>
                      <p style={{ color: '#8b949e' }}>Email: <span style={{ color: '#e6edf3' }}>{p.adminNote.email}</span></p>
                      <p style={{ color: '#8b949e' }}>Password: <span style={{ color: '#e6edf3' }}>{p.adminNote.password}</span></p>
                    </div>
                  )}

                  <div style={{ display: 'flex', gap: 10 }}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="btn-primary"
                      style={{ flex: 1, fontSize: 13, padding: '9px 0', textDecoration: 'none', textAlign: 'center' }}
                    >
                      👁 Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}