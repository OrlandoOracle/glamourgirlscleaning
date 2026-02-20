function SectionHeading({
  title,
  subtitle,
  accent,
}: {
  title: string;
  subtitle?: string;
  accent?: string;
}) {
  return (
    <div className="text-center mb-12">
      {accent && (
        <span className="font-[family-name:var(--font-great-vibes)] text-pink-400 text-2xl md:text-3xl block mb-1">
          {accent}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3">
        <span className="block h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-pink-500" />
        <svg className="w-5 h-5 text-pink-400 drop-shadow-[0_0_6px_rgba(244,114,182,0.5)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
        <span className="block h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-pink-500" />
      </div>
      {subtitle && (
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-pink-900/40 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="Glamour Girls Cleaning Co."
              className="h-12 w-auto"
            />
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-pink-400 transition">
              Our Story
            </a>
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
          <a
            href="tel:+17862399932"
            className="bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-pink-500 transition"
          >
            (786) 239-9932
          </a>
        </div>
      </nav>

      {/* Hero — Prominent Logo + Storytelling */}
      <section className="pt-2 pb-6 px-6 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="max-w-5xl mx-auto text-center">
          {/* Prominent Logo */}
          <div className="flex justify-center mb-2">
            <img
              src="/logo.png"
              alt="Glamour Girls Cleaning Co. — Two best friends with feather dusters"
              className="w-[28rem] md:w-[36rem] lg:w-[42rem] h-auto"
            />
          </div>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            It started with two best friends and a simple belief: every home
            deserves superb quality care. What began as a shared dream has grown
            into Orlando&apos;s most trusted cleaning team &mdash; bringing that
            same heart, hustle, and attention to detail into every home we touch.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 transition shadow-lg shadow-pink-900/30"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+17862399932"
              className="border-2 border-pink-800 text-pink-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-950 transition"
            >
              Call (786) 239-9932
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Monday &ndash; Friday, 9:00 AM &ndash; 5:00 PM
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section id="about" className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            accent="How It Began"
            title="Our Story"
          />
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 border border-pink-900/30">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Glamour Girls Cleaning Company was born from a friendship built on
              trust, hard work, and a shared vision. As two best friends, we
              always knew we wanted to build something together &mdash; something
              that reflected who we are: dedicated, detail-oriented, and
              passionate about making people&apos;s lives easier.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We started cleaning homes side by side, and from day one, our
              standard was simple &mdash; treat every home like it&apos;s our own.
              That commitment to superb quality is what sets us apart. We
              don&apos;t cut corners. We don&apos;t rush. We pour the same care
              and pride into every single job.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, Glamour Girls serves families across Orlando and Central
              Florida. But no matter how much we grow, we&apos;ll always be two
              best friends who love what we do &mdash; and it shows in every
              sparkling result.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            accent="Premium Care"
            title="Our Services"
            subtitle="From routine upkeep to deep cleans, we handle it all with care and attention to detail. Contact us for a free, personalized quote."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard Cleaning */}
            <div className="bg-gray-900 border border-pink-900/30 rounded-2xl p-8 hover:border-pink-700/50 hover:shadow-lg hover:shadow-pink-900/20 transition">
              <div className="w-14 h-14 bg-pink-900/40 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Standard Cleaning</h3>
              <p className="text-gray-400 leading-relaxed">
                Regular maintenance cleaning to keep your home fresh and tidy.
                Dusting, vacuuming, mopping, and sanitizing.
              </p>
            </div>

            {/* Deep Cleaning */}
            <div className="bg-gray-900 border border-pink-900/30 rounded-2xl p-8 hover:border-pink-700/50 hover:shadow-lg hover:shadow-pink-900/20 transition">
              <div className="w-14 h-14 bg-pink-900/40 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.47 4.4a2.25 2.25 0 01-2.13 1.6h-6.8a2.25 2.25 0 01-2.13-1.6L5 14.5m14 0H5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Deep Cleaning</h3>
              <p className="text-gray-400 leading-relaxed">
                A thorough top-to-bottom clean. Baseboards, inside appliances,
                grout scrubbing, and every hidden corner.
              </p>
            </div>

            {/* Move In / Move Out */}
            <div className="bg-gray-900 border border-pink-900/30 rounded-2xl p-8 hover:border-pink-700/50 hover:shadow-lg hover:shadow-pink-900/20 transition">
              <div className="w-14 h-14 bg-pink-900/40 rounded-2xl flex items-center justify-center mb-5">
                <svg
                  className="w-7 h-7 text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Move In / Move Out</h3>
              <p className="text-gray-400 leading-relaxed">
                Starting fresh or leaving spotless. We make sure every surface
                is pristine for the next chapter.
              </p>
            </div>
          </div>
          <p className="text-center mt-10">
            <a
              href="#contact"
              className="text-pink-400 font-semibold hover:text-pink-300 transition"
            >
              Contact us for pricing &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            accent="Our Promise"
            title="Why Choose Glamour Girls?"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* Eco-Friendly */}
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Eco-Friendly Products</h3>
              <p className="text-gray-400 text-sm">
                Safe, non-toxic cleaning products that are gentle on your family
                and pets
              </p>
            </div>

            {/* Flexible Scheduling */}
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Flexible Scheduling</h3>
              <p className="text-gray-400 text-sm">
                Weekly, biweekly, monthly, or one-time visits to fit your
                schedule
              </p>
            </div>

            {/* Satisfaction Guaranteed */}
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-400 text-sm">
                Not happy? We come back and make it right, free of charge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            accent="Central Florida"
            title="Serving the Orlando Area"
            subtitle="Proudly serving homes across Central Florida"
          />
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
                className="bg-pink-950/50 text-pink-300 px-4 py-2 rounded-full text-sm font-medium border border-pink-800/40"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote Form */}
      <section id="contact" className="py-20 px-6 bg-gray-950">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading
            accent="Get in Touch"
            title="Ready for a Spotless Home?"
            subtitle="Get in touch for a free, no-obligation quote. We'll get back to you within 24 hours."
          />
          <form
            className="space-y-4 text-left"
            action="https://formsubmit.co/glamourgirlscleaningcompany@gmail.com"
            method="POST"
          >
            {/* FormSubmit.co configuration */}
            <input
              type="hidden"
              name="_subject"
              value="New Quote Request — Glamour Girls Cleaning"
            />
            <input
              type="hidden"
              name="_next"
              value="https://glamourgirlscleaning.com/#contact"
            />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style={{ display: "none" }} />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-pink-900/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-pink-900/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-pink-900/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <select
              name="service"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-pink-900/30 text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
              className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-pink-900/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-pink-500 transition shadow-lg shadow-pink-900/30"
            >
              Request a Free Quote
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-pink-900/30">
            <p className="text-gray-300 font-semibold mb-2">
              Prefer to reach out directly?
            </p>
            <a
              href="tel:+17862399932"
              className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition"
            >
              (786) 239-9932
            </a>
            <p className="mt-2">
              <a
                href="mailto:glamourgirlscleaningcompany@gmail.com"
                className="text-pink-400 hover:text-pink-300 transition"
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
      <footer className="bg-gray-950 border-t border-pink-900/20 text-gray-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white font-bold text-lg">
              Glamour Girls Cleaning Company
            </span>
            <p className="text-sm mt-1">Orlando, FL</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:text-pink-400 transition">
              Our Story
            </a>
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
