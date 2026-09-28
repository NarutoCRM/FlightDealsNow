const JourneyPriority = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7fafc] py-20 sm:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ================= IMAGE SIDE ================= */}
          <div className="group relative">
            <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 blur-xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white bg-white p-2 shadow-2xl">
              <div className="relative h-[360px] overflow-hidden rounded-[24px] sm:h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85"
                  alt="Traveler preparing for a journey"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a33]/80 via-transparent to-transparent" />

                {/* Image Badge */}
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  Travel with confidence
                </div>

                {/* Bottom Image Content */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <p className="text-sm font-bold text-white">
                      Your next adventure starts here.
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/75">
                      Explore routes, compare options and request your flight
                      quote with FlightDealsNow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 hidden w-48 rounded-2xl border border-white bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-lg">
                  ✈
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    FlightDealsNow
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-[#071a33]">
                    Travel made easier
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
              Travel, made simpler
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#071a33] sm:text-5xl">
              Your journey deserves
              <span className="block text-blue-600">
                a better beginning.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              Planning a trip should be exciting, not complicated. At
              FlightDealsNow, we make it easier to explore flight options and
              take the next step toward your destination.
            </p>

            {/* Feature Points */}
            <div className="mt-8 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071a33] text-cyan-300">
                  ✓
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900">
                    Explore your options
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Search routes and discover flight choices that match your
                    dates, destination and travel preferences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900">
                    Get personalized assistance
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    When you need help, our travel team can assist you with
                    your flight request and trip details.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900">
                    Move forward with confidence
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    From your first search to your quote request, we keep the
                    experience clear and straightforward.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">

              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#071a33] px-7 py-3.5 text-sm font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                Explore Flights
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </span>
                Simple flight search
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default JourneyPriority