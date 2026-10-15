const PREFIX = "cheap-flights-to-";

export function destinationFromPath(segment = "") {
    if (!segment.toLowerCase().startsWith(PREFIX)) return null;
    const words = segment.slice(PREFIX.length).split("-").filter(Boolean);
    if (!words.length) return null;
    const slug = words.join("-").toLowerCase();
    return {
        name: words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "),
        path: `/${PREFIX}${encodeURIComponent(slug)}`,
        isNewYork: slug === "new-york-city",
    };
}

export function destinationContent(name) {
    return {
        faqs: [
            { question: `How should I plan a flight to ${name}?`, answer: "Start with your departure location, travel dates, passenger count, and preferences. Request a quote so current options can be checked." },
            { question: `Which airport should I choose for ${name}?`, answer: "Confirm the airport serving your intended destination before requesting a quote. Consider ground transport and the distance to your accommodation." },
            { question: `When should I visit ${name}?`, answer: "Check local weather, events, entry requirements, and opening hours for your intended dates using reliable current sources." },
            { question: `Are flights or fares to ${name} confirmed on this page?`, answer: "No. This is a planning page generated from the URL. It does not confirm that a destination, route, flight, or fare is available. Options must be checked for your itinerary." },
        ],
        thingsToDo: ["Research local attractions", "Check opening hours", "Plan ground transport", "Review accommodation", "Check entry requirements", "Allow time between activities"],
        bookingTips: ["Compare dates if your plans are flexible.", "Confirm the destination and airport before booking.", "Consider one-way and round-trip requests according to your plans.", "Check baggage rules and any additional charges.", "Request current options for your departure location and dates.", "Review the complete itinerary and fare conditions before committing."],
        seasons: [
            { title: "Weather", text: `Check reliable local forecasts and climate information for ${name} before choosing your travel dates.` },
            { title: "Events", text: "Check event dates and local calendars when planning your itinerary." },
            { title: "Flexibility", text: "If your dates are flexible, include alternatives in your quote request." },
            { title: "Preparation", text: "Review entry requirements, opening hours, and accommodation arrangements before travel." },
        ],
        airports: [
            { code: "Verify", name: "Confirm your arrival airport", text: `Check which airport serves your intended destination in ${name}. No airport or route is confirmed by this page.` },
            { code: "Compare", name: "Review ground transport", text: "Check the journey time and transport arrangements from your arrival airport to your accommodation." },
            { code: "Plan", name: "Review the itinerary", text: "Confirm arrival times, connection requirements, and fare conditions with your quote." },
        ],
    };
}
