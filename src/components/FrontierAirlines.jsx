import FlightSearch from "./FlightSearch";
import SEO from "./SEO";

<SEO
  title="Frontier Airlines Flights | Search & Get a Quote | FlightsDealNow"
  description="Explore Frontier Airlines flight search options and request a personalized quote based on your trip details."
  path="/airlines/frontier-airlines"
/>

const routes = [
    ["Denver", "Las Vegas"],
    ["Denver", "Orlando"],
    ["Chicago", "Denver"],
    ["Atlanta", "Denver"],
    ["Dallas", "Las Vegas"],
    ["Philadelphia", "Orlando"],
];

const highlights = [
    {
        title: "Route First",
        text: "Start by selecting the cities that match your travel plans.",
    },
    {
        title: "Flexible Dates",
        text: "Choose departure and return dates based on your schedule.",
    },
    {
        title: "Passenger Details",
        text: "Add the number of travelers before requesting your quote.",
    },
];

const faqs = [
    {
        q: "How do I search Frontier Airlines flights?",
        a: "Enter your departure city, destination, dates, travelers and cabin class in the flight search form.",
    },
    {
        q: "Can I search one-way Frontier flights?",
        a: "Yes. Select One Way in the search form and enter your travel details.",
    },
    {
        q: "Can I search round-trip flights?",
        a: "Yes. Select Round Trip and provide your departure and return dates.",
    },
    {
        q: "Can I select my cabin class?",
        a: "Yes. You can select your preferred cabin class in the search form.",
    },
    {
        q: "Can I request a personalized quote?",
        a: "Yes. Submit your travel details through the search flow to continue to the quote request.",
    },
    {
        q: "Is FlightDealsNow the official Frontier Airlines website?",
        a: "No. FlightDealsNow is an independent travel website for flight search and quote requests.",
    },
];

export default function FrontierAirlines() {
    return (
        <div className="bg-[#f7fafc] text-slate-900">

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#071a33]">

                <div className="absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
                <div className="absolute bottom-[-140px] right-[-100px] h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-5 pb-32 pt-24 lg:px-8 lg:pb-40 lg:pt-28">

                    <div className="grid gap-12 lg:grid-cols-[1fr_.95fr] lg:items-center">

                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-cyan-300" />

                                <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                                    Frontier Airlines
                                </span>
                            </div>

                            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                                Plan the route.
                                <span className="block text-cyan-300">
                                    Start the journey.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                                Search Frontier Airlines flight options and provide your
                                travel requirements to request a personalized quote through
                                FlightDealsNow.
                            </p>

                            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <strong className="block text-lg text-white">01</strong>
                                    <span className="mt-1 block text-xs text-slate-400">
                                        Route
                                    </span>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <strong className="block text-lg text-white">02</strong>
                                    <span className="mt-1 block text-xs text-slate-400">
                                        Dates
                                    </span>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <strong className="block text-lg text-white">03</strong>
                                    <span className="mt-1 block text-xs text-slate-400">
                                        Quote
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[35px] bg-blue-500/10 blur-2xl" />
                            <div className="relative">
                                <FlightSearch />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-2">

                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            Flight Planning
                        </span>

                        <h2 className="mt-4 text-3xl font-black leading-tight text-[#071a33] sm:text-5xl">
                            Your flight search starts with a clear plan.
                        </h2>
                    </div>

                    <div className="space-y-5 text-base leading-8 text-slate-600">
                        <p>
                            Enter your preferred route and travel dates to organize the
                            details of your Frontier Airlines flight search.
                        </p>

                        <p>
                            You can also select the number of travelers and your preferred
                            cabin before continuing to the quote request.
                        </p>
                    </div>

                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-3">

                    {highlights.map((item, index) => (
                        <div
                            key={item.title}
                            className="rounded-[28px] bg-[#071a33] p-7 text-white"
                        >
                            <span className="text-4xl font-black text-cyan-300/60">
                                0{index + 1}
                            </span>

                            <h3 className="mt-8 text-xl font-black">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-slate-400">
                                {item.text}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ROUTES */}
            <section className="overflow-hidden bg-[#eef6fa] py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                                Popular Connections
                            </span>

                            <h2 className="mt-3 text-3xl font-black text-[#071a33] sm:text-5xl">
                                Routes to explore
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-6 text-slate-500">
                            These city pairs can help you get started with your own search.
                        </p>

                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2">

                        {routes.map(([from, to], index) => (
                            <div
                                key={`${from}-${to}`}
                                className="group flex items-center justify-between rounded-[24px] border border-white bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        Departure
                                    </span>

                                    <h3 className="mt-1 text-lg font-black text-[#071a33]">
                                        {from}
                                    </h3>
                                </div>

                                <div className="mx-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-300 group-hover:text-[#071a33]">
                                    →
                                </div>

                                <div className="text-right">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        Destination
                                    </span>

                                    <h3 className="mt-1 text-lg font-black text-[#071a33]">
                                        {to}
                                    </h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* SEARCH GUIDE */}
            <section className="bg-white py-24">

                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="rounded-[34px] bg-[#071a33] p-8 sm:p-12">

                        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

                            <div>
                                <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                                    Before You Search
                                </span>

                                <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                                    Have your trip details ready.
                                </h2>

                                <p className="mt-5 leading-7 text-slate-400">
                                    A few simple details help you move through the flight quote
                                    process smoothly.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">

                                {[
                                    "Departure city or airport",
                                    "Destination city or airport",
                                    "Departure date",
                                    "Return date if required",
                                    "Number of travelers",
                                    "Preferred cabin class",
                                ].map((item, index) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                                    >
                                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-cyan-300 text-xs font-black text-[#071a33]">
                                            {index + 1}
                                        </span>

                                        <span className="text-sm font-semibold text-slate-300">
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
            <section className="bg-[#f7fafc] py-24">

                <div className="mx-auto max-w-4xl px-5 lg:px-8">

                    <div className="mb-10 text-center">
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            FAQ
                        </span>

                        <h2 className="mt-4 text-3xl font-black text-[#071a33] sm:text-5xl">
                            Frontier flight search questions
                        </h2>
                    </div>

                    <div className="space-y-3">

                        {faqs.map((faq) => (
                            <details
                                key={faq.q}
                                className="group rounded-2xl border border-slate-200 bg-white p-5"
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

                                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                                    {faq.a}
                                </p>
                            </details>
                        ))}

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#071a33] px-5 py-24">

                <div className="mx-auto max-w-5xl text-center">

                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cyan-300 text-2xl text-[#071a33]">
                        ✈
                    </div>

                    <h2 className="mt-7 text-3xl font-black text-white sm:text-5xl">
                        Your next trip can start here.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                        Search your Frontier Airlines route and submit your travel
                        requirements for a personalized quote.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-8 rounded-2xl bg-cyan-300 px-8 py-4 text-sm font-black text-[#071a33] transition hover:-translate-y-1"
                    >
                        Start Flight Search
                    </button>

                </div>
            </section>

        </div>
    );
}