import FlightSearch from "./FlightSearch";

const destinations = [
    ["Honolulu", "Los Angeles", "HNL → LAX"],
    ["Honolulu", "San Francisco", "HNL → SFO"],
    ["Honolulu", "Seattle", "HNL → SEA"],
    ["Maui", "Los Angeles", "OGG → LAX"],
    ["Honolulu", "Las Vegas", "HNL → LAS"],
    ["Honolulu", "New York", "HNL → JFK"],
];

const reasons = [
    {
        title: "Choose Your Cities",
        text: "Start with the departure and destination that match your plans.",
    },
    {
        title: "Set Your Dates",
        text: "Select your preferred departure and return dates.",
    },
    {
        title: "Add Travelers",
        text: "Choose the number of travelers joining your journey.",
    },
    {
        title: "Request a Quote",
        text: "Submit your trip details to continue with a personalized quote.",
    },
];

const faqs = [
    {
        q: "How can I search for Hawaiian Airlines flights?",
        a: "Enter your departure city, destination, travel dates, travelers and cabin class in the flight search form.",
    },
    {
        q: "Can I search for a one-way Hawaiian Airlines flight?",
        a: "Yes. Select One Way in the flight search form and enter your travel details.",
    },
    {
        q: "Can I search for round-trip flights?",
        a: "Yes. Select Round Trip and provide both departure and return dates.",
    },
    {
        q: "Can I select the number of travelers?",
        a: "Yes. Select the number of travelers directly in the flight search form.",
    },
    {
        q: "Can I choose a cabin class?",
        a: "Yes. The search form allows you to select your preferred cabin class.",
    },
    {
        q: "Is FlightsDealNow the official Hawaiian Airlines website?",
        a: "No. FlightsDealNow is an independent travel website providing flight search and quote-request services.",
    },
];

