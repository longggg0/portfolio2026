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

function Bar({ name, pct }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 7 }}>
        <span style={{ fontSize: 14 }}>{name}</span>
        <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 14 }}>{pct}%</span>
      </div>
      <div style={{ height: 4, background: '#21262d', borderRadius: 2 }}>
        <div style={{ height: '100%', width: `${pct}%`, background: 'linear-gradient(90deg,#1d4ed8,#2563eb)', borderRadius: 2 }} />
      </div>
    </div>
  )
}

const FEATURED = [
  { name: 'React.js', level: 'Intermediate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', level: 'Intermediate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', level: 'Intermediate', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Tailwind CSS', level: 'Advanced', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
]

const FRONTEND = [
  { name: 'HTML5 / CSS3', pct: 85 },
  { name: 'JavaScript (ES6+)', pct: 78 },
  { name: 'React.js', pct: 75 },
]

const BACKEND = [
  { name: 'Node.js / Express.js', pct: 72 },
  { name: 'PostgreSQL', pct: 70 },
  { name: 'REST API / Postman', pct: 75 },
]

const PROFESSIONAL = [
  { name: 'Team Collaboration', sub: 'Project-based teamwork experience', icon: '👥' },
  { name: 'Problem Solving', sub: 'Analytical and logical approach', icon: '🔵' },
  { name: 'Communication', sub: 'English & Khmer — fast learner', icon: '📣' },
  { name: 'Adaptability', sub: 'Quick to pick up new tools & tech', icon: '⚡' },
]

export default function Skills() {
  const isMobile = useIsMobile()

  return (
    <section id="skills">
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: isMobile ? '48px 20px' : '60px 40px' }}>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#161b22', border: '1px solid #30363d', borderRadius: 20, padding: '5px 14px', fontSize: 12, color: '#8b949e', marginBottom: 20 }}>
          {'</>'} EXPERTISE
        </div>

        <h1 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, marginBottom: 2 }}>Technical Proficiency</h1>

        <p style={{ color: '#8b949e', maxWidth: 520, lineHeight: 1.75, marginBottom: 48 }}>
          Skills built through university study, self-learning, and hands-on training in full-stack web development.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid #21262d', marginBottom: 40 }} />

        {/* Featured Stack */}
        <h3 style={{ fontWeight: 700, marginBottom: 20 }}>Featured Stack</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 16,
          marginBottom: 48,
        }}>
          {FEATURED.map(item => (
            <div key={item.name} style={{
              background: '#161b22', border: '1px solid #30363d',
              borderRadius: 12, padding: '24px 16px', textAlign: 'center',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#2563eb'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#30363d'}
            >
              <img src={item.logo} alt={item.name} style={{ width: 40, height: 40, marginBottom: 12, objectFit: 'contain' }} />
              <p style={{ fontWeight: 700, marginBottom: 4 }}>{item.name}</p>
              <p style={{ color: '#8b949e', fontSize: 12 }}>{item.level}</p>
            </div>
          ))}
        </div>

        {/* Skill bars grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? 32 : 48,
          marginBottom: 48,
        }}>
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>🖥 Frontend Development</h3>
            {FRONTEND.map(s => <Bar key={s.name} {...s} />)}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {['Tailwind CSS', 'Next.js (Basic)', 'Responsive Design'].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>🗄 Backend & Database</h3>
            {BACKEND.map(s => <Bar key={s.name} {...s} />)}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 }}>
              {['Firebase', 'Docker (Basic)', 'Postman'].map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>⚙️ DevOps & Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {['Git', 'GitHub', 'Docker (Basic)', 'VS Code', 'Postman'].map(t => (
                <span key={t} className="tag" style={{ padding: '8px 16px', fontSize: 13 }}>{t}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>🏅 Soft Skills</h3>
            {PROFESSIONAL.map(item => (
              <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#21262d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14 }}>{item.name}</p>
                  <p style={{ color: '#8b949e', fontSize: 12 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
} 