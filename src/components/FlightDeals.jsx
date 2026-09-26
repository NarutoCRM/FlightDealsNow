import { useEffect, useRef } from "react"

const PHONE_NUMBER = "18669871234"
const DISPLAY_PHONE = "(855) 750-2715"

const deals = [
  {
    from: "Chicago",
    to: "Tokyo",
    price: "$599",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85",
  },
  {
    from: "Boston",
    to: "Dubai",
    price: "$699",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=85",
  },
  {
    from: "Los Angeles",
    to: "Rome",
    price: "$549",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=900&q=85",
  },
  {
    from: "Dallas",
    to: "Cancun",
    price: "$229",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=85",
  },
  {
    from: "Seattle",
    to: "Vancouver",
    price: "$239",
    image:
      "https://images.unsplash.com/photo-1548786811-dd6e453ccca7?auto=format&fit=crop&w=900&q=85",
  },
  {
    type: "contact",
  },
]

const loopSlides = [...deals, ...deals, ...deals]

const FlightDeals = () => {
  const sliderRef = useRef(null)
  const autoPlayRef = useRef(null)

  const CARD_WIDTH = 270
  const SET_SIZE = deals.length

  useEffect(() => {
    const slider = sliderRef.current

    if (!slider) return

    requestAnimationFrame(() => {
      slider.scrollLeft = SET_SIZE * CARD_WIDTH
    })

    startAutoPlay()

    return () => {
      clearInterval(autoPlayRef.current)
    }
  }, [])

  const startAutoPlay = () => {
    clearInterval(autoPlayRef.current)

    autoPlayRef.current = setInterval(() => {
      moveNext()
    }, 3500)
  }

  const pauseAutoPlay = () => {
    clearInterval(autoPlayRef.current)
  }

  const moveNext = () => {
    const slider = sliderRef.current

    if (!slider) return

    slider.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    })

    setTimeout(() => {
      resetPosition()
    }, 650)
  }

  const movePrevious = () => {
    const slider = sliderRef.current

    if (!slider) return

    slider.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    })

    setTimeout(() => {
      resetPosition()
    }, 650)
  }

  const resetPosition = () => {
    const slider = sliderRef.current

    if (!slider) return

    const middleStart = SET_SIZE * CARD_WIDTH
    const middleEnd = SET_SIZE * 2 * CARD_WIDTH

    if (slider.scrollLeft >= middleEnd) {
      slider.style.scrollBehavior = "auto"
      slider.scrollLeft -= SET_SIZE * CARD_WIDTH
      slider.style.scrollBehavior = "smooth"
    }

    if (slider.scrollLeft < middleStart) {
      slider.style.scrollBehavior = "auto"
      slider.scrollLeft += SET_SIZE * CARD_WIDTH
      slider.style.scrollBehavior = "smooth"
    }
  }

  const handleMouseEnter = () => {
    pauseAutoPlay()
  }

  const handleMouseLeave = () => {
    startAutoPlay()
  }

  return (
    <section className="relative overflow-hidden bg-[#071a33] py-20">
      {/* Background decoration */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-200">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
              Featured Fares
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Flight Deals Worth
              <span className="text-cyan-300"> Catching</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/55 sm:text-base">
              Explore selected routes and discover attractive fares for your
              next trip.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous deals"
              onClick={() => {
                pauseAutoPlay()
                movePrevious()
                startAutoPlay()
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-[#071a33]"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Next deals"
              onClick={() => {
                pauseAutoPlay()
                moveNext()
                startAutoPlay()
              }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300 hover:text-[#071a33]"
            >
              →
            </button>
          </div>
        </div>

        {/* ================= CAROUSEL ================= */}
        <div
          ref={sliderRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {loopSlides.map((slide, index) => {

            {/* ================= CONTACT CARD ================= */ }
            if (slide.type === "contact") {
              return (
                <div
                  key={`contact-${index}`}
                  className="min-w-[270px] snap-start"
                >
                  <div className="group relative flex min-h-[340px] h-full overflow-hidden rounded-[28px] border border-cyan-300/20 bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-2xl shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2">

                    <div className="relative flex w-full flex-col overflow-hidden rounded-[27px] bg-[#0a2344] p-6">

                      {/* Glow */}
                      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/15 blur-2xl" />
                      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-500/15 blur-2xl" />

                      <div className="relative z-10">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300">
                          ☎
                        </div>

                        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-cyan-300">
                          Need assistance?
                        </p>

                        <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">
                          Talk to a
                          <span className="block text-cyan-300">
                            Travel Expert
                          </span>
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-white/55">
                          Get help with routes, fares and your upcoming travel
                          plans.
                        </p>
                      </div>

                      <div className="relative z-10 mt-auto pt-6">
                        <p className="text-xs text-white/40">
                          Call us today
                        </p>

                        <a
                          href={`tel:${PHONE_NUMBER}`}
                          className="mt-1 block text-xl font-extrabold text-white"
                        >
                          {DISPLAY_PHONE}
                        </a>

                        <a
                          href={`tel:${PHONE_NUMBER}`}
                          className="mt-4 flex h-11 items-center justify-center gap-2 rounded-xl bg-cyan-300 font-bold text-[#071a33] transition-all duration-300 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-300/20"
                        >
                          ☎ Call Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            {/* ================= DEAL CARD ================= */ }
            return (
              <div
                key={`${slide.from}-${slide.to}-${index}`}
                className="min-w-[270px] snap-start"
              >
                <div className="group h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.09]">

                  {/* Image */}
                  <div className="relative h-[165px] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={`${slide.from} to ${slide.to}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a33] via-transparent to-transparent" />

                    {/* Deal badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#071a33]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-200 backdrop-blur-md">
                      Featured Fare
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">

                    <div className="flex items-center gap-2 text-xs font-medium text-white/40">
                      <span>{slide.from}</span>
                      <span className="text-cyan-300">→</span>
                      <span>{slide.to}</span>
                    </div>

                    <h3 className="mt-2 text-xl font-extrabold text-white">
                      {slide.from}
                      <span className="mx-2 text-cyan-300">→</span>
                      {slide.to}
                    </h3>

                    <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">

                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-white/35">
                          Round trip from
                        </p>

                        <p className="mt-1 text-3xl font-black text-cyan-300">
                          {slide.price}
                        </p>
                      </div>

                      <span className="rounded-lg bg-white/5 px-2.5 py-1.5 text-[10px] font-semibold text-white/50">
                        Limited
                      </span>
                    </div>

                    {/* CTA */}
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-bold text-cyan-200 transition-all duration-300 hover:bg-cyan-300 hover:text-[#071a33]"
                    >
                      View Flight Options
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile hint */}
        <p className="mt-3 text-center text-[11px] text-white/30 sm:hidden">
          Swipe left or right to explore destinations →
        </p>

        {/* Bottom note */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/35">
            Fares and availability may change. Contact our travel team for
            current options.
          </p>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="text-xs font-bold text-cyan-300 transition hover:text-cyan-200"
          >
            Speak with an expert →
          </a>
        </div>

      </div>
    </section>
  )
}

export default FlightDeals