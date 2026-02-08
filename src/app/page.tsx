export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-pink-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-pink-600">Glamour Girls</span>{" "}
            <span className="text-gray-700">Cleaning Company</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-pink-600 transition">
              Services
            </a>
            <a href="#why-us" className="hover:text-pink-600 transition">
              Why Us
            </a>
            <a href="#areas" className="hover:text-pink-600 transition">
              Service Areas
            </a>
            <a href="#contact" className="hover:text-pink-600 transition">
              Contact
            </a>
          </div>
          <a
            href="tel:+17862399932"
            className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pink-700 transition"
          >
            (786) 239-9932
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            A Sparkling Clean Home,{" "}
            <span className="text-pink-600">Every Time</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional cleaning services in the Orlando area. We bring the
            sparkle so you can focus on what matters most.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition shadow-lg shadow-pink-200"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+17862399932"
              className="border-2 border-pink-200 text-pink-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition"
            >
              Call (786) 239-9932
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
            From routine upkeep to deep cleans, we handle it all with care and
            attention to detail. Contact us for a free, personalized quote.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Cleaning",
                description:
                  "Regular maintenance cleaning to keep your home fresh and tidy. Dusting, vacuuming, mopping, and sanitizing.",
                icon: "\u2728",
              },
              {
                title: "Deep Cleaning",
                description:
                  "A thorough top-to-bottom clean. Baseboards, inside appliances, grout scrubbing, and every hidden corner.",
                icon: "\uD83D\uDCAB",
              },
              {
                title: "Move In / Move Out",
                description:
                  "Starting fresh or leaving spotless. We make sure every surface is pristine for the next chapter.",
                icon: "\uD83C\uDFE0",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white border border-pink-100 rounded-2xl p-8 hover:shadow-lg hover:shadow-pink-100 transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <a
              href="#contact"
              className="text-pink-600 font-semibold hover:text-pink-700 transition"
            >
              Contact us for pricing &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Glamour Girls?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Eco-Friendly Products",
                description:
                  "Safe, non-toxic cleaning products that are gentle on your family and pets",
              },
              {
                title: "Flexible Scheduling",
                description:
                  "Weekly, biweekly, monthly, or one-time visits to fit your schedule",
              },
              {
                title: "Satisfaction Guaranteed",
                description:
                  "Not happy? We come back and make it right, free of charge",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving the Orlando Area
          </h2>
          <p className="text-gray-600 mb-10">
            Proudly serving homes across Central Florida
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Orlando",
              "Winter Park",
              "Lake Nona",
              "Dr. Phillips",
              "Windermere",
              "Oviedo",
              "Kissimmee",
              "Winter Garden",
              "Altamonte Springs",
              "Maitland",
              "Celebration",
              "Baldwin Park",
            ].map((area) => (
              <span
                key={area}
                className="bg-pink-50 text-pink-700 px-4 py-2 rounded-full text-sm font-medium border border-pink-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-20 px-6 bg-pink-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-gray-600 mb-10">
            Get in touch for a free, no-obligation quote. We&apos;ll get back to
            you within 24 hours.
          </p>
          <form
            className="space-y-4 text-left"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
            <select
              name="service"
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-gray-600"
            >
              <option value="">Select a Service</option>
              <option value="standard">Standard Cleaning</option>
              <option value="deep">Deep Cleaning</option>
              <option value="move">Move In / Move Out</option>
            </select>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your space..."
              className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition shadow-lg shadow-pink-200"
            >
              Request a Free Quote
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-pink-200">
            <p className="text-gray-700 font-semibold mb-2">
              Prefer to reach out directly?
            </p>
            <a
              href="tel:+17862399932"
              className="text-2xl font-bold text-pink-600 hover:text-pink-700 transition"
            >
              (786) 239-9932
            </a>
            <p className="mt-2">
              <a
                href="mailto:glamourgirlscleaningcompany@gmail.com"
                className="text-pink-600 hover:text-pink-700 transition"
              >
                glamourgirlscleaningcompany@gmail.com
              </a>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white font-bold text-lg">
              Glamour Girls Cleaning Company
            </span>
            <p className="text-sm mt-1">Orlando, FL</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-pink-400 transition">
              Services
            </a>
            <a href="#why-us" className="hover:text-pink-400 transition">
              Why Us
            </a>
            <a href="#areas" className="hover:text-pink-400 transition">
              Service Areas
            </a>
            <a href="#contact" className="hover:text-pink-400 transition">
              Contact
            </a>
          </div>
          <div className="text-sm text-right">
            <a
              href="tel:+17862399932"
              className="hover:text-pink-400 transition block"
            >
              (786) 239-9932
            </a>
            <a
              href="mailto:glamourgirlscleaningcompany@gmail.com"
              className="hover:text-pink-400 transition block"
            >
              glamourgirlscleaningcompany@gmail.com
            </a>
            <p>
              &copy; {new Date().getFullYear()} Glamour Girls Cleaning Company.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
