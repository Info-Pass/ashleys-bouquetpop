export default function Marquee() {
  const items = [
    'Birthdays',
    'Graduations',
    'Baby Showers',
    "Mother's Day",
    'Weddings',
    'Anniversaries',
    'Any Occasion',
  ]
  // Duplicate for seamless loop
  const all = [...items, ...items, ...items, ...items]

  return (
    <section className="relative py-10 border-y border-pink/20 bg-bg overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-display italic font-black text-3xl sm:text-5xl md:text-6xl text-pink text-glow px-8">
              {item}
            </span>
            <span className="text-gold text-3xl sm:text-5xl md:text-6xl">★</span>
          </div>
        ))}
      </div>
    </section>
  )
}
