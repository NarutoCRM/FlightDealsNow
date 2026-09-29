import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "flightdealsnow_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    setVisible(consent !== "accepted");
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl shadow-slate-300/40 backdrop-blur-md md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-slate-900">
            We use cookies to improve your browsing experience.
          </p>
          <p className="mt-1 text-sm text-slate-600">
            We use essential cookies to keep the site working and optional
            cookies to understand performance and improve content. By
            continuing, you accept our cookie usage.{" "}
            <a
              href="/cookie-policy"
              className="text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
            >
              Cookie Policy
            </a>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleReject}
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
