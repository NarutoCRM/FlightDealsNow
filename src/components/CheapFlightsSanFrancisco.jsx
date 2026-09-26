import { useState } from "react"

const faqs = [
    {
        question: "How can I find flights to San Francisco?",
        answer:
            "Compare different dates, schedules, airports, airlines, and one-way or round-trip options. Flexible travel dates can give you more choices.",
    },
    {
        question: "What is the main airport for San Francisco?",
        answer:
            "San Francisco International Airport (SFO) is the primary airport serving San Francisco and offers both domestic and international flights.",
    },
    {
        question: "Are there other airports near San Francisco?",
        answer:
            "Yes. Oakland San Francisco Bay Airport (OAK) and San José Mineta International Airport (SJC) can also serve travelers visiting the wider Bay Area.",
    },
    {
        question: "What is the best time to visit San Francisco?",
        answer:
            "San Francisco can be visited year-round. Spring and fall can be comfortable for sightseeing, while summer brings longer days and winter tends to be cooler and wetter.",
    },
    {
        question: "Can I search for one-way flights to San Francisco?",
        answer:
            "Yes. One-way flight options are available for travelers who don't need a return itinerary or have separate plans for their return journey.",
    },
    {
        question: "Should I compare SFO with other Bay Area airports?",
        answer:
            "It can be useful. Different airports may offer different routes, schedules, and fares. Also consider transportation time and cost when comparing them.",
    },
    {
        question: "Can I find last-minute flights to San Francisco?",
        answer:
            "Last-minute flights may be available depending on airline schedules, remaining seats, travel dates, and demand. Fares and availability can change quickly.",
    },
    {
        question: "Why use FlightsDealNow to search for San Francisco flights?",
        answer:
            "FlightsDealNow gives travelers a convenient way to explore available flight options and compare itineraries based on their dates, preferences, and budget.",
    },
]

const places = [
    "Golden Gate Bridge",
    "Alcatraz Island",
    "Fisherman's Wharf",
    "Golden Gate Park",
    "Chinatown",
    "Lombard Street",
    "Pier 39",
    "Palace of Fine Arts",
    "Union Square",
    "Painted Ladies",
    "Ferry Building",
    "Twin Peaks",
]

const airports = [
    {
        code: "SFO",
        name: "San Francisco International Airport",
        text: "SFO is the main airport serving San Francisco and offers extensive domestic and international connections.",
    },
    {
        code: "OAK",
        name: "Oakland San Francisco Bay Airport",
        text: "OAK is outside San Francisco itself but can provide additional options for travelers visiting the wider Bay Area.",
    },
    {
        code: "SJC",
        name: "San José Mineta International Airport",
        text: "SJC can also be useful depending on your itinerary and where you're staying in the wider Bay Area.",
    },
]

const tips = [
    "Check a few nearby travel dates.",
    "Compare one-way and round-trip fares.",
    "Look at flights arriving at different Bay Area airports.",
    "Compare weekday and weekend schedules.",
    "Check options outside major holidays and peak periods.",
    "Search ahead when possible.",
    "Consider the complete itinerary, not just the ticket price.",
]

const seasons = [
    {
        title: "Spring",
        text: "Spring is a pleasant time to explore the city's neighborhoods, parks, and waterfront. It's a good season for walking around without the intensity of peak summer travel.",
    },
    {
        title: "Summer",
        text: "Summer brings longer days and plenty of visitors. While temperatures can remain mild, the city can be busy, so bring a layer for those cooler evenings.",
    },
    {
        title: "Fall",
        text: "Fall is often comfortable for sightseeing and can be a great time to explore the city at a more relaxed pace.",
    },
    {
        title: "Winter",
        text: "Winter brings cooler and wetter days, but it can also be a good opportunity to explore museums, restaurants, cafés, and indoor attractions.",
    },
]

