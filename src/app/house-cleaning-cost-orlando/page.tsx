import type { Metadata } from "next";
import {
  Nav,
  ContactCTA,
  Footer,
  SERVICE_AREAS,
} from "../_components/SiteChrome";

export const metadata: Metadata = {
  title:
    "How Much Does House Cleaning Cost in Orlando, FL? (2026 Guide) | Glamour Girls",
  description:
    "What house cleaning really costs in Orlando — by home size, cleaning type, and frequency. Transparent guidance from a local, bonded & insured team. Free quotes.",
  alternates: {
    canonical: "https://glamourgirlscleaning.com/house-cleaning-cost-orlando",
  },
};

// NOTE: Dollar ranges below are labeled "Central Florida typical" market context — NOT a
// Glamour Girls quote. Confirm/replace before relying on them. No invented company prices ship here.
const faqs = [
  {
    q: "How much does house cleaning cost in Orlando?",
    a: "It depends on three things: the size of your home, the type of clean (standard, deep, or move-out), and how often you book. Recurring clients pay less per visit than one-time bookings. The most accurate way to know your price is a free quote.",
  },
  {
    q: "Is a deep clean more expensive than a standard clean?",
    a: "Yes. A deep clean typically costs more than a standard clean because it covers areas standard visits skip — baseboards, inside appliances, grout, and built-up buildup. It is usually a one-time reset, after which recurring visits stay at the lower standard rate.",
  },
  {
    q: "Does cleaning more often cost less per visit?",
    a: "Per visit, yes. A maintained home takes less time to clean, so weekly and bi-weekly clients pay a lower per-visit rate than monthly or one-time clients.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      <header className="pt-32 pb-12 px-6 max-w-3xl mx-auto text-center">
        <span className="font-[family-name:var(--font-great-vibes)] text-pink-400 text-2xl md:text-3xl block mb-2">
          Orlando Price Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          How Much Does House Cleaning Cost in Orlando, FL?
        </h1>
        <p className="text-gray-400 text-lg">
          A straight-shooting 2026 breakdown — so there are no surprises when
          you book.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-8 space-y-12 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            What you&apos;ll actually pay
          </h2>
          <p>
            If you&apos;re searching for house cleaning in Orlando, the honest
            answer is: it depends on three things — the{" "}
            <strong className="text-pink-300">size of your home</strong>, the{" "}
            <strong className="text-pink-300">type of clean</strong> (standard
            vs. deep vs. move-out), and{" "}
            <strong className="text-pink-300">how often</strong> you book.
            Here&apos;s how each one moves the number.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">By home size</h2>
          <p>
            Size is the single biggest driver. A studio takes a fraction of the
            time a four-bedroom does, so square footage and the number of
            bathrooms move the price the most. Condition matters too — a home
            that&apos;s already tidy cleans faster than one playing catch-up.
            Because every home is different, we don&apos;t post a price list —
            we give you an exact, no-obligation quote for free.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            How cleaning type changes the price
          </h2>
          <ul className="space-y-3 list-disc list-inside marker:text-pink-500">
            <li>
              <strong className="text-pink-300">Standard clean</strong> — your
              baseline upkeep: kitchens, baths, floors, dusting, surfaces.
            </li>
            <li>
              <strong className="text-pink-300">Deep clean</strong> — first-time
              or seasonal; costs more than a standard clean because it adds
              baseboards, inside appliances, grout, and built-up areas.{" "}
              <a
                className="text-pink-400 hover:text-pink-300"
                href="/deep-cleaning-vs-standard-orlando"
              >
                See deep vs. standard &rarr;
              </a>
            </li>
            <li>
              <strong className="text-pink-300">Move-out clean</strong> — priced
              separately.{" "}
              <a
                className="text-pink-400 hover:text-pink-300"
                href="/move-out-cleaning-orlando"
              >
                See our move-out guide &rarr;
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            How frequency lowers your price
          </h2>
          <p className="mb-3">
            Recurring clients pay less per visit because the home stays
            maintained:
          </p>
          <ul className="space-y-2 list-disc list-inside marker:text-pink-500">
            <li>
              <strong className="text-pink-300">Weekly</strong> — lowest
              per-visit rate
            </li>
            <li>
              <strong className="text-pink-300">Bi-weekly</strong> — most
              popular for Orlando families
            </li>
            <li>
              <strong className="text-pink-300">Monthly</strong> — higher
              per-visit (more buildup between cleans)
            </li>
            <li>
              <strong className="text-pink-300">One-time</strong> — highest
              per-visit rate
            </li>
          </ul>
          <p className="mt-3">
            <a
              className="text-pink-400 hover:text-pink-300"
              href="/recurring-house-cleaning-orlando"
            >
              Not sure how often you need it? See our frequency guide &rarr;
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            What&apos;s included in every clean
          </h2>
          <ul className="space-y-2 list-disc list-inside marker:text-pink-500">
            <li>All bathrooms and the kitchen fully cleaned and sanitized</li>
            <li>Floors vacuumed and mopped throughout</li>
            <li>Dusting of reachable surfaces, sills, and fixtures</li>
            <li>Trash removed; beds made on request</li>
            <li>Bonded &amp; insured team, satisfaction-backed</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-pink-900/30 bg-gray-950 p-6">
          <h2 className="text-xl font-bold text-white mb-2">
            Why Orlando homeowners choose a local team
          </h2>
          <p>
            We live and work here. You get the same trusted cleaners — two best
            friends and their team — not a rotating crew from out of town.
            Serving {SERVICE_AREAS}
          </p>
        </section>
      </main>

      <ContactCTA
        heading="Get your exact price — free"
        subtitle="Tell us your home size and what you need. We'll send a clear, no-obligation quote within 24 hours."
      />
      <Footer />
    </div>
  );
}
