import { useState } from "react"
import SEO from "./SEO";


const faqs = [
    {
        question: "How can I find flights to Boston?",
        answer:
            "Compare different travel dates, flight schedules, airlines, and one-way or round-trip options. Flexible dates may give you more choices.",
    },
    {
        question: "What is the main airport serving Boston?",
        answer:
            "Boston Logan International Airport (BOS) is the main airport serving Boston and offers domestic and international flights.",
    },
    {
        question: "What is the best time to visit Boston?",
        answer:
            "Spring and fall are popular for comfortable sightseeing weather, while summer is lively with outdoor activities and winter offers a quieter experience with plenty of indoor attractions.",
    },
    {
        question: "Can I search for one-way flights to Boston?",
        answer:
            "Yes. One-way flights can be a convenient option if you have separate return arrangements or are continuing your journey from Boston.",
    },
    {
        question: "How early should I look for flights to Boston?",
        answer:
            "There is no guaranteed booking period for the lowest fare. Searching ahead can give you more time to compare available flights, schedules, and prices.",
    },
    {
        question: "Is Boston easy to explore without a car?",
        answer:
            "Many central attractions are accessible by walking and public transportation. Your need for a car will depend on where you're staying and whether you plan to explore outside the city.",
    },
    {
        question: "Can I find last-minute flights to Boston?",
        answer:
            "Last-minute options may be available depending on current airline schedules, remaining seats, travel dates, and demand. Fares and availability can change quickly.",
    },
    {
        question: "Why search for Boston flights with FlightDealsNow?",
        answer:
            "FlightDealsNow provides a convenient way to explore available flight options and compare itineraries based on your travel dates, preferences, and budget.",
    },
]

function SectionTitle({ eyebrow, children }) {
    return (
        <div className="mb-7">
            <SEO
                title="Cheap Flights to Boston | FlightsDealNow"
                description="Search flight options to Boston, compare travel dates and itinerary choices, and request a personalized flight quote."
                path="/cheap-flights-boston"
            />
            {eyebrow && (
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                    {eyebrow}
                </p>
            )}

            <h2 className="text-3xl font-extrabold tracking-tight text-[#071a33] sm:text-4xl">
                {children}
            </h2>
        </div>
    )
}

