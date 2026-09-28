import { useState } from "react"

export default function CheapFlightsLasVegas() {
    const [openFaq, setOpenFaq] = useState(0)

    const faqs = [
        {
            question: "How can I find flight options to Las Vegas?",
            answer:
                "Enter your departure airport, Las Vegas as your destination, and your preferred travel dates in the flight search. You can then explore available options for your trip.",
        },
        {
            question: "What is the best time to visit Las Vegas?",
            answer:
                "Las Vegas can be visited throughout the year. Spring and fall are especially popular because of their comfortable weather. Your ideal travel dates may also depend on your plans and schedule.",
        },
        {
            question: "Can I get help planning my Las Vegas trip?",
            answer:
                "Yes. You can contact the FlightDealsNow travel team for assistance with available flight options and general travel planning questions.",
        },
        {
            question: "Do flight prices and availability stay the same?",
            answer:
                "No. Airfares and availability can change based on travel dates, demand, airline schedules, and other factors. Final pricing and availability are subject to confirmation.",
        },
        {
            question: "Can flexible travel dates help when searching for flights?",
            answer:
                "Flexible dates can give you more options to compare. If your schedule allows, checking nearby departure or return dates may help you explore different available fares.",
        },
    ]

    const highlights = [
        {
            number: "01",
            title: "Entertainment & Shows",
            text: "Discover world-class entertainment, live performances, attractions, and experiences throughout Las Vegas.",
        },
        {
            number: "02",
            title: "Resorts & Dining",
            text: "From large resorts to restaurants and cafés, Las Vegas offers a wide variety of places to stay and eat.",
        },
        {
            number: "03",
            title: "Weekend Getaways",
            text: "Las Vegas can be a convenient destination for a short getaway, longer vacation, or special trip.",
        },
        {
            number: "04",
            title: "Explore Beyond the Strip",
            text: "Your Las Vegas plans can also include nearby attractions and experiences outside the main resort areas.",
        },
    ]

    const planningTips = [
        {
            icon: "✈",
            title: "Compare Flight Options",
            text: "Explore available itineraries and compare different options before finalizing your travel plans.",
        },
        {
            icon: "◷",
            title: "Check Flexible Dates",
            text: "If possible, look at nearby travel dates to explore additional flight choices.",
        },
        {
            icon: "⌂",
            title: "Plan Your Stay",
            text: "Consider your accommodation, transportation, activities, and overall itinerary before your trip.",
        },
        {
            icon: "✓",
            title: "Review Before Booking",
            text: "Always review the final itinerary, passenger details, dates, and applicable fare conditions.",
        },
    ]

    return (
        <section className="overflow-hidden bg-[#f7fafc] text-slate-900">

            {/* HERO */}
            <div className="relative isolate min-h-[620px] overflow-hidden bg-[#071a33]">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=2200&q=85')",
                    }}
                />

                <div className="absolute inset-0 bg-[#071a33]/80" />

                <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">

                    <div className="max-w-3xl">

                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            Travel to Las Vegas
                        </div>

                        <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Find Your Way to
                            <span className="block text-cyan-300">
                                Las Vegas
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                            Explore available flights to Las Vegas and start planning
                            your next getaway with a travel experience built around
                            your schedule.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                            <a
                                href="/#flight-search"
                                className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-7 py-4 font-extrabold text-[#071a33] shadow-xl shadow-cyan-300/10 transition hover:-translate-y-1 hover:bg-cyan-200"
                            >
                                Search Flights
                                <span className="ml-2">→</span>
                            </a>

                            <a
                                href="#las-vegas-guide"
                                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                            >
                                Explore Las Vegas
                            </a>

                        </div>

                    </div>
                </div>
            </div>

            {/* INTRO */}
            <div
                id="las-vegas-guide"
                className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
            >

                <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            Las Vegas Flight Guide
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            Plan your Las Vegas trip with more clarity.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Las Vegas is known for its entertainment, resorts,
                            dining, nightlife, shows, and attractions. Whether
                            you are planning a weekend getaway, a family vacation,
                            or a longer trip, comparing available flights can help
                            you explore options that fit your travel plans.
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-600">
                            FlightDealsNow helps you start your trip by exploring
                            available flight options and connecting with travel
                            assistance when you need help with your plans.
                        </p>
                    </div>

                    <div className="relative">

                        <div className="rounded-[30px] bg-[#071a33] p-8 text-white shadow-2xl">

                            <div className="flex items-center justify-between">
                                <span className="rounded-full bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
                                    Destination
                                </span>

                                <span className="text-3xl">✦</span>
                            </div>

                            <h3 className="mt-8 text-3xl font-black">
                                Las Vegas, Nevada
                            </h3>

                            <p className="mt-4 leading-7 text-slate-300">
                                A destination known for entertainment, resorts,
                                restaurants, attractions, and year-round travel.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                                <div className="rounded-2xl bg-white/10 p-4">
                                    <p className="text-xs uppercase tracking-wider text-slate-400">
                                        Airport
                                    </p>
                                    <p className="mt-1 font-bold">
                                        LAS
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white/10 p-4">
                                    <p className="text-xs uppercase tracking-wider text-slate-400">
                                        State
                                    </p>
                                    <p className="mt-1 font-bold">
                                        Nevada
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* HIGHLIGHTS */}
            <div className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="max-w-2xl">
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            Why Visit
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            More than a flight destination.
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Build your Las Vegas trip around the experiences
                            that matter most to you.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2">

                        {highlights.map((item) => (
                            <div
                                key={item.number}
                                className="group rounded-[28px] border border-slate-200 bg-[#f7fafc] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                            >

                                <div className="flex items-start justify-between">
                                    <span className="text-sm font-black tracking-widest text-blue-600">
                                        {item.number}
                                    </span>

                                    <span className="h-3 w-3 rounded-full bg-cyan-300 transition group-hover:scale-150" />
                                </div>

                                <h3 className="mt-10 text-2xl font-black text-[#071a33]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {item.text}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* PLANNING TIPS */}
            <div className="bg-[#f7fafc] py-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">

                        <div>
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                                Travel Planning
                            </p>

                            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                                A simpler way to prepare for your trip.
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                A little planning can make it easier to compare
                                your options and organize the important parts
                                of your Las Vegas journey.
                            </p>

                            <a
                                href="/#flight-search"
                                className="mt-8 inline-flex rounded-2xl bg-[#071a33] px-6 py-3.5 font-bold text-white transition hover:bg-blue-700"
                            >
                                Start Your Search →
                            </a>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {planningTips.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071a33] text-xl text-cyan-300">
                                        {item.icon}
                                    </div>

                                    <h3 className="mt-5 text-xl font-black text-[#071a33]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                        {item.text}
                                    </p>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>

            {/* TRAVEL ASSISTANCE */}
            <div className="bg-[#071a33] py-20">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-12">

                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">

                            <div>
                                <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                                    Travel Assistance
                                </span>

                                <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl">
                                    Need help with your Las Vegas plans?
                                </h2>

                                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                    If you have questions about available flight
                                    options or your travel plans, you can connect
                                    with the FlightDealsNow travel team.
                                </p>
                            </div>

                            <a
                                href="tel:+1-888-348-7083"
                                className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-7 py-4 font-black text-[#071a33] transition hover:-translate-y-1 hover:bg-cyan-200"
                            >
                                ☎ Talk to a Travel Expert
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="bg-white py-20">

                <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">

                    <div className="text-center">

                        <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-600">
                            Travel Help
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-[#071a33] sm:text-5xl">
                            Frequently Asked Questions
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                            Find answers to common questions about flights,
                            travel planning, and Las Vegas trips.
                        </p>

                    </div>

                    <div className="mt-10 space-y-3">

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
                                            setOpenFaq(isOpen ? -1 : index)
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
                                            className={`text-2xl text-blue-600 transition-transform ${isOpen ? "rotate-45" : ""
                                                }`}
                                        >
                                            +
                                        </span>

                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6 pl-[76px]">
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
            </div>

            {/* FINAL CTA */}
            <div className="bg-[#f7fafc] px-5 pb-20 sm:px-6 lg:px-8">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#071a33]">

                    <div className="relative px-6 py-14 text-center sm:px-12 sm:py-16">

                        <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

                        <div className="relative">

                            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-cyan-300">
                                Your Las Vegas Journey
                            </span>

                            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black text-white sm:text-5xl">
                                Ready to explore your flight options?
                            </h2>

                            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                                Start your search and explore available options
                                for your next Las Vegas trip.
                            </p>

                            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                                <a
                                    href="/#flight-search"
                                    className="rounded-2xl bg-cyan-300 px-7 py-4 font-black text-[#071a33] transition hover:bg-cyan-200"
                                >
                                    Search Flights →
                                </a>

                                <a
                                    href="tel:+1-888-348-7083"
                                    className="rounded-2xl border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                                >
                                    Call a Travel Expert
                                </a>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}