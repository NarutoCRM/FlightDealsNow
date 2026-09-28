const features = [
  {
    number: "01",
    title: "Smart Fare Discovery",
    text: "Explore flight options across popular routes and find fares that fit your travel plans.",
  },
  {
    number: "02",
    title: "Easy Flight Search",
    text: "Enter your route, dates and preferences in a simple search experience built for speed.",
  },
  {
    number: "03",
    title: "Travel Assistance",
    text: "Need help with your trip? Connect with our travel team for guidance before you fly.",
  },
  {
    number: "04",
    title: "Worldwide Routes",
    text: "Discover travel options across major cities in the US and international destinations.",
  },
  {
    number: "05",
    title: "Flexible Travel Choices",
    text: "Compare schedules, cabin classes and trip preferences to find an option that suits you.",
  },
  {
    number: "06",
    title: "Clear Quote Process",
    text: "Request a personalized quote with a straightforward process and clear trip details.",
  },
]

const WhyBook = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Soft background details */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">
              The FlightDealsNow difference
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Built to make
              <span className="block text-blue-600">flight planning simpler.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              From the first search to your quote request, every step is
              designed around a clearer and easier travel experience.
            </p>
          </div>

          <div className="max-w-sm border-l-2 border-cyan-300 pl-5">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Travel smarter
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Search routes, explore destinations and connect with our travel
              team when you need a little extra help.
            </p>
          </div>
        </div>

        {/* Feature layout */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group relative overflow-hidden rounded-[26px] border p-7 transition-all duration-500 hover:-translate-y-2 ${index === 0 || index === 4
                  ? "border-blue-100 bg-[#071a33] text-white hover:shadow-2xl hover:shadow-blue-950/20"
                  : "border-slate-200 bg-slate-50 text-slate-950 hover:border-cyan-200 hover:bg-white hover:shadow-xl"
                }`}
            >
              {/* Number */}
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-xs font-black tracking-wider ${index === 0 || index === 4
                    ? "bg-cyan-300 text-[#071a33]"
                    : "bg-white text-blue-600 shadow-sm ring-1 ring-slate-200"
                  }`}
              >
                {feature.number}
              </div>

              {/* Decorative line */}
              <div
                className={`mt-7 h-px w-14 transition-all duration-500 group-hover:w-24 ${index === 0 || index === 4
                    ? "bg-cyan-300"
                    : "bg-blue-500"
                  }`}
              />

              <h3
                className={`mt-6 text-xl font-extrabold tracking-tight ${index === 0 || index === 4
                    ? "text-white"
                    : "text-slate-950"
                  }`}
              >
                {feature.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 ${index === 0 || index === 4
                    ? "text-slate-300"
                    : "text-slate-600"
                  }`}
              >
                {feature.text}
              </p>

              <div
                className={`mt-7 flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest ${index === 0 || index === 4
                    ? "text-cyan-300"
                    : "text-blue-600"
                  }`}
              >
                <span>FlightDealsNow</span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </div>

              {/* Hover glow */}
              <div
                className={`pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${index === 0 || index === 4
                    ? "bg-cyan-300/20"
                    : "bg-blue-400/10"
                  }`}
              />
            </article>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="font-extrabold text-slate-900">
              Ready to plan your next trip?
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Start with your route and let FlightDealsNow help with the next step.
            </p>
          </div>

          <a
            href="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#071a33] px-6 py-3 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
          >
            Search Flights
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyBook
