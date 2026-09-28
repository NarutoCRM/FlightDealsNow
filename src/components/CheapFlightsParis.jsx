import { useState } from "react"

const faqs = [
  {
    question: "How can I find flights to Paris?",
    answer:
      "Compare different travel dates, flight schedules, airlines, airports, and one-way or round-trip options. Flexibility can give you more choices when searching.",
  },
  {
    question: "Which airports serve Paris?",
    answer:
      "The two main airports are Charles de Gaulle Airport (CDG) and Orly Airport (ORY). Your best choice may depend on your airline, flight schedule, and accommodation.",
  },
  {
    question: "What is the best time to visit Paris?",
    answer:
      "Paris can be enjoyed throughout the year. Spring and fall are popular for comfortable sightseeing weather, summer offers longer days, and winter brings a quieter, festive atmosphere.",
  },
  {
    question: "Can I search for one-way flights to Paris?",
    answer:
      "Yes. You can explore one-way options if you don't need a return flight or have separate travel arrangements for your journey back.",
  },
  {
    question: "How far ahead should I look for a Paris flight?",
    answer:
      "There is no booking period that guarantees the lowest fare. Searching ahead can give you more time to compare available schedules, routes, and fares.",
  },
  {
    question: "Can I find last-minute flights to Paris?",
    answer:
      "Last-minute flights may be available depending on airline schedules, remaining seats, travel dates, and demand. Prices and availability can change quickly.",
  },
  {
    question: "Should I compare CDG and ORY when booking?",
    answer:
      "Yes. Comparing both airports can give you additional flight choices. Also consider transportation from the airport to your accommodation before selecting your itinerary.",
  },
  {
    question: "Why search for Paris flights with FlightDealsNow?",
    answer:
      "FlightDealsNow provides a convenient way to explore available flight options and compare itineraries based on your travel dates, preferences, and budget.",
  },
]

const places = [
  "Eiffel Tower",
  "Louvre Museum",
  "Notre-Dame Cathedral",
  "Arc de Triomphe",
  "Champs-Élysées",
  "Montmartre and Sacré-Cœur",
  "Luxembourg Gardens",
  "Musée d'Orsay",
  "Seine River",
  "Le Marais",
  "Palace of Versailles",
]

const airports = [
  {
    code: "CDG",
    name: "Charles de Gaulle Airport",
    text: "Charles de Gaulle Airport is the city's largest airport and a major international gateway. It handles flights from destinations around the world.",
  },
  {
    code: "ORY",
    name: "Orly Airport",
    text: "Orly Airport is another important airport serving Paris and can be convenient depending on your airline, route, and where you're staying.",
  },
]

const tips = [
  "Check nearby departure dates to compare fares.",
  "Look at both one-way and round-trip options.",
  "Compare flights arriving at different Paris airports.",
  "Consider weekday travel if your schedule allows.",
  "Check fares outside major holidays and peak travel periods.",
  "Search ahead when possible to have more options to choose from.",
  "Compare the full itinerary, including connections and travel time.",
]

const seasons = [
  {
    title: "Spring",
    text: "Spring brings mild weather, blooming gardens, and plenty of reasons to spend time outdoors. It's a lovely season for walking along the Seine and exploring the city's parks.",
  },
  {
    title: "Summer",
    text: "Summer means longer days and a lively atmosphere. Outdoor cafés, gardens, events, and evening walks make this a popular time to visit, although travel demand can also be higher.",
  },
  {
    title: "Fall",
    text: "Fall brings cooler temperatures and a quieter feel to many parts of the city. It's a comfortable season for sightseeing, museums, cafés, and long walks through Parisian neighborhoods.",
  },
  {
    title: "Winter",
    text: "Winter gives Paris a different kind of charm. Holiday decorations, seasonal markets, cozy cafés, and fewer tourists at some attractions can make it an appealing time for travelers who enjoy a slower city experience.",
  },
]

