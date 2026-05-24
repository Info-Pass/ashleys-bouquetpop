const FloatingCTA = () => (
  <a
    href="https://ashleysbouquetpop.com"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      background: '#FF2D78',
      color: '#fff',
      padding: '14px 24px',
      borderRadius: '50px',
      fontWeight: '700',
      fontSize: '16px',
      textDecoration: 'none',
      boxShadow: '0 0 20px rgba(255,45,120,0.5)',
      animation: 'pulse 2s ease-in-out infinite',
    }}
  >
    Order Now &#128717;
  </a>
)

export default FloatingCTA
