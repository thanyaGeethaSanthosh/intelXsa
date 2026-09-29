export default function ComingSoon() {
  return (
    <main
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: '#0f172a',
        color: '#f8fafc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: 0,
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '600px', padding: '2rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#38bdf8' }}>
          We Are Launching Soon
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.5 }}>
          Our website is currently undergoing scheduled maintenance. We will be live shortly!
        </p>
      </div>
    </main>
  )
}
