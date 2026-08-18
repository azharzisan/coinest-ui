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
      <section className="w-full pt-30 group relative">
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

        <div className="text-sm text-white bg-black z-3000 fixed bottom-5 right-5 px-2 py-0.5 rounded-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out">
          Build by{" "}
          <a
            href="https://azharzisan.vercel.app"
            className="underline hover:cursor-pointer hover:text-blue-500"
            target="_blank"
          >
            @azharzisan
          </a>
        </div>
      </section>
    </>
  );
};

export default App;
