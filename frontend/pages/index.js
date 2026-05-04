import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import LogoEntrance from "../src/components/LogoEntrance";
import Navbar from "../src/components/Navbar";
import ButterflyDrift from "../src/components/ButterflyDrift";
import Hero from "../src/components/Hero";
import WhoThisIsFor from "../src/components/WhoThisIsFor";
import AboutNaina from "../src/components/AboutNaina";
import HowIWork from "../src/components/HowIWork";
import AreasOfWork from "../src/components/AreasOfWork";
import WhatToExpect from "../src/components/WhatToExpect";
import FAQs from "../src/components/FAQs";
import InstagramFeed from "../src/components/InstagramFeed";
import FinalCTA from "../src/components/FinalCTA";
import Footer from "../src/components/Footer";
import BookingDialog from "../src/components/BookingDialog";
import JsonLd from "../src/components/JsonLd";

const SITE_URL = "https://www.thebutterflyeffecttherapy.com";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Butterfly Effect",
  url: SITE_URL,
  description:
    "Person-centred, integrative online therapy by Naina Agarwal, Counselling Psychologist.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  name: "The Butterfly Effect",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Integrative, person-centred online therapy. Working with anxiety, emotional patterns, relationships, self-worth, and identity. Sessions held via video call.",
  telephone: "+919989640090",
  email: "agarwalnainaa02@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  serviceType: "Counselling Psychology",
  priceRange: "₹₹",
  sameAs: ["https://www.instagram.com/thebutterflyeffect_with.nainaa"],
  founder: {
    "@type": "Person",
    name: "Naina Agarwal",
    jobTitle: "Counselling Psychologist",
    description:
      "MSc Counselling Psychology. Offering integrative, person-centred therapy online across India.",
    url: `${SITE_URL}/#about`,
    sameAs: ["https://www.instagram.com/thebutterflyeffect_with.nainaa"],
  },
};

export default function Home() {
  // Safe sessionStorage read — only runs on client
  const [introDone, setIntroDone] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("tbe-intro-played") === "1") {
      setIntroDone(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [introDone]);

  return (
    <>
      <Head>
        <title>The Butterfly Effect — Naina Agarwal, Counselling Psychologist</title>
        <meta
          name="description"
          content="Therapy that follows you, not a script. Naina Agarwal is a Counselling Psychologist offering integrative, person-centred online therapy in India. Book a session via WhatsApp or Instagram."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Open Graph */}
        <meta property="og:title" content="The Butterfly Effect — Naina Agarwal, Counselling Psychologist" />
        <meta
          property="og:description"
          content="Therapy that follows you, not a script. Person-centred, integrative online therapy by Naina Agarwal."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="The Butterfly Effect — Naina Agarwal, Counselling Psychologist" />
        <meta
          name="twitter:description"
          content="Therapy that follows you, not a script. Integrative, person-centred online therapy by Naina Agarwal."
        />

        {/* JSON-LD */}
        <JsonLd data={websiteSchema} />
        <JsonLd data={localBusinessSchema} />
      </Head>

      <div className="App" data-testid="tbe-home">
        <LogoEntrance onComplete={handleIntroComplete} />
        <Navbar onBookClick={() => setBookingOpen(true)} visible={introDone} />
        <ButterflyDrift />

        <main>
          <Hero onBookClick={() => setBookingOpen(true)} />
          <WhoThisIsFor />
          <AboutNaina />
          <HowIWork />
          <AreasOfWork />
          <WhatToExpect onBookClick={() => setBookingOpen(true)} />
          <FAQs />
          <InstagramFeed />
          <FinalCTA onBookClick={() => setBookingOpen(true)} />
        </main>

        <Footer />
        <BookingDialog open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </>
  );
}

// getStaticProps pre-renders this page at build time.
export async function getStaticProps() {
  return {
    props: {},
  };
}
