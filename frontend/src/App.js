import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";

import LogoEntrance from "./components/LogoEntrance";
import Navbar from "./components/Navbar";
import ButterflyDrift from "./components/ButterflyDrift";
import Hero from "./components/Hero";
import WhoThisIsFor from "./components/WhoThisIsFor";
import AboutNaina from "./components/AboutNaina";
import HowIWork from "./components/HowIWork";
import AreasOfWork from "./components/AreasOfWork";
import WhatToExpect from "./components/WhatToExpect";
import FAQs from "./components/FAQs";
import InstagramFeed from "./components/InstagramFeed";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import BookingDialog from "./components/BookingDialog";

const Home = () => {
  const [introDone, setIntroDone] = useState(
    () => sessionStorage.getItem("tbe-intro-played") === "1"
  );
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    document.body.style.overflow = introDone ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [introDone]);

  return (
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
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
