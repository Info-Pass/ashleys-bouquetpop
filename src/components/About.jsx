import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-img',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true, toggleActions: 'play none none none' } }
      )
      gsap.fromTo('.about-text > *',
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true, toggleActions: 'play none none none' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-pink/5 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <div className="about-img relative">
          <div className="relative rounded-2xl overflow-hidden glow-pink">
            <img
              src="/ashleys-bouquetpop/ashley-photo.jpg"
              alt="Ashley Watson-Hunter"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-pink text-white px-6 py-4 rounded-2xl glow-pink-strong rotate-3">
            <div className="font-accent tracking-widest text-xs opacity-80">Owner & Maker</div>
            <div className="font-display font-bold text-xl">Ashley W-H</div>
          </div>
          {/* Gold accent square */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold rounded-2xl -z-10" />
        </div>

        {/* Text with gold left border */}
        <div className="about-text pl-6 border-l-4 border-gold">
          <div className="font-accent tracking-[0.4em] text-pink text-sm mb-4">
            ★ Meet The Maker ★
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-6">
            Meet <span className="italic shimmer-text">Ashley</span>
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-5">
            Hi, I'm Ashley Watson-Hunter, the heart behind Ashley's Bouquetpop.
            Based in Savannah, GA, I create one-of-a-kind handcrafted gifts for
            life's most special moments.
          </p>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            From custom money bouquets to glittering tumblers, every order is
            made with care and shipped with love. Let me help make your next
            celebration unforgettable.
          </p>
          <a
            href="https://ashleysbouquetpop.com/collections/gift-arrangements"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3 bg-pink hover:bg-pink-dark text-white font-semibold rounded-full glow-pink hover:glow-pink-strong transition-all hover:scale-105"
          >
            Order Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
