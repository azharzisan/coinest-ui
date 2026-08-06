import React from "react";
import NavBtn from "../components/ui/NavBtn";

const Navbar = () => {
  return (
    <>
      <nav className="w-full shadow-2xl shadow-secondary/50">
        <div className="w-full flex justify-between items-center bg-background border border-neutral-300 ring-1 ring-secondary/30 ring-inset p-2.5 rounded-2xl">
          <div className="flex justify-start items-center px-2">
            <h1 className="text-2xl font-bold tracking-tight text-primary uppercase">
              Coinest
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <NavBtn text={"Home"} />
            <NavBtn text={"About Us"} />
            <NavBtn text={"Pricing"} />
            <NavBtn text={"Blog"} />
          </div>
          <button className="bg-linear-to-t from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset border border-secondary px-4 tracking-tight py-1 text-md rounded-xl font-semibold text-primary hover:opacity-90 active:translate-y-1 transition-all duration-500 ease-in-out">
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
