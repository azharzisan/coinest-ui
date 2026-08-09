import React, { useEffect, useRef } from "react";
import Navbar from "./sections/Navbar";
import Homepage from "./sections/Homepage";
import LogoRun from "./sections/LogoRun";
import Features from "./sections/Features";
import Core from "./sections/Core";
import Overview from "./sections/Overview";
import WhyUs from "./sections/WhyUs";
import Integration from "./sections/Integration";
import Review from "./sections/Review";
import Pricing from "./sections/Pricing";
import Sessions from "./sections/Sessions";
import Ready from "./sections/Ready";
import Footer from "./sections/Footer";

const App = () => {
  
  return (
    <>
      <section className="w-full py-4 px-4 lg:px-15 fixed z-10000">
        <Navbar />
      </section>
      <section className="w-full pt-30">
        <Homepage />
        <LogoRun />
        <Features />
        <Core />
        <Overview />
        <WhyUs />
        <Integration />
        <Review />
        <Pricing />
        <Sessions />
        <Ready />
        <Footer />
      </section>
    </>
  );
};

export default App;
