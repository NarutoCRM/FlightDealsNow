import { useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function FlightQuote() {
  const { state } = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const update = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    setStatus("");
    setSending(true);

    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),

        tripType: state?.tripType || "One Way",

        from: state?.from || "",

        to: state?.to || "",

        departure: state?.departure || "",

        returnDate: state?.returnDate || "",

        travelers: state?.travelers || 1,

        cabin: state?.cabin || "Economy",
      };

      const response = await fetch(
        `${API_BASE_URL}/api/quote`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message ||
          "Unable to submit your quote request."
        );
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {
      console.error("QUOTE REQUEST ERROR:", error);

      setStatus(
        error.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  // ==========================================
  // NO SEARCH DATA
  // ==========================================

  if (!state) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">

        <SEO
          title="Request a Flight Quote | FlightDealsNow"
          description="Request a flight quote from FlightDealsNow. Submit your travel details and receive available flight options and pricing information."
          path="/flight-quote"
        />

        <h1 className="text-4xl font-black">
          Start your flight search
        </h1>

        <p className="mt-4 text-slate-500">
          Please return to the homepage and search for your
          route first.
        </p>

        <a
          href="/"
          className="mt-7 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white"
        >
          Back to Search
        </a>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
      <SEO
        title="Contact FlightDealsNow | Flight Assistance & Quotes"
        description="Contact FlightDealsNow for flight assistance, travel questions, and quote requests. Get help with your flight search and booking inquiry."
        path="/contact-us"
      />

      <div className="grid overflow-hidden rounded-[36px] bg-white shadow-2xl shadow-slate-200 lg:grid-cols-[.85fr_1.15fr]">

        {/* ==========================================
            LEFT SIDE
        ========================================== */}

        <aside className="relative min-h-[420px] overflow-hidden bg-slate-950 p-8 text-white sm:p-12">

          <div className="absolute inset-0 bg-[url('/hero-plane.jpg')] bg-cover bg-center opacity-30" />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-950/70 to-blue-900/20" />

          <div className="relative z-10 flex h-full flex-col justify-between">

            <div>

              <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">
                FlightsDealNow
              </span>

              <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl">
                Let’s find a flight that fits your plan.
              </h1>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-200">
                Your trip details are saved below. Add your
                contact information and request a personalized
                quote.
              </p>

            </div>

            <a
              href="tel:+1-888-348-7083"
              className="mt-10 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950"
            >
              ☎ Call +1-888-348-7083
            </a>

          </div>
        </aside>

        {/* ==========================================
            RIGHT SIDE
        ========================================== */}

        <div className="p-6 sm:p-10">

          <p className="text-xs font-black uppercase tracking-[.2em] text-blue-600">
            Your trip
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Quote request
          </h2>

          {/* ==========================================
              TRIP DETAILS
          ========================================== */}

          <div className="mt-7 grid gap-3 sm:grid-cols-2">

            {[
              ["From", state.from],

              ["To", state.to],

              ["Departure", state.departure],

              [
                "Return",
                state.returnDate || "One way",
              ],

              [
                "Travelers",
                `${state.travelers} Traveler${state.travelers > 1 ? "s" : ""
                }`,
              ],

              ["Class", state.cabin],
            ].map(([key, value]) => (
              <div
                key={key}
                className="rounded-2xl bg-slate-50 p-4"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {key}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-800">
                  {value}
                </p>
              </div>
            ))}

          </div>

          {/* ==========================================
              FORM
          ========================================== */}

          <form
            onSubmit={submit}
            className="mt-8 space-y-4"
          >

            {/* NAME */}

            <div>
              <label className="mb-2 block text-xs font-bold text-slate-600">
                Full name
              </label>

              <input
                required
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Your full name"
                autoComplete="name"
                className="h-13 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* EMAIL */}

            <div>
              <label className="mb-2 block text-xs font-bold text-slate-600">
                Email address
              </label>

              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                autoComplete="email"
                className="h-13 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* PHONE */}

            <div>
              <label className="mb-2 block text-xs font-bold text-slate-600">
                Phone number
              </label>

              <input
                required
                type="tel"
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="Your phone number"
                maxLength={13}
                autoComplete="tel"
                className="h-13 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* SUCCESS */}

            {status === "success" && (
              <div className="rounded-2xl bg-emerald-50 p-4 text-sm font-bold text-emerald-700">
                ✓ Your quote request has been sent
                successfully. Our travel team will contact
                you shortly.
              </div>
            )}

            {/* ERROR */}

            {status && status !== "success" && (
              <div className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-600">
                {status}
              </div>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              disabled={sending}
              className="flex h-14 w-full items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending
                ? "Sending request..."
                : "GET A FREE QUOTE"}
            </button>

            <p className="text-center text-[11px] leading-5 text-slate-400">
              Your request will be sent securely to our
              FlightsDealNow travel support team.
            </p>

          </form>
        </div>
      </div>
    </section>
  );
}