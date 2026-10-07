import { useEffect, useRef, useState } from "react";

const PHONE_NUMBER = "+1-888-348-7083";
const DISPLAY_PHONE = "+1-888-348-7083";

const SHOW_AFTER = 20000;
const AUTO_CLOSE_AFTER = 50000;

const CallPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  useEffect(() => {
    const startShowTimer = () => {
      clearTimeout(showTimerRef.current);

      showTimerRef.current = setTimeout(() => {
        setIsOpen(true);

        clearTimeout(hideTimerRef.current);

        hideTimerRef.current = setTimeout(() => {
          setIsOpen(false);
          startShowTimer();
        }, AUTO_CLOSE_AFTER);
      }, SHOW_AFTER);
    };

    startShowTimer();

    return () => {
      clearTimeout(showTimerRef.current);
      clearTimeout(hideTimerRef.current);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    clearTimeout(hideTimerRef.current);
    clearTimeout(showTimerRef.current);

    showTimerRef.current = setTimeout(() => {
      setIsOpen(true);

      hideTimerRef.current = setTimeout(() => {
        setIsOpen(false);
      }, AUTO_CLOSE_AFTER);
    }, SHOW_AFTER);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className=" fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-24px)] max-w-[410px]">
      <div className=" relative overflow-hidden rounded-[26px] border border-white/10 bg-[#071a33] shadow-2xl shadow-black/30">
        {/* ================= DECORATIVE GLOW ================= */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/15 blur-3xl
                "
        />

        <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

        {/* ================= HEADER ================= */}
        <div className="relative border-b border-white/10 px-5 py-4">
          {/* Close */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close call popup"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center gap-3 pr-8">
            {/* Phone Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 A2 2 0 0 1 4.11 2h3 a2 2 0 0 1 2 1.72 12.84 12.84 0 0 1 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91 a16 16 0 0 0 6 6l1.27-1.27 a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 1 2.81.7 A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
                FlightDealsNow
              </p>

              <h3 className="mt-1 text-base font-extrabold leading-5 text-white sm:text-lg">
                Need Help With Your Trip?
              </h3>
            </div>
          </div>
        </div>

        {/* ================= BODY ================= */}
        <div className="relative px-5 py-5">
          <p className="text-sm leading-6 text-white/55">
            Have questions about flights, routes or travel options? Speak with a
            travel expert for personalized assistance.
          </p>

          {/* Call Button */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 text-sm font-extrabold text-[#071a33] shadow-lg shadow-cyan-300/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-cyan-300/20 active:scale-[0.98]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 A2 2 0 0 1 4.11 2h3 a2 2 0 0 1 2 1.72 12.84 12.84 0 0 1 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91 a16 16 0 0 0 6 6l1.27-1.27 a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 1 2.81.7 A2 2 0 0 1 22 16.92z"
              />
            </svg>
            Call Now — {DISPLAY_PHONE}
          </a>

          {/* Status */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 animate-pulse" />

            <p className="text-[10px] font-medium text-white/40">
              Travel support available now
            </p>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-300 via-blue-500 to-cyan-300" />
      </div>
    </div>
  );
};

export default CallPopup;
