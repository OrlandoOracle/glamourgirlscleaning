export default function Home() {
  return (
    <div className="min-h-screen bg-[#0E0E14] text-[#F0F0F4]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0E0E14]/90 backdrop-blur-md border-b border-white/[0.07] z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/logo.png"
              alt="Glamour Girls Cleaning Co."
              className="h-10 w-auto"
            />
          </a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-[#9999AA]">
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
              Areas
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

      {/* Hero — Split Layout: Text Left, Logo Right */}
      <section className="pt-16 pb-0">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 md:py-16">
            {/* Left: Text + CTA */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Orlando&apos;s Most Trusted{" "}
                <span className="text-pink-500">Cleaning Team</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-[#9999AA] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Two best friends, one shared dream &mdash; superb quality care
                for every home we touch. Serving families across Central Florida.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-500 transition shadow-lg shadow-pink-900/30"
                >
                  Get a Free Quote
                </a>
                <a
                  href="tel:+17862399932"
                  className="border border-white/[0.15] text-[#F0F0F4] px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/[0.05] transition"
                >
                  Call (786) 239-9932
                </a>
              </div>
              <p className="mt-4 text-sm text-[#666678]">
                Monday &ndash; Friday, 9 AM &ndash; 5 PM
              </p>
            </div>
            {/* Right: Logo */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="/logo.png"
                alt="Glamour Girls Cleaning Co. — Two best friends with feather dusters"
                className="w-80 md:w-[28rem] lg:w-[32rem] h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="about" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Story
          </h2>
          <p className="text-[#9999AA] text-center mb-10 max-w-xl mx-auto">
            Built on friendship, trust, and a passion for making homes shine.
          </p>
          <div className="bg-[#1A1A24] rounded-2xl p-8 md:p-12 border border-white/[0.07] max-w-4xl mx-auto">
            <p className="text-[#C0C0CC] leading-relaxed mb-6">
              Glamour Girls Cleaning Company was born from a friendship built on
              trust, hard work, and a shared vision. As two best friends, we
              always knew we wanted to build something together &mdash; something
              that reflected who we are: dedicated, detail-oriented, and
              passionate about making people&apos;s lives easier.
            </p>
            <p className="text-[#C0C0CC] leading-relaxed mb-6">
              We started cleaning homes side by side, and from day one, our
              standard was simple &mdash; treat every home like it&apos;s our own.
              That commitment to superb quality is what sets us apart. We
              don&apos;t cut corners. We don&apos;t rush. We pour the same care
              and pride into every single job.
            </p>
            <p className="text-[#C0C0CC] leading-relaxed">
              Today, Glamour Girls serves families across Orlando and Central
              Florida. But no matter how much we grow, we&apos;ll always be two
              best friends who love what we do &mdash; and it shows in every
              sparkling result.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-[#0A0A10]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-[#9999AA] text-center mb-12 max-w-xl mx-auto">
            From routine upkeep to deep cleans, we handle it all with care.
            Contact us for a free, personalized quote.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Standard Cleaning */}
            <div className="bg-[#1A1A24] border border-white/[0.07] rounded-2xl p-8 hover:border-pink-500/30 transition group">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-pink-400"
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
              <h3 className="text-xl font-bold mb-2">Standard Cleaning</h3>
              <p className="text-[#9999AA] leading-relaxed text-[15px]">
                Regular maintenance cleaning to keep your home fresh and tidy.
                Dusting, vacuuming, mopping, and sanitizing.
              </p>
            </div>

            {/* Deep Cleaning */}
            <div className="bg-[#1A1A24] border border-white/[0.07] rounded-2xl p-8 hover:border-pink-500/30 transition group">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-pink-400"
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
              <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
              <p className="text-[#9999AA] leading-relaxed text-[15px]">
                A thorough top-to-bottom clean. Baseboards, inside appliances,
                grout scrubbing, and every hidden corner.
              </p>
            </div>

            {/* Move In / Move Out */}
            <div className="bg-[#1A1A24] border border-white/[0.07] rounded-2xl p-8 hover:border-pink-500/30 transition group sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center mb-5">
                <svg
                  className="w-6 h-6 text-pink-400"
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
              <h3 className="text-xl font-bold mb-2">Move In / Move Out</h3>
              <p className="text-[#9999AA] leading-relaxed text-[15px]">
                Starting fresh or leaving spotless. We make sure every surface
                is pristine for the next chapter.
              </p>
            </div>
          </div>
          <p className="text-center mt-8">
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
      <section id="why-us" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Glamour Girls?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h3 className="font-bold text-lg mb-2">Eco-Friendly Products</h3>
              <p className="text-[#9999AA] text-sm">
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
              <h3 className="font-bold text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-[#9999AA] text-sm">
                Weekly, biweekly, monthly, or one-time visits to fit your
                schedule
              </p>
            </div>

            {/* Satisfaction Guaranteed */}
            <div className="text-center sm:col-span-2 lg:col-span-1">
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
              <h3 className="font-bold text-lg mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-[#9999AA] text-sm">
                Not happy? We come back and make it right, free of charge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-16 md:py-24 bg-[#0A0A10]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving the Orlando Area
          </h2>
          <p className="text-[#9999AA] mb-8">
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
                className="bg-[#1A1A24] text-[#C0C0CC] px-4 py-2 rounded-full text-sm font-medium border border-white/[0.07]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote Form */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left: Form */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for a Spotless Home?
              </h2>
              <p className="text-[#9999AA] mb-8">
                Get in touch for a free, no-obligation quote. We&apos;ll get
                back to you within 24 hours.
              </p>
              <form
                className="space-y-4"
                action="https://formsubmit.co/glamourgirlscleaningcompany@gmail.com"
                method="POST"
              >
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
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A24] border border-white/[0.07] text-white placeholder-[#666678] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#1A1A24] border border-white/[0.07] text-white placeholder-[#666678] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A24] border border-white/[0.07] text-white placeholder-[#666678] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A24] border border-white/[0.07] text-[#9999AA] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
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
                  className="w-full px-4 py-3 rounded-xl bg-[#1A1A24] border border-white/[0.07] text-white placeholder-[#666678] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-4 rounded-full text-lg font-semibold hover:bg-pink-500 transition"
                >
                  Request a Free Quote
                </button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="lg:w-80 flex flex-col justify-center">
              <div className="bg-[#1A1A24] rounded-2xl p-8 border border-white/[0.07]">
                <h3 className="font-bold text-lg mb-6">
                  Reach Out Directly
                </h3>
                <div className="space-y-5">
                  <div>
                    <p className="text-[#666678] text-sm mb-1">Phone</p>
                    <a
                      href="tel:+17862399932"
                      className="text-xl font-bold text-pink-400 hover:text-pink-300 transition"
                    >
                      (786) 239-9932
                    </a>
                  </div>
                  <div>
                    <p className="text-[#666678] text-sm mb-1">Email</p>
                    <a
                      href="mailto:glamourgirlscleaningcompany@gmail.com"
                      className="text-pink-400 hover:text-pink-300 transition text-sm break-all"
                    >
                      glamourgirlscleaningcompany@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-[#666678] text-sm mb-1">Hours</p>
                    <p className="text-[#C0C0CC]">
                      Mon &ndash; Fri
                      <br />
                      9:00 AM &ndash; 5:00 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-[#666678] text-sm mb-1">Location</p>
                    <p className="text-[#C0C0CC]">Orlando, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07] text-[#9999AA] py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-[#F0F0F4] font-bold text-lg">
              Glamour Girls Cleaning Co.
            </span>
            <p className="text-sm mt-1">Orlando, FL</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
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
              Areas
            </a>
            <a href="#contact" className="hover:text-pink-400 transition">
              Contact
            </a>
          </div>
          <div className="text-sm text-center md:text-right">
            <a
              href="tel:+17862399932"
              className="hover:text-pink-400 transition block"
            >
              (786) 239-9932
            </a>
            <p className="mt-1 text-[#666678]">
              &copy; {new Date().getFullYear()} Glamour Girls Cleaning Co.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
