const testimonials = [
  {
    quote:
      "Finding the right flight became much easier than I expected. The process was clear, quick, and the support was genuinely helpful.",
    name: "Michael T.",
    location: "California, USA",
    initials: "MT",
  },
  {
    quote:
      "I liked how simple everything felt. I could share my travel details and get help without dealing with a complicated booking process.",
    name: "Sarah L.",
    location: "Florida, USA",
    initials: "SL",
  },
  {
    quote:
      "FlightDealsNow made my travel planning much less stressful. The team was helpful and made sure I understood my options.",
    name: "Jessica R.",
    location: "New York, USA",
    initials: "JR",
  },
]

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#071a33] py-20 sm:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md">
            Traveler experiences
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Real journeys.
            <span className="block text-cyan-300">
              Real experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            See how travelers describe their experience with FlightDealsNow.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.1] hover:shadow-2xl hover:shadow-black/20"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-5 text-7xl font-black leading-none text-white/5">
                “
              </div>

              {/* Rating */}
              <div className="relative flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="text-sm text-cyan-300"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="relative mt-7 text-[15px] leading-7 text-slate-200">
                “{item.quote}”
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-white/10" />

              {/* Customer */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-black ${index === 1
                    ? "bg-cyan-300 text-[#071a33]"
                    : "bg-white text-[#071a33]"
                    }`}
                >
                  {item.initials}
                </div>

                <div>
                  <h3 className="font-extrabold text-white">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {item.location}
                  </p>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.05] px-6 py-5 text-center backdrop-blur-md sm:flex-row sm:text-left sm:px-8">
          <div>
            <p className="font-extrabold text-white">
              Planning your next trip?
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Start with your destination and explore your flight options.
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-extrabold text-[#071a33] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Search Flights
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Testimonials