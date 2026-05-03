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
          content="Therapy that follows you, not a script. Naina Agarwal is a Counselling Psychologist offering integrative, person-centred therapy in India. Book a session via WhatsApp or Instagram."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.thebutterflyeffecttherapy.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="The Butterfly Effect — Naina Agarwal, Counselling Psychologist" />
        <meta
          property="og:description"
          content="Therapy that follows you, not a script. Person-centred, integrative therapy by Naina Agarwal."
        />
        <meta property="og:url" content="https://www.thebutterflyeffecttherapy.com/" />

        {/* Twitter */}
        <meta name="twitter:title" content="The Butterfly Effect — Naina Agarwal" />
        <meta
          name="twitter:description"
          content="Therapy that follows you, not a script. Integrative, person-centred therapy by Naina Agarwal."
        />
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
// All content is static so no data fetching is needed —
// returning empty props gives Next.js the signal to fully
// generate the HTML shell at build time for SEO.
export async function getStaticProps() {
  return {
    props: {},
  };
}
