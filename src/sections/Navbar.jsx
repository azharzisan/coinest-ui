import { useState } from "react";
import React from "react";
import NavBtn from "../components/ui/NavBtn";
import Button from "@/components/ui/Button";
import { Sidebar2 } from "reicon-react";

const Navbar = () => {
  const resNavItem = ["Home", "About Us", "Pricing", "Blog"];

  const [navToggle, setNavToggle] = useState(false)
  const handleNavToggle = () => {
    setNavToggle(prev => !prev)
  }
  return (
    <>
      <nav className="w-full shadow-2xl shadow-secondary/30 relative">
        <div className="w-full flex justify-between items-center bg-background border border-neutral-300 ring-1 ring-secondary/30 ring-inset p-2.5 rounded-2xl">
          <div className="flex justify-center items-center md:px-1">
            <img
              src="/logo.png"
              alt=""
              className="size-9 rounded-full"
            />
            <h1 className="text-xl font-bold tracking-tight text-primary uppercase">
              Coinest
            </h1>
          </div>
          <div className="hidden md:flex justify-center items-center md:gap-1 lg:gap-3">
            <NavBtn text={"Home"} />
            <NavBtn text={"About Us"} />
            <NavBtn text={"Pricing"} />
            <NavBtn text={"Blog"} />
          </div>
          <div className="hidden md:block">
            <Button text={"Contact Us"} />
          </div>
          <button onClick={handleNavToggle} className="block md:hidden pr-1">
            <Sidebar2 size={24} className={`text-primary ${navToggle ? "hidden": "block"}`} />
            <Sidebar2 size={24} className={`text-primary rotate-180 ${navToggle ? "block": "hidden"}`} />
          </button>
        </div>

        <div className={`w-full ${navToggle ? "block": "hidden"} absolute top-16 left-1/2 -translate-x-1/2 bg-background border border-neutral-300 ring-1 ring-secondary/30 ring-inset p-1 rounded-2xl`}>
          {resNavItem.map((i) => (
            <button
              key={i}
              className="w-full bg-prim-light hover:bg-secondary/60 rounded-xl text-primary py-2 text-md font-semibold mb-1"
            >
              {i}
            </button>
          ))}
          <button className="w-full bg-linear-to-t border-secondary border from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset tracking-tight py-2 text-md rounded-xl font-semibold text-primary hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out">
            Contact Us
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
