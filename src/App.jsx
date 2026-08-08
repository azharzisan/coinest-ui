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

const App = () => {
  // const cursorRef = useRef(null)
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     if (cursorRef.current) {
  //       cursorRef.current.style.left = `${e.clientX}px`;
  //       cursorRef.current.style.top = `${e.clientY}px`;
  //     }
  //   }
  //   window.addEventListener("mousemove", handleMouseMove);
  
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   }
  // }, [])
  
  return (
    <>
      {/* <div ref={cursorRef} class="custom-cursor w-5 h-5 bg-primary fixed rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-100 ease-in-out z-1000000"></div> */}
      <section className="w-full py-4 px-15 fixed z-10000">
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
      </section>
    </>
  );
};

export default App;
