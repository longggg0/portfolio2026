import profileImg from '../assets/profile.jpg'
import { Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const socials = [
  { label: 'GitHub',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com/longggg0' },
  { label: 'Facebook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg',              url: 'https://www.facebook.com/horn.bunlong.71' },
  { label: 'Telegram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg',              url: 'https://t.me/long_web01' },
  { label: 'Mail',     logo: null,                                                                            url: 'mailto:hornbunlong0@gmail.com' },
]
const experience = [
  {
    title: 'Full-Stack Web Development Trainee',
    company: 'Ádity Academy (Collaboration with Wing Bank)',
    period: '2025 — Present',
    current: true,
    desc: 'Completed a 4-month intensive training program in full-stack web development. Built web applications using HTML, Tailwind CSS, JavaScript, React.js, and Express.js. Learned RESTful API development and testing with Postman. Worked with PostgreSQL and gained knowledge of Docker and deployment concepts.',
  },
  {
    title: 'Web Development Student Projects',
    company: 'Norton University Coursework',
    period: '2024 — Present',
    desc: 'Developed several web projects as part of university coursework. Built responsive web interfaces using HTML, CSS, Tailwind CSS, and JavaScript. Implemented front-end features using React.js. Designed and managed simple databases for academic projects.',
  },
]

const frontendSkills = ['HTML5', 'CSS', 'JavaScript', 'React.js', 'Next.js (Basic)', 'Tailwind CSS']
const backendSkills = ['Node.js', 'Express.js', 'PostgreSQL', 'Firebase', 'Docker (Basic)', 'Git', 'Postman']

const education = [
  { school: 'Norton University', degree: 'Bachelor of Software Development', period: '2023 — Present', note: 'Fourth-Year Student' },
  { school: 'Spring Education Center', degree: 'General English Program, Level 12', period: 'Completed 2023' },
  { school: 'SALA IT', degree: 'Web Full-Stack Development Course', period: '2026' },
  { school: 'ISTAD', degree: 'Web Front-End Short Course', period: 'Feb 2025' },
]

const stats = [
  { value: '4th', label: 'YEAR STUDENT' },
  { value: '2+', label: 'PROJECTS' },
  { value: '2', label: 'LANGUAGES' },
  { value: '1+', label: 'YEARS TRAINING' },
]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return isMobile
}

export default function About() {
  const isMobile = useIsMobile()

  return (
    <section id="about" style={{ maxWidth: 1100, margin: '0 auto', padding: isMobile ? '48px 20px' : '80px 40px' }}>

      {/* ── TOP HERO ROW ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.6fr',
        gap: isMobile ? 24 : 48,
        alignItems: 'start',
        marginBottom: 64,
      }}>

        {/* Photo + name card */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 16, overflow: 'hidden' }}>
          <img
            src={profileImg}
            alt="Horn Bunlong"
            style={{
              width: '100%',
              height: isMobile ? 'auto' : 420,
              maxHeight: isMobile ? 360 : 'none',
              objectFit: isMobile ? 'contain' : 'cover',
              objectPosition: 'center top',
              display: 'block',
              background: '#0d1117',
            }}
          />
          <div style={{ padding: '20px 24px' }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Horn Bunlong</h2>
            <p style={{ color: '#2563eb', fontSize: 14, marginBottom: 16 }}>Software Development Student</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 20 }}>
              <span style={{ color: '#8b949e', fontSize: 13 }}>📍 Phnom Penh, Toul Sangke</span>
              <span style={{ color: '#8b949e', fontSize: 13 }}>📞 098 4634 614</span>
              <span style={{ color: '#8b949e', fontSize: 13 }}>✉️ hornbunlong0@gmail.com</span>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label}
                  style={{
                    flex: 1, height: 36, borderRadius: 8,
                    background: '#21262d', border: '1px solid #30363d',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', textDecoration: 'none', transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#2563eb'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#30363d'}
                >
                  {s.logo
                    ? <img src={s.logo} alt={s.label} style={{ width: 16, height: 16, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                    : <Mail size={16} color="#8b949e" />
                  }
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: intro + stats */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#161b22', border: '1px solid #30363d',
            borderRadius: 20, padding: '4px 14px', fontSize: 12,
            color: '#8b949e', marginBottom: 20, letterSpacing: '0.05em',
          }}>
            👤 ABOUT ME
          </div>

          <h1 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 800, lineHeight: 1.1, marginBottom: 30 }}>
            Building the web,<br />one project at a time.
          </h1>

          <p style={{ color: '#8b949e', lineHeight: 1.85, marginBottom: 40 }}>
            Hello! I'm Bunlong, a fourth-year{' '}
            <span style={{ color: '#2563eb' }}>Software Development</span> student at Norton University.
            I'm passionate about building clean, responsive web applications and growing as a full-stack developer
            through hands-on projects and real-world training.
          </p>
          <p style={{ color: '#8b949e', lineHeight: 1.85, marginBottom: 36 }}>
            I completed an intensive full-stack training program at Ádity Academy in collaboration with Wing Bank,
            where I strengthened my skills in React, Node.js, PostgreSQL, and deployment tools like Docker.
          </p>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {stats.map(s => (
              <div key={s.label} style={{
                background: '#161b22', border: '1px solid #30363d',
                borderRadius: 12, padding: isMobile ? '12px 8px' : '16px 12px', textAlign: 'center',
              }}>
                <div style={{ fontSize: isMobile ? 20 : 26, fontWeight: 800, color: '#2563eb', marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontSize: 10, color: '#8b949e', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MIDDLE ROW: Skills + Education ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: 24,
        marginBottom: 64,
      }}>

        {/* Skills */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 16, padding: 28 }}>
          <h3 style={{ fontWeight: 700, marginBottom: 24, fontSize: 16 }}>🛠 Technical Skills</h3>

          <p style={{ fontSize: 11, color: '#8b949e', letterSpacing: '0.1em', marginBottom: 10 }}>FRONTEND</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {frontendSkills.map(s => <span key={s} className="tag">{s}</span>)}
          </div>

          <p style={{ fontSize: 11, color: '#8b949e', letterSpacing: '0.1em', marginBottom: 10 }}>BACKEND & TOOLS</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {backendSkills.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>

        {/* Education */}
        <div style={{ background: '#161b22', border: '1px solid #30363d', borderRadius: 16, padding: 28 }}>
          <h3 style={{ fontWeight: 700, marginBottom: 24, fontSize: 16 }}>🎓 Education</h3>
          {education.map((e, i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, alignItems: 'flex-start',
              marginBottom: i < education.length - 1 ? 20 : 0,
              paddingBottom: i < education.length - 1 ? 20 : 0,
              borderBottom: i < education.length - 1 ? '1px solid #21262d' : 'none',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: '#21262d', border: '1px solid #30363d',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, flexShrink: 0,
              }}>
                🎓
              </div>
              <div>
                <strong style={{ fontSize: 13 }}>{e.degree}</strong>
                <p style={{ color: '#2563eb', fontSize: 12, margin: '2px 0' }}>{e.school}</p>
                <p style={{ color: '#8b949e', fontSize: 11 }}>{e.period}{e.note ? ` · ${e.note}` : ''}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM ROW: Experience timeline ── */}
      <div>
        <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 32 }}>⏱ Experience</h3>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          <div style={{
            position: 'absolute', left: 5, top: 8, bottom: 8,
            width: 1, background: '#21262d',
          }} />

          {experience.map((job, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < experience.length - 1 ? 40 : 0 }}>
              <div style={{
                position: 'absolute', left: -27, top: 6,
                width: 12, height: 12, borderRadius: '50%',
                border: `2px solid ${job.current ? '#2563eb' : '#30363d'}`,
                background: job.current ? '#2563eb' : '#0d1117',
              }} />

              <div style={{
                background: '#161b22', border: `1px solid ${job.current ? '#2563eb33' : '#30363d'}`,
                borderRadius: 14, padding: isMobile ? 16 : 24,
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 6,
                  gap: 8,
                }}>
                  <div>
                    <h4 style={{ fontSize: isMobile ? 14 : 16, fontWeight: 700, marginBottom: 4 }}>{job.title}</h4>
                    <p style={{ color: '#8b949e', fontSize: 13 }}>{job.company}</p>
                  </div>
                  <span style={{
                    background: job.current ? '#2563eb22' : '#21262d',
                    color: job.current ? '#2563eb' : '#8b949e',
                    border: `1px solid ${job.current ? '#2563eb44' : '#30363d'}`,
                    borderRadius: 20, padding: '4px 12px', fontSize: 12, whiteSpace: 'nowrap',
                    alignSelf: isMobile ? 'flex-start' : 'auto',
                  }}>
                    {job.period}
                  </span>
                </div>
                <p style={{ color: '#8b949e', fontSize: 14, lineHeight: 1.75, marginTop: 12 }}>{job.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}