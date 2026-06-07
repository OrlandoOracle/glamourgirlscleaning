import type { Metadata } from "next";
import {
  Nav,
  ContactCTA,
  Footer,
  SERVICE_AREAS,
} from "../_components/SiteChrome";

export const metadata: Metadata = {
  title:
    "Move-Out Cleaning in Orlando, FL — Get Your Deposit Back | Glamour Girls",
  description:
    "Professional move-out cleaning in Orlando. Landlord- and realtor-approved checklist, transparent process, fast booking. Bonded & insured. Free quotes.",
  alternates: {
    canonical: "https://glammourgirlscleaning.com/move-out-cleaning-orlando",
  },
};

const faqs = [
  {
    q: "What is included in a move-out clean?",
    a: "A move-out clean is a deep, top-to-bottom clean of an empty home: inside the oven, fridge, and cabinets; descaled showers and tubs; baseboards, door frames, switches, blinds, and sills; and floors vacuumed and mopped throughout, including closets.",
  },
  {
    q: "Will move-out cleaning help me get my deposit back?",
    a: "We follow a deposit-focused checklist that landlords and property managers look for. While the final decision is up to your landlord, a professional white-glove clean removes cleanliness as a reason to withhold your deposit.",
  },
  {
    q: "Do you clean for realtors and sellers?",
    a: "Yes. We get listings photo-ready and showing-ready, and we offer recurring turnover cleaning for property managers across Orlando and Kissimmee.",
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
          Move-Out Cleaning
        </span>
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Move-Out Cleaning in Orlando
        </h1>
        <p className="text-gray-400 text-lg">
          Leave it spotless without lifting a finger — deposit-ready or
          showing-ready.
        </p>
      </header>

      <main className="max-w-3xl mx-auto px-6 pb-8 space-y-12 text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Moving out? We&apos;ll handle the deep clean
          </h2>
          <p>
            Whether you&apos;re a renter chasing a full deposit refund or a
            seller staging for closing, a professional move-out clean is the
            difference between &ldquo;good enough&rdquo; and
            <strong className="text-pink-300"> white-glove ready</strong>.
            Glamour Girls handles the deep, top-to-bottom clean an empty home
            needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            What&apos;s included
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">Kitchen</h3>
              <p className="text-sm">
                Inside oven, inside fridge, inside cabinets &amp; drawers,
                degreased stovetop, sink &amp; faucet polished.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">Bathrooms</h3>
              <p className="text-sm">
                Descaled showers/tubs, grout, toilets, mirrors, cabinets inside
                &amp; out.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">Whole home</h3>
              <p className="text-sm">
                Baseboards, door frames, light switches, outlets, blinds, window
                sills.
              </p>
            </div>
            <div className="rounded-2xl border border-pink-900/30 bg-gray-950 p-5">
              <h3 className="text-pink-300 font-semibold mb-2">
                Floors &amp; finish
              </h3>
              <p className="text-sm">
                Vacuumed &amp; mopped throughout including closets, cobwebs
                removed, spot-cleaned walls, trash removed.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">
            Renter, seller, or property manager?
          </h2>
          <ul className="space-y-3 list-disc list-inside marker:text-pink-500">
            <li>
              <strong className="text-pink-300">Renters:</strong> we follow a
              deposit-focused checklist landlords look for.
            </li>
            <li>
              <strong className="text-pink-300">Sellers &amp; realtors:</strong>{" "}
              we get listings photo- and showing-ready.
            </li>
            <li>
              <strong className="text-pink-300">Property managers:</strong> ask
              about recurring turnover rates across Orlando and Kissimmee.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">How to book</h2>
          <ol className="space-y-3 list-decimal list-inside marker:text-pink-400 marker:font-bold">
            <li>Tell us your home size and move date.</li>
            <li>Get a free, fixed quote — no surprises.</li>
            <li>We clean; you hand over the keys spotless.</li>
          </ol>
          <p className="text-gray-500 text-sm mt-4">
            Pricing depends on home size and condition since the home is empty
            and the clean is deeper than a standard visit. Move-out quotes are
            always free. Related:{" "}
            <a
              className="text-pink-400 hover:text-pink-300"
              href="/house-cleaning-cost-orlando"
            >
              Orlando cleaning cost guide &rarr;
            </a>
          </p>
        </section>

        <section className="rounded-2xl border border-pink-900/30 bg-gray-950 p-6">
          <p>Serving {SERVICE_AREAS}</p>
        </section>
      </main>

      <ContactCTA
        heading="Booking up fast around month-end"
        subtitle="Reserve your move-out clean now — tell us your move date and we'll lock it in."
      />
      <Footer />
    </div>
  );
}
