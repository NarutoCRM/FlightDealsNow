import { Link } from "react-router-dom";
import SEO from "./SEO";

export default function ThankYou() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center">
      <SEO
        title="Thank You | FlightDealsNow"
        description="Your flight quote request has been sent to FlightDealsNow. Our travel team will contact you shortly."
        path="/thank-you"
      />

      <h1 className="text-4xl font-black">Thank you!</h1>
      <p className="mt-4 text-slate-500">
        Your quote request has been sent successfully. Our travel team will
        contact you shortly.
      </p>
      <Link
        to="/"
        className="mt-7 inline-block rounded-full bg-blue-600 px-6 py-3 font-bold text-white"
      >
        Back to Search
      </Link>
    </section>
  );
}
