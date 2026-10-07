import SEO from "./SEO";
import React from "react"

const PHONE_NUMBER = "+1-888-348-7083"
const DISPLAY_PHONE = "+1-888-348-7083"
const EMAIL = "support@flightdealsnow.com"



const Section = ({ number, title, children }) => (

    <section className="mb-12">
        <SEO
            title="Cookie Policy | FlightsDealNow"
            description="Learn how FlightsDealNow uses cookies and similar technologies to support website functionality, analytics, and user experience."
            path="/cookie-policy"
        />
        <div className="mb-5 flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#071a33] text-sm font-bold text-cyan-300">
                {number}
            </div>

            <h2 className="pt-1 text-xl font-bold text-[#071a33] sm:text-2xl">
                {title}
            </h2>
        </div>

        <div className="space-y-4 pl-0 text-[15px] leading-7 text-slate-600 sm:pl-[52px]">
            {children}
        </div>
    </section>
)

const BulletList = ({ items }) => (

    <ul className="space-y-3 pl-5 text-[15px] leading-7 text-slate-600">
        {items.map((item, index) => (
            <li key={index} className="pl-1 marker:text-cyan-500">
                {item}
            </li>
        ))}
    </ul>
)

function CookiePolicy() {
    return (
        <main className="min-h-screen bg-[#f7fafc]">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#071a33]">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/hero-plane.jpg')" }}
                />

                <div className="absolute inset-0 bg-[#071a33]/85" />

                {/* Glow */}
                <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
                <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 sm:py-24">

                    <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-md">
                        FlightDealsNow · Privacy Center
                    </span>

                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Cookie Policy
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                        Learn how FlightDealsNow uses cookies and similar
                        technologies to support website functionality,
                        analytics, user experience, and marketing activities.
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                        Operated by Flightdealsnow.com
                    </div>

                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="px-5 py-12 sm:px-6 sm:py-16">

                <div className="mx-auto max-w-5xl">

                    {/* Introduction */}
                    <div className="mb-12 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">

                        <div className="h-1.5 bg-gradient-to-r from-[#071a33] via-blue-600 to-cyan-300" />

                        <div className="p-6 sm:p-9 lg:p-10">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-xl">
                                    🍪
                                </div>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                        Privacy Information
                                    </p>

                                    <h2 className="text-xl font-bold text-[#071a33]">
                                        About Our Cookie Use
                                    </h2>
                                </div>
                            </div>

                            <div className="space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                                <p>
                                    At FlightDealsNow, operated by Flightdealsnow.com , we use cookies and similar technologies
                                    to help our website work efficiently,
                                    understand how visitors use our website,
                                    improve the browsing experience, and support
                                    certain marketing and advertising activities.
                                </p>

                                <p>
                                    This Cookie Policy explains what cookies
                                    are, why we may use them, the types of
                                    cookies that may be placed on your device,
                                    and the choices you have regarding their use.
                                </p>

                                <p>
                                    By using FlightDealsNow, you acknowledge
                                    that cookies and similar technologies may
                                    be used as described in this policy, subject
                                    to the choices and controls available to you.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Section 1 */}
                    <Section number="1" title="What Are Cookies?">
                        <p>
                            Cookies are small text files that may be stored on
                            your computer, smartphone, tablet, or other
                            internet-connected device when you visit a website.
                        </p>

                        <p>
                            Cookies allow a website to recognize your browser
                            or device and remember certain information about
                            your visit. They can be used for purposes such as
                            maintaining website functionality, remembering
                            preferences, analyzing website traffic, and
                            understanding how visitors interact with online
                            content.
                        </p>

                        <p>
                            Some cookies remain only during your browsing
                            session, while others may remain on your device
                            for a longer period or until they expire or are
                            deleted.
                        </p>
                    </Section>

                    {/* Section 2 */}
                    <Section number="2" title="Why FlightDealsNow Uses Cookies">
                        <p>
                            FlightDealsNow may use cookies and similar
                            technologies for purposes such as:
                        </p>

                        <BulletList
                            items={[
                                "Helping the website operate properly.",
                                "Maintaining website functionality and security.",
                                "Remembering certain user preferences.",
                                "Understanding how visitors navigate and interact with our website.",
                                "Measuring website traffic and performance.",
                                "Identifying technical problems and improving website functionality.",
                                "Improving website content and user experience.",
                                "Measuring the effectiveness of advertising and marketing campaigns.",
                                "Supporting relevant advertising where applicable.",
                                "Helping prevent fraudulent, unauthorized, or abusive activity.",
                            ]}
                        />

                        <p>
                            The specific cookies and technologies used on
                            FlightDealsNow may change as we update our website,
                            services, technology, or marketing practices.
                        </p>
                    </Section>

                    {/* Section 3 */}
                    <Section number="3" title="Types of Cookies We May Use">

                        <div className="space-y-5">

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="font-bold text-[#071a33]">
                                    Essential Cookies
                                </h3>

                                <p className="mt-3">
                                    Essential cookies are necessary for certain
                                    website functions to operate properly.
                                </p>

                                <p>
                                    They may support basic functionality,
                                    security, session management, form
                                    functionality, or other features required
                                    for the website to operate.
                                </p>

                                <p>
                                    Because these cookies may be necessary for
                                    the website to function, disabling them may
                                    cause certain features to become unavailable
                                    or operate incorrectly.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="font-bold text-[#071a33]">
                                    Functional Cookies
                                </h3>

                                <p className="mt-3">
                                    Functional cookies allow the website to
                                    remember certain choices or preferences
                                    made during your visit.
                                </p>

                                <p>
                                    These cookies may help provide a more
                                    convenient browsing experience by reducing
                                    the need to repeatedly enter or select the
                                    same information.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="font-bold text-[#071a33]">
                                    Analytics and Performance Cookies
                                </h3>

                                <p className="mt-3">
                                    Analytics cookies help us understand how
                                    visitors use FlightDealsNow.
                                </p>

                                <p>
                                    They may collect information such as the
                                    pages visitors view, how visitors navigate
                                    the website, approximate time spent on
                                    pages, browser or device information, and
                                    general website interaction data.
                                </p>

                                <p>
                                    We may use this information to understand
                                    website performance, identify areas for
                                    improvement, and make our website more
                                    useful and easier to navigate.
                                </p>

                                <p>
                                    Where appropriate, analytics information
                                    may be aggregated or otherwise used in a
                                    manner designed to reduce direct
                                    identification of individual visitors.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                                <h3 className="font-bold text-[#071a33]">
                                    Advertising and Marketing Cookies
                                </h3>

                                <p className="mt-3">
                                    Where applicable, FlightDealsNow may use
                                    cookies or similar tracking technologies
                                    to understand the effectiveness of
                                    advertising campaigns, measure interactions
                                    with advertisements, and support marketing
                                    activities.
                                </p>

                                <p>
                                    These technologies may allow us or our
                                    advertising partners to understand whether
                                    a visitor has interacted with an
                                    advertisement or visited our website after
                                    seeing an advertisement.
                                </p>

                                <p>
                                    Third-party advertising providers may have
                                    their own privacy policies and practices
                                    governing information collected through
                                    these technologies.
                                </p>
                            </div>

                        </div>
                    </Section>

                    {/* Section 4 */}
                    <Section number="4" title="Third-Party Cookies">
                        <p>
                            Some cookies or similar technologies used on
                            FlightDealsNow may be placed by third-party service
                            providers.
                        </p>

                        <p>
                            Third-party providers may assist us with functions
                            such as:
                        </p>

                        <BulletList
                            items={[
                                "Website analytics",
                                "Advertising and campaign measurement",
                                "Website performance",
                                "Security",
                                "Embedded content",
                                "Other website-related services",
                            ]}
                        />

                        <p>
                            These third parties may collect information through
                            their own technologies and may process that
                            information according to their respective privacy
                            policies.
                        </p>

                        <p>
                            FlightDealsNow does not control the privacy
                            practices of independent third-party providers.
                            We encourage you to review the applicable privacy
                            policies of third-party services when you interact
                            with their technologies.
                        </p>
                    </Section>

                    {/* Section 5 */}
                    <Section number="5" title="Session & Persistent Cookies">

                        <p>
                            Cookies can generally be divided into two
                            categories based on how long they remain on your
                            device.
                        </p>

                        <div className="grid gap-5 sm:grid-cols-2">

                            <div className="rounded-2xl border border-cyan-100 bg-cyan-50/60 p-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 text-[#071a33]">
                                        ⏱
                                    </span>

                                    <h3 className="font-bold text-[#071a33]">
                                        Session Cookies
                                    </h3>
                                </div>

                                <p className="mt-4">
                                    These cookies are temporary and generally
                                    expire when you close your browser. They
                                    may be used to support navigation and basic
                                    website functionality during your visit.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                                        ✓
                                    </span>

                                    <h3 className="font-bold text-[#071a33]">
                                        Persistent Cookies
                                    </h3>
                                </div>

                                <p className="mt-4">
                                    These cookies remain on your device for a
                                    specific period or until you delete them.
                                    They may be used to remember preferences,
                                    analyze repeat visits, or support certain
                                    marketing and advertising functions.
                                </p>
                            </div>

                        </div>

                        <p>
                            The duration of a persistent cookie can vary
                            depending on its purpose and the provider
                            responsible for placing it.
                        </p>
                    </Section>

                    {/* Section 6 */}
                    <Section number="6" title="Managing Your Cookie Preferences">
                        <p>
                            You have options for controlling cookies on your
                            device.
                        </p>

                        <p>
                            Most internet browsers allow you to manage cookie
                            settings, including the ability to:
                        </p>

                        <BulletList
                            items={[
                                "View cookies stored on your device.",
                                "Delete existing cookies.",
                                "Block certain or all cookies.",
                                "Allow cookies only from selected websites.",
                                "Receive notifications before cookies are placed on your device.",
                            ]}
                        />

                        <p>
                            Where a cookie preference or consent tool is
                            available on FlightDealsNow, you may also be able
                            to manage certain categories of cookies through
                            that tool.
                        </p>

                        <p>
                            Please remember that disabling or blocking certain
                            cookies may affect the way some features of our
                            website operate.
                        </p>
                    </Section>

                    {/* Section 7 */}
                    <Section number="7" title="Browser & Device Controls">
                        <p>
                            You can generally adjust your browser's privacy
                            settings to limit or block cookies. The exact
                            steps vary depending on the browser and device
                            you use.
                        </p>

                        <p>
                            You may also have controls through your device or
                            operating system that allow you to limit certain
                            forms of tracking or personalized advertising.
                        </p>

                        <p>
                            If you delete cookies, change browsers, or use a
                            different device, your cookie preferences may need
                            to be selected again.
                        </p>
                    </Section>

                    {/* Section 8 */}
                    <Section number="8" title="Do Not Track & Similar Signals">
                        <p>
                            Some browsers and devices provide “Do Not Track”
                            or similar privacy settings.
                        </p>

                        <p>
                            Because there is not one universally adopted
                            technical standard for responding to these signals,
                            FlightDealsNow may not respond to every
                            browser-based Do Not Track signal in the same way.
                        </p>

                        <p>
                            Your privacy choices may also vary depending on
                            your location and applicable privacy laws.
                        </p>
                    </Section>

                    {/* Section 9 */}
                    <Section number="9" title="Cookies & Personal Information">
                        <p>
                            Cookies may collect information about your device,
                            browser, website activity, and interactions with
                            FlightDealsNow.
                        </p>

                        <p>
                            In certain circumstances, information collected
                            through cookies or similar technologies may be
                            associated with information you provide directly to
                            us, such as your name, email address, phone number,
                            or travel inquiry information.
                        </p>

                        <p>
                            Our broader practices concerning the collection,
                            use, and protection of personal information are
                            explained in our Privacy Policy.
                        </p>
                    </Section>

                    {/* Section 10 */}
                    <Section number="10" title="Third-Party Websites">
                        <p>
                            FlightDealsNow may contain links to websites or
                            services operated by third parties.
                        </p>

                        <p>
                            If you leave FlightDealsNow and visit a third-party
                            website, that website may use its own cookies,
                            tracking technologies, and privacy practices.
                        </p>

                        <p>
                            Flightdealsnow.com does not control how third-party
                            websites use cookies or other technologies. We
                            recommend reviewing their privacy policies before
                            providing personal information or continuing to
                            use their services.
                        </p>
                    </Section>

                    {/* Section 11 */}
                    <Section number="11" title="Security">
                        <p>
                            We take reasonable measures to protect information
                            collected through our website.
                        </p>

                        <p>
                            However, no website, internet transmission,
                            electronic storage system, or tracking technology
                            can be guaranteed to be completely secure.
                        </p>

                        <p>
                            You should also take appropriate steps to protect
                            your device, browser, and account information when
                            using the internet.
                        </p>
                    </Section>

                    {/* Section 12 */}
                    <Section number="12" title="Children's Privacy">
                        <p>
                            FlightDealsNow is intended for a general audience
                            and is not designed to knowingly collect personal
                            information from children under 13.
                        </p>

                        <p>
                            If we become aware that personal information has
                            been collected from a child under 13 in
                            circumstances where applicable law requires
                            parental consent, we will take appropriate steps
                            to address the situation.
                        </p>
                    </Section>

                    {/* Section 13 */}
                    <Section number="13" title="Changes To This Cookie Policy">
                        <p>
                            Flightdealsnow.com may update this Cookie Policy from
                            time to time to reflect changes in our website,
                            technology, services, third-party providers,
                            advertising practices, or applicable legal
                            requirements.
                        </p>

                        <p>
                            Any updated version will be published on
                            FlightDealsNow. We encourage visitors to review
                            this policy periodically to stay informed about
                            how cookies and similar technologies may be used.
                        </p>
                    </Section>

                    {/* Section 14 */}
                    <Section number="14" title="Contact Us">

                        <p>
                            If you have questions about this Cookie Policy or
                            how cookies are used on FlightDealsNow, please
                            contact us:
                        </p>

                        <div className="mt-5 overflow-hidden rounded-[24px] bg-[#071a33] p-6 sm:p-8">

                            <div className="space-y-6">

                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-lg">
                                        📍
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                                            Address
                                        </p>

                                        <p className="mt-1 text-sm leading-6 text-slate-300">
                                            30 N Gould St, Sheridan, WY 82801, USA
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-lg">
                                        ✉
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
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

                                {/* Phone */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300 text-lg">
                                        ☎
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                                            Phone
                                        </p>

                                        <a
                                            href={`tel:${PHONE_NUMBER}`}
                                            className="mt-1 block text-lg font-bold text-white transition hover:text-cyan-300"
                                        >
                                            {DISPLAY_PHONE}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <p className="mt-6">
                            We value your privacy and aim to provide clear
                            information about the technologies used to support
                            your experience on FlightDealsNow.
                        </p>
                    </Section>

                    {/* ================= FINAL CTA ================= */}
                    <div className="relative mt-14 overflow-hidden rounded-[30px] bg-[#071a33] px-6 py-12 text-center sm:px-10">

                        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

                        <div className="relative">

                            <span className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                                Travel Support
                            </span>

                            <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                                Need Help With Your Trip?
                            </h3>

                            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                                Our travel experts are here to help you with
                                your travel plans and questions.
                            </p>

                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="mt-7 inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#071a33] shadow-lg shadow-cyan-300/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
                            >
                                ☎ Talk to an Expert
                            </a>

                        </div>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default CookiePolicy