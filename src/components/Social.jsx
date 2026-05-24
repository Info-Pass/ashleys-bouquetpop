import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.83a8.16 8.16 0 0 0 4.77 1.52V6.89a4.85 4.85 0 0 1-1.84-.2Z" />
  </svg>
)
const Instagram = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
const Facebook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const links = [
  {
    label: 'TikTok',
    handle: '@ashleysbouquetpopllc',
    href: 'https://www.tiktok.com/@ashleysbouquetpopllc',
    Icon: TikTokIcon,
  },
  {
    label: 'Instagram',
    handle: '@ashleysbouquetpop',
    href: 'https://www.instagram.com/ashleysbouquetpop/',
    Icon: Instagram,
  },
  {
    label: 'Facebook',
    handle: "Ashley's Bouquetpop LLC",
    href: 'https://www.facebook.com/profile.php?id=61564917055426',
    Icon: Facebook,
  },
]

export default function Social() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.social-heading',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.social-heading', start: 'top 85%', once: true, toggleActions: 'play none none none' } }
      )
      gsap.fromTo('.social-pill',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: '.social-pills', start: 'top 85%', once: true, toggleActions: 'play none none none' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 sm:py-32 px-6 overflow-hidden">
      {/* Pink neon glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] rounded-full bg-pink/10 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="social-heading">
          <div className="font-accent tracking-[0.4em] text-pink text-sm mb-4">
            ★ Stay Connected ★
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl mb-6">
            Follow Along on{' '}
            <span className="shimmer-text">TikTok & Instagram</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-12">
            3,200+ TikTok followers · 258 posts on Instagram · Watch us create live!
          </p>
        </div>

        <div className="social-pills flex flex-col sm:flex-row gap-4 justify-center items-stretch">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill group flex-1 max-w-sm mx-auto sm:mx-0 inline-flex items-center justify-between gap-4 px-7 py-5 rounded-full bg-card border-pink-soft hover:border-pink-mid hover:glow-pink transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink/10 flex items-center justify-center group-hover:bg-pink/20 transition-colors">
                  <l.Icon className="w-5 h-5 text-pink" />
                </div>
                <div className="text-left">
                  <div className="font-accent tracking-widest text-xs text-text-muted">
                    {l.label}
                  </div>
                  <div className="font-semibold text-text-primary">{l.handle}</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-pink group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