function CheapFlightsParis() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main className="overflow-hidden bg-[#f7fafc] text-slate-900">

      {/* HERO */}
      <section className="relative min-h-[640px] overflow-hidden bg-[#071a33]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-plane.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#071a33]/80" />

        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              FlightDealsNow · Paris
            </div>

            <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Cheap Flights to
              <span className="block text-cyan-300">
                Paris
              </span>
            </h1>

            <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
              Paris is calling — are you ready?
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Explore available flights to Paris and compare options based on
              your travel dates, schedule, and budget.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="/#flight-search"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-7 py-4 font-black text-[#071a33] shadow-xl transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                Search Flights
                <span className="ml-2">→</span>
              </a>

              <a
                href="#paris-guide"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Explore Paris
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                CDG
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                ORY
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                One-way
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Round-trip
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* INTRO */}
      <section
        id="paris-guide"
        className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
      >

        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

          <div>

            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Paris Flight Guide
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
              Start planning your Paris journey.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Paris has a way of making even a simple trip feel special.
              Maybe you're dreaming of seeing the Eiffel Tower for the first
              time, wandering through charming streets, spending an afternoon
              in a museum, or sitting at a sidewalk café with nowhere else to be.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you're planning a romantic getaway, a family vacation,
              a solo adventure, or a longer European trip, Paris is a destination
              that deserves a place on your itinerary.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              FlightDealsNow helps you explore available flights to Paris and
              compare options based on your travel dates, schedule, and budget.
              You can look at one-way and round-trip itineraries and select an
              option that works for your plans.
            </p>

          </div>

          <div>
            <div className="rounded-[32px] bg-[#071a33] p-8 text-white shadow-2xl">

              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                  Destination
                </span>

                <span className="text-3xl">✦</span>
              </div>

              <h3 className="mt-8 text-3xl font-black">
                Paris, France
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                A destination filled with iconic landmarks, museums,
                cafés, neighborhoods, gardens, and memorable experiences.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">

                {airports.map((airport) => (
                  <div
                    key={airport.code}
                    className="rounded-2xl bg-white/10 p-5"
                  >
                    <p className="text-lg font-black text-cyan-300">
                      {airport.code}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Paris Airport
                    </p>
                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* WHY PARIS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Discover Paris
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
              What makes Paris so easy to fall for?
            </h2>

          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="space-y-5 text-lg leading-8 text-slate-600">

              <p>
                Paris is famous for its landmarks, but its charm goes well
                beyond the postcard views.
              </p>

              <p>
                You can spend your morning admiring the Eiffel Tower,
                wander along the Seine in the afternoon, and end the day
                exploring a neighborhood you've never heard of before.
              </p>

              <p>
                Art lovers can lose track of time inside the Louvre, while
                food lovers can make an entire trip out of discovering
                bakeries, cafés, markets, and French restaurants.
              </p>

            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">

              <p>
                There's also something wonderful about simply walking around
                Paris. Explore Montmartre's winding streets, browse the shops
                in Le Marais, relax in the Luxembourg Gardens, or find a quiet
                café and watch the city go by.
              </p>

              <p>
                You don't necessarily need a packed itinerary in Paris.
                Sometimes the best memories come from slowing down and seeing
                where the day takes you.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* FLIGHT OPTIONS */}
      <section className="bg-[#f7fafc] py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="rounded-[32px] bg-[#071a33] p-8 sm:p-12 lg:p-14">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
              Compare Your Options
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-black text-white sm:text-5xl">
              Looking for the right flight to Paris?
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              The best flight for your trip isn't always simply the one with
              the lowest fare. Departure times, connections, baggage options,
              arrival airport, and overall travel time can all affect your
              experience.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              FlightDealsNow gives you a convenient way to explore available
              flights and compare different options for your Paris trip.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                "One-way and round-trip flight options",
                "Different departure and arrival schedules",
                "Domestic connections and international routes",
                "Available airline options",
                "Different fare choices",
                "Itineraries matching your preferred travel dates",
              ].map((item, index) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 font-black text-[#071a33]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mt-4 font-bold leading-6 text-white">
                    {item}
                  </p>

                </div>

              ))}

            </div>

            <a
              href="/#flight-search"
              className="mt-8 inline-flex rounded-2xl bg-cyan-300 px-7 py-4 font-black text-[#071a33] transition hover:bg-cyan-200"
            >
              Explore Flights →
            </a>

          </div>
        </div>
      </section>

      {/* SEASONS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Plan Your Visit
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
              Which season matches your Paris plans?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Paris is beautiful in every season, but the atmosphere changes
              throughout the year.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {seasons.map((item, index) => (

              <div
                key={item.title}
                className="group rounded-[28px] border border-slate-200 bg-[#f7fafc] p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >

                <div className="flex items-center justify-between">

                  <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                    0{index + 1}
                  </span>

                  <span className="h-3 w-3 rounded-full bg-cyan-300 transition group-hover:scale-150" />

                </div>

                <h3 className="mt-8 text-2xl font-black text-[#071a33]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {item.text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* PLACES */}
      <section className="bg-[#f7fafc] py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Explore Paris
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
              Your Paris must-see list
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Paris has enough attractions to fill several trips, but if
              you're visiting for the first time, these are some places
              worth considering.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {places.map((place, index) => (

              <div
                key={place}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071a33] text-sm font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-bold text-[#071a33]">
                  {place}
                </span>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* AIRPORTS */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Choose Your Airport
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
              Where will your Paris flight land?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Paris is primarily served by two major international airports.
              When comparing flights, check the arrival airport as well as
              the fare and schedule.
            </p>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {airports.map((airport) => (

              <div
                key={airport.code}
                className="rounded-[28px] border border-slate-200 bg-[#f7fafc] p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >

                <span className="inline-flex rounded-xl bg-[#071a33] px-4 py-2 text-sm font-black text-cyan-300">
                  {airport.code}
                </span>

                <h3 className="mt-6 text-xl font-black text-[#071a33]">
                  {airport.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {airport.text}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-8 rounded-[24px] border border-cyan-200 bg-cyan-50 p-6">

            <p className="text-lg leading-8 text-slate-700">
              Your choice can affect how long it takes to reach your hotel
              or first stop in the city.
            </p>

          </div>

        </div>
      </section>

      {/* TIPS */}
      <section className="bg-[#f7fafc] py-20">

        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Smart Flight Search
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
              A few things to keep in mind before booking
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Airfare can change depending on demand, season, route, airline,
              and availability. If you're flexible, compare a few different
              possibilities before booking.
            </p>

          </div>

          <div className="mt-12 space-y-4">

            {tips.map((tip, index) => (

              <div
                key={index}
                className="flex gap-5 rounded-[24px] border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
              >

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#071a33] font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base leading-7 text-slate-600">
                  {tip}
                </p>

              </div>

            ))}

          </div>

          <p className="mt-8 text-center font-semibold leading-7 text-slate-700">
            There isn't a guaranteed formula for finding the lowest fare,
            so it's always worth checking the options available for your
            specific dates.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071a33] py-20">

        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">

          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
            Your Paris Journey
          </span>

          <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
            Pack your bags. Paris is waiting.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Paris can be a romantic escape, a cultural adventure, a
            food-filled getaway, or simply a chance to experience
            somewhere completely different.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Walk beneath the Eiffel Tower, get lost in a neighborhood
            street, spend an afternoon surrounded by art, and leave some
            time for the moments you didn't plan.
          </p>

          <p className="mt-7 text-xl font-black text-cyan-300">
            Paris is waiting. All you need is a reason to go.
          </p>

          <a
            href="/#flight-search"
            className="mt-8 inline-flex rounded-2xl bg-cyan-300 px-8 py-4 font-black text-[#071a33] transition hover:-translate-y-1 hover:bg-cyan-200"
          >
            Search Flights →
          </a>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">

        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">

          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
              Travel Help
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${isOpen
                      ? "border-cyan-300 bg-[#f7fafc] shadow-sm"
                      : "border-slate-200 bg-white"
                    }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >

                    <div className="flex items-center gap-4">

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#071a33] text-xs font-black text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-bold text-[#071a33]">
                        {faq.question}
                      </span>

                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xl font-bold text-blue-600 transition-transform ${isOpen ? "rotate-45" : ""
                        }`}
                    >
                      +
                    </span>

                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 px-6 pb-6 pt-4 pl-[76px]">
                      <p className="leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              )
            })}

          </div>

        </div>
      </section>

    </main>
  )
}

export default CheapFlightsParis