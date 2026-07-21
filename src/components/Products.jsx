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
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/B5375A78-DAEF-46A0-9FCB-CEA1DB0C0F95.jpg?v=1772289319',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Money Leis',
    desc: 'Folded-bill leis perfect for graduations, birthdays, and milestone celebrations.',
    price: 'from $110',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/PhotoMay192025_82839PM.jpg?v=1770235838',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Money Cakes',
    desc: 'Tiered cash creations that look just like the real thing — only better.',
    price: 'from $100',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/videoframe_3006.png?v=1769986394',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Custom Tumblers',
    desc: '20oz tumblers & snowglobe tumblers personalized with your name, colors, design.',
    price: 'custom quote',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/SstFf8CU.jpg?v=1769993990',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Premade Drinkware',
    desc: 'Ready-to-ship drinkware — tumblers and cups already designed and good to go.',
    price: 'shop now',
    img: 'https://ashleysbouquetpop.com/cdn/shop/collections/003E14D8-1C14-49ED-9C23-38EAC6CC2CB0.jpg?v=1770074250',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Diaper Bouquets',
    desc: 'Adorable diaper bouquets — the showstopper at every baby shower.',
    price: 'from $150',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/PhotoOct162025_13407AM.jpg?v=1770004404',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Ribbon Graduation Leis',
    desc: 'Custom ribbon graduation leis in your school colors — proud moments deserve proud gifts.',
    price: 'custom quote',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/IMG-8216.png?v=1778025319',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'UVDTF Cup Wraps',
    desc: '15+ themed collections — Sports, Zodiacs, Celebrities, Animals & more. From $3 each.',
    price: 'from $3',
    img: 'https://ashleysbouquetpop.com/cdn/shop/collections/F30157A4-7E4C-43AF-B16A-A51FEC73D9E1.png?v=1770298567',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Mom Bouquet Boxes',
    desc: 'A beautiful boxed arrangement perfect for Mother\'s Day, appreciation, and more.',
    price: 'from $85',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/MoneyBouquets_leis_cakes-14.jpg?v=1770095836',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'GRAD Gift Box',
    desc: 'Complete graduation gift set — money arrangements, custom drinkware, and more in one beautiful box.',
    price: 'from $85',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/0358312F-3A4C-4F71-A46D-444EE89A9B7C.webp?v=1772288315',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Burn Bouquets',
    desc: 'Light it to reveal a hidden message — a surprise reveal bouquet unlike anything else. Perfect for proposals, gender reveals, and special celebrations.',
    price: '$100',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/DGrWwugM.jpg?v=1772289128',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
  },
  {
    name: 'Sublimation Puzzles',
    desc: 'Custom photo puzzles — a unique and memorable personalized gift for any occasion.',
    price: 'custom quote',
    img: 'https://ashleysbouquetpop.com/cdn/shop/files/8EE4E292-DEE4-4456-BCBA-C94DD4FDA675.jpg?v=1773958961',
    href: 'https://ashleysbouquetpop.com/collections/gift-arrangements',
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
              href={p.href || 'https://ashleysbouquetpop.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card group relative flex flex-col overflow-hidden rounded-2xl bg-card border-pink-soft hover:border-pink-mid transition-all duration-500 hover:scale-[1.03] hover:glow-pink"
            >
              <div className="relative overflow-hidden" style={{ height: '260px' }}>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
              </div>

              <div className="relative p-6">
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
