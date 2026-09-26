const AboutUs = () => {
  return (
    <main className="bg-[#f7fafc]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#071a33]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-plane.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071a33] via-[#071a33]/95 to-[#071a33]/60" />

        {/* Glow */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-3xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
              About FlightsDealNow
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Travel Planning,
              <span className="block text-cyan-300">
                Made Simpler.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              We help travelers explore flight options, understand their
              choices, and take the next step toward their journey with
              personalized travel assistance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/"
                className="rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-bold text-[#071a33] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200"
              >
                Search Flights
              </a>

              <a
                href="tel:18669871234"
                className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Talk to an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#071a33] sm:text-4xl">
                A simpler way to explore
                <span className="text-blue-600"> your travel options.</span>
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
                <p>
                  At FlightsDealNow, we believe planning a trip should feel
                  exciting rather than complicated. Whether you're travelling
                  for a family visit, a vacation, or a business trip, choosing
                  the right flight can take time and effort.
                </p>

                <p>
                  Our goal is to make that process easier by helping travelers
                  explore available flight options and connect with travel
                  assistance when they need it.
                </p>
              </div>
            </div>

            {/* Visual Card */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-cyan-300/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Travel Focus
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-[#071a33]">
                      Your Journey
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-xl">
                    ✈
                  </div>
                </div>

                <div className="mt-6 space-y-4">

                  <div className="rounded-2xl bg-[#f7fafc] p-4">
                    <p className="text-xs text-gray-400">
                      Explore
                    </p>
                    <p className="mt-1 font-bold text-[#071a33]">
                      Flight Options
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#071a33] p-4">
                    <p className="text-xs text-white/40">
                      Connect
                    </p>
                    <p className="mt-1 font-bold text-cyan-300">
                      Travel Assistance
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 p-4">
                    <p className="text-xs text-cyan-700/60">
                      Plan
                    </p>
                    <p className="mt-1 font-bold text-[#071a33]">
                      Your Next Journey
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= APPROACH ================= */}
      <section className="bg-[#071a33] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Travel support built around
              <span className="text-cyan-300"> your plans.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-white/55 sm:text-lg">
              Every traveler has different priorities. We focus on making
              available choices easier to explore and helping you understand
              the options that may fit your trip.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Card 1 */}
            <div className="group rounded-[26px] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                01
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-white">
                Explore Options
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Discover flight possibilities based on your destination,
                dates, passengers, and travel preferences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group rounded-[26px] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                02
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-white">
                Understand Choices
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                We aim to make the travel planning process easier to understand
                without unnecessary complexity.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group rounded-[26px] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                03
              </div>

              <h3 className="mt-6 text-xl font-extrabold text-white">
                Get Assistance
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                When you prefer personal support, our travel team is available
                to help discuss your travel requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PERSONAL SERVICE ================= */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">

          <div className="rounded-[32px] border border-gray-200 bg-white p-7 shadow-sm sm:p-10 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#071a33] text-2xl text-cyan-300">
                  ♡
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                  Personal Assistance
                </p>

                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#071a33]">
                  Sometimes you just want to
                  <span className="text-blue-600">
                    {" "}talk to someone.
                  </span>
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
                <p>
                  Technology makes it easy to search for travel, but having a
                  real person available can still make the planning process
                  easier.
                </p>

                <p>
                  Our travel assistance is designed for people who have
                  questions, need help understanding options, or simply prefer
                  discussing their plans with a travel professional.
                </p>

                <p>
                  We believe helpful travel service starts with listening.
                  Every journey has its own requirements, and we aim to make
                  your next step clearer.
                </p>

                <a
                  href="tel:18669871234"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#071a33] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                >
                  Talk to a Travel Expert
                  <span className="text-cyan-300">→</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative overflow-hidden bg-[#071a33] py-16 sm:py-20">

        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-300">
            ✈
          </div>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Your Journey Starts Here
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Ready to plan your
            <span className="block text-cyan-300">
              next adventure?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
            Explore your flight options or connect with our travel team for
            personalized assistance with your plans.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <a
              href="/"
              className="rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#071a33] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200"
            >
              Search Flights
            </a>

            <a
              href="tel:18669871234"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              Call {`(855) 750-2715`}
            </a>

          </div>
        </div>
      </section>

    </main>
  )
}

export default AboutUs