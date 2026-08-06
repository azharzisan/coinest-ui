import React from "react";
import NavBtn from "../components/ui/NavBtn";

const Navbar = () => {
  return (
    <>
      <nav className="w-full">
        <div className="w-full flex justify-between items-center bg-background border border-neutral-300 p-2.5 rounded-2xl">
          <div className="flex justify-start items-center px-2">
            <h1 className="text-2xl font-bold tracking-tight text-primary uppercase">Coinest</h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <NavBtn text={"Home"}/>
            <NavBtn text={"About Us"}/>
            <NavBtn text={"Pricing"}/>
            <NavBtn text={"Blog"}/>
          </div>
          <button className="bg-secondary px-4 tracking-tight py-1 text-md rounded-xl font-semibold text-primary hover:opacity-90">Contact Us</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
