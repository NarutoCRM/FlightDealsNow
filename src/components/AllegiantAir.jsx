import FlightSearch from "./FlightSearch";
import SEO from "./SEO";


<SEO
  title="Allegiant Air Flights | Search & Get a Quote | FlightsDealNow"
  description="Explore Allegiant Air flight search options, enter your trip details and request a personalized flight quote."
  path="/airlines/allegiant-air"
/>
const routeExamples = [
    {
        from: "Las Vegas",
        to: "Orlando",
        text: "A simple starting point for planning a leisure trip."
    },
    {
        from: "Phoenix",
        to: "Las Vegas",
        text: "Compare your preferred dates before requesting a quote."
    },
    {
        from: "Tampa",
        to: "Cincinnati",
        text: "Enter your trip details and let our team review your request."
    },
    {
        from: "Nashville",
        to: "Orlando",
        text: "Build your itinerary around the dates that work for you."
    },
    {
        from: "Fort Lauderdale",
        to: "Asheville",
        text: "Start with your cities, dates and traveler information."
    },
    {
        from: "Orlando",
        to: "Las Vegas",
        text: "Use the search form above to begin your trip request."
    },
];

const planningSteps = [
    {
        number: "01",
        title: "Choose Your Cities",
        text: "Enter the airport or city you are departing from and your destination."
    },
    {
        number: "02",
        title: "Set Your Dates",
        text: "Select your departure and return dates based on your travel plans."
    },
    {
        number: "03",
        title: "Add Travelers",
        text: "Tell us how many passengers are traveling and select your cabin."
    },
    {
        number: "04",
        title: "Request Your Quote",
        text: "Submit your details and our team can review your flight request."
    },
];

const faqs = [
    {
        question: "Can I search for a one-way trip?",
        answer:
            "Yes. Select One Way in the flight search form and provide your departure and destination details."
    },
    {
        question: "Can I search for a round trip?",
        answer:
            "Yes. Select Round Trip and enter both your departure and return dates."
    },
    {
        question: "Can I search by airport code?",
        answer:
            "Yes. You can search using an airport name, city, country or IATA airport code."
    },
    {
        question: "Can I add multiple travelers?",
        answer:
            "Yes. Select the number of travelers directly from the search form."
    },
    {
        question: "Is this the official Allegiant Air website?",
        answer:
            "No. FlightDealsNow is an independent travel website. This page is provided to help travelers start a flight search and quote request."
    },
];

export default function AllegiantAir() {
    return (
        <div className="bg-[#f7fafc] text-[#071a33]">

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#071a33]">
                <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

                        <div className="text-white">
                            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                                Allegiant Air Flight Search
                            </span>

                            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                                Make your next trip
                                <span className="block text-cyan-300">
                                    simple to plan.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                                Search your preferred cities, choose your travel dates,
                                add passenger details and start a flight quote request
                                through FlightDealsNow.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                                    Easy Search
                                </span>
                                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                                    Flexible Dates
                                </span>
                                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                                    Quote Request
                                </span>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-white/10 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                            <div className="rounded-[22px] bg-white p-2">
                                <FlightSearch />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-3">

                    <div className="lg:col-span-2">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            Start With Your Trip
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            A straightforward way to begin your flight search
                        </h2>

                        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                            Planning a flight starts with a few important details.
                            Enter your cities, dates and traveler information above,
                            then continue with your quote request.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-[#071a33] p-7 text-white shadow-xl">
                        <div className="text-4xl font-bold text-cyan-300">
                            01
                        </div>

                        <h3 className="mt-5 text-xl font-bold">
                            Search First
                        </h3>

                        <p className="mt-3 leading-7 text-slate-300">
                            Start with your basic journey information and continue
                            once everything looks correct.
                        </p>
                    </div>

                </div>
            </section>

            {/* ROUTE EXAMPLES */}
            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            Route Ideas
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Start planning from your preferred cities
                        </h2>

                        <p className="mt-4 text-slate-600">
                            These are example city pairs to help you think about your
                            next journey. Always use the search form for your actual
                            travel dates and requirements.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {routeExamples.map((route, index) => (
                            <div
                                key={index}
                                className="group rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-semibold text-slate-400">
                                        ROUTE {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-cyan-500 transition group-hover:translate-x-1">
                                        →
                                    </span>
                                </div>

                                <div className="mt-6 flex items-center gap-3 text-lg font-bold">
                                    <span>{route.from}</span>
                                    <span className="text-blue-500">→</span>
                                    <span>{route.to}</span>
                                </div>

                                <p className="mt-4 text-sm leading-6 text-slate-600">
                                    {route.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* PLANNING STEPS */}
            <section className="bg-[#071a33] py-20 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                            Simple Planning
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            From search to quote in a few steps
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {planningSteps.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                            >
                                <span className="text-sm font-bold text-cyan-300">
                                    {step.number}
                                </span>

                                <h3 className="mt-5 text-xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CHECKLIST */}
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                <div className="grid overflow-hidden rounded-[32px] bg-white shadow-xl lg:grid-cols-2">

                    <div className="bg-gradient-to-br from-blue-600 to-[#071a33] p-10 text-white lg:p-14">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                            Before You Search
                        </p>

                        <h2 className="mt-4 text-3xl font-bold">
                            Have these details ready
                        </h2>

                        <p className="mt-5 leading-8 text-blue-100">
                            A little preparation can make the search process easier.
                            Keep your preferred airports, travel dates and passenger
                            details available before submitting your request.
                        </p>
                    </div>

                    <div className="p-10 lg:p-14">
                        <div className="space-y-6">

                            {[
                                "Departure city or airport",
                                "Destination city or airport",
                                "Departure and return dates",
                                "Number of travelers",
                                "Preferred cabin class",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                                        ✓
                                    </div>

                                    <span className="font-medium text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#f1f5f9] py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">

                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                            FAQ
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Questions about flight search
                        </h2>
                    </div>

                    <div className="mt-10 space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group rounded-2xl border border-slate-200 bg-white p-6"
                            >
                                <summary className="cursor-pointer list-none font-bold text-[#071a33]">
                                    <div className="flex items-center justify-between gap-5">
                                        <span>{faq.question}</span>

                                        <span className="text-xl text-blue-600 transition group-open:rotate-45">
                                            +
                                        </span>
                                    </div>
                                </summary>

                                <p className="mt-4 pr-8 leading-7 text-slate-600">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-white px-6 py-20">
                <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#071a33] px-8 py-14 text-center text-white shadow-2xl sm:px-12">

                    <span className="inline-flex rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                        FlightDealsNow
                    </span>

                    <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
                        Ready to plan your next flight?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                        Enter your journey details above and start your flight
                        quote request today.
                    </p>

                    <a
                        href="#top"
                        className="mt-8 inline-flex rounded-full bg-cyan-300 px-7 py-3 font-bold text-[#071a33] transition hover:bg-cyan-200"
                    >
                        Start Your Search
                    </a>

                </div>
            </section>

            {/* DISCLAIMER */}
            <section className="border-t border-slate-200 bg-white px-6 py-8">
                <div className="mx-auto max-w-5xl text-center">
                    <p className="text-xs leading-6 text-slate-500">
                        FlightDealsNow is an independent travel website and is not
                        the official website of Allegiant Air. Airline names and
                        references are used for informational and search purposes.
                    </p>
                </div>
            </section>

        </div>
    );
}