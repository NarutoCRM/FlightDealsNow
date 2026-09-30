import { useEffect, useRef } from "react";

const TrustpilotButton = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]'
    );

    const loadTrustpilot = () => {
      if (
        window.Trustpilot &&
        widgetRef.current
      ) {
        window.Trustpilot.loadFromElement(
          widgetRef.current,
          true
        );
      }
    };

    if (existingScript) {
      loadTrustpilot();
      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";

    script.async = true;

    script.onload = loadTrustpilot;

    document.body.appendChild(script);

    return () => {
      // Script ko remove nahi karenge.
      // Trustpilot widget ko multiple pages par safely use kar sakte hain.
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="6abd313ff5a22ac768578be0"
      data-style-height="52px"
      data-style-width="100%"
      data-token="6c6d3b1e-20cc-4500-9cb6-72d4b7a9712b"
    >
      <a
        href="https://www.trustpilot.com/review/flightdealsnow.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Trustpilot
      </a>
    </div>
  );
};

export default TrustpilotButton;
