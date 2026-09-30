import { useState } from "react"
import SEO from "../components/SEO";


const faqs = [
    {
        question: "How can I find affordable flights to New York City?",
        answer:
            "Start by comparing different dates, flight schedules, airports, and one-way or round-trip options. If your dates are flexible, check a few combinations before choosing your flight.",
    },
    {
        question: "What airports can I fly into for New York City?",
        answer:
            "The three major airports serving the New York area are JFK, LaGuardia (LGA), and Newark Liberty International Airport (EWR). The most convenient choice depends on your flight and where you're staying.",
    },
    {
        question: "Is there a best month to visit New York City?",
        answer:
            "It depends on what you want from your trip. Spring and fall are popular for comfortable sightseeing weather, summer is lively and full of outdoor activities, while winter offers seasonal events and a festive atmosphere.",
    },
    {
        question: "Can I book a one-way flight to New York?",
        answer:
            "Yes. One-way flights are an option for travelers who don't need a return ticket or have a separate return itinerary planned.",
    },
    {
        question: "Is JFK better than LaGuardia or Newark?",
        answer:
            "Not necessarily. Each airport has different airlines, routes, schedules, and transportation options. Compare the flight and consider how convenient the airport will be for your final destination.",
    },
    {
        question: "How early should I search for a flight to New York?",
        answer:
            "There isn't a booking window that guarantees the lowest fare. However, searching ahead gives you more time to compare schedules, dates, airports, and available fares.",
    },
    {
        question: "Can I find a last-minute flight to New York?",
        answer:
            "Last-minute flights can be available, but options and prices depend heavily on current availability and demand. If you're booking close to departure, compare the available itineraries carefully.",
    },
    {
        question: "Why use FlightDealsNow when planning a New York trip?",
        answer:
            "FlightDealsNow gives you a convenient way to explore available flight options and compare itineraries according to your travel dates and preferences, helping you make a more informed booking decision.",
    },
]

const thingsToDo = [
    "Times Square",
    "Central Park",
    "Statue of Liberty",
    "Empire State Building",
    "Brooklyn Bridge",
    "The High Line",
    "Rockefeller Center",
    "Grand Central Terminal",
    "The Metropolitan Museum of Art",
    "Broadway",
    "One World Observatory",
    "9/11 Memorial & Museum",
]

const bookingTips = [
    "Give yourself some flexibility. If you can move your trip by a day or two, compare those dates.",
    "Check different airports. JFK, LGA, and EWR don't always have the same flight options.",
    "Compare round-trip and one-way fares. Depending on your plans, either option could make more sense.",
    "Look beyond weekends. If your schedule allows, compare weekday departures and returns as well.",
    "Don't wait until the last moment if you don't have to. Searching earlier generally gives you more schedules and fare options to consider.",
    "Most importantly, compare the complete itinerary, not just the number on the fare.",
]

const seasons = [
    {
        title: "Spring",
        text: "Spring is a comfortable time to explore the city on foot. Parks become greener, outdoor spaces start filling up, and the weather is generally pleasant for sightseeing.",
    },
    {
        title: "Summer",
        text: "Summer brings long days and plenty happening around the city. It's a great season for outdoor events, rooftop dining, waterfront walks, and spending time in the parks. It's also a popular period for travel, so demand can be higher.",
    },
    {
        title: "Fall",
        text: "Fall is one of the most enjoyable seasons for exploring New York. Cooler temperatures make walking around the city easier, and Central Park looks especially beautiful as the leaves begin to change.",
    },
    {
        title: "Winter",
        text: "Winter gives New York a completely different feel. Holiday decorations, ice skating, seasonal events, and winter shopping make December especially lively. If you prefer a quieter trip, consider traveling outside the busiest holiday dates.",
    },
]

