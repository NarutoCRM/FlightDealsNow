import { useState } from "react"

const PHONE = "18557502715"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ["Flights", "/#flight-search"], ["Deals", "/#deals"],
    ["Destinations", "/#destinations"], ["About", "/about-us"], ["Contact", "/contact-us"]
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/10 opacity-90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-xl text-white shadow-lg shadow-blue-200 transition group-hover:-rotate-3">
            ✈
          </div>
          <div>
            <div className="text-[20px] font-black tracking-tight text-slate-950">FlightsDealNow</div>
            <div className="text-[9px] font-bold uppercase tracking-[.22em] text-sky-600">Fly smarter • Travel better</div>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-blue-600">{label}</a>)}
        </nav>
        <a href={`tel:${PHONE}`} className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 lg:block opacity-80">Call us 24/7  <br /> (855) 999-9999 </a>

        <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 lg:hidden">{menuOpen ? "×" : "☰"}</button>
      </div>
      {menuOpen && <div className="border-t border-slate-100 bg-white lg:hidden"><div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700">{label}</a>)}
        <a href={`tel:${PHONE}`} className="mt-4 rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white"> Call us 24/7 Call Now</a>
      </div></div>}
    </header>
  )
}
