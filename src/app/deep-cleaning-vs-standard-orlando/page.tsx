import type { Metadata } from "next";
import {
  Nav,
  PageHero,
  Section,
  SectionHeading,
  Card,
  AreaChips,
  ContactCTA,
  Footer,
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
    a: "A deep clean costs more than a standard clean because it takes more time and covers areas standard visits don't. It's a one-time reset — recurring visits afterward stay at the standard rate.",
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

function Check() {
  return (
    <svg
      className="w-5 h-5 text-pink-400 inline"
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
  );
}

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      <PageHero
        accent="Which Do You Need?"
        title="Deep Cleaning vs. Standard Cleaning"
        subtitle="The simple difference, what each includes, and how to choose for your Orlando home."
      />

      {/* The difference */}
      <Section tone="gray" width="wide">
        <SectionHeading accent="In a Nutshell" title="The Simple Difference" />
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-bold mb-3 text-white">
              Standard clean
            </h3>
            <p className="text-gray-400 leading-relaxed">
              <em>Maintains</em> an already-clean home — kitchens, baths,
              floors, dusting, and surfaces, kept fresh on a recurring schedule.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-3 text-white">Deep clean</h3>
            <p className="text-gray-400 leading-relaxed">
              <em>Resets</em> a home that hasn&apos;t had professional attention
              recently — or never has. Most new clients start here, then switch
              to standard recurring visits.
            </p>
          </Card>
        </div>
      </Section>

      {/* Side by side */}
      <Section tone="black">
        <SectionHeading accent="What's Covered" title="Side by Side" />
        <Card className="!p-0 overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-800/60 text-pink-300">
              <tr>
                <th className="px-5 py-4">Task</th>
                <th className="px-5 py-4 text-center">Standard</th>
                <th className="px-5 py-4 text-center">Deep</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pink-900/20">
              {rows.map(([task, std, deep]) => (
                <tr key={task}>
                  <td className="px-5 py-3 text-gray-300">{task}</td>
                  <td className="px-5 py-3 text-center">
                    {std ? (
                      <Check />
                    ) : (
                      <span className="text-gray-700">&mdash;</span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-center">
                    {deep ? (
                      <Check />
                    ) : (
                      <span className="text-gray-700">&mdash;</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Section>

      {/* How to choose */}
      <Section tone="gray" width="wide">
        <SectionHeading accent="How to Choose" title="Which One Fits?" />
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-pink-300 font-bold mb-3 text-lg">
              Choose a deep clean if&hellip;
            </h3>
            <ul className="space-y-2 list-disc list-inside marker:text-pink-500 text-gray-300">
              <li>
                It&apos;s been more than a month since a professional clean
              </li>
              <li>You&apos;re moving in or out</li>
              <li>It&apos;s a seasonal reset (spring / holiday)</li>
              <li>
                There&apos;s visible buildup in grout, appliances, or baseboards
              </li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-pink-300 font-bold mb-3 text-lg">
              Choose a standard clean if&hellip;
            </h3>
            <ul className="space-y-2 list-disc list-inside marker:text-pink-500 text-gray-300">
              <li>
                Your home is already maintained and you want to keep it that way
              </li>
              <li>You&apos;re on a weekly or bi-weekly schedule</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* Recommendation */}
      <Section tone="black">
        <SectionHeading
          accent="Our Advice"
          title="What We Recommend for Most Orlando Homes"
        />
        <Card className="rounded-3xl !p-8 md:!p-12 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            Start with a deep clean to reset the home, then go{" "}
            <strong className="text-pink-300">bi-weekly</strong> — the most
            cost-effective way to keep a home fresh in Orlando&apos;s humid
            climate. A deep clean costs more than a standard clean because it
            takes more time, but it&apos;s a one-time reset; your recurring
            visits afterward stay at the lower standard rate.
          </p>
          <p className="mt-6">
            <a
              className="text-pink-400 font-semibold hover:text-pink-300"
              href="/recurring-house-cleaning-orlando"
            >
              See how often you should book &rarr;
            </a>
          </p>
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

      {/* Areas */}
      <Section tone="black">
        <SectionHeading
          accent="Central Florida"
          title="Where We Clean"
          subtitle="Standard and deep cleaning across Orlando and Central Florida."
        />
        <AreaChips />
      </Section>

      <ContactCTA
        heading="Not Sure Which Fits? We'll Tell You Honestly"
        subtitle="Get a free assessment — we'll recommend the right clean for your home, no pressure."
      />
      <Footer />
    </div>
  );
}
