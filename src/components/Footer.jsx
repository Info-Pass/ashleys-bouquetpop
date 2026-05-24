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

export default function Footer() {
  return (
    <footer className="relative border-t border-pink/20 bg-bg pt-16 pb-10 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-pink to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display font-black text-3xl sm:text-4xl mb-3">
              Ashley's <span className="shimmer-text">Bouquetpop</span>
              <span className="text-gold"> LLC</span>
            </div>
            <p className="text-text-muted italic mb-6 max-w-md">
              Making Every Celebration Unforgettable!
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.tiktok.com/@ashleysbouquetpopllc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-card border-pink-soft hover:border-pink-mid hover:glow-pink flex items-center justify-center transition-all hover:scale-110"
              >
                <TikTokIcon className="w-4 h-4 text-pink" />
              </a>
              <a
                href="https://www.instagram.com/ashleysbouquetpop/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-card border-pink-soft hover:border-pink-mid hover:glow-pink flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-4 h-4 text-pink" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61564917055426"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-card border-pink-soft hover:border-pink-mid hover:glow-pink flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-4 h-4 text-pink" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent tracking-widest text-pink text-sm mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>
                <a
                  href="tel:+19107878462"
                  className="hover:text-pink transition-colors"
                >
                  (910) 787-8462
                </a>
              </li>
              <li className="text-gold">Open 24 Hours</li>
              <li>Order Anytime Online</li>
              <li>
                <a
                  href="https://ashleysbouquetpop.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink transition-colors"
                >
                  Shop Online
                </a>
              </li>
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h4 className="font-accent tracking-widest text-pink text-sm mb-4">
              Service Area
            </h4>
            <ul className="space-y-2 text-text-muted text-sm">
              <li>Savannah, GA</li>
              <li>Pooler &middot; Rincon</li>
              <li>Port Wentworth</li>
              <li>Tybee Island</li>
              <li>Richmond Hill</li>
              <li>Statesboro</li>
              <li>& surrounding areas</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-pink/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <div>
            © 2026 Ashley's Bouquetpop LLC · Savannah, GA
          </div>
          <div className="italic text-center sm:text-right">
            Serving Savannah, Pooler, Rincon, Port Wentworth, Tybee Island, Richmond Hill, Statesboro & surrounding areas
          </div>
        </div>
      </div>
    </footer>
  )
}
