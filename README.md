# FlightsDealNow

Frontend-only React + Vite + Tailwind flight quote website.

## Run
npm install
npm run dev

## Quote email
The quote form uses EmailJS directly from the browser. Create an EmailJS service/template and copy `.env.example` to `.env`, then fill:
- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

The recipient is fixed in the app as `info@flightsdealnow.com`.

Recommended EmailJS template variables:
`to_email`, `customer_name`, `customer_email`, `customer_phone`, `trip_type`, `from_airport`, `to_airport`, `departure_date`, `return_date`, `travelers`, `cabin_class`.

No backend or database is required.
