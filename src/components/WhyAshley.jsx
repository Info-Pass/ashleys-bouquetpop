import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    icon: '🎨',
    title: 'Handcrafted',
    desc: 'Every piece made with love and attention to detail.',
  },
  {
    icon: '✨',
    title: 'Custom',
    desc: 'Personalized for your occasion, your colors, your vision.',
  },
  {
    icon: '💌',
    title: 'Unforgettable',
    desc: 'Gifts that wow — and get talked about long after the party.',
  },
]

export default function WhyAshley() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-heading',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.why-heading', start: 'top 85%', once: true, toggleActions: 'play none none none' } }
      )
      gsap.fromTo('.pillar',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: '.pillars', start: 'top 80%', once: true, toggleActions: 'play none none none' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 px-6 overflow-hidden"
    >
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-pink/5 blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="why-heading text-center mb-20">
          <div className="font-accent tracking-[0.4em] text-gold text-sm mb-4">
            ★ Why Ashley's ★
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl">
            Made With <span className="italic shimmer-text">Love</span>
          </h2>
        </div>

        <div className="pillars grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="pillar group relative p-10 rounded-2xl bg-card border-pink-soft text-center hover:border-pink-mid hover:glow-pink transition-all duration-500"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-3xl mb-3 group-hover:text-glow transition-all">
                {p.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{p.desc}</p>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold group-hover:w-1/2 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
