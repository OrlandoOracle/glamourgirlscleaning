import type { Metadata } from "next";
import {
  Nav,
  ContactCTA,
  Footer,
  SERVICE_AREAS,
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
          For Hosts
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Airbnb &amp; Short-Term Rental Cleaning in Lake Nona &amp; Dr.
          Phillips
        </h1>
        <p className="text-gray-400 text-lg">
          Turnovers that protect your 5-star rating — dependable, on-time,
          guest-ready.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-8 space-y-12 text-gray-300 leading-relaxed">
        <section>
          <p>
            Your reviews live and die on cleanliness. Glamour Girls gives
            short-term rental hosts in
            <strong className="text-pink-300">
              {" "}
              Lake Nona, Dr. Phillips, Windermere, and across Orlando
            </strong>{" "}
            dependable, on-time turnovers so every guest walks into a spotless
            space.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Built for hosts
          </h2>
          <ul className="space-y-3 list-disc list-inside marker:text-pink-500">
            <li>
              <strong className="text-pink-300">Guest-ready every time</strong>{" "}
              — hotel-standard bathrooms, kitchens, and linens
            </li>
            <li>
              <strong className="text-pink-300">
                Tight turnaround windows
              </strong>{" "}
              — we work around same-day check-out / check-in
            </li>
            <li>
              <strong className="text-pink-300">Restock &amp; reset</strong> —
              beds remade, towels staged, essentials checked (on request)
            </li>
            <li>
              <strong className="text-pink-300">
                Damage &amp; low-supply alerts
              </strong>{" "}
              — we flag issues before your next guest finds them
            </li>
            <li>
              <strong className="text-pink-300">Reliable scheduling</strong> —
              recurring turnover slots so you&apos;re never scrambling
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Our turnover checklist
          </h2>
          <ul className="space-y-2 list-disc list-inside marker:text-pink-500">
            <li>Strip and remake all beds with fresh linens</li>
            <li>Sanitize bathrooms; replace towels and toiletries</li>
            <li>Full kitchen reset — dishes, surfaces, appliances, trash</li>
            <li>Vacuum and mop all floors</li>
            <li>Stage the space to match your listing photos</li>
            <li>Final walkthrough and host-ready report</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-pink-900/30 bg-gray-950 p-6">
          <h2 className="text-xl font-bold text-white mb-2">
            Why Lake Nona &amp; Dr. Phillips hosts choose us
          </h2>
          <p>
            These are two of Orlando&apos;s busiest short-term rental markets —
            close to Medical City and the attractions corridor. We know the
            pace, and we keep the same trusted cleaners on your property — no
            rotating strangers in your investment. Pricing depends on home size
            and turnaround speed; ask about recurring host rates for multiple
            properties.
          </p>
          <p className="text-gray-500 text-sm mt-3">Serving {SERVICE_AREAS}</p>
        </section>
      </main>

      <ContactCTA
        heading="Host with confidence"
        subtitle="Set up your turnover schedule — tell us your property and check-in cadence and we'll handle the rest."
      />
      <Footer />
    </div>
  );
}
