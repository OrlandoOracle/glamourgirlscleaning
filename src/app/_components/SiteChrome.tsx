// Shared site chrome + design kit for the SEO sub-pages.
// Mirrors the polish in src/app/page.tsx (hero, section headings, cards, chips).
// Do NOT fork this — pages compose these pieces so the whole site stays consistent.
import Link from "next/link";

const SPARKLE_PATH =
  "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z";

function SparkleDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="block h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-pink-500" />
      <svg
        className="w-5 h-5 text-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.5)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={SPARKLE_PATH} />
      </svg>
      <span className="block h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-pink-500" />
    </div>
  );
}

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
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
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

// Full-bleed gradient hero for sub-pages — matches the homepage hero treatment.
export function PageHero({
  accent,
  title,
  subtitle,
}: {
  accent: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-28 md:pt-32 pb-14 px-6 bg-gradient-to-br from-black via-gray-950 to-black">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-[family-name:var(--font-great-vibes)] text-pink-400 text-3xl md:text-4xl block mb-2">
          {accent}
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          {title}
        </h1>
        <div className="mb-5">
          <SparkleDivider />
        </div>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 transition shadow-lg shadow-pink-900/30"
          >
            Get a Free Quote
          </Link>
          <a
            href="tel:+17862399932"
            className="border-2 border-pink-800 text-pink-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-950 transition"
          >
            Call (786) 239-9932
          </a>
        </div>
      </div>
    </section>
  );
}

// Centered section heading with script accent + sparkle divider (homepage style).
export function SectionHeading({
  accent,
  title,
  subtitle,
}: {
  accent?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      {accent && (
        <span className="font-[family-name:var(--font-great-vibes)] text-pink-400 text-2xl md:text-3xl block mb-1">
          {accent}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <SparkleDivider />
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

// Full-width section wrapper with alternating background (black <-> gray-950).
export function Section({
  tone = "black",
  width = "narrow",
  children,
}: {
  tone?: "black" | "gray";
  width?: "narrow" | "wide";
  children: React.ReactNode;
}) {
  const bg = tone === "gray" ? "bg-gray-950" : "bg-black";
  const max = width === "wide" ? "max-w-6xl" : "max-w-4xl";
  return (
    <section className={`py-16 md:py-20 px-6 ${bg}`}>
      <div className={`${max} mx-auto`}>{children}</div>
    </section>
  );
}

// Homepage-style card: dark panel, pink border, hover glow.
export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-900 border border-pink-900/30 rounded-2xl p-8 hover:border-pink-700/50 hover:shadow-lg hover:shadow-pink-900/20 transition ${className}`}
    >
      {children}
    </div>
  );
}

// Pink icon tile (rounded square) wrapping a heroicon path.
export function IconTile({ d }: { d: string }) {
  return (
    <div className="w-14 h-14 bg-pink-900/40 rounded-2xl flex items-center justify-center mb-5">
      <svg
        className="w-7 h-7 text-pink-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </div>
  );
}

// Service-area chips (homepage style).
export function AreaChips() {
  const areas = [
    "Orlando",
    "Winter Park",
    "Lake Nona",
    "Dr. Phillips",
    "Windermere",
    "Oviedo",
    "Kissimmee",
    "Winter Garden",
    "Altamonte Springs",
    "Maitland",
    "Celebration",
    "Baldwin Park",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {areas.map((area) => (
        <span
          key={area}
          className="bg-pink-950/50 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-800/40"
        >
          {area}
        </span>
      ))}
    </div>
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
        <SectionHeading
          accent="Get in Touch"
          title={heading}
          subtitle={subtitle}
        />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 transition shadow-lg shadow-pink-900/30"
          >
            Request a Free Quote
          </Link>
          <a
            href="tel:+17862399932"
            className="border-2 border-pink-800 text-pink-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-950 transition"
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
            Glamour Girls Cleaning Company LLC
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
            &copy; 2026 Glamour Girls Cleaning Company LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Shared service-area line (plain text fallback).
export const SERVICE_AREAS =
  "Orlando, Winter Park, Lake Nona, Dr. Phillips, Windermere, Oviedo, Kissimmee, Winter Garden, Altamonte Springs, Maitland, Celebration & Baldwin Park.";
