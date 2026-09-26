import { useState } from "react"

const faqs = [
  {
    question: "How do I search for a flight on FlightsDealNow?",
    answer:
      "Enter your departure airport, destination, travel dates, travelers, and cabin class in the flight search form. Select the options that match your trip and continue to request your flight quote.",
  },
  {
    question: "Can I search for one-way and round-trip travel?",
    answer:
      "Yes. You can choose the trip type that matches your travel plans, including one-way and round-trip journeys.",
  },
  {
    question: "How does the flight quote process work?",
    answer:
      "After entering your trip details, continue to the quote form and provide your name, email, and phone number. Your request will then be submitted to our travel team for assistance.",
  },
  {
    question: "Can I request help choosing a flight?",
    answer:
      "Yes. If you need help comparing your travel options, you can submit a quote request or contact our travel team directly.",
  },
  {
    question: "How can I contact FlightsDealNow?",
    answer:
      "You can reach our travel team by phone at (855) 750-2715. Our team can help with questions about your flight search and travel request.",
  },
  {
    question: "Can I get help with my complete travel plans?",
    answer:
      "Our travel team can assist with flight-related travel requests and help you understand the available options for your trip.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="relative overflow-hidden bg-[#071a33] py-20 sm:py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            Travel Help Center
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Questions?
            <span className="block text-cyan-300">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Find quick answers about flight searches, quote requests, and
            getting help with your travel plans.
          </p>

        </div>

        {/* ================= FAQ ================= */}
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.5fr] lg:items-start">

          {/* Left Info Panel */}
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300 text-2xl text-[#071a33]">
              ?
            </div>

            <h3 className="mt-7 text-2xl font-black text-white">
              Need a little help?
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Our travel team is available if you have questions about your
              route, dates, flight search, or quote request.
            </p>

            <div className="my-7 h-px bg-white/10" />

            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Speak with our team
            </p>

            <a
              href="tel:18557502715"
              className="mt-3 block text-xl font-black text-cyan-300 transition hover:text-white"
            >
              (855) 750-2715
            </a>

            <p className="mt-2 text-xs leading-5 text-slate-400">
              Mon – Sun · 8AM – 11PM EST
            </p>

            {/* Decorative circle */}
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl" />
          </div>

          {/* FAQ List */}
          <div className="space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className={`group overflow-hidden rounded-[22px] border transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-300/30 bg-white/[0.10] shadow-xl shadow-black/10"
                      : "border-white/10 bg-white/[0.05] hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className={`hidden h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black sm:flex ${
                          isOpen
                            ? "bg-cyan-300 text-[#071a33]"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm font-extrabold sm:text-base ${
                          isOpen
                            ? "text-cyan-300"
                            : "text-white"
                        }`}
                      >
                        {faq.question}
                      </span>

                    </div>

                    {/* Toggle */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-cyan-300 text-[#071a33]"
                          : "bg-white/10 text-slate-300 group-hover:bg-white/15"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 5v14M5 12h14"
                        />
                      </svg>
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mx-5 mb-5 border-t border-white/10 pt-4 sm:mx-6">

                        <p className="text-sm leading-7 text-slate-300">
                          {faq.answer}
                        </p>

                      </div>
                    </div>
                  </div>

                </div>
              )
            })}

          </div>

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[28px] border border-white/10 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 px-6 py-6 text-center backdrop-blur-md sm:flex-row sm:text-left sm:px-8">

          <div>
            <p className="font-extrabold text-white">
              Still planning your trip?
            </p>

            <p className="mt-1 text-sm text-slate-400">
              Search your route and start your flight quote request.
            </p>
          </div>

          <a
            href="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-extrabold text-[#071a33] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Search Flights
            <span>→</span>
          </a>

        </div>

      </div>
    </section>
  )
}

export default FAQ