export default function CheapFlightsBoston() {
    const [openFaq, setOpenFaq] = useState(null)

    return (
        <div className="bg-[#f7fafc] text-gray-600">

            {/* =====================================================
                HERO
            ===================================================== */}
            <section className="relative min-h-[560px] overflow-hidden bg-[#071a33]">

                <div
                    className="absolute inset-0 bg-cover bg-center opacity-25"
                    style={{
                        backgroundImage: "url('/hero-plane.jpg')",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#071a33] via-[#071a33]/90 to-[#071a33]/50" />

                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
                            <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
                            Boston Travel Guide
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Find Your Way To
                            <span className="block text-cyan-300">
                                Boston
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                            Explore available flights to Boston, compare
                            itineraries, and discover travel options that fit
                            your dates, schedule, and plans.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                            <a
                                href="/#flight-search"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-extrabold text-[#071a33] shadow-lg shadow-cyan-300/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200"
                            >
                                ✈ Search Boston Flights
                            </a>

                            <a
                                href="tel:+1-888-348-7083"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                            >
                                ☎ Talk to an Expert
                            </a>

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                INTRO
            ===================================================== */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">

                    <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">

                        <div>
                            <SectionTitle eyebrow="Discover Boston">
                                A city where history meets modern travel
                            </SectionTitle>

                            <div className="space-y-5 text-base leading-8 sm:text-lg">
                                <p>
                                    Boston is one of those cities where history
                                    doesn't feel stuck in the past. Historic
                                    neighborhoods sit alongside modern
                                    restaurants, waterfront views, universities,
                                    sports, and distinctly New England charm.
                                </p>

                                <p>
                                    Whether you're visiting for a weekend,
                                    catching up with family, heading to Boston
                                    for work, or planning a longer New England
                                    trip, the city offers plenty to explore.
                                </p>

                                <p>
                                    FlightDealsNow helps you explore available
                                    flights to Boston and compare options based
                                    on your travel dates, schedule, and budget.
                                </p>
                            </div>
                        </div>


                        {/* Airport Card */}
                        <div className="relative">

                            <div className="absolute -inset-4 rounded-[32px] bg-cyan-300/10 blur-2xl" />

                            <div className="relative overflow-hidden rounded-[30px] bg-[#071a33] p-7 shadow-2xl">

                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                                            Main Airport
                                        </p>

                                        <h3 className="mt-2 text-xl font-extrabold text-white">
                                            Boston Logan
                                        </h3>
                                    </div>

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300">
                                        ✈
                                    </div>
                                </div>

                                <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <p className="text-xs text-white/40">
                                        Boston Logan International Airport
                                    </p>

                                    <p className="mt-2 text-4xl font-black text-cyan-300">
                                        BOS
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-white/45">
                                        Primary airport serving Boston and
                                        surrounding areas with domestic and
                                        international connections.
                                    </p>
                                </div>

                                <div className="mt-5 flex items-center gap-2 text-xs text-white/40">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    Convenient access to Boston
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                WHY BOSTON
            ===================================================== */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">

                    <SectionTitle eyebrow="Explore The City">
                        Why Boston belongs on your travel list
                    </SectionTitle>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-[28px] bg-[#071a33] p-7 text-white shadow-xl">
                            <div className="text-3xl">🏛️</div>

                            <h3 className="mt-5 text-2xl font-extrabold">
                                History Around Every Corner
                            </h3>

                            <p className="mt-4 leading-7 text-white/55">
                                Follow the Freedom Trail and discover historic
                                buildings, churches, meeting houses, and
                                landmarks connected to important moments in
                                American history.
                            </p>
                        </div>


                        <div className="rounded-[28px] border border-gray-200 bg-[#f7fafc] p-7">
                            <div className="text-3xl">🌊</div>

                            <h3 className="mt-5 text-2xl font-extrabold text-[#071a33]">
                                Waterfront & City Life
                            </h3>

                            <p className="mt-4 leading-7">
                                Spend time around Boston Common, walk along the
                                Charles River, explore the waterfront, or enjoy
                                the city's lively neighborhoods.
                            </p>
                        </div>


                        <div className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm">
                            <div className="text-3xl">🍽️</div>

                            <h3 className="mt-5 text-2xl font-extrabold text-[#071a33]">
                                Food Worth Exploring
                            </h3>

                            <p className="mt-4 leading-7">
                                Fresh seafood, New England classics, Italian
                                food in the North End, and modern restaurants
                                give travelers plenty of choices.
                            </p>
                        </div>


                        <div className="rounded-[28px] bg-cyan-50 p-7">
                            <div className="text-3xl">⚾</div>

                            <h3 className="mt-5 text-2xl font-extrabold text-[#071a33]">
                                Sports & Local Culture
                            </h3>

                            <p className="mt-4 leading-7 text-gray-600">
                                Boston's legendary teams and venues add another
                                layer to the city's unique character.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                FLIGHT OPTIONS
            ===================================================== */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">

                    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">

                        <div>
                            <SectionTitle eyebrow="Flight Search">
                                Looking for a flight to Boston?
                            </SectionTitle>

                            <p className="leading-7 sm:text-lg sm:leading-8">
                                There are several things to consider when
                                choosing a flight besides the fare itself.
                                Departure times, connections, baggage, and
                                airport convenience can all affect your trip.
                            </p>

                            <a
                                href="/#flight-search"
                                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#071a33] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
                            >
                                Search Available Flights →
                            </a>
                        </div>


                        <div className="grid gap-3 sm:grid-cols-2">

                            {[
                                "One-way and round-trip flights",
                                "Different departure and arrival schedules",
                                "Domestic and international itineraries",
                                "Available airline options",
                                "Different fare choices",
                                "Flights matching your preferred travel dates",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                                >
                                    <div className="flex items-start gap-4">

                                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xs font-extrabold text-cyan-600">
                                            0{index + 1}
                                        </span>

                                        <span className="pt-1 text-sm font-semibold leading-6 text-[#071a33]">
                                            {item}
                                        </span>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
                SEASONS
            ===================================================== */}
            <section className="bg-[#071a33] py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">

                    <SectionTitle eyebrow="Plan Your Visit">
                        <span className="text-white">
                            When should you experience Boston?
                        </span>
                    </SectionTitle>

                    <p className="max-w-3xl leading-7 text-white/50 sm:text-lg sm:leading-8">
                        Boston changes throughout the year, so your ideal time
                        to visit depends on the kind of trip you're planning.
                    </p>

                    <div className="mt-9 grid gap-5 sm:grid-cols-2">

                        {[
                            {
                                icon: "🌸",
                                title: "Spring",
                                text: "Spring brings milder weather and blooming parks, making it a pleasant time for walking tours and exploring the city's historic streets.",
                            },
                            {
                                icon: "☀️",
                                title: "Summer",
                                text: "Summer is lively and warm, with outdoor events, waterfront activities, baseball games, and plenty of people enjoying the city's parks and neighborhoods.",
                            },
                            {
                                icon: "🍂",
                                title: "Fall",
                                text: "Fall is particularly special in New England. Cooler temperatures and colorful foliage make it an excellent season for sightseeing and exploring beyond the city.",
                            },
                            {
                                icon: "❄️",
                                title: "Winter",
                                text: "Winter can be cold, but Boston has plenty to offer indoors. Museums, restaurants, historic attractions, and cozy cafés make the city enjoyable even when temperatures drop.",
                            },
                        ].map((season) => (
                            <div
                                key={season.title}
                                className="group rounded-[26px] border border-white/10 bg-white/[0.05] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
                            >
                                <div className="text-3xl">
                                    {season.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-extrabold text-white">
                                    {season.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-white/50">
                                    {season.text}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                PLACES
            ===================================================== */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">

                    <SectionTitle eyebrow="Boston Highlights">
                        Places to put on your itinerary
                    </SectionTitle>

                    <p className="max-w-3xl leading-7 sm:text-lg sm:leading-8">
                        If it's your first visit, these well-known Boston spots
                        are a useful starting point.
                    </p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            "Freedom Trail",
                            "Boston Common",
                            "Fenway Park",
                            "Quincy Market",
                            "Faneuil Hall",
                            "Boston Public Garden",
                            "Newbury Street",
                            "Beacon Hill",
                            "North End",
                            "Boston Harbor",
                            "Museum of Fine Arts",
                            "Harvard Square",
                        ].map((place, index) => (
                            <div
                                key={place}
                                className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                            >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#071a33] text-xs font-bold text-cyan-300">
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


            {/* =====================================================
                AIRPORT
            ===================================================== */}
            <section className="bg-white py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">

                    <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-center">

                        <div>
                            <SectionTitle eyebrow="Arrival Information">
                                Flying into Boston
                            </SectionTitle>

                            <p className="text-base leading-8 sm:text-lg">
                                Boston Logan International Airport (BOS) is
                                the primary airport serving Boston and the
                                surrounding region. It offers extensive
                                domestic and international connections and is
                                located relatively close to downtown Boston.
                            </p>

                            <p className="mt-5 leading-7">
                                When comparing flights, take a look at arrival
                                times and transportation options as well as the
                                fare. Your choice can make the first part of
                                your Boston trip considerably easier.
                            </p>
                        </div>


                        <div className="rounded-[30px] bg-[#071a33] p-7 shadow-xl">

                            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                                Primary Airport
                            </p>

                            <h3 className="mt-4 text-2xl font-extrabold text-white">
                                Boston Logan International Airport
                            </h3>

                            <div className="mt-6 flex items-end justify-between">
                                <span className="text-5xl font-black text-cyan-300">
                                    BOS
                                </span>

                                <span className="rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                                    Boston
                                </span>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                SEARCH TIPS
            ===================================================== */}
            <section className="bg-[#f7fafc] py-16 sm:py-20">
                <div className="mx-auto max-w-6xl px-5 sm:px-6">

                    <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">

                        <div>
                            <SectionTitle eyebrow="Travel Tips">
                                Smart ways to search for Boston flights
                            </SectionTitle>

                            <p className="leading-7 sm:text-lg sm:leading-8">
                                Airfare can vary based on your travel dates,
                                route, airline, demand, and availability. If
                                your plans aren't completely fixed, comparing
                                several options can be worthwhile.
                            </p>
                        </div>


                        <div className="space-y-3">

                            {[
                                "Check nearby departure and return dates.",
                                "Compare one-way and round-trip fares.",
                                "Look at weekday and weekend schedules.",
                                "Consider traveling outside major holiday periods.",
                                "Search ahead when possible for more itinerary choices.",
                                "Compare flight times and connections as well as fares.",
                                "Check the arrival airport and transportation options before booking.",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-xs font-extrabold text-cyan-600">
                                        {index + 1}
                                    </span>

                                    <span className="pt-1 text-sm leading-6 text-gray-600">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                    <p className="mx-auto mt-10 max-w-4xl text-center text-base leading-7 text-gray-500">
                        Rather than looking for a single “best” day to book,
                        focus on comparing the options available for your
                        particular trip.
                    </p>

                </div>
            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
            <section className="relative overflow-hidden bg-[#071a33] py-20">

                <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">

                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-2xl text-cyan-300">
                        ✈
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                        Your Boston Journey
                    </p>

                    <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                        Ready to discover
                        <span className="block text-cyan-300">
                            Boston?
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
                        Explore available flights to Boston and find an
                        itinerary that fits your travel plans.
                    </p>

                    <a
                        href="/#flight-search"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-7 py-3.5 text-sm font-extrabold text-[#071a33] shadow-lg shadow-cyan-300/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200"
                    >
                        ✈ Explore Boston Flights
                    </a>

                </div>
            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-4xl px-5 sm:px-6">

                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
                            Travel Questions
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-[#071a33] sm:text-4xl">
                            Boston Flight FAQs
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
                            Quick answers to common questions about finding
                            flights and planning a trip to Boston.
                        </p>
                    </div>


                    <div className="mt-9 space-y-3">

                        {faqs.map((faq, index) => {

                            const isOpen = openFaq === index

                            return (
                                <div
                                    key={faq.question}
                                    className={`
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        transition-all
                                        duration-300
                                        ${isOpen
                                            ? "border-cyan-200 bg-white shadow-lg"
                                            : "border-gray-200 bg-white"
                                        }
                                    `}
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(isOpen ? null : index)
                                        }
                                        className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                                    >

                                        <div className="flex items-center gap-4">

                                            <span
                                                className={`
                                                    flex
                                                    h-9
                                                    w-9
                                                    shrink-0
                                                    items-center
                                                    justify-center
                                                    rounded-xl
                                                    text-xs
                                                    font-extrabold
                                                    ${isOpen
                                                        ? "bg-[#071a33] text-cyan-300"
                                                        : "bg-cyan-50 text-cyan-600"
                                                    }
                                                `}
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="font-bold text-[#071a33]">
                                                {faq.question}
                                            </span>

                                        </div>

                                        <span
                                            className={`
                                                flex
                                                h-8
                                                w-8
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                text-xl
                                                transition-transform
                                                ${isOpen
                                                    ? "rotate-180 bg-cyan-300 text-[#071a33]"
                                                    : "bg-gray-100 text-gray-500"
                                                }
                                            `}
                                        >
                                            {isOpen ? "−" : "+"}
                                        </span>

                                    </button>


                                    {isOpen && (
                                        <div className="border-t border-gray-100 px-5 pb-6 pt-4 pl-[4.7rem] text-sm leading-7 text-gray-500 sm:px-6 sm:pl-[4.9rem]">
                                            {faq.answer}
                                        </div>
                                    )}

                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>

        </div>
    )
}