const airports = [
    {
        code: "JFK",
        name: "John F. Kennedy International Airport",
        text: "JFK is in Queens and handles a large selection of domestic and international flights.",
    },
    {
        code: "LGA",
        name: "LaGuardia Airport",
        text: "LaGuardia is also in Queens and is particularly useful for many domestic travelers.",
    },
    {
        code: "EWR",
        name: "Newark Liberty International Airport",
        text: "Newark Liberty is located in New Jersey and can be a convenient option depending on where you're staying and which flights are available.",
    },
]

function CheapFlightsNewYork() {
    const [openFaq, setOpenFaq] = useState(0)

    return (
        <main className="overflow-hidden bg-[#f7fafc] text-slate-900">
            <SEO
                title="Cheap Flights to New York | Flight Deals | FlightDealsNow"
                description="Find cheap flights to New York and explore available airfare options. Compare flight deals and request a quote with FlightDealsNow."
                path="/cheap-flights-new-york"
            />

            {/* HERO */}
            <section className="relative min-h-[650px] overflow-hidden bg-[#071a33]">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/hero-plane.jpg')",
                    }}
                />

                <div className="absolute inset-0 bg-[#071a33]/80" />

                <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

                <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">

                    <div className="max-w-4xl">

                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200 backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            FlightDealsNow · New York
                        </div>

                        <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Cheap Flights to
                            <span className="block text-cyan-300">
                                New York City
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                            Explore available flights to New York City, compare
                            different schedules and travel options, and find an
                            itinerary that makes sense for your trip and budget.
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
                                href="#new-york-guide"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                            >
                                Explore New York
                            </a>

                        </div>

                        <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                JFK
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                LGA
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                EWR
                            </span>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                One-way & Round-trip
                            </span>
                        </div>

                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section
                id="new-york-guide"
                className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
            >

                <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

                    <div>

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            New York Flight Guide
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            Planning a trip to New York? Start here.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            New York City has a way of making you want to see it
                            for yourself. Maybe you've always wanted to stand in
                            Times Square at night, walk through Central Park, catch
                            a Broadway show, or simply spend a few days exploring
                            the city without a strict plan.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            FlightDealsNow helps you explore available flights to
                            New York City and compare different options before you
                            book. You can look at one-way and round-trip flights,
                            check different schedules, and choose an itinerary
                            that makes sense for your trip and budget.
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-600">
                            And once you land, there's plenty waiting for you.
                            New York isn't just about the famous landmarks. It's
                            also the neighborhood coffee shop, a great slice of
                            pizza, the Manhattan skyline, and discovering a street
                            you didn't expect to love.
                        </p>

                    </div>

                    <div className="relative">

                        <div className="rounded-[32px] bg-[#071a33] p-8 text-white shadow-2xl">

                            <div className="flex items-center justify-between">

                                <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                                    NYC
                                </span>

                                <span className="text-3xl">✦</span>

                            </div>

                            <h3 className="mt-8 text-3xl font-black">
                                New York City
                            </h3>

                            <p className="mt-4 leading-7 text-slate-300">
                                A city filled with iconic landmarks, neighborhoods,
                                entertainment, food, museums, and experiences.
                            </p>

                            <div className="mt-8 grid grid-cols-3 gap-3">

                                {["JFK", "LGA", "EWR"].map((code) => (
                                    <div
                                        key={code}
                                        className="rounded-2xl bg-white/10 p-4 text-center"
                                    >
                                        <p className="font-black text-cyan-300">
                                            {code}
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

            {/* WHY NEW YORK */}
            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            Discover New York
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            Why is New York City so popular?
                        </h2>

                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-2">

                        <div className="space-y-5 text-lg leading-8 text-slate-600">

                            <p>
                                There's a reason New York continues to attract
                                travelers from all over the world.
                            </p>

                            <p>
                                For first-time visitors, the city's biggest
                                attractions are an obvious place to start.
                                You can take a ferry toward the Statue of Liberty,
                                see Manhattan from the top of the Empire State
                                Building, walk across the Brooklyn Bridge, or
                                experience the bright lights of Times Square.
                            </p>

                            <p>
                                But New York becomes even more interesting when
                                you move beyond the usual sightseeing list.
                            </p>

                        </div>

                        <div className="space-y-5 text-lg leading-8 text-slate-600">

                            <p>
                                Spend an afternoon in Greenwich Village. Walk the
                                High Line and explore Chelsea. Browse shops in SoHo.
                                Have brunch somewhere in Brooklyn. Visit a museum
                                when the weather isn't cooperating.
                            </p>

                            <p>
                                In the evening, choose between a Broadway show,
                                a rooftop view, live music, or a quiet dinner in
                                a neighborhood restaurant.
                            </p>

                            <p className="font-bold text-[#071a33]">
                                The best part? You don't have to fit everything
                                into one trip. New York gives you plenty of
                                reasons to come back.
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* FLIGHT OPTIONS */}
            <section className="bg-[#f7fafc] py-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="overflow-hidden rounded-[32px] bg-[#071a33] p-8 sm:p-12 lg:p-14">

                        <div className="max-w-3xl">

                            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                                Compare Your Options
                            </p>

                            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                                Find a flight to New York that fits your plans.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Not every traveler has the same idea of a perfect
                                flight. Some people want the lowest available fare,
                                while others care more about departure times, fewer
                                connections, or arriving at an airport that's
                                convenient for their hotel.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-slate-300">
                                That's why it's worth comparing your options before
                                making a decision.
                            </p>

                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                            {[
                                "One-way or round-trip itineraries",
                                "Different flight schedules",
                                "Domestic and international routes",
                                "Available airline options",
                                "Different fare choices",
                                "Options based on your preferred travel dates",
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
                            When is a good time to visit New York?
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Honestly, there isn't one answer. New York changes
                            with the seasons, and the best time for you depends
                            on what you want to do.
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

            {/* THINGS TO DO */}
            <section className="bg-[#f7fafc] py-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            Explore The City
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            Things to do in New York City
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            You could visit New York several times and still have
                            something left to see. If it's your first trip, these
                            are some places worth putting on your list.
                        </p>

                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {thingsToDo.map((place, index) => (

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

                    <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-600">
                        Don't feel like you have to rush from one attraction to
                        another, though. Leave some space in your itinerary for
                        wandering. Sometimes an unplanned afternoon exploring a
                        neighborhood ends up being one of the best parts of the trip.
                    </p>

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
                            Which airport should you choose for New York?
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            One thing travelers sometimes overlook when booking
                            a New York flight is the airport.
                        </p>

                        <p className="mt-4 text-lg leading-8 text-slate-600">
                            The city and surrounding area are served by three
                            major airports.
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
                            When comparing flights, don't look at the ticket price
                            alone. Check where you'll be staying, your arrival time,
                            and how you'll get from the airport to your destination.
                        </p>

                        <p className="mt-4 text-lg leading-8 text-slate-700">
                            A flight that saves a little money may not be the most
                            convenient choice if it leaves you with a long or
                            expensive journey after landing.
                        </p>

                    </div>

                </div>
            </section>

            {/* BOOKING TIPS */}
            <section className="bg-[#f7fafc] py-20">

                <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">

                    <div className="text-center">

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            Smart Flight Search
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            A few tips before booking your New York flight
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                            Finding a suitable fare isn't always about booking on
                            one specific day or following a secret formula.
                            Airfares change based on demand, availability, route,
                            season, and many other factors.
                        </p>

                    </div>

                    <div className="mt-12 space-y-4">

                        {bookingTips.map((tip, index) => (

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

                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#071a33] py-20">

                <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">

                    <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                        Your New York Journey
                    </span>

                    <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
                        Your New York journey starts here.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Maybe you're heading to New York for the first time.
                        Maybe you've been before and already have a favorite
                        neighborhood, restaurant, or view. Either way, there's
                        always something new to discover.
                    </p>

                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                        When you're ready to start planning, explore available
                        flights to New York City with FlightDealsNow. Compare
                        your options and find an itinerary that works for your trip.
                    </p>

                    <p className="mt-7 text-xl font-black text-cyan-300">
                        The city is waiting. Where will you go first?
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

export default CheapFlightsNewYork