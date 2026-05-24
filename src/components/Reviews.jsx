import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Star = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
  </svg>
)
const Quote = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
  </svg>
)

const reviews = [
  {
    text: 'The money bouquet was absolutely stunning! Everyone at the party was asking where I got it. Will definitely order again!',
    name: 'Tanya R.',
  },
  {
    text: "Ashley went above and beyond with my daughter's graduation lei. The quality and detail were incredible.",
    name: 'Monique D.',
  },
  {
    text: 'My custom tumbler came out even better than I imagined. Fast shipping and beautiful packaging!',
    name: 'Keisha M.',
  },
  {
    text: "I ordered a money cake for my son's birthday and it was PERFECT. She even matched our party colors. Highly recommend!",
    name: 'Shonda T.',
  },
]

export default function Reviews() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.review-heading',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.review-heading', start: 'top 85%', once: true, toggleActions: 'play none none none' } }
      )
      gsap.fromTo('.review-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: '.review-grid', start: 'top 80%', once: true, toggleActions: 'play none none none' } }
      )
      gsap.fromTo('.review-badge',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.review-grid', start: 'top 70%', once: true, toggleActions: 'play none none none' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="review-heading text-center mb-16">
          <div className="font-accent tracking-[0.4em] text-pink text-sm mb-4">
            ★ Loved By Customers ★
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl">
            What People Are <span className="italic shimmer-text">Saying</span>
          </h2>
        </div>

        <div className="review-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="review-card group relative p-8 rounded-2xl bg-card border-pink-soft hover:border-pink-mid hover:glow-pink transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-pink/20" />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-text-primary leading-relaxed mb-6 italic">
                "{r.text}"
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-pink/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink to-gold flex items-center justify-center font-display font-bold text-white">
                  {r.name.charAt(0)}
                </div>
                <div className="font-accent tracking-widest text-text-primary">
                  {r.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="review-badge flex justify-center">
          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-pink/10 border-pink-mid glow-pink">
            <div className="flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-accent tracking-widest text-pink">
              100% Recommended on Facebook · 11 Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
