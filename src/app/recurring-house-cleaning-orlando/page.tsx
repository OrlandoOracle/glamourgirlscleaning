import type { Metadata } from "next";
import {
  Nav,
  ContactCTA,
  Footer,
  SERVICE_AREAS,
} from "../_components/SiteChrome";

export const metadata: Metadata = {
  title:
    "How Often Should You Schedule House Cleaning? Orlando Homeowner's Guide | Glamour Girls",
  description:
    "Weekly, bi-weekly, or monthly? How to choose the right recurring cleaning frequency for your Orlando home — by household, budget, and lifestyle.",
  alternates: {
    canonical:
      "https://glamourgirlscleaning.com/recurring-house-cleaning-orlando",
  },
};

const faqs = [
  {
    q: "How often should I have my house cleaned?",
    a: "For most Orlando homes, bi-weekly is the sweet spot — it keeps the home consistently clean without paying for weekly visits. Busy families with kids or pets often prefer weekly, while smaller or tidy households may do well with monthly.",
  },
  {
    q: "Is recurring cleaning cheaper than one-time cleaning?",
    a: "Per visit, yes. A maintained home takes less time to clean, so recurring clients pay a lower per-visit rate than one-time bookings — and weekly is lower per visit than monthly.",
  },
  {
    q: "Does Florida's climate affect how often I should clean?",
    a: "Yes. Florida humidity means dust, pollen, and bathroom mildew build up faster, so many Orlando homeowners who start monthly move to bi-weekly once they see how quickly things accumulate.",
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
          Homeowner&apos;s Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          How Often Should You Schedule Recurring House Cleaning?
        </h1>
        <p className="text-gray-400 text-lg">
          Weekly, bi-weekly, or monthly? Here&apos;s how to choose for your
          Orlando home.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-8 space-y-12 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            The short answer
          </h2>
          <p>
            For most Orlando homes,{" "}
            <strong className="text-pink-300">bi-weekly</strong> is the sweet
            spot — it keeps the home consistently clean without paying for
            weekly visits. But the right answer depends on your household.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Match the frequency to your home
          </h2>
          <div className="space-y-4">
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">Weekly</h3>
              <p className="text-sm">
                Best for busy families with kids and/or pets, high-traffic
                homes, and anyone who wants it to always feel &ldquo;just
                cleaned.&rdquo; Bonus: lowest per-visit rate.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-500/40 bg-pink-950/20 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">
                Bi-weekly{" "}
                <span className="text-xs text-pink-400 font-normal">
                  — most popular
                </span>
              </h3>
              <p className="text-sm">
                Best for working professionals and couples, and homes that stay
                reasonably tidy between visits. The best balance of clean and
                cost.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">Monthly</h3>
              <p className="text-sm">
                Best for smaller households or single occupants, and tidy homes
                that need a periodic reset. Note: more buildup between visits
                means a slightly higher per-visit rate.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">
                One-time / seasonal
              </h3>
              <p className="text-sm">
                Best for spring or holiday resets, pre- or post-event cleans, or
                trying us out before committing.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Orlando&apos;s climate matters
          </h2>
          <p>
            Florida humidity means dust, pollen, and bathroom mildew build up
            faster than in drier climates. Many Orlando homeowners who start
            monthly move to bi-weekly once they see how quickly things
            accumulate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            The cost advantage of recurring service
          </h2>
          <p>
            Recurring clients pay{" "}
            <strong className="text-pink-300">less per visit</strong> than
            one-time bookings because a maintained home takes less time. The
            more often we visit, the lower your per-visit rate. See the full
            breakdown on our{" "}
            <a
              className="text-pink-400 hover:text-pink-300"
              href="/house-cleaning-cost-orlando"
            >
              Orlando cost guide &rarr;
            </a>
          </p>
        </section>

        <section className="rounded-2xl border border-pink-900/30 bg-gray-950 p-6">
          <h2 className="text-xl font-bold text-white mb-2">
            Our recommendation
          </h2>
          <p>
            Start with a{" "}
            <a
              className="text-pink-400 hover:text-pink-300"
              href="/deep-cleaning-vs-standard-orlando"
            >
              deep clean
            </a>{" "}
            to reset the home, then settle into{" "}
            <strong className="text-pink-300">bi-weekly</strong> standard
            visits. Adjust up or down after a month — we make it easy to change.
          </p>
          <p className="text-gray-500 text-sm mt-3">Serving {SERVICE_AREAS}</p>
        </section>
      </main>

      <ContactCTA
        heading="Find your perfect schedule"
        subtitle="Get a free quote and we'll recommend a cadence that fits your home and budget."
      />
      <Footer />
    </div>
  );
}
