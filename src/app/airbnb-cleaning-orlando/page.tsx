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
    "Airbnb & Short-Term Rental Cleaning in Orlando, Lake Nona & Dr. Phillips | Glamour Girls",
  description:
    "Reliable, fast turnover cleaning for Airbnb and short-term rentals in Lake Nona, Dr. Phillips & greater Orlando. 5-star-ready every time. Bonded & insured.",
  alternates: {
    canonical: "https://glamourgirlscleaning.com/airbnb-cleaning-orlando",
  },
};

const faqs = [
  {
    q: "Do you do Airbnb turnover cleaning in Orlando?",
    a: "Yes. We provide reliable, on-time turnover cleaning for Airbnb and short-term rentals across Orlando, including Lake Nona, Dr. Phillips, and Windermere — guest-ready every time.",
  },
  {
    q: "Can you work within tight check-out / check-in windows?",
    a: "Yes. We schedule around same-day check-out and check-in times and offer recurring turnover slots so you're never scrambling between guests.",
  },
  {
    q: "Do you restock and report issues?",
    a: "On request we remake beds, stage towels, and check essentials, and we flag any damage or low supplies before your next guest finds them.",
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

const ICON_STAR =
  "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z";
const ICON_CLOCK = "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z";
const ICON_BED =
  "M3 12h18M3 12v6m18-6v6M3 18h18M5 12V8a2 2 0 012-2h10a2 2 0 012 2v4M7 12V10h4v2";
const ICON_BELL =
  "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0";
const ICON_CAL =
  "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5";

const features = [
  {
    icon: ICON_STAR,
    title: "Guest-ready every time",
    body: "Hotel-standard bathrooms, kitchens, and linens for a flawless first impression.",
  },
  {
    icon: ICON_CLOCK,
    title: "Tight turnaround windows",
    body: "We work around same-day check-out / check-in so you never miss a booking.",
  },
  {
    icon: ICON_BED,
    title: "Restock & reset",
    body: "Beds remade, towels staged, essentials checked — on request.",
  },
  {
    icon: ICON_BELL,
    title: "Damage & low-supply alerts",
    body: "We flag issues before your next guest finds them.",
  },
  {
    icon: ICON_CAL,
    title: "Reliable scheduling",
    body: "Recurring turnover slots so you're never scrambling between guests.",
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
        accent="For Hosts"
        title="Airbnb & Short-Term Rental Cleaning in Lake Nona & Dr. Phillips"
        subtitle="Turnovers that protect your 5-star rating — dependable, on-time, guest-ready, across greater Orlando."
      />

      {/* Intro */}
      <Section tone="gray">
        <Card className="rounded-3xl !p-8 md:!p-12 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            Your reviews live and die on cleanliness. Glamour Girls gives
            short-term rental hosts in{" "}
            <strong className="text-pink-300">
              Lake Nona, Dr. Phillips, Windermere, and across Orlando
            </strong>{" "}
            dependable, on-time turnovers so every guest walks into a spotless
            space.
          </p>
        </Card>
      </Section>

      {/* Built for hosts */}
      <Section tone="black" width="wide">
        <SectionHeading accent="Built for Hosts" title="Why Hosts Trust Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <Card key={f.title}>
              <IconTile d={f.icon} />
              <h3 className="text-lg font-bold mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{f.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Checklist */}
      <Section tone="gray">
        <SectionHeading
          accent="Every Turnover"
          title="Our Turnover Checklist"
        />
        <Card className="!p-8">
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-300">
            {[
              "Strip and remake all beds with fresh linens",
              "Sanitize bathrooms; replace towels and toiletries",
              "Full kitchen reset — dishes, surfaces, appliances, trash",
              "Vacuum and mop all floors",
              "Stage the space to match your listing photos",
              "Final walkthrough and host-ready report",
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

      {/* Why these markets */}
      <Section tone="black">
        <SectionHeading
          accent="Local Knowledge"
          title="Why Lake Nona & Dr. Phillips Hosts Choose Us"
        />
        <Card className="rounded-3xl !p-8 md:!p-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            These are two of Orlando&apos;s busiest short-term rental markets —
            close to Medical City and the attractions corridor. We know the
            pace, and we keep the same trusted cleaners on your property — no
            rotating strangers in your investment. Ask about recurring host
            rates for multiple properties.
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
          title="Where We Turn Over Rentals"
          subtitle="Short-term rental turnovers across Orlando and Central Florida."
        />
        <AreaChips />
      </Section>

      <ContactCTA
        heading="Host With Confidence"
        subtitle="Set up your turnover schedule — tell us your property and check-in cadence and we'll handle the rest."
      />
      <Footer />
    </div>
  );
}
