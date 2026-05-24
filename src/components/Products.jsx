import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ArrowRight = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
)

const products = [
  {
    name: 'Money Bouquets',
    desc: 'Custom cash arrangements styled like floral bouquets — a gift they won\'t forget.',
    price: 'from $25',
    img: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80',
  },
  {
    name: 'Money Leis',
    desc: 'Folded-bill leis perfect for graduations, birthdays, and milestone celebrations.',
    price: 'from $110',
    img: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?w=600&q=80',
  },
  {
    name: 'Money Cakes',
    desc: 'Tiered cash creations that look just like the real thing — only better.',
    price: 'from $100',
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
  },
  {
    name: 'Custom Tumblers',
    desc: '20oz tumblers & snowglobe tumblers personalized with your name, colors, design.',
    price: 'custom quote',
    img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80',
  },
  {
    name: 'Diaper Arrangements',
    desc: 'Adorable diaper bouquets — the showstopper at every baby shower.',
    price: 'from $150',
    img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
  },
  {
    name: 'Ribbon Leis',
    desc: 'Custom ribbon graduation leis in your school colors — proud moments deserve proud gifts.',
    price: 'custom quote',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0fe00df?w=600&q=80',
  },
  {
    name: 'Gift Arrangements',
    desc: 'One-of-a-kind themed gift arrangements built around your recipient.',
    price: 'custom quote',
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80',
  },
  {
    name: 'UVDTF Cup Wraps',
    desc: '15+ themed collections — Sports, Zodiacs, Celebrities, Animals & more. From $3 each.',
    price: 'from $3',
    img: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80',
  },
  {
    name: 'Mom Bouquet Boxes',
    desc: 'A beautiful boxed arrangement perfect for Mother\'s Day, appreciation, and more.',
    price: 'from $85',
    img: 'https://images.unsplash.com/photo-1490750967868-88df5691cc50?w=600&q=80',
  },
  {
    name: 'Burn Bouquets',
    desc: 'Unique and unforgettable floral-inspired money arrangements.',
    price: 'from $100',
    img: 'https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=600&q=80',
  },
]

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.product-heading',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.product-heading', start: 'top 85%', once: true, toggleActions: 'play none none none' } }
      )
      gsap.fromTo('.product-card',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: '.product-grid', start: 'top 80%', once: true, toggleActions: 'play none none none' } }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      id="products"
      className="relative py-24 sm:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="product-heading text-center mb-16">
          <div className="font-accent tracking-[0.4em] text-pink text-sm mb-4">
            ★ The Collection ★
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl">
            Shop by <span className="shimmer-text">Category</span>
          </h2>
          <p className="mt-4 text-text-muted max-w-xl mx-auto">
            Handcrafted gifts for every milestone. Pick a category to start your custom order.
          </p>
        </div>

        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <a
              key={p.name}
              href="https://ashleysbouquetpop.com"
              target="_blank"
              rel="noopener noreferrer"
              className="product-card group relative overflow-hidden rounded-2xl bg-card border-pink-soft hover:border-pink-mid transition-all duration-500 hover:scale-[1.03] hover:glow-pink"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-accent tracking-widest text-pink text-xs mb-2">
                  Category
                </div>
                <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-glow transition-all">
                  {p.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-3">
                  {p.desc}
                </p>
                <div className="font-accent tracking-widest text-gold text-sm mb-4">
                  {p.price}
                </div>
                <span className="inline-flex items-center gap-1 text-pink font-semibold text-sm group-hover:gap-2 transition-all">
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
