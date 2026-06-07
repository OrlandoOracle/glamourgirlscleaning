import type { Metadata } from "next";
import {
  Nav,
  PageHero,
  Section,
  SectionHeading,
  Card,
  IconTile,
  AreaChips,
  ContactCTA,
  Footer,
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

// No published prices — the page explains what drives cost and funnels to a free quote.
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

const ICON_HOME =
  "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25";
const ICON_TYPE =
  "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z M15 12a3 3 0 11-6 0 3 3 0 016 0z";
const ICON_CAL =
  "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      <PageHero
        accent="Orlando Price Guide"
        title="How Much Does House Cleaning Cost in Orlando?"
        subtitle="The honest answer: it depends on three things. Here's how each one moves the number — and why your exact quote is always free."
      />

      {/* Three drivers */}
      <Section tone="gray" width="wide">
        <SectionHeading
          accent="What Drives Your Price"
          title="It Comes Down to Three Things"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <IconTile d={ICON_HOME} />
            <h3 className="text-xl font-bold mb-3 text-white">
              Size of your home
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The single biggest driver. A studio takes a fraction of the time a
              four-bedroom does, so square footage and the number of bathrooms
              move the price the most. Condition matters too — a tidy home
              cleans faster than one playing catch-up.
            </p>
          </Card>
          <Card>
            <IconTile d={ICON_TYPE} />
            <h3 className="text-xl font-bold mb-3 text-white">Type of clean</h3>
            <p className="text-gray-400 leading-relaxed">
              A standard upkeep clean, a top-to-bottom deep clean, or a move-out
              clean — each covers a different scope, so each is priced
              differently.
            </p>
          </Card>
          <Card>
            <IconTile d={ICON_CAL} />
            <h3 className="text-xl font-bold mb-3 text-white">How often</h3>
            <p className="text-gray-400 leading-relaxed">
              A maintained home takes less time, so recurring visits cost less
              per visit than a one-time clean. The more often we come, the lower
              your per-visit rate.
            </p>
          </Card>
        </div>
        <p className="text-center text-gray-400 mt-10 max-w-2xl mx-auto">
          Because every home is different, we don&apos;t post a price list — we
          give you an exact, no-obligation quote for free.
        </p>
      </Section>

      {/* Type detail */}
      <Section tone="black" width="wide">
        <SectionHeading
          accent="By Service"
          title="How the Type of Clean Changes the Price"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-lg font-bold mb-2 text-pink-300">
              Standard clean
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your baseline upkeep — kitchens, baths, floors, dusting, and
              surfaces. Best on a recurring schedule.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2 text-pink-300">Deep clean</h3>
            <p className="text-gray-400 leading-relaxed">
              First-time or seasonal. Costs more because it adds baseboards,
              inside appliances, grout, and built-up areas.{" "}
              <a
                className="text-pink-400 hover:text-pink-300"
                href="/deep-cleaning-vs-standard-orlando"
              >
                Deep vs. standard &rarr;
              </a>
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2 text-pink-300">
              Move-out clean
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A detailed clean of an empty home, priced separately.{" "}
              <a
                className="text-pink-400 hover:text-pink-300"
                href="/move-out-cleaning-orlando"
              >
                Move-out guide &rarr;
              </a>
            </p>
          </Card>
        </div>
      </Section>

      {/* Frequency */}
      <Section tone="gray">
        <SectionHeading
          accent="Recurring Savings"
          title="How Frequency Lowers Your Price"
          subtitle="Recurring clients pay less per visit because the home stays maintained."
        />
        <Card className="!p-8">
          <ul className="space-y-3">
            <li className="flex justify-between gap-4 border-b border-pink-900/20 pb-3">
              <span className="font-semibold text-pink-300">Weekly</span>
              <span className="text-gray-400">Lowest per-visit rate</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-pink-900/20 pb-3">
              <span className="font-semibold text-pink-300">Bi-weekly</span>
              <span className="text-gray-400">
                Most popular for Orlando families
              </span>
            </li>
            <li className="flex justify-between gap-4 border-b border-pink-900/20 pb-3">
              <span className="font-semibold text-pink-300">Monthly</span>
              <span className="text-gray-400">
                Higher per-visit (more buildup)
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="font-semibold text-pink-300">One-time</span>
              <span className="text-gray-400">Highest per-visit rate</span>
            </li>
          </ul>
        </Card>
        <p className="text-center mt-8">
          <a
            className="text-pink-400 font-semibold hover:text-pink-300 transition"
            href="/recurring-house-cleaning-orlando"
          >
            Not sure how often you need it? See our frequency guide &rarr;
          </a>
        </p>
      </Section>

      {/* What's included */}
      <Section tone="black">
        <SectionHeading
          accent="Always Included"
          title="What's in Every Clean"
        />
        <Card className="!p-8">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-300">
            {[
              "All bathrooms and the kitchen cleaned and sanitized",
              "Floors vacuumed and mopped throughout",
              "Dusting of reachable surfaces, sills, and fixtures",
              "Trash removed; beds made on request",
              "Bonded & insured team",
              "Satisfaction-backed — we make it right",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <svg
                  className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </Section>

      {/* FAQ */}
      <Section tone="gray">
        <SectionHeading accent="Good to Know" title="Frequently Asked" />
        <div className="space-y-4">
          {faqs.map((f) => (
            <Card key={f.q} className="!p-6">
              <h3 className="font-bold text-white mb-2">{f.q}</h3>
              <p className="text-gray-400 leading-relaxed">{f.a}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Local + areas */}
      <Section tone="black">
        <SectionHeading
          accent="Central Florida"
          title="A Local Team You'll See Again"
          subtitle="You get the same trusted cleaners — two best friends and their team — not a rotating crew from out of town."
        />
        <AreaChips />
      </Section>

      <ContactCTA
        heading="Get Your Exact Price — Free"
        subtitle="Tell us your home size and what you need. We'll send a clear, no-obligation quote within 24 hours."
      />
      <Footer />
    </div>
  );
}
