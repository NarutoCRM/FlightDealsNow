import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlightSearch from "./FlightSearch";

export default function UnitedAirlines() {
    const navigate = useNavigate();

    const [tripType, setTripType] = useState("Round Trip");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departure, setDeparture] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [travelers, setTravelers] = useState(1);
    const [cabin, setCabin] = useState("Economy");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const today = new Date().toISOString().split("T")[0];

    const handleSearch = (e) => {
        e.preventDefault();
        setError("");

        if (!from || !to || !departure) {
            setError("Please complete your flight details.");
            return;
        }

        if (tripType === "Round Trip" && !returnDate) {
            setError("Please select a return date.");
            return;
        }

        if (from.toLowerCase() === to.toLowerCase()) {
            setError("Please select different departure and arrival locations.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            navigate("/flight-quote", {
                state: {
                    tripType,
                    from,
                    to,
                    departure,
                    returnDate: tripType === "One Way" ? "" : returnDate,
                    travelers,
                    cabin,
                    airline: "United Airlines",
                },
            });
        }, 2000);
    };

    const popularRoutes = [
        ["New York", "Los Angeles"],
        ["Chicago", "New York"],
        ["San Francisco", "Newark"],
        ["Houston", "Denver"],
        ["Los Angeles", "Chicago"],
        ["Washington", "San Francisco"],
    ];

    const faqs = [
        {
            q: "How can I search for United Airlines flights?",
            a: "Use the flight search form on this page to enter your departure city, destination, travel dates, travelers and cabin class. You can then request a personalized flight quote.",
        },
        {
            q: "Can I search for one-way United Airlines flights?",
            a: "Yes. Select One Way in the booking form and enter your departure and destination details.",
        },
        {
            q: "Can I search for round-trip flights?",
            a: "Yes. Select Round Trip and provide both departure and return dates.",
        },
        {
            q: "Can I choose my cabin class?",
            a: "Yes. The search form lets you select Economy, Premium Economy, Business or First Class.",
        },
        {
            q: "Can I request help with my United flight?",
            a: "Yes. After completing the search form, you can submit your details to request a personalized flight quote.",
        },
        {
            q: "Is FlightsDealNow United Airlines?",
            a: "No. FlightsDealNow is an independent travel website that helps travelers submit flight search and quote requests. It is not the official website of United Airlines.",
        },
    ];

    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="bg-[#f7fafc] text-slate-900">

            {/* HERO */}
            <section className="relative overflow-hidden bg-[#071a33]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(103,232,249,.18),transparent_30%),radial-gradient(circle_at_10%_80%,rgba(37,99,235,.18),transparent_35%)]" />

                <div className="relative mx-auto max-w-7xl px-5 pb-36 pt-24 lg:px-8 lg:pb-44 lg:pt-32    grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
                    <div className="max-w-3xl">

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            United Airlines Flight Search
                        </div>

                        <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                            Search United Airlines
                            <span className="block text-cyan-300">
                                Flights With Ease
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                            Explore United Airlines flight options and submit your travel
                            details to receive a personalized flight quote through
                            FlightsDealNow.
                        </p>
                    </div>
                    <FlightSearch airline="United Airlines" />
                </div>
            </section>

            {/* SEARCH FORM */}




            {/* INTRO */}
            <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-center">

                    <div>
                        <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-blue-600">
                            United Flight Guide
                        </p>

                        <h2 className="text-3xl font-black leading-tight text-[#071a33] sm:text-5xl">
                            Plan your next journey with a simpler flight search.
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                            Whether you are planning a domestic trip or an international
                            journey, use the search form above to provide your travel
                            requirements and request a personalized quote.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                            FlightsDealNow helps travelers organize their preferred route,
                            dates, travelers and cabin preferences before requesting travel
                            assistance.
                        </p>
                    </div>

                    <div className="rounded-[30px] bg-[#071a33] p-7 text-white shadow-2xl">
                        <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-cyan-300 text-xl text-[#071a33]">
                            ✈
                        </div>

                        <h3 className="text-2xl font-black">
                            Start with your travel details
                        </h3>

                        <p className="mt-3 leading-7 text-slate-300">
                            Select your cities, dates, travelers and cabin class to begin
                            your quote request.
                        </p>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("united-search")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="mt-6 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#071a33]"
                        >
                            Search Flights
                        </button>
                    </div>
                </div>
            </section>

            {/* POPULAR ROUTES */}
            <section className="bg-[#071a33] py-24">
                <div className="mx-auto max-w-6xl px-5 lg:px-8">

                    <div className="max-w-2xl">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                            Popular Routes
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-white sm:text-5xl">
                            Explore popular United flight routes
                        </h2>

                        <p className="mt-5 leading-7 text-slate-300">
                            Start your search by exploring commonly requested city
                            combinations.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {popularRoutes.map(([fromCity, toCity], index) => (
                            <div
                                key={index}
                                className="group rounded-[24px] border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.08]"
                            >
                                <span className="text-xs font-black text-cyan-300">
                                    0{index + 1}
                                </span>

                                <div className="mt-5 flex items-center justify-between gap-3">
                                    <span className="font-bold text-white">{fromCity}</span>

                                    <span className="text-cyan-300">→</span>

                                    <span className="text-right font-bold text-white">
                                        {toCity}
                                    </span>
                                </div>

                                <button
                                    onClick={() => {
                                        setFrom(fromCity);
                                        setTo(toCity);
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }}
                                    className="mt-5 text-xs font-black text-cyan-300 transition group-hover:text-white"
                                >
                                    Use this route →
                                </button>
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
                            Why use our search
                        </p>

                        <h2 className="mt-3 text-3xl font-black text-[#071a33] sm:text-5xl">
                            Built around your travel requirements
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-3">
                        {[
                            ["01", "Flexible Trip Types", "Search round-trip or one-way travel based on your plans."],
                            ["02", "Multiple Cabin Options", "Choose the cabin preference that matches your journey."],
                            ["03", "Personalized Quote", "Submit your requirements and request travel assistance."],
                            ["04", "Simple Flight Search", "Enter your route and travel dates in one convenient form."],
                            ["05", "Travel Support", "Get help with your flight search and trip requirements."],
                            ["06", "Clear Trip Details", "Your selected route and preferences move into the quote request."],
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
                            Questions about United flights?
                        </h2>
                    </div>

                    <div className="mt-12 space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.q}
                                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                            >
                                <button
                                    type="button"
                                    onClick={() =>
                                        setOpenFaq(openFaq === index ? -1 : index)
                                    }
                                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                                >
                                    <span className="font-black text-[#071a33]">
                                        {faq.q}
                                    </span>

                                    <span className="text-xl font-light text-blue-600">
                                        {openFaq === index ? "−" : "+"}
                                    </span>
                                </button>

                                {openFaq === index && (
                                    <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bg-[#071a33] px-5 py-24">
                <div className="mx-auto max-w-5xl rounded-[32px] border border-cyan-300/10 bg-white/[0.05] p-8 text-center sm:p-14">

                    <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                        Ready to travel?
                    </p>

                    <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                        Start your United flight search today.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
                        Enter your travel requirements and request a personalized quote
                        through FlightsDealNow.
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="mt-8 rounded-2xl bg-cyan-300 px-7 py-4 text-sm font-black text-[#071a33] transition hover:-translate-y-0.5"
                    >
                        Search United Flights
                    </button>
                </div>
            </section>
        </div>
    );
}