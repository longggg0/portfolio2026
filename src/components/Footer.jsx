export default function Footer() {
  return (
    <>
      <footer style={{
        borderTop: '1px solid #21262d',
        padding: '20px 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        color: '#8b949e', fontSize: 13, flexWrap: 'wrap', gap: 12,
      }}>
        <span>© 2025 Horn Bunlong. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <span style={{ cursor: 'pointer' }}>hornbunlong0@gmail.com</span>
          <span style={{ cursor: 'pointer' }}>Phnom Penh, Cambodia</span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          footer {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </>
  )
}