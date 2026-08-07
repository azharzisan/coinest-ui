import React from "react";
import NavBtn from "../components/ui/NavBtn";
import Button from "@/components/ui/Button";

const Navbar = () => {
  return (
    <>
      <nav className="w-full shadow-2xl shadow-secondary/30">
        <div className="w-full flex justify-between items-center bg-background border border-neutral-300 ring-1 ring-secondary/30 ring-inset p-2.5 rounded-2xl">
          <div className="flex justify-center items-center px-1">
            <img src="/logo.png" alt="" className="size-7 translate-y-[1px] rounded-full"/>
            <h1 className="text-xl font-bold tracking-tight text-primary uppercase">
              Coinest
            </h1>
          </div>
          <div className="flex justify-center items-center gap-3">
            <NavBtn text={"Home"} />
            <NavBtn text={"About Us"} />
            <NavBtn text={"Pricing"} />
            <NavBtn text={"Blog"} />
          </div>
          <Button text={"Contact Us"}/>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
