import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FloatingCall from "./components/FloatingCall"
import CallPopup from "./components/CallPopup"

import Hero from "./components/Hero"
import FlightDeals from "./components/FlightDeals"
import Deals from "./components/Deals"
import PopularDestinations from "./components/PopularDestinations"
import WhyBook from "./components/WhyBook"
import JourneyPriority from "./components/JourneyPriority"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"

import AboutUs from "./components/AboutUs"
import PrivacyPolicy from "./components/PrivacyPolicy"
import TermsConditions from "./components/TermsConditions"
import CancellationRefund from "./components/CancellationRefund"
import CookiePolicy from "./components/CookiePolicy"
import Disclaimer from "./components/Disclaimer"

import CheapFlightsNewYork from "./components/CheapFlightsNewYork"
import CheapFlightsLosAngeles from "./components/CheapFlightsLosAngeles"
import CheapFlightsParis from "./components/CheapFlightsParis"
import CheapFlightsSanFrancisco from "./components/CheapFlightsSanFrancisco"
import CheapFlightsBoston from "./components/CheapFlightsBoston"
import ContactUs from "./components/ContactUs"
import FlightQuote from "./components/FlightQuote";

import UnitedAirlines from "./components/UnitedAirlines";
import DeltaAirLines from "./components/DeltaAirLines";
import SouthwestAirlines from "./components/SouthwestAirlines";
import AmericanAirlines from "./components/AmericanAirlines";
import AlaskaAirlines from "./components/AlaskaAirlines";
import JetBlueAirways from "./components/JetBlueAirways";
import SpiritAirlines from "./components/SpiritAirlines";
import FrontierAirlines from "./components/FrontierAirlines";
import HawaiianAirlines from "./components/HawaiianAirlines";
import AllegiantAir from "./components/AllegiantAir";
import Destinations from "./components/destinations"

import SEO from "./components/SEO";




function Layout({ children, floating = true }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>{children}</main>

      <Footer />

      {floating && (
        <>
          <FloatingCall />
          <CallPopup />
        </>
      )}
    </div>
  )
}

function Home() {
  return (
    <Layout>
      <SEO
        title="FlightsDealNow | Search Flights & Get a Free Quote"
        description="Search flights, compare travel options, and request a personalized flight quote with FlightsDealNow."
        path="/"
      />
      <Hero />
      <FlightDeals />
      <PopularDestinations />
      <WhyBook />
      <JourneyPriority />
      <Testimonials />
      <FAQ />
      <CTA />
    </Layout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about-us" element={<Layout>  <AboutUs /> </Layout>} />

        {/* LEGAL PAGES */}
        <Route path="/privacy-policy" element={<Layout> <PrivacyPolicy /> </Layout>} />

        <Route path="/terms-conditions" element={<Layout> <TermsConditions /> </Layout>} />

        <Route path="/UnitedAirlines" element={<Layout> <UnitedAirlines /> </Layout>} />
        <Route path="/DeltaAirLines" element={<Layout> <DeltaAirLines /> </Layout>} />
        <Route path="/airlines/southwest-airlines" element={<Layout> <SouthwestAirlines /> </Layout>} />
        <Route path="/airlines/american-airlines" element={<Layout> <AmericanAirlines /> </Layout>} />
        <Route path="/airlines/alaska-airlines" element={<Layout> <AlaskaAirlines /> </Layout>} />
        <Route path="/airlines/jetblue-airways" element={<Layout> <JetBlueAirways />  </Layout>} />
        <Route path="/airlines/spirit-airlines" element={<Layout> <SpiritAirlines /> </Layout>} />
        <Route path="/airlines/frontier-airlines" element={<Layout> <FrontierAirlines /> </Layout>} />
        <Route path="/airlines/hawaiian-airlines" element={<Layout> <HawaiianAirlines /> </Layout>} />
        <Route path="/airlines/allegiant-air" element={<Layout> <AllegiantAir /> </Layout>} />




        <Route path="Deals" element={<Layout> <Deals /> </Layout>} />
        <Route path="Destinations" element={<Layout> <Destinations /> </Layout>} />


        <Route path="/cancellation-refund" element={<Layout> <CancellationRefund /> </Layout>} />

        <Route path="/cookie-policy" element={<Layout> <CookiePolicy /> </Layout>} />

        <Route path="/disclaimer" element={<Layout> <Disclaimer /> </Layout>} />

        {/* DESTINATION PAGES */}
        <Route path="/cheap-flights-to-new-york-city" element={<Layout> <CheapFlightsNewYork /> </Layout>} />

        <Route path="/cheap-flights-to-los-angeles" element={<Layout> <CheapFlightsLosAngeles /> </Layout>} />

        <Route path="/cheap-flights-to-paris" element={<Layout> <CheapFlightsParis /> </Layout>} />

        <Route path="/contact-us" element={<Layout><ContactUs /></Layout>} />

        <Route path="/flight-quote" element={<Layout><FlightQuote /></Layout>} />

        <Route path="/cheap-flights-to-san-francisco" element={<Layout> <CheapFlightsSanFrancisco /> </Layout>} />

        <Route path="/cheap-flights-to-boston" element={<Layout> <CheapFlightsBoston /> </Layout>} />

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App