import Hero from './components/Hero'
import Products from './components/Products'
import WhyAshley from './components/WhyAshley'
import Marquee from './components/Marquee'
import About from './components/About'
import Reviews from './components/Reviews'
import Social from './components/Social'
import OrderCTA from './components/OrderCTA'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen overflow-x-hidden">
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 24px',
          background: 'rgba(15, 5, 20, 0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,45,120,0.18)',
        }}
      >
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
        >
          <img
            src="https://ashleysbouquetpop.com/cdn/shop/files/IMG_5764.jpg?v=1771279680"
            alt="Ashley's Bouquetpop Logo"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'top',
              border: '2px solid #FFD700',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display, serif)',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#fff',
              letterSpacing: '0.02em',
            }}
          >
            Ashley's Bouquetpop
          </span>
        </a>
        <a
          href="https://ashleysbouquetpop.com/collections/gift-arrangements"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '10px 20px',
            borderRadius: '9999px',
            background: '#FF2D78',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(255,45,120,0.45)',
          }}
        >
          Shop Now
        </a>
      </header>
      <Hero />
      <Products />
      <WhyAshley />
      <Marquee />
      <About />
      <Reviews />
      <Social />
      <OrderCTA />
      <Footer />
      <FloatingCTA />
    </div>
  )
}

export default App
