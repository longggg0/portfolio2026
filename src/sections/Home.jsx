import { Eye, Download, Mail } from 'lucide-react'
import coding from '../assets/coding.jpg'

const socials = [
  { label: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', url: 'https://github.com/longggg0' },
  { label: 'Facebook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg', url: 'https://www.facebook.com/horn.bunlong.71' },
  { label: 'Telegram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg', url: 'https://t.me/long_web01' },
  { label: 'Mail', logo: null, url: 'mailto:hornbunlong0@gmail.com' },
]

export default function Home() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home">
      <style>{`
        .home-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .home-title { font-size: 64px; }
        .home-img { display: block; }
        @media (max-width: 768px) {
          .home-grid { grid-template-columns: 1fr; gap: 40px; }
          .home-title { font-size: 36px; }
          .home-img { display: none; }
        }
      `}</style>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div className="home-grid">

          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#161b22', border: '1px solid #30363d',
              borderRadius: 20, padding: '5px 14px', fontSize: 12,
              color: '#8b949e', marginBottom: 28, letterSpacing: '0.05em',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#3fb950', display: 'inline-block' }} />
              AVAILABLE FOR WORK
            </div>

            <h1 className="home-title" style={{ fontWeight: 800, lineHeight: 1.05, marginBottom: 20 }}>
              Hi, I'm Horn Bunlong.
            </h1>

            <p style={{ color: '#8b949e', fontSize: 18, lineHeight: 1.75, marginBottom: 40 }}>
              I build <span style={{ color: '#2563eb', fontWeight: 600 }}>full-stack web applications</span> using
              React, Node.js, and PostgreSQL. A software development student passionate about
              clean code and real-world projects.
            </p>

            <div style={{ display: 'flex', gap: 14, marginBottom: 48, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => scrollTo('projects')} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Eye size={15} /> View Projects
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1YIaUISf9fV2pBQoDVWMnj2XDH3h7SGNM"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', padding: '10px 20px', borderRadius: 8 }}
              >
                <Download size={15} /> Resume
              </a>
            </div>

            <div>
              <p style={{ color: '#8b949e', fontSize: 11, letterSpacing: '0.1em', marginBottom: 14 }}>
                CONNECT WITH ME
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {socials.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer" title={s.label}
                    style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: '#161b22', border: '1px solid #30363d',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', textDecoration: 'none', transition: 'border-color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = '#2563eb'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = '#30363d'}
                  >
                    {s.logo
                      ? <img src={s.logo} alt={s.label} style={{ width: 18, height: 18, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                      : <Mail size={18} color="#8b949e" />
                    }
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="home-img" style={{ position: 'relative', justifyContent: 'center' }}>
            <div style={{ width: '100%', borderRadius: 16, overflow: 'hidden', border: '1px solid #30363d' }}>
              <img src={coding} alt="Horn Bunlong" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{
              position: 'absolute', bottom: 20, left: '15%',
              background: 'rgba(13,17,23,0.92)', border: '1px solid #30363d',
              borderRadius: 10, padding: '10px 14px', backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#3fb950' }} />
                <span style={{ fontSize: 11, color: '#8b949e' }}>Currently studying</span>
              </div>
              <p style={{ fontSize: 12, fontWeight: 600 }}>Bachelor of Software Development — Norton University</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}