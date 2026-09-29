const destinations = [
  {
    name: "New York",
    code: "NYC",
    eyebrow: "Urban escape",
    subtitle: "Skyline views, iconic neighborhoods and nonstop energy.",
    image:
      "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=85",
    link: "/cheap-flights-to-new-york-city",
  },
  {
    name: "Los Angeles",
    code: "LAX",
    eyebrow: "West coast",
    subtitle: "Sun, beaches, city lights and endless things to explore.",
    image:
      "https://images.unsplash.com/photo-1534190760961-74e5c5c12f32?auto=format&fit=crop&w=1200&q=85",
    link: "/cheap-flights-to-los-angeles",
  },
  {
    name: "Las Vegas",
    code: "LAS",
    eyebrow: "Weekend getaway",
    subtitle: "Bright nights, live entertainment and unforgettable escapes.",
    image:
      "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=1200&q=85",
    link: "/cheap-flights-to-las-vegas",
  },
  {
    name: "Paris",
    code: "PAR",
    eyebrow: "European favorite",
    subtitle: "Art, cafés, elegant streets and timeless landmarks.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    link: "/cheap-flights-to-paris",
  },
  {
    name: "San Francisco",
    code: "SFO",
    eyebrow: "Pacific views",
    subtitle: "Golden Gate scenery, waterfront walks and city culture.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=85",
    link: "/cheap-flights-to-san-francisco",
  },
  {
    name: "Boston",
    code: "BOS",
    eyebrow: "Classic city",
    subtitle: "Historic streets, local flavors and a relaxed coastal feel.",
    image:
      "https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=1200&q=85",
    link: "/cheap-flights-to-boston",
  },
]

export default function PopularDestinations() {
  return (
    <section id="destinations" className="relative overflow-hidden bg-[#071a33] py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section intro */}
        <div className="mb-12 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb- inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Where will you fly next?
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Destinations worth
              <span className="block text-cyan-300">taking off for.</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Browse inspiring city escapes and discover your next route with
              FlightDealsNow.
            </p>
          </div>

          <div className="hidden max-w-xs rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md lg:block">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Travel inspiration
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              From quick getaways to long-haul adventures, start with a
              destination that feels right.
            </p>
          </div>
        </div>

        {/* Destination grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {destinations.map((destination, index) => (
            <a
              key={destination.name}
              href={destination.link}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-cyan-950/40 ${index === 0 || index === 3
                ? "lg:col-span-7"
                : "lg:col-span-5"
                }`}
            >
              <div
                className={`relative overflow-hidden ${index === 0 || index === 3
                  ? "h-[360px] sm:h-[400px]"
                  : "h-[300px] sm:h-[340px]"
                  }`}
              >
                <img
                  src={destination.image}
                  alt={`${destination.name} travel destination`}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-plane.jpg"
                  }}
                />

                {/* Image treatment */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061326] via-[#061326]/20 to-transparent" />
                <div className="absolute inset-0 bg-blue-950/10 transition group-hover:bg-blue-950/0" />

                {/* Top tag */}
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  <span>{destination.code}</span>
                  <span className="h-1 w-1 rounded-full bg-cyan-300" />
                  <span>{destination.eyebrow}</span>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                  <div className="flex items-end justify-between gap-5">
                    <div className="max-w-md">
                      <p className="mb-2 text-sm font-medium text-cyan-200">
                        Fly to {destination.name}
                      </p>

                      <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        {destination.name}
                      </h3>

                      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200/90">
                        {destination.subtitle}
                      </p>
                    </div>

                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 translate-y-2 items-center justify-center rounded-full bg-white text-xl font-bold text-[#071a33] opacity-90 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:bg-cyan-300"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.06] px-6 py-6 backdrop-blur-md sm:flex-row sm:px-8">
          <div>
            <p className="text-lg font-bold text-white">
              Your next destination is closer than you think.
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Search your route and request a personalized flight quote.
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-extrabold text-[#06203a] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Search Flights
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
