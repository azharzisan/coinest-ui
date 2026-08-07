import React from "react";
import Navbar from "./sections/Navbar";
import Homepage from "./sections/Homepage";
import LogoRun from "./sections/LogoRun";
import Features from "./sections/Features";
import Core from "./sections/Core";

const App = () => {
  return (
    <>
      <section className="w-full py-4 px-15 fixed z-10000">
        <Navbar />
      </section>
      <section className="w-full pt-30">
        <Homepage />
        <LogoRun />
        <Features />
        <Core />
      </section>
    </>
  );
};

export default App;
