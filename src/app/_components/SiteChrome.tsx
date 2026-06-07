// Shared site chrome (nav + contact CTA + footer) for SEO sub-pages.
// Mirrors the design in src/app/page.tsx. Links point back to homepage anchors.
import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-pink-900/40 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Glamour Girls Cleaning Co."
            className="h-12 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-200">
          <Link href="/#about" className="hover:text-pink-400 transition">
            Our Story
          </Link>
          <Link href="/#services" className="hover:text-pink-400 transition">
            Services
          </Link>
          <Link href="/#why-us" className="hover:text-pink-400 transition">
            Why Us
          </Link>
          <Link href="/#areas" className="hover:text-pink-400 transition">
            Service Areas
          </Link>
          <Link href="/#contact" className="hover:text-pink-400 transition">
            Contact
          </Link>
        </div>
        <a
          href="tel:+17862399932"
          className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 transition shadow-lg shadow-pink-900/30"
        >
          (786) 239-9932
        </a>
      </div>
    </nav>
  );
}

export function ContactCTA({
  heading = "Ready for a Spotless Home?",
  subtitle = "Get a free, no-obligation quote. We'll get back to you within 24 hours.",
}: {
  heading?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-2xl mx-auto text-center">
        <span className="font-[family-name:var(--font-great-vibes)] text-pink-400 text-2xl md:text-3xl block mb-1">
          Get in Touch
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {heading}
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 transition shadow-lg shadow-pink-900/30"
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:+17862399932"
            className="border border-pink-500 text-pink-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-950/40 transition"
          >
            Call (786) 239-9932
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Serving Orlando &amp; Central Florida &middot; Monday&ndash;Friday,
          9:00 AM&ndash;5:00 PM
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-pink-900/20 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-white font-bold text-lg">
            Glamour Girls Cleaning Company
          </span>
          <p className="text-sm mt-1">Orlando, FL</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/#about" className="hover:text-pink-400 transition">
            Our Story
          </Link>
          <Link href="/#services" className="hover:text-pink-400 transition">
            Services
          </Link>
          <Link href="/#areas" className="hover:text-pink-400 transition">
            Service Areas
          </Link>
          <Link href="/#contact" className="hover:text-pink-400 transition">
            Contact
          </Link>
        </div>
        <div className="text-sm text-right">
          <a
            href="tel:+17862399932"
            className="hover:text-pink-400 transition block"
          >
            (786) 239-9932
          </a>
          <p className="text-gray-500">
            &copy; 2026 Glamour Girls Cleaning Company.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Shared service-area line.
export const SERVICE_AREAS =
  "Orlando, Winter Park, Lake Nona, Dr. Phillips, Windermere, Oviedo, Kissimmee, Winter Garden, Altamonte Springs, Maitland, Celebration & Baldwin Park.";
