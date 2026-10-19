import { useParams } from "react-router-dom";
import FlightSearch from "./FlightSearch";
import SEO from "./SEO";

export default function DynamicAirline() {
  const { airlineSlug = "" } = useParams();
  const words = airlineSlug.split("-").filter(Boolean);
  const name = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ") || "Airline";
  const path = `/airlines/${encodeURIComponent(words.join("-").toLowerCase())}`;

  return (
    <div className="bg-[#f7fafc] text-slate-900">
      <SEO
        title={`${name} Flight Planning | FlightDealsNow`}
        description={`Planning travel with ${name}? Prepare your travel details and request a quote from FlightDealsNow. Airline service, availability, and fares require confirmation.`}
        path={path}
      />
      <section className="relative overflow-hidden bg-[#071a33]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(103,232,249,.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Flight planning with FlightDealsNow</p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">{name}<span className="block text-cyan-300">Flight Planning</span></h1>
            <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">Planning a trip with {name}? Share your departure location, destination, dates, and passenger preferences to request a quote.</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">This planning page does not confirm airline service, routes, fares, or availability. Current options must be checked for your itinerary.</p>
          </div>
          <FlightSearch key={path} className="mt-0 w-full min-w-0" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <h2 className="text-3xl font-black text-[#071a33] sm:text-4xl">Prepare your {name} travel request</h2>
        <p className="mt-6 max-w-3xl leading-8 text-slate-600">Use the search form to share your itinerary. Let the travel team know your airline preference when discussing your quote; the form collects your route and travel details.</p>
        <p className="mt-4 max-w-3xl leading-8 text-slate-600">Before booking, confirm the operating airline, baggage rules, connection requirements, fare conditions, and final price for your travel dates.</p>
      </section>
    </div>
  );
}
