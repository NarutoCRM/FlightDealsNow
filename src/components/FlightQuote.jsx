import { useState } from "react"
import { useLocation } from "react-router-dom"
import SEO from "../components/SEO";


const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  recipient: "support@flightdealsnow.com"
}

export default function FlightQuote() {
  const { state } = useLocation()
  const [form, setForm] = useState({ name: "", email: "", phone: "" })
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)

  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault(); setStatus(""); setSending(true)
    try {
      if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) throw new Error("Email service is not configured yet.")
      const params = {
        to_email: emailConfig.recipient,
        customer_name: form.name, customer_email: form.email, customer_phone: form.phone,
        trip_type: state?.tripType || "", from_airport: state?.from || "", to_airport: state?.to || "",
        departure_date: state?.departure || "", return_date: state?.returnDate || "One way",
        travelers: state?.travelers || 1, cabin_class: state?.cabin || "Economy"
      }
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_id: emailConfig.serviceId, template_id: emailConfig.templateId, user_id: emailConfig.publicKey, template_params: params })
      })
      if (!response.ok) throw new Error("Unable to send request.")
      setStatus("success"); setForm({ name: "", email: "", phone: "" })
    } catch (err) { setStatus(err.message || "Something went wrong. Please try again.") }
    finally { setSending(false) }
  }

  if (!state) return <div className="mx-auto max-w-3xl px-5 py-24 text-center"><h1 className="text-4xl font-black">Start your flight search</h1><p className="mt-4 text-slate-500">Please return to the homepage and search for your route first.</p><a href="/" className="mt-7 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white">Back to Search</a></div>

  return <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
    <SEO
      title="Request a Flight Quote | FlightsDealNow"
      description="Review your selected trip details and submit your information to request a personalized flight quote from FlightsDealNow."
      path="/flight-quote"
    />
    <div className="grid overflow-hidden rounded-[36px] bg-white shadow-2xl shadow-slate-200 lg:grid-cols-[.85fr_1.15fr]">
      <aside className="relative min-h-[420px] overflow-hidden bg-slate-950 p-8 text-white sm:p-12">
        <div className="absolute inset-0 bg-[url('/hero-plane.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-950/70 to-blue-900/20" />
        <div className="relative z-10 flex h-full flex-col justify-between"><div><span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">FlightDealsNow</span><h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl">Let’s find a flight that fits your plan.</h1><p className="mt-5 max-w-md text-sm leading-6 text-slate-200">Your trip details are saved below. Add your contact information and request a personalized quote.</p></div><a href="tel:1+1-888-348-7083" className="mt-10 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950">☎ Call Now</a></div>
      </aside>
      <div className="p-6 sm:p-10">
        <p className="text-xs font-black uppercase tracking-[.2em] text-blue-600">Your trip</p>
        <h2 className="mt-2 text-3xl font-black">Quote request</h2>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {[["From", state.from], ["To", state.to], ["Departure", state.departure], ["Return", state.returnDate || "One way"], ["Travelers", `${state.travelers} Traveler${state.travelers > 1 ? "s" : ""}`], ["Class", state.cabin]].map(([k, v]) => <div key={k} className="rounded-2xl bg-slate-50 p-4"><p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{k}</p><p className="mt-1 text-sm font-bold text-slate-800">{v}</p></div>)}
        </div>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div><label className="mb-2 block text-xs font-bold text-slate-600">Full name</label><input required name="name" value={form.name} onChange={update} placeholder="Your full name" className="h-13 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
          <div><label className="mb-2 block text-xs font-bold text-slate-600">Email address</label><input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" className="h-13 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
          <div><label className="mb-2 block text-xs font-bold text-slate-600">Phone number</label><input required type="tel" name="phone" value={form.phone} onChange={update} placeholder="Your phone number" className="h-13 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100" /></div>
          {status === "success" ? <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">✓ Your quote request has been sent successfully. Our travel team will contact you shortly.</div> : status && <div className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-600">{status}</div>}
          <button disabled={sending} className="flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white transition hover:bg-blue-700 disabled:opacity-60">{sending ? "Sending request..." : "GET A FREE QUOTE"}</button>
          <p className="text-center text-[11px] leading-5 text-slate-400">Your request will be sent securely to {emailConfig.recipient}.</p>
        </form>
      </div>
    </div>
  </section>
}
