import FlightSearch from "./FlightSearch"
export default function Hero() {
  return <section className="relative overflow-hidden bg-slate-950">
    <div className="absolute inset-0 bg-[url('/Hero.png')] bg-cover bg-center opacity-100" />
    <div className="absolute inset-0 from-slate-950  to-sky-900/70 " />
    <div className="relative mx-auto max-w-7xl px-5 pb-32 pt-20 lg:px-8 lg:pb-36 lg:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
        <div className="animate-[fadeUp_.8s_ease-out] text-white">
          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">✦ Personalized flight assistance</div>
          <h1 className="max-w-2xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">Your next journey starts <span className="text-sky-300">here.</span></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">Search your route, share your travel plans, and get a personalized flight quote from our travel team.</p>
          <div className="mt-8 flex flex-wrap gap-6 text-xs font-bold text-white/80"><span>✓ Flexible options</span><span>✓ Travel assistance</span><span>✓ Quote by email</span></div>
        </div>
        <div>


        <FlightSearch />
        </div>
      </div>
    </div>
  </section>
}
