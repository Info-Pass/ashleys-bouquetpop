import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

export default function OrderCTA() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content > *', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-pink p-12 sm:p-16 md:p-20 text-center glow-pink-strong">
          {/* Decorative gold sparkles */}
          <div className="absolute top-8 left-8 w-3 h-3 bg-gold rounded-full glow-gold animate-sparkle" />
          <div
            className="absolute top-16 right-16 w-2 h-2 bg-gold rounded-full glow-gold animate-sparkle"
            style={{ animationDelay: '0.7s' }}
          />
          <div
            className="absolute bottom-12 left-1/4 w-2 h-2 bg-gold rounded-full glow-gold animate-sparkle"
            style={{ animationDelay: '1.4s' }}
          />
          <div
            className="absolute bottom-8 right-8 w-3 h-3 bg-gold rounded-full glow-gold animate-sparkle"
            style={{ animationDelay: '2.1s' }}
          />

          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-dark/30 to-pink-dark/50" />

          <div className="cta-content relative">
            <div className="font-accent tracking-[0.4em] text-gold text-sm mb-6">
              ★ Let's Make It Special ★
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Ready to Make It <br />
              <span className="italic text-gold text-glow-gold">Unforgettable?</span>
            </h2>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              Custom orders accepted. Shop online or DM us on social media.
            </p>
            <a
              href="https://ashleysbouquetpop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-bg hover:bg-card text-text-primary font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:glow-gold"
            >
              Shop Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
