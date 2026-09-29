import FlightSearch from "./FlightSearch";
import SEO from "./SEO";


<SEO
  title="American Airlines Flights | Search & Get a Quote | FlightsDealNow"
  description="Search American Airlines flight options, select your dates and travelers, and request a personalized flight quote."
  path="/airlines/american-airlines"
/> 
export default function AmericanAirlines() {
    return (
        <div className="bg-[#f7fafc] text-slate-900">

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#071a33]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(103,232,249,.18),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,.18),transparent_35%)]" />

                <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-36 pt-24 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:pb-44 lg:pt-32">

                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            American Airlines Flight Search
                        </div>

                        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                            Search American Airlines
                            <span className="block text-cyan-300">
                                Flights With Ease
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                            Explore American Airlines flight options and submit your travel
                            details to receive a personalized flight quote through
                            FlightDealsNow.
                        </p>
                    </div>

                    <FlightSearch />
                </div>
            </section>

            {/* INTRO */}
            <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
                <div className="max-w-3xl">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                        American Airlines Flight Guide
                    </p>

                    <h2 className="text-3xl font-black leading-tight text-[#071a33] sm:text-5xl">
                        Plan your next American Airlines journey with ease.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-slate-600">
                        Enter your departure city, destination, travel dates, travelers
                        and cabin preference to begin your flight search.
                    </p>

                    <p className="mt-4 text-base leading-8 text-slate-600">
                        FlightDealsNow helps travelers organize their requirements before
                        requesting a personalized flight quote.
                    </p>
                </div>
            </section>

            {/* POPULAR ROUTES */}
            <section className="bg-[#071a33] py-24">
                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                        Popular Routes
                    </p>

                    <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                        Explore popular American Airlines routes
                    </h2>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            ["Dallas", "Los Angeles"],
                            ["New York", "Dallas"],
                            ["Chicago", "Dallas"],
                            ["Miami", "Los Angeles"],
                            ["Phoenix", "Dallas"],
                            ["Charlotte", "New York"],
                        ].map(([from, to], index) => (
                            <div
                                key={index}
                                className="rounded-[24px] border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]"
                            >
                                <span className="text-xs font-black text-cyan-300">
                                    0{index + 1}
                                </span>

                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <span className="font-bold text-white">{from}</span>
                                    <span className="text-cyan-300">→</span>
                                    <span className="font-bold text-white">{to}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY SEARCH */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="text-center">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            Why Search With Us
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-[#071a33] sm:text-5xl">
                            A simpler way to organize your flight search
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {[
                            ["01", "Simple Flight Search", "Enter your route and travel dates in one convenient form."],
                            ["02", "One-Way or Round Trip", "Choose the trip type that matches your travel plans."],
                            ["03", "Cabin Selection", "Select your preferred cabin class before requesting a quote."],
                            ["04", "Personalized Quote", "Submit your travel details to request a personalized quote."],
                            ["05", "Travel Assistance", "Get support with your flight search and travel requirements."],
                            ["06", "Clear Trip Details", "Keep your route, dates and passenger preferences organized."],
                        ].map(([number, title, text]) => (
                            <div
                                key={number}
                                className="rounded-[26px] border border-slate-100 bg-[#f7fafc] p-7 transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <span className="text-sm font-black text-cyan-500">
                                    {number}
                                </span>

                                <h3 className="mt-5 text-xl font-black text-[#071a33]">
                                    {title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#f7fafc] py-24">
                <div className="mx-auto max-w-4xl px-5 lg:px-8">

                    <div className="text-center">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            Flight Search FAQ
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-[#071a33] sm:text-5xl">
                            Questions about American Airlines flights?
                        </h2>
                    </div>

                    <div className="mt-10 space-y-4">
                        {[
                            "How can I search for American Airlines flights?",
                            "Can I search for one-way flights?",
                            "Can I search for round-trip flights?",
                            "Can I choose my cabin class?",
                            "Can I request help with my flight?",
                            "Is FlightDealsNow the official American Airlines website?",
                        ].map((question, index) => (
                            <details
                                key={index}
                                className="group rounded-2xl border border-slate-200 bg-white p-5"
                            >
                                <summary className="cursor-pointer list-none font-black text-[#071a33]">
                                    {question}
                                    <span className="float-right text-blue-600">
                                        +
                                    </span>
                                </summary>

                                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                                    FlightDealsNow provides a flight search and quote-request
                                    experience. Enter your travel requirements above to request
                                    assistance with your trip.
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#071a33] px-5 py-24">
                <div className="mx-auto max-w-5xl rounded-[32px] border border-cyan-300/10 bg-white/[0.05] p-8 text-center sm:p-14">

                    <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                        Ready to travel?
                    </p>

                    <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                        Start your American Airlines flight search today.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                        Enter your travel requirements and request a personalized quote
                        through FlightDealsNow.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-8 rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-black text-[#071a33]"
                    >
                        Search American Flights
                    </button>
                </div>
            </section>

        </div>
    );
}