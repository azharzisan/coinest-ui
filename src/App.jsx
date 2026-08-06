import React from "react";
import Navbar from "./sections/Navbar";
import Homepage from "./sections/Homepage";

const App = () => {
  return (
    <>
      <section className="w-full py-4 px-15 fixed">
        <Navbar />
      </section>
      <section className="w-full pt-30">
        <Homepage />
      </section>
    </>
  );
};

export default App;
