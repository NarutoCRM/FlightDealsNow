const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#071a33] py-20">
      {/* Background Glow */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] px-6 py-12 text-center shadow-2xl backdrop-blur-md sm:px-10 md:py-14">

          {/* Small Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
            Your next trip starts here
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready for Your Next
            <span className="block text-cyan-300">
              Journey?
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
            Search available flights, compare your travel options, and request
            a personalized quote with help from our travel team.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <button
              type="button"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 font-bold text-[#071a33] shadow-lg shadow-cyan-300/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200"
            >
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                ✈
              </span>
              Search Flights
            </button>

            <a
              href="tel:+1-888-348-7083"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <span className="text-cyan-300">☎</span>
              Talk to a Travel Expert
            </a>
          </div>

          {/* Trust Line */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/45">
            <span>✓ Personalized Assistance</span>
            <span>✓ Flexible Flight Options</span>
            <span>✓ Travel Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA