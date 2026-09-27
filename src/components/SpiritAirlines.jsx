import FlightSearch from "./FlightSearch";

const popularRoutes = [
    {
        from: "Fort Lauderdale",
        to: "Las Vegas",
        code: "FLL → LAS",
    },
    {
        from: "Orlando",
        to: "Fort Lauderdale",
        code: "MCO → FLL",
    },
    {
        from: "Las Vegas",
        to: "Los Angeles",
        code: "LAS → LAX",
    },
    {
        from: "Dallas",
        to: "Orlando",
        code: "DFW → MCO",
    },
    {
        from: "Chicago",
        to: "Fort Lauderdale",
        code: "ORD → FLL",
    },
    {
        from: "Detroit",
        to: "Orlando",
        code: "DTW → MCO",
    },
];

const travelFeatures = [
    {
        number: "01",
        title: "Choose Your Route",
        text: "Enter your departure city and destination to begin your flight search.",
    },
    {
        number: "02",
        title: "Pick Your Dates",
        text: "Select your preferred departure and return dates based on your travel plans.",
    },
    {
        number: "03",
        title: "Select Travelers",
        text: "Tell us how many travelers will be joining the trip.",
    },
    {
        number: "04",
        title: "Choose Your Cabin",
        text: "Select the cabin preference that works for your journey.",
    },
];

const faqs = [
    {
        question: "How can I search for Spirit Airlines flights?",
        answer:
            "Use the flight search form to enter your departure city, destination, travel dates, travelers and cabin preference. You can then submit your requirements for a personalized quote.",
    },
    {
        question: "Can I search for a one-way trip?",
        answer:
            "Yes. Select the One Way option in the flight search form and provide your departure and destination details.",
    },
    {
        question: "Can I search for a round-trip flight?",
        answer:
            "Yes. Select Round Trip and enter both your departure and return dates.",
    },
    {
        question: "Can I choose the number of travelers?",
        answer:
            "Yes. The existing flight search form allows you to select the number of travelers for your trip.",
    },
    {
        question: "Can I choose a cabin class?",
        answer:
            "Yes. You can select your preferred cabin class before submitting your flight search.",
    },
    {
        question: "Is FlightsDealNow the official Spirit Airlines website?",
        answer:
            "No. FlightsDealNow is an independent travel website providing flight search and quote-request services. It is not the official website of Spirit Airlines.",
    },
];

export default function SpiritAirlines() {
    return (
        <div className="bg-[#f7fafc] text-slate-900">

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#071a33]">

                <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-300/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 pb-32 pt-24 lg:px-8 lg:pb-40 lg:pt-28">

                    <div className="grid items-center gap-14 lg:grid-cols-[.85fr_1.15fr]">

                        {/* LEFT */}
                        <div>
                            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                                Spirit Airlines
                            </div>

                            <h1 className="text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                                Find a flight that
                                <span className="block text-cyan-300">
                                    fits your journey.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                                Search Spirit Airlines flight options and share your travel
                                requirements with FlightsDealNow to request a personalized
                                flight quote.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-slate-200">
                                    One Way
                                </span>

                                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-slate-200">
                                    Round Trip
                                </span>

                                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold text-slate-200">
                                    Multiple Cabin Options
                                </span>
                            </div>
                        </div>

                        {/* SEARCH */}
                        <div className="relative">
                            <div className="absolute -inset-3 rounded-[34px] bg-cyan-300/10 blur-2xl" />

                            <div className="relative">
                                <FlightSearch />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">

                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            Spirit Flight Search
                        </span>

                        <h2 className="mt-4 text-3xl font-black leading-tight text-[#071a33] sm:text-5xl">
                            Start your travel plans with the details that matter.
                        </h2>
                    </div>

                    <div className="space-y-5 text-base leading-8 text-slate-600">
                        <p>
                            Planning a domestic trip starts with choosing the right route,
                            travel dates and passenger details. Our search experience brings
                            these details together in one place.
                        </p>

                        <p>
                            Enter your requirements above and continue to the quote request
                            when you are ready.
                        </p>

                        <div className="rounded-2xl border-l-4 border-cyan-400 bg-white p-6 shadow-sm">
                            <p className="font-bold text-[#071a33]">
                                Keep your travel details ready
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Departure city, destination, dates, travelers and cabin
                                preference help create a more complete quote request.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ROUTES */}
            <section className="bg-white py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                Popular Connections
                            </span>

                            <h2 className="mt-3 text-3xl font-black text-[#071a33] sm:text-5xl">
                                Routes travelers often explore
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-6 text-slate-500">
                            Use these city combinations as a starting point for your own
                            flight search.
                        </p>

                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                        {popularRoutes.map((route, index) => (
                            <div
                                key={route.code}
                                className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-[#f7fafc] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                            >
                                <div className="flex items-center justify-between">

                                    <span className="text-xs font-black text-cyan-500">
                                        0{index + 1}
                                    </span>

                                    <span className="rounded-full bg-white px-3 py-1 text-[10px] font-black tracking-wider text-slate-500 shadow-sm">
                                        {route.code}
                                    </span>

                                </div>

                                <div className="mt-8">

                                    <p className="text-sm font-semibold text-slate-400">
                                        FROM
                                    </p>

                                    <h3 className="mt-1 text-xl font-black text-[#071a33]">
                                        {route.from}
                                    </h3>

                                    <div className="my-3 h-px bg-slate-200" />

                                    <p className="text-sm font-semibold text-slate-400">
                                        TO
                                    </p>

                                    <h3 className="mt-1 text-xl font-black text-[#071a33]">
                                        {route.to}
                                    </h3>

                                </div>

                                <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-cyan-300/10 transition group-hover:scale-150" />
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* TRAVEL STEPS */}
            <section className="bg-[#071a33] py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="max-w-2xl">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                            Simple Process
                        </span>

                        <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                            Four simple steps to start your search.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {travelFeatures.map((item) => (
                            <div
                                key={item.number}
                                className="rounded-[26px] border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.07]"
                            >
                                <span className="text-3xl font-black text-cyan-300/70">
                                    {item.number}
                                </span>

                                <h3 className="mt-8 text-xl font-black text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* TIPS */}
            <section className="bg-[#f7fafc] py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">

                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                Search Tips
                            </span>

                            <h2 className="mt-4 text-3xl font-black leading-tight text-[#071a33] sm:text-5xl">
                                Make your flight search more useful.
                            </h2>

                            <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                                Having your travel details ready can make the quote-request
                                process easier and more accurate.
                            </p>
                        </div>

                        <div className="space-y-3">

                            {[
                                "Check nearby travel dates when your schedule allows.",
                                "Compare one-way and round-trip requirements.",
                                "Enter the correct departure and destination airports.",
                                "Select the correct number of travelers.",
                                "Choose the cabin preference before submitting.",
                            ].map((tip, index) => (
                                <div
                                    key={tip}
                                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                                >
                                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-blue-50 text-xs font-black text-blue-600">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm font-semibold leading-6 text-slate-600">
                                        {tip}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white py-24">

                <div className="mx-auto max-w-4xl px-5 lg:px-8">

                    <div className="text-center">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-3xl font-black text-[#071a33] sm:text-5xl">
                            Spirit flight search questions
                        </h2>
                    </div>

                    <div className="mt-12 space-y-3">

                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-[#f7fafc] p-5"
                            >
                                <summary className="cursor-pointer list-none pr-8 font-black text-[#071a33]">
                                    {faq.question}

                                    <span className="float-right text-xl font-light text-blue-600 group-open:hidden">
                                        +
                                    </span>

                                    <span className="float-right hidden text-xl font-light text-blue-600 group-open:inline">
                                        −
                                    </span>
                                </summary>

                                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-[#071a33] px-5 py-24">

                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl text-center">

                    <span className="inline-flex rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                        Your trip starts here
                    </span>

                    <h2 className="mt-6 text-3xl font-black text-white sm:text-5xl">
                        Ready to search your Spirit flight?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                        Enter your travel information and continue to request a
                        personalized flight quote.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-8 rounded-2xl bg-cyan-300 px-8 py-4 text-sm font-black text-[#071a33] transition hover:-translate-y-1"
                    >
                        Search Spirit Flights
                    </button>

                </div>
            </section>

        </div>
    );
}