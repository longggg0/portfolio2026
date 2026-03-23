import { useState, useEffect } from 'react'

const NAV = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills' },
  { id: 'contact',  label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      for (const item of [...NAV].reverse()) {
        const el = document.getElementById(item.id)
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(item.id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: 60,
        background: 'rgba(13,17,23,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #21262d',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, background: 'none', border: 'none', color: '#e6edf3', cursor: 'pointer' }}
        >
          <span style={{ background: '#2563eb', borderRadius: 6, padding: '3px 7px', fontSize: 13 }}>
            {'</>'}
          </span>
          HornBunlong
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}
          className="desktop-nav"
        >
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 14,
                color: active === id ? '#e6edf3' : '#8b949e',
                fontWeight: active === id ? 600 : 400,
                transition: 'color 0.2s',
              }}
            >
              {label}
            </button>
          ))}
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Hire Me
          </button>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="hamburger"
          style={{
            display: 'none', background: 'none', border: 'none',
            color: '#e6edf3', cursor: 'pointer', fontSize: 22, padding: 4,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 60, left: 0, right: 0, zIndex: 99,
          background: 'rgba(13,17,23,0.98)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #21262d',
          display: 'flex', flexDirection: 'column', padding: '16px 24px', gap: 4,
        }}>
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 16, padding: '12px 0', textAlign: 'left',
                color: active === id ? '#e6edf3' : '#8b949e',
                fontWeight: active === id ? 600 : 400,
                borderBottom: '1px solid #21262d',
              }}
            >
              {label}
            </button>
          ))}
          <button
            className="btn-primary"
            onClick={() => scrollTo('contact')}
            style={{ marginTop: 12, padding: '12px', fontSize: 15 }}
          >
            Hire Me
          </button>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  )
}