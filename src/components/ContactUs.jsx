import { useState } from "react"
import SEO from "./SEO";


const PHONE = "+1-888-348-7083"
const DISPLAY_PHONE = "+1-888-348-7083"
const EMAIL = "support@flightdealsnow.com"

export default function ContactUs() {
    <SEO
  title="Contact FlightsDealNow | Flight Travel Support"
  description="Contact FlightsDealNow for flight search assistance, travel questions, and personalized flight quote requests."
  path="/contact-us"
/>
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const subject = encodeURIComponent(
            `Contact Request from ${form.name}`
        )

        const body = encodeURIComponent(
            `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.description}`
        )

        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    }

    return (
        <section className="overflow-hidden bg-[#f7fafc]">

            {/* ================= HERO ================= */}
            <div
                className="relative flex min-h-[300px] items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/hero-plane.jpg')" }}
            >
                <div className="absolute inset-0 bg-[#071a33]/75" />

                {/* Glow */}
                <div className="absolute left-1/4 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
                <div className="absolute right-1/4 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative z-10 px-5 text-center">
                    <span className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md">
                        Travel Support Center
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Contact Us
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                        Have a question about your trip? Our team is here to
                        help with your travel-related questions and requests.
                    </p>
                </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

                    {/* ================= LEFT ================= */}
                    <div className="relative overflow-hidden rounded-[30px] bg-[#071a33] p-7 shadow-xl sm:p-9">

                        {/* Decorative glow */}
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
                        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />

                        <div className="relative z-10">

                            <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                                We’re Here to Help
                            </span>

                            <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                                Let’s make your
                                <span className="block text-cyan-300">
                                    travel easier.
                                </span>
                            </h2>

                            <p className="mt-5 text-base leading-7 text-slate-300">
                                Contact us to ask questions, share feedback,
                                or get assistance with your travel-related
                                requests. Our team is ready to help you with
                                the information you need.
                            </p>

                            {/* Contact Details */}
                            <div className="mt-9 space-y-5">

                                {/* Address */}
                                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-cyan-300/30 hover:bg-white/10">
                                    <div className="flex items-start gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-xl shadow-lg shadow-cyan-300/10">
                                            📍
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                                                Address
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                FIVE GREENTREE CENTRE,
                                                <br />
                                                525 ROUTE 73 NORTH STE 104
                                                <br />
                                                MARLTON, NEW JERSEY 08053-0805
                                                <br />
                                                United States
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* Email */}
                                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-cyan-300/30 hover:bg-white/10">
                                    <div className="flex items-center gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-xl">
                                            ✉
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                                                Email
                                            </p>

                                            <a
                                                href={`mailto:${EMAIL}`}
                                                className="mt-1 block break-all text-sm text-white transition hover:text-cyan-300"
                                            >
                                                {EMAIL}
                                            </a>
                                        </div>

                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-cyan-300/30 hover:bg-white/10">
                                    <div className="flex items-center gap-4">

                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-xl">
                                            ☎
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                                                Phone
                                            </p>

                                            <a
                                                href={`tel:${PHONE}`}
                                                className="mt-1 block text-xl font-bold text-white transition hover:text-cyan-300"
                                            >
                                                {DISPLAY_PHONE}
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* Bottom note */}
                            <div className="mt-7 border-t border-white/10 pt-6">
                                <p className="text-sm leading-6 text-slate-400">
                                    Have a last-minute question or need travel
                                    assistance? Send us a message and our team
                                    will get back to you.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ================= RIGHT FORM ================= */}
                    <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-xl sm:p-10">

                        <div>
                            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                                Send a Message
                            </span>

                            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#071a33] sm:text-4xl">
                                Get in touch with us!
                            </h2>

                            <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                                In case of questions, queries, feedback, or
                                last-minute travel requests, fill out the form
                                below.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >

                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#071a33]">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#071a33]">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#071a33]">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    required
                                    className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#071a33]">
                                    How Can We Help?
                                </label>

                                <textarea
                                    name="description"
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    rows="6"
                                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#071a33] text-base font-bold text-white shadow-lg shadow-[#071a33]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                            >
                                Send Message

                                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </button>

                            <p className="text-center text-xs leading-5 text-slate-400">
                                Your message will open your email application
                                for sending to our support team.
                            </p>

                        </form>
                    </div>

                </div>

                {/* ================= BOTTOM CTA ================= */}
                <div className="mt-14 overflow-hidden rounded-[30px] bg-[#071a33] px-7 py-10 text-center sm:px-10">

                    <div className="mx-auto max-w-3xl">

                        <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                            Need Immediate Assistance?
                        </span>

                        <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                            Talk to a Travel Expert
                        </h3>

                        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                            If you need quick assistance with your travel
                            questions, you can contact our team directly.
                        </p>

                        <a
                            href={`tel:${PHONE}`}
                            className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#071a33] shadow-lg shadow-cyan-300/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                        >
                            ☎ Call {DISPLAY_PHONE}
                        </a>

                    </div>
                </div>

            </div>
        </section>
    )
}