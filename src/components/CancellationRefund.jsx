
import SEO from "./SEO";

<SEO
    title="Cancellation & Refund Policy | FlightsDealNow"
    description="Review the FlightsDealNow cancellation and refund policy, including airline rules, refund requests, and applicable conditions."
    path="/cancellation-refund"
/>


const CancellationRefund = () => {
    return (
        <main className="bg-[#f7fafc]">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#071a33]">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-15"
                    style={{ backgroundImage: "url('/hero-plane.jpg')" }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#071a33] via-[#071a33]/95 to-[#0b3159]/80" />

                <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">

                    <div className="max-w-3xl">

                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-200">
                            <span className="h-2 w-2 rounded-full bg-cyan-300" />
                            FlightDealsNow
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                            Cancellation &
                            <span className="block text-cyan-300">
                                Refund Policy
                            </span>
                        </h1>

                        <p className="mt-5 text-sm leading-6 text-white/55 sm:text-base">
                            Please review the following information regarding
                            cancellations, refunds, changes and applicable
                            airline policies.
                        </p>

                        {/* <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/60">
                            <span>Effective Date</span>
                            <span className="text-cyan-300">•</span>
                            <span className="font-semibold text-white">
                                September 7, 2026
                            </span>
                        </div> */}

                    </div>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-12 sm:py-16">
                <div className="mx-auto max-w-5xl px-4 sm:px-6">

                    {/* ================= INTRO ================= */}
                    <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                        <div className="mb-5 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-lg">
                                ℹ
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">
                                    Important Information
                                </p>

                                <h2 className="mt-1 text-xl font-extrabold text-[#071a33]">
                                    Before You Request a Cancellation
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-5 text-sm leading-7 text-gray-600 sm:text-base">

                            <p>
                                At FlightDealsNow, operated by company-name,
                                we understand that travel plans may change
                                unexpectedly. Our goal is to make the
                                cancellation and refund process as clear as
                                possible.
                            </p>

                            <p>
                                Since flight tickets and related travel
                                arrangements are governed by the policies of
                                the respective airlines and travel suppliers,
                                cancellation and refund decisions are ultimately
                                subject to the applicable airline rules.
                            </p>

                            <p>
                                FlightDealsNow acts as a travel service provider
                                and assists customers with cancellation and
                                refund requests. We do not independently
                                determine airline refund eligibility or
                                override airline fare rules.
                            </p>

                        </div>
                    </div>


                    {/* ================= POLICY 1 ================= */}
                    <PolicySection title="1. General Cancellation & Refund Policy">

                        <PolicyList
                            items={[
                                "Flight tickets may be refundable, partially refundable, or non-refundable depending on the airline, fare type, route, and terms applicable to the booking.",
                                "Any refund will be processed according to the fare rules and cancellation policy of the airline or travel supplier.",
                                "FlightDealsNow does not guarantee that a cancellation request will result in a refund.",
                                "Airline penalties, fare differences, taxes, supplier charges, and other applicable fees may affect the final refundable amount.",
                                "Any service or processing fees charged by FlightDealsNow may be non-refundable, where permitted by applicable law and the terms disclosed at the time of booking.",
                                "Refund eligibility and the amount of any approved refund are determined based on the specific reservation and applicable airline rules.",
                            ]}
                        />

                    </PolicySection>


                    {/* ================= POLICY 2 ================= */}
                    <PolicySection title="2. Cancellation Requests">

                        <p>
                            Customers who need to cancel a reservation should
                            contact the FlightDealsNow customer support team as
                            soon as possible.
                        </p>

                        <p>
                            Cancellation requests should be submitted by phone
                            using the customer support number provided on our
                            website. This allows our team to verify the booking
                            details and discuss the available options with the
                            customer.
                        </p>

                        <p>
                            A cancellation request is not considered completed
                            merely because a customer contacts us. The request
                            must be reviewed and processed according to the
                            applicable airline or supplier requirements.
                        </p>

                        <p>
                            Customers should provide their booking or reservation
                            details when requesting a cancellation. Once the
                            request has been received, our team may provide a
                            reference or confirmation for the request where
                            applicable.
                        </p>

                        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">

                            <div className="flex gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                                    !
                                </div>

                                <div>
                                    <p className="font-extrabold text-amber-800">
                                        Important
                                    </p>

                                    <p className="mt-1 text-sm leading-6 text-amber-900/70">
                                        If your ticket is subject to a specific
                                        cancellation deadline, you are
                                        responsible for contacting us
                                        sufficiently before that deadline.
                                        Requests received after the applicable
                                        airline deadline may not qualify for
                                        cancellation or refund.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </PolicySection>


                    {/* ================= POLICY 3 ================= */}
                    <PolicySection title="3. 24-Hour Cancellation Requests">

                        <p>
                            Certain airline tickets may qualify for cancellation
                            within 24 hours of booking, subject to applicable
                            airline rules and the conditions of the reservation.
                        </p>

                        <p>
                            The availability of a 24-hour cancellation or refund
                            option is not universal and may depend on factors
                            such as the airline, itinerary, fare type, departure
                            date, and applicable law.
                        </p>

                        <p>
                            Customers should contact FlightDealsNow promptly
                            after booking if they wish to cancel within this
                            period. We will review the applicable booking
                            conditions and advise whether a cancellation or
                            refund option is available.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 4 ================= */}
                    <PolicySection title="4. Refund Eligibility">

                        <p>
                            A refund is available only when permitted under the
                            applicable airline or travel supplier's rules.
                        </p>

                        <p>
                            Depending on the ticket conditions, an approved
                            refund may be:
                        </p>

                        <PolicyList
                            items={[
                                "A full refund;",
                                "A partial refund;",
                                "A refund after applicable airline penalties or fees;",
                                "A travel credit or voucher; or",
                                "No refund, where the ticket is non-refundable.",
                            ]}
                        />

                        <p>
                            The final refund amount may be different from the
                            original amount paid because applicable airline
                            penalties, fare differences, taxes, service charges,
                            or other eligible deductions may apply.
                        </p>

                        <p>
                            FlightDealsNow cannot guarantee a particular refund
                            amount before the airline or relevant supplier has
                            reviewed the request.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 5 ================= */}
                    <PolicySection title="5. How Refunds Are Processed">

                        <p>
                            Once a cancellation and refund request is received,
                            FlightDealsNow may review the reservation and submit
                            the eligible request to the applicable airline or
                            travel supplier.
                        </p>

                        <p>
                            Where airline approval is required, we must wait for
                            the airline or supplier to process or authorize the
                            refund before the applicable amount can be returned
                            to the customer.
                        </p>

                        <p>
                            The refund process may therefore involve multiple
                            stages, including:
                        </p>

                        <PolicyList
                            items={[
                                "Receiving the customer's cancellation request.",
                                "Reviewing the applicable ticket and fare rules.",
                                "Submitting the eligible request to the airline or supplier.",
                                "Waiting for the airline or supplier to approve and process the refund.",
                                "Processing the approved amount through the applicable payment channel.",
                            ]}
                        />

                        <p>
                            Because airlines and payment providers control
                            different stages of the process, FlightDealsNow
                            cannot guarantee a specific refund timeframe.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 6 ================= */}
                    <PolicySection title="6. Refund Processing Time">

                        <p>
                            Refund processing times vary depending on the airline,
                            travel supplier, payment provider, booking type, and
                            other circumstances.
                        </p>

                        <p>
                            Once an eligible refund has been approved and
                            released by the applicable airline or supplier,
                            additional processing time may be required before
                            the funds appear in the customer's original payment
                            method.
                        </p>

                        <p>
                            Customers should understand that delays caused by an
                            airline, bank, credit-card company, payment processor,
                            or other third party may be outside FlightDealsNow's
                            control.
                        </p>

                        <p>
                            Where the airline provides a specific processing
                            timeframe, that timeframe may apply to the relevant
                            refund.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 7 ================= */}
                    <PolicySection title="7. Service & Booking Fees">

                        <p>
                            Certain bookings may include service, booking,
                            processing, administrative, or other fees charged by
                            FlightDealsNow.
                        </p>

                        <p>
                            Unless otherwise required by applicable law or
                            expressly stated at the time of purchase, these fees
                            are non-refundable even when an airline subsequently
                            approves a refund for the underlying ticket.
                        </p>

                        <p>
                            Airline-imposed penalties, cancellation fees, fare
                            differences, and other supplier charges may also be
                            deducted from the amount eligible for refund.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 8 ================= */}
                    <PolicySection title="8. Airline Cancellations & Schedule Changes">

                        <p>
                            If an airline cancels a flight or makes a significant
                            schedule change, the options available to the
                            customer will depend on the airline's applicable
                            policy.
                        </p>

                        <p>
                            Depending on the circumstances, the airline may offer
                            options such as:
                        </p>

                        <PolicyList
                            items={[
                                "Rebooking on another available flight;",
                                "Travel credit;",
                                "A refund; or",
                                "Another remedy permitted under the airline's policy or applicable law.",
                            ]}
                        />

                        <p>
                            FlightDealsNow can assist customers in communicating
                            with the applicable airline or reviewing the
                            available options. However, the airline or travel
                            supplier generally determines the applicable
                            resolution.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 9 ================= */}
                    <PolicySection title="9. Changes Instead of Cancellation">

                        <p>
                            If you wish to change your travel dates, flight,
                            route, or other booking details instead of
                            cancelling, additional charges may apply.
                        </p>

                        <p>
                            These may include airline change fees, fare
                            differences, taxes, supplier charges, or applicable
                            FlightDealsNow service fees.
                        </p>

                        <p>
                            Some fares may not permit changes. All changes remain
                            subject to availability and the applicable fare
                            conditions.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 10 ================= */}
                    <PolicySection title="10. Non-Refundable Tickets">

                        <p>
                            Some airline tickets are specifically sold as
                            non-refundable.
                        </p>

                        <p>
                            If a non-refundable ticket is cancelled, the customer
                            may not be entitled to a monetary refund. Depending
                            on the airline's rules, a travel credit or other
                            alternative may be available.
                        </p>

                        <p>
                            Any travel credit issued by an airline may have
                            restrictions, expiration dates, name requirements,
                            route limitations, or other conditions established by
                            the airline.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 11 ================= */}
                    <PolicySection title="11. No-Show Policy">

                        <p>
                            If a passenger does not travel and fails to cancel or
                            modify the reservation before departure, the booking
                            may be classified as a no-show by the airline.
                        </p>

                        <p>
                            No-show policies vary by airline and fare type. A
                            no-show may result in the loss of some or all of the
                            ticket value and may affect any remaining segments of
                            the itinerary.
                        </p>

                        <p>
                            Customers who know they cannot travel should contact
                            FlightDealsNow before the scheduled departure time.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 12 ================= */}
                    <PolicySection title="12. Refunds To The Original Payment Method">

                        <p>
                            Where a monetary refund is approved, it will
                            generally be returned to the original form of payment
                            used for the transaction, subject to the applicable
                            airline, supplier, and payment-provider procedures.
                        </p>

                        <p>
                            We may not be able to issue a refund to a different
                            payment method or account unless permitted by the
                            applicable rules.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 13 ================= */}
                    <PolicySection title="13. Important Considerations">

                        <p>
                            Please keep the following in mind:
                        </p>

                        <PolicyList
                            items={[
                                "Submitting a cancellation request does not automatically guarantee a refund.",
                                "Airlines have the authority to determine whether a particular ticket qualifies for a refund under its applicable fare rules.",
                                "Refund amounts may be reduced by applicable penalties, fees, or other charges.",
                                "FlightDealsNow cannot guarantee a particular refund amount or processing time.",
                                "Airline policies and fare conditions may change without prior notice.",
                                "Customers should review their ticket conditions and contact us as early as possible when they need to cancel or change a reservation.",
                            ]}
                        />

                    </PolicySection>


                    {/* ================= CONTACT ================= */}
                    <PolicySection title="14. Contact Us">

                        <p>
                            If you need to request a cancellation, change, or
                            refund review, please contact FlightDealsNow:
                        </p>

                        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                            <div className="border-b border-gray-100 bg-[#071a33] px-5 py-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                                    FlightDealsNow Support
                                </p>

                                <p className="mt-1 text-sm text-white/60">
                                    Contact our team regarding your reservation.
                                </p>
                            </div>

                            <div className="space-y-5 p-5 text-sm">

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                        Address
                                    </p>

                                    <p className="mt-1 leading-6 text-gray-600">
                                        FIVE GREENTREE CENTRE, 525 ROUTE 73 NORTH
                                        STE 104 MARLTON, NEW JERSEY 08053-0805
                                        United States
                                    </p>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:support@flightdealsnow.com"
                                        className="mt-1 inline-block font-semibold text-blue-600 hover:text-cyan-600 hover:underline"
                                    >
                                        support@flightdealsnow.com
                                    </a>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                        Phone
                                    </p>

                                    <a
                                        href="tel:+1-888-348-7083"
                                        className="mt-1 inline-block font-semibold text-blue-600 hover:text-cyan-600"
                                    >
                                        +1-888-348-7083
                                    </a>
                                </div>

                            </div>
                        </div>

                        <p className="mt-5">
                            For cancellation requests, customers should contact
                            our support team by phone so that the booking can be
                            verified and the applicable cancellation options can
                            be reviewed.
                        </p>

                    </PolicySection>


                    {/* ================= POLICY 15 ================= */}
                    <PolicySection title="15. Updates To This Policy">

                        <p>
                            company-name may update this Cancellation & Refund
                            Policy when necessary to reflect changes in airline
                            policies, our services, business practices, or
                            applicable laws.
                        </p>

                        <p>
                            Any updated version will be posted on FlightDealsNow
                            and will include a revised effective date.
                        </p>

                        <p>
                            By using FlightDealsNow or requesting travel services
                            through us, you acknowledge that cancellations,
                            changes, and refunds are subject to the applicable
                            airline and travel supplier rules.
                        </p>

                    </PolicySection>


                    {/* ================= FINAL CTA ================= */}
                    <div className="relative mt-14 overflow-hidden rounded-[30px] bg-[#071a33] p-7 shadow-xl sm:p-10">

                        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
                        <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />

                        <div className="relative">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300">
                                ☎
                            </div>

                            <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
                                Need Help With a
                                <span className="text-cyan-300">
                                    {" "}Cancellation or Refund?
                                </span>
                            </h2>

                            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50 sm:text-base">
                                Contact our travel support team to review your
                                booking and discuss the options available under
                                the applicable airline policy.
                            </p>

                            <a
                                href="tel:+1-888-348-7083"
                                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-300 px-6 py-3.5 text-sm font-extrabold text-[#071a33] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-200"
                            >
                                ☎ Call +1-888-348-7083
                            </a>

                        </div>
                    </div>

                </div>
            </section>

        </main>
    )
}


/* ================= HELPERS ================= */

const PolicySection = ({ title, children }) => {
    return (
        <section className="mt-10">

            <div className="mb-5 flex items-start gap-3">

                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                <h2 className="text-xl font-extrabold leading-tight text-[#071a33] sm:text-2xl">
                    {title}
                </h2>

            </div>

            <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

                <div className="space-y-5 text-sm leading-7 text-gray-600 sm:text-base">
                    {children}
                </div>

            </div>

        </section>
    )
}


const PolicyList = ({ items }) => {
    return (
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li
                    key={item}
                    className="flex items-start gap-3"
                >
                    <span className="mt-2 flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />

                    <span>
                        {item}
                    </span>
                </li>
            ))}
        </ul>
    )
}


export default CancellationRefund