function CheapFlightsSanFrancisco() {
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
                            FlightsDealNow · San Francisco
                        </div>

                        <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Cheap Flights to
                            <span className="block text-cyan-300">
                                San Francisco
                            </span>
                        </h1>

                        <h2 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                            Your San Francisco adventure starts here.
                        </h2>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                            Explore available flights to San Francisco and compare
                            options based on your dates, schedule, and budget.
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
                                href="#san-francisco-guide"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                            >
                                Explore San Francisco
                            </a>

                        </div>

                        <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">

                            {["SFO", "OAK", "SJC", "One-way", "Round-trip"].map(
                                (item) => (
                                    <span
                                        key={item}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                                    >
                                        {item}
                                    </span>
                                )
                            )}

                        </div>

                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section
                id="san-francisco-guide"
                className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
            >

                <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

                    <div>

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            San Francisco Flight Guide
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            Start planning your San Francisco trip.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Few American cities have a personality quite like San
                            Francisco. From the bright red Golden Gate Bridge and
                            steep, winding streets to waterfront neighborhoods,
                            cozy cafés, and views that make you stop and reach for
                            your camera, the city has plenty to keep you curious.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Whether you're planning a California getaway, visiting
                            family and friends, traveling for work, or adding San
                            Francisco to a West Coast road trip, finding the right
                            flight is a good place to start.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            FlightsDealNow lets you explore available flights to
                            San Francisco and compare options based on your dates,
                            schedule, and budget. Check one-way and round-trip
                            itineraries and find an option that suits the way
                            you want to travel.
                        </p>

                    </div>

                    <div>

                        <div className="rounded-[32px] bg-[#071a33] p-8 text-white shadow-2xl">

                            <div className="flex items-center justify-between">

                                <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                                    Bay Area
                                </span>

                                <span className="text-3xl">✦</span>

                            </div>

                            <h3 className="mt-8 text-3xl font-black">
                                San Francisco
                            </h3>

                            <p className="mt-4 leading-7 text-slate-300">
                                A city of iconic bridges, waterfront views,
                                neighborhoods, food, culture, and unforgettable
                                city streets.
                            </p>

                            <div className="mt-8 grid grid-cols-3 gap-3">

                                {airports.map((airport) => (
                                    <div
                                        key={airport.code}
                                        className="rounded-2xl bg-white/10 p-4 text-center"
                                    >
                                        <p className="font-black text-cyan-300">
                                            {airport.code}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-400">
                                            Airport
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* WHY SAN FRANCISCO */}
            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            Discover San Francisco
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            What makes San Francisco different?
                        </h2>

                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-2">

                        <div className="space-y-5 text-lg leading-8 text-slate-600">

                            <p>
                                San Francisco isn't really a city you can
                                experience from a checklist.
                            </p>

                            <p>
                                Yes, you should see the Golden Gate Bridge.
                                But you should also wander through Chinatown,
                                ride a historic cable car, explore the colorful
                                streets of the Mission District, or grab a coffee
                                and watch the city go by.
                            </p>

                            <p>
                                The waterfront is another big part of the
                                experience. Spend some time around Fisherman's
                                Wharf, walk along the Embarcadero, or head toward
                                the Ferry Building for food and local finds.
                            </p>

                        </div>

                        <div className="space-y-5 text-lg leading-8 text-slate-600">

                            <p>
                                And then there are the views. San Francisco's
                                hills mean you're constantly coming across a new
                                angle of the skyline, bay, or bridge.
                            </p>

                            <p className="font-bold text-[#071a33]">
                                Give yourself time to wander—you may find that
                                the unplanned parts of your trip become your
                                favorites.
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
                            Finding a flight that works for you.
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            A good flight isn't always just about finding the
                            lowest fare. Departure times, connections, baggage,
                            travel time, and the airport you fly into can all matter.
                        </p>

                        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                            With FlightsDealNow, you can explore available San
                            Francisco flight options and compare different choices.
                        </p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            {[
                                "One-way and round-trip itineraries",
                                "Different departure and arrival schedules",
                                "Domestic and international flight options",
                                "Available airline choices",
                                "Different fare options",
                                "Flights based on your preferred travel dates",
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
                            When does San Francisco look its best?
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            San Francisco's weather can be surprisingly different
                            from what travelers expect, and temperatures can vary
                            throughout the day. Still, every season has something
                            to offer.
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
                            Explore The City
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            San Francisco sights worth your time.
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            You could easily spend several days exploring the
                            city. Start with a few of these.
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
                            Flying into San Francisco.
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            San Francisco International Airport (SFO) is the
                            main airport serving the city and offers extensive
                            domestic and international connections.
                        </p>

                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            Depending on your itinerary, you may also find flights
                            to Oakland San Francisco Bay Airport (OAK) or San José
                            Mineta International Airport (SJC).
                        </p>

                    </div>

                    <div className="mt-12 grid gap-5 lg:grid-cols-3">

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
                            Before choosing a flight, consider both the fare and
                            how you'll get from the airport to your accommodation.
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
                            Before you book your San Francisco flight.
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                            Airfares can change based on travel dates, demand,
                            route, airline, and available seats. If your plans
                            allow some flexibility, compare several options
                            before deciding.
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
                        There isn't a guaranteed trick for getting the lowest fare.
                        Comparing the options available for your particular trip
                        is usually the best place to start.
                    </p>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#071a33] py-20">

                <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">

                    <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                        Your California Journey
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
                        Ready to explore San Francisco?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        San Francisco has something that keeps travelers coming
                        back—the bridge, the hills, the food, the neighborhoods,
                        and the feeling that there's always another street worth
                        exploring.
                    </p>

                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                        Take a cable car through the city, watch the fog roll
                        across the Golden Gate Bridge, spend an afternoon by the
                        bay, and leave some time to discover San Francisco without
                        a plan.
                    </p>

                    <p className="mt-7 text-xl font-black text-cyan-300">
                        Your California adventure starts with the flight.
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
                            San Francisco Flight FAQs
                        </h2>

                    </div>

                    <div className="mt-12 space-y-3">

                        {faqs.map((faq, index) => {

                            const isOpen = openFaq === index

                            return (
                                <div
                                    key={faq.question}
                                    className={`overflow-hidden rounded-2xl border transition ${
                                        isOpen
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
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xl font-bold text-blue-600 transition-transform ${
                                                isOpen ? "rotate-45" : ""
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

export default CheapFlightsSanFrancisco