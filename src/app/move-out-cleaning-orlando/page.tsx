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
    "Move-Out Cleaning in Orlando, FL — Get Your Deposit Back | Glamour Girls",
  description:
    "Professional move-out cleaning in Orlando. Landlord- and realtor-approved checklist, transparent process, fast booking. Bonded & insured. Free quotes.",
  alternates: {
    canonical: "https://glamourgirlscleaning.com/move-out-cleaning-orlando",
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

const ICON_FIRE =
  "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z";
const ICON_DROP =
  "M12 21a9 9 0 009-9c0-3.6-3.6-8.4-9-12C6.6 3.6 3 8.4 3 12a9 9 0 009 9z";
const ICON_HOME =
  "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25";
const ICON_SQUARES =
  "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z";

const included = [
  {
    icon: ICON_FIRE,
    title: "Kitchen",
    body: "Inside oven, inside fridge, inside cabinets & drawers, degreased stovetop, sink & faucet polished.",
  },
  {
    icon: ICON_DROP,
    title: "Bathrooms",
    body: "Descaled showers/tubs, grout, toilets, mirrors, cabinets inside & out.",
  },
  {
    icon: ICON_HOME,
    title: "Whole home",
    body: "Baseboards, door frames, light switches, outlets, blinds, window sills.",
  },
  {
    icon: ICON_SQUARES,
    title: "Floors & finish",
    body: "Vacuumed & mopped throughout including closets, cobwebs removed, spot-cleaned walls, trash removed.",
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
        accent="Move-Out Cleaning"
        title="Move-Out Cleaning in Orlando"
        subtitle="Leave it spotless without lifting a finger — deposit-ready or showing-ready. We handle the deep, top-to-bottom clean an empty home needs."
      />

      {/* Intro */}
      <Section tone="gray">
        <SectionHeading
          accent="White-Glove Ready"
          title="Moving Out? We'll Handle the Deep Clean"
        />
        <Card className="rounded-3xl !p-8 md:!p-12">
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you&apos;re a renter chasing a full deposit refund or a
            seller staging for closing, a professional move-out clean is the
            difference between &ldquo;good enough&rdquo; and{" "}
            <strong className="text-pink-300">white-glove ready</strong>. We
            treat every empty home like it&apos;s our own — no corners cut, no
            rushing.
          </p>
        </Card>
      </Section>

      {/* What's included */}
      <Section tone="black" width="wide">
        <SectionHeading accent="Top to Bottom" title="What's Included" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {included.map((c) => (
            <Card key={c.title}>
              <IconTile d={c.icon} />
              <h3 className="text-lg font-bold mb-2 text-white">{c.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who it's for */}
      <Section tone="gray" width="wide">
        <SectionHeading
          accent="Who We Help"
          title="Renter, Seller, or Property Manager?"
        />
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-lg font-bold mb-2 text-pink-300">Renters</h3>
            <p className="text-gray-400 leading-relaxed">
              We follow a deposit-focused checklist landlords look for, so
              cleanliness is never the reason your deposit gets held.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2 text-pink-300">
              Sellers &amp; realtors
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We get listings photo- and showing-ready so every walkthrough
              shines.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-bold mb-2 text-pink-300">
              Property managers
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Ask about recurring turnover rates across Orlando and Kissimmee.
            </p>
          </Card>
        </div>
      </Section>

      {/* How to book */}
      <Section tone="black">
        <SectionHeading accent="Simple Process" title="How to Book" />
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            ["1", "Tell us your home size and move date."],
            ["2", "Get a free, fixed quote — no surprises."],
            ["3", "We clean; you hand over the keys spotless."],
          ].map(([n, text]) => (
            <Card key={n} className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                {n}
              </div>
              <p className="text-gray-300">{text}</p>
            </Card>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
          Move-out quotes are always free. Related:{" "}
          <a
            className="text-pink-400 hover:text-pink-300"
            href="/house-cleaning-cost-orlando"
          >
            what drives cleaning price &rarr;
          </a>
        </p>
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
          subtitle="Move-out and turnover cleaning across Orlando and Central Florida."
        />
        <AreaChips />
      </Section>

      <ContactCTA
        heading="Booking Up Fast Around Month-End"
        subtitle="Reserve your move-out clean now — tell us your move date and we'll lock it in."
      />
      <Footer />
    </div>
  );
}
