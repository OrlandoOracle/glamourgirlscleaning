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

const cadences = [
  {
    name: "Weekly",
    popular: false,
    body: "Best for busy families with kids and/or pets, high-traffic homes, and anyone who wants it to always feel “just cleaned.” Bonus: lowest per-visit rate.",
  },
  {
    name: "Bi-weekly",
    popular: true,
    body: "Best for working professionals and couples, and homes that stay reasonably tidy between visits. The best balance of clean and cost.",
  },
  {
    name: "Monthly",
    popular: false,
    body: "Best for smaller households or single occupants, and tidy homes that need a periodic reset. More buildup between visits.",
  },
  {
    name: "One-time / seasonal",
    popular: false,
    body: "Best for spring or holiday resets, pre- or post-event cleans, or trying us out before committing.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />

      <PageHero
        accent="Homeowner's Guide"
        title="How Often Should You Schedule Recurring House Cleaning?"
        subtitle="Weekly, bi-weekly, or monthly? Here's how to choose the right cadence for your Orlando home."
      />

      {/* Short answer */}
      <Section tone="gray">
        <SectionHeading
          accent="The Short Answer"
          title="Bi-Weekly Is the Sweet Spot"
        />
        <Card className="rounded-3xl !p-8 md:!p-12 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            For most Orlando homes,{" "}
            <strong className="text-pink-300">bi-weekly</strong> keeps the home
            consistently clean without paying for weekly visits. But the right
            answer depends on your household — here&apos;s how to tell.
          </p>
        </Card>
      </Section>

      {/* Cadences */}
      <Section tone="black" width="wide">
        <SectionHeading
          accent="Find Your Fit"
          title="Match the Frequency to Your Home"
        />
        <div className="grid sm:grid-cols-2 gap-8">
          {cadences.map((c) => (
            <Card
              key={c.name}
              className={c.popular ? "!border-pink-500/50 !bg-pink-950/20" : ""}
            >
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">{c.name}</h3>
                {c.popular && (
                  <span className="bg-pink-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    Most popular
                  </span>
                )}
              </div>
              <p className="text-gray-400 leading-relaxed">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Climate */}
      <Section tone="gray">
        <SectionHeading
          accent="Florida Factor"
          title="Why Orlando's Climate Matters"
        />
        <Card className="rounded-3xl !p-8 md:!p-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            Florida humidity means dust, pollen, and bathroom mildew build up
            faster than in drier climates. Many Orlando homeowners who start
            monthly move to bi-weekly once they see how quickly things
            accumulate.
          </p>
        </Card>
      </Section>

      {/* Cost advantage */}
      <Section tone="black">
        <SectionHeading
          accent="Recurring Savings"
          title="The Cost Advantage of Recurring Service"
        />
        <Card className="rounded-3xl !p-8 md:!p-12 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            Recurring clients pay{" "}
            <strong className="text-pink-300">less per visit</strong> than
            one-time bookings because a maintained home takes less time. The
            more often we visit, the lower your per-visit rate.
          </p>
          <p className="mt-6">
            <a
              className="text-pink-400 font-semibold hover:text-pink-300"
              href="/house-cleaning-cost-orlando"
            >
              See what drives cleaning price &rarr;
            </a>
          </p>
        </Card>
      </Section>

      {/* Recommendation */}
      <Section tone="gray">
        <SectionHeading accent="Our Advice" title="Where to Start" />
        <Card className="rounded-3xl !p-8 md:!p-12 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
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
        </Card>
      </Section>

      {/* FAQ */}
      <Section tone="black">
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
      <Section tone="gray">
        <SectionHeading
          accent="Central Florida"
          title="Where We Clean"
          subtitle="Recurring house cleaning across Orlando and Central Florida."
        />
        <AreaChips />
      </Section>

      <ContactCTA
        heading="Find Your Perfect Schedule"
        subtitle="Get a free quote and we'll recommend a cadence that fits your home and budget."
      />
      <Footer />
    </div>
  );
}
