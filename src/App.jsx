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
