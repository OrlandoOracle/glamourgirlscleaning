import type { Metadata } from "next";
import {
  Nav,
  ContactCTA,
  Footer,
  SERVICE_AREAS,
} from "../_components/SiteChrome";

export const metadata: Metadata = {
  title:
    "Deep Cleaning vs. Standard Cleaning: Which Do You Need? | Glamour Girls Orlando",
  description:
    "Not sure if you need a deep clean or a standard clean? Here's the simple difference, what each includes, and how to choose — for Orlando homes.",
  alternates: {
    canonical:
      "https://glamourgirlscleaning.com/deep-cleaning-vs-standard-orlando",
  },
};

const faqs = [
  {
    q: "What's the difference between a deep clean and a standard clean?",
    a: "A standard clean maintains an already-clean home. A deep clean resets a home that hasn't had professional attention recently — it adds baseboards, inside appliances, grout scrubbing, and detailed work that standard visits skip.",
  },
  {
    q: "Do I need a deep clean before recurring service?",
    a: "Most new clients start with a one-time deep clean to reset the home, then switch to standard recurring visits to keep it that way at the lower standard rate.",
  },
  {
    q: "Why does a deep clean cost more?",
    a: "A deep clean typically runs 1.5x to 2x a standard clean because it takes more time and covers areas standard visits don't. It's a one-time reset — recurring visits afterward stay at the standard rate.",
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

const rows: [string, boolean, boolean][] = [
  ["Counters, surfaces, mirrors", true, true],
  ["Floors vacuumed & mopped", true, true],
  ["Bathrooms & kitchen cleaned", true, true],
  ["Baseboards & door frames", false, true],
  ["Inside oven & fridge", false, true],
  ["Grout & tile scrubbing", false, true],
  ["Blinds, vents, sills, fixtures", false, true],
  ["Behind/under movable furniture", false, true],
];

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
          Which Do You Need?
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Deep Cleaning vs. Standard Cleaning
        </h1>
        <p className="text-gray-400 text-lg">
          The simple difference, and how to choose for your Orlando home.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-8 space-y-12 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            The simple difference
          </h2>
          <ul className="space-y-2 list-disc list-inside marker:text-pink-500">
            <li>
              A <strong className="text-pink-300">standard clean</strong>{" "}
              <em>maintains</em> an already-clean home.
            </li>
            <li>
              A <strong className="text-pink-300">deep clean</strong>{" "}
              <em>resets</em> a home that hasn&apos;t had professional attention
              recently — or never has.
            </li>
          </ul>
          <p className="mt-3">
            Most new clients start with a deep clean, then switch to standard
            recurring visits to keep it that way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">Side-by-side</h2>
          <div className="overflow-hidden rounded-2xl border border-pink-900/30">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-900 text-pink-300">
                <tr>
                  <th className="px-5 py-3">Task</th>
                  <th className="px-5 py-3 text-center">Standard</th>
                  <th className="px-5 py-3 text-center">Deep</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pink-900/20">
                {rows.map(([task, std, deep]) => (
                  <tr key={task}>
                    <td className="px-5 py-3">{task}</td>
                    <td className="px-5 py-3 text-center">
                      {std ? (
                        <span className="text-pink-400">&#10003;</span>
                      ) : (
                        <span className="text-gray-700">&mdash;</span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {deep ? (
                        <span className="text-pink-400">&#10003;</span>
                      ) : (
                        <span className="text-gray-700">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            How to know which you need
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">
                Choose a deep clean if&hellip;
              </h3>
              <ul className="text-sm space-y-2 list-disc list-inside marker:text-pink-500">
                <li>
                  It&apos;s been more than a month since a professional clean
                </li>
                <li>You&apos;re moving in or out</li>
                <li>It&apos;s a seasonal reset (spring / holiday)</li>
                <li>
                  There&apos;s visible buildup in grout, appliances, or
                  baseboards
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">
                Choose a standard clean if&hellip;
              </h3>
              <ul className="text-sm space-y-2 list-disc list-inside marker:text-pink-500">
                <li>
                  Your home is already maintained and you want to keep it that
                  way
                </li>
                <li>You&apos;re on a weekly or bi-weekly schedule</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Why deep cleans cost more
          </h2>
          <p>
            A deep clean typically runs 1.5&times;&ndash;2&times; a standard
            clean because it takes more time and covers areas standard visits
            skip. It&apos;s a one-time reset — your recurring visits afterward
            stay at the lower standard rate. See full pricing on our{" "}
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
            Our recommendation for most Orlando homes
          </h2>
          <p>
            Start with a deep clean, then go bi-weekly — the most cost-effective
            way to keep a home fresh in Orlando&apos;s humid climate.{" "}
            <a
              className="text-pink-400 hover:text-pink-300"
              href="/recurring-house-cleaning-orlando"
            >
              See how often you should book &rarr;
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-3">Serving {SERVICE_AREAS}</p>
        </section>
      </main>

      <ContactCTA
        heading="Not sure which fits? We'll tell you honestly"
        subtitle="Get a free assessment — we'll recommend the right clean for your home, no pressure."
      />
      <Footer />
    </div>
  );
}
