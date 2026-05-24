import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Sparkles = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    <path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
  </svg>
)
const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-tag', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.hero-title', { y: 40, opacity: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' })
      gsap.from('.hero-sub', { y: 30, opacity: 0, duration: 1, delay: 0.6, ease: 'power3.out' })
      gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 0.8, delay: 0.9, ease: 'power3.out', stagger: 0.15 })
      gsap.from('.hero-meta', { opacity: 0, duration: 1, delay: 1.3, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  const sparkles = Array.from({ length: 25 })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-bg/85 via-bg/75 to-bg" />

      {/* Animated gradient shimmer */}
      <div className="absolute inset-0 z-0 shimmer-bg opacity-60" />

      {/* Floating sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {sparkles.map((_, i) => {
          const size = 4 + Math.random() * 10
          const left = Math.random() * 100
          const top = Math.random() * 100
          const delay = Math.random() * 4
          const dur = 2 + Math.random() * 3
          const color = i % 3 === 0 ? '#FFD700' : '#FF2D78'
          return (
            <div
              key={i}
              className="absolute rounded-full animate-sparkle"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                background: color,
                boxShadow: `0 0 ${size * 2}px ${color}`,
                animationDelay: `${delay}s`,
                animationDuration: `${dur}s`,
              }}
            />
          )
        })}
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-pink/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full bg-gold/10 blur-3xl animate-float"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="hero-tag inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border-pink-mid bg-pink/5">
          <Sparkles className="w-4 h-4 text-pink" />
          <span className="font-accent tracking-widest text-sm text-pink">
            Savannah, GA · Handcrafted Gifts
          </span>
        </div>

        <h1 className="hero-title font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
          Making Every <br />
          <span className="shimmer-text">Celebration</span><br />
          <span className="italic text-glow">Unforgettable!</span>
        </h1>

        <p className="hero-sub mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-text-muted leading-relaxed">
          Handcrafted money bouquets, custom tumblers & gift arrangements.
          Based in Savannah, GA.
        </p>

        <div className="hero-cta mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://ashleysbouquetpop.com/collections/gift-arrangements"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-pink hover:bg-pink-dark text-white font-semibold rounded-full glow-pink hover:glow-pink-strong transition-all duration-300 hover:scale-105"
          >
            Shop Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-text-primary/20 hover:border-pink text-text-primary font-semibold rounded-full transition-all duration-300 hover:bg-pink/5"
          >
            View Products
          </a>
        </div>

        <div className="hero-cta mt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-text-muted">
          <a href="tel:+19107878462" className="hover:text-pink transition-colors">
            <span aria-hidden="true">&#128222;</span> (910) 787-8462
          </a>
          <span className="opacity-40">&bull;</span>
          <span><span aria-hidden="true">&#128336;</span> Order Anytime &mdash; Open 24 Hours</span>
          <span className="opacity-40">&bull;</span>
          <span><span aria-hidden="true">&#128205;</span> Savannah, GA</span>
        </div>

        <div className="hero-meta mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-accent tracking-widest text-text-muted">
          <span><span className="text-gold">★★★★★</span> 100% Recommended</span>
          <span className="opacity-50">|</span>
          <span>3,200+ TikTok Followers</span>
          <span className="opacity-50">|</span>
          <span>258 IG Posts</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-pink/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-pink animate-float" />
        </div>
      </div>
    </section>
  )
}