export default function HawaiianAirlines() {
    return (
        <div className="bg-[#f7fafc] text-slate-900">

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#071a33]">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(103,232,249,.18),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(37,99,235,.18),transparent_32%)]" />

                <div className="relative mx-auto max-w-7xl px-5 pb-32 pt-24 lg:px-8 lg:pb-40 lg:pt-28">

                    <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">

                        <div>

                            <div className="mb-7 flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full border border-cyan-300/30 bg-cyan-300/10" />

                                <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                                    Hawaiian Airlines
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                                Your journey begins
                                <span className="block text-cyan-300">
                                    with the right flight.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                                Search Hawaiian Airlines flight options and organize your
                                travel details before requesting a personalized quote through
                                FlightsDealNow.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                                    Flight Search
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                                    Travel Planning
                                </span>

                                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-slate-300">
                                    Quote Request
                                </span>
                            </div>

                        </div>

                        <div className="relative">
                            <div className="absolute -inset-5 rounded-[40px] bg-cyan-300/10 blur-3xl" />

                            <div className="relative">
                                <FlightSearch />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">

                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            Hawaiian Flight Search
                        </span>

                        <h2 className="mt-4 text-3xl font-black leading-tight text-[#071a33] sm:text-5xl">
                            Bring your travel plans together in one place.
                        </h2>
                    </div>

                    <div className="space-y-6 text-base leading-8 text-slate-600">

                        <p>
                            Whether your trip begins on the mainland or takes you toward
                            Hawaii, start by entering the cities and dates that match your
                            plans.
                        </p>

                        <p>
                            Add your traveler count and cabin preference, then continue to
                            request a personalized quote.
                        </p>

                        <div className="rounded-[26px] bg-cyan-50 p-7">
                            <span className="text-xs font-black uppercase tracking-widest text-cyan-700">
                                Travel Tip
                            </span>

                            <p className="mt-3 font-semibold leading-7 text-slate-700">
                                Having your preferred travel dates and airport details ready
                                can make the quote-request process easier.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* DESTINATIONS */}
            <section className="bg-[#071a33] py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">

                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                                Popular Connections
                            </span>

                            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                                Routes worth exploring
                            </h2>
                        </div>

                        <p className="max-w-xl leading-7 text-slate-400">
                            Explore a few commonly searched city combinations and use the
                            main search form to create your own route.
                        </p>

                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {destinations.map(([from, to, code], index) => (
                            <div
                                key={code}
                                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                            >

                                <span className="text-xs font-black text-cyan-300">
                                    ROUTE 0{index + 1}
                                </span>

                                <div className="mt-7">

                                    <h3 className="text-xl font-black text-white">
                                        {from}
                                    </h3>

                                    <div className="my-3 flex items-center gap-3">
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="text-cyan-300">✈</span>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>

                                    <h3 className="text-xl font-black text-white">
                                        {to}
                                    </h3>

                                </div>

                                <p className="mt-6 text-xs font-bold tracking-widest text-slate-500">
                                    {code}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="bg-white py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="text-center">

                        <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            How It Works
                        </span>

                        <h2 className="mt-4 text-3xl font-black text-[#071a33] sm:text-5xl">
                            From search to quote in a few simple steps.
                        </h2>

                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

                        {reasons.map((item, index) => (
                            <div
                                key={item.title}
                                className="group rounded-[28px] border border-slate-100 bg-[#f7fafc] p-7 transition hover:-translate-y-1 hover:shadow-xl"
                            >

                                <div className="flex items-center justify-between">
                                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#071a33] text-sm font-black text-cyan-300">
                                        {index + 1}
                                    </span>

                                    <span className="text-2xl text-slate-200 transition group-hover:text-cyan-300">
                                        →
                                    </span>
                                </div>

                                <h3 className="mt-8 text-xl font-black text-[#071a33]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-600">
                                    {item.text}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* PLANNING SECTION */}
            <section className="bg-[#eef6fa] py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="rounded-[34px] bg-white p-8 shadow-sm sm:p-12">

                        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">

                            <div>

                                <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                    Plan Ahead
                                </span>

                                <h2 className="mt-4 text-3xl font-black leading-tight text-[#071a33] sm:text-5xl">
                                    Make your search match your journey.
                                </h2>

                                <p className="mt-6 leading-8 text-slate-600">
                                    Your preferred route, travel dates, passenger count and
                                    cabin class all help create a complete flight request.
                                </p>

                            </div>

                            <div className="grid gap-3">

                                {[
                                    "Choose your departure airport",
                                    "Enter your destination",
                                    "Select departure and return dates",
                                    "Add your travelers",
                                    "Select your cabin preference",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4 rounded-2xl bg-[#f7fafc] p-4"
                                    >
                                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-600 text-xs font-black text-white">
                                            {index + 1}
                                        </span>

                                        <span className="text-sm font-bold text-slate-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-24">

                <div className="mx-auto max-w-4xl px-5 lg:px-8">

                    <div className="text-center">

                        <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            FAQ
                        </span>

                        <h2 className="mt-4 text-3xl font-black text-[#071a33] sm:text-5xl">
                            Hawaiian Airlines flight questions
                        </h2>

                    </div>

                    <div className="mt-12 space-y-3">

                        {faqs.map((faq) => (
                            <details
                                key={faq.q}
                                className="group rounded-2xl border border-slate-200 bg-[#f7fafc] p-5"
                            >
                                <summary className="cursor-pointer list-none pr-8 font-black text-[#071a33]">
                                    {faq.q}

                                    <span className="float-right text-xl text-blue-600 group-open:hidden">
                                        +
                                    </span>

                                    <span className="float-right hidden text-xl text-blue-600 group-open:inline">
                                        −
                                    </span>
                                </summary>

                                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                                    {faq.a}
                                </p>
                            </details>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#071a33] px-5 py-24">

                <div className="mx-auto max-w-5xl overflow-hidden rounded-[34px] border border-cyan-300/10 bg-white/[0.04] p-8 text-center sm:p-14">

                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300 text-xl text-[#071a33]">
                        ✈
                    </div>

                    <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl">
                        Ready to plan your next trip?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
                        Search Hawaiian Airlines flight options and submit your travel
                        requirements for a personalized quote.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-8 rounded-2xl bg-cyan-300 px-8 py-4 text-sm font-black text-[#071a33] transition hover:-translate-y-1"
                    >
                        Search Hawaiian Flights
                    </button>

                </div>
            </section>

        </div>
    );
}