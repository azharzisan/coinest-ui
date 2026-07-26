import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import React, { useState } from "react";
import { Building, Card, Cart, Doc2, FerrisWheel, Menu, MoneyBag, Office, Shop3, WalletAdd2, X } from "reicon-react";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [prodToggle, setProdToggle] = useState(false)
  const [prodToggle2, setProdToggle2] = useState(false)

  const handleMenuToggle = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <>
      <div className="w-full flex fixed z-1000 top-0 left-0 justify-between items-center px-6 py-5 md:px-4 md:py-3">
        <div className="flex justify-center items-center gap-2 relative z-20">
          <img src="/images/logo.png" alt="" className="w-7" />
          <h2 className="text-xl text-secondary font-semibold">Circle Pay</h2>
        </div>

        <div className="lg:flex bg-primary rounded-xl p-1 hidden justify-center items-center gap-3 text-secondary relative z-20">
          <button
            onMouseEnter={() => setProdToggle((prev) => !prev)}
            className="cursor-pointer hover:bg-excep/30 px-3 py-1 rounded-lg"
          >
            Products
          </button>
          <button
            onMouseEnter={() => setProdToggle2((prev) => !prev)}
            className="cursor-pointer hover:bg-excep/30 px-3 py-1 rounded-lg"
          >
            Solutions
          </button>
          <button className="hover:bg-excep/30 px-3 py-1 rounded-lg">
            <a href="">Customer</a>
          </button>
          <button className="hover:bg-excep/30 px-3 py-1 rounded-lg">
            <a href="">Pricing</a>
          </button>

          <div
            onMouseLeave={() => setProdToggle((prev) => !prev)}
            className={`w-40 ${prodToggle ? "flex" : "hidden"} justify-center items-center flex-col absolute lg:top-10 lg:-left-9 border border-excep bg-primary z-20 p-1 rounded-xl gap-1`}
          >
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <Card size={20} />
              <a href="">Payment</a>
            </button>
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <MoneyBag size={20} />
              <a href="">Banking</a>
            </button>
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <Doc2 size={20} />
              <a href="">Invoicing</a>
            </button>
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <Cart size={20} />
              <a href="">Checkouts</a>
            </button>
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <WalletAdd2 size={20} />
              <a href="">Paywalls</a>
            </button>
          </div>

          <div
            onMouseLeave={() => setProdToggle2((prev) => !prev)}
            className={`w-40 ${prodToggle2 ? "flex" : "hidden"} justify-center items-center flex-col absolute lg:top-15 lg:left-20 border border-excep bg-primary z-20 p-1 rounded-xl gap-1`}
          >
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <Building size={20} />
              <a href="">Business</a>
            </button>
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <Shop3 size={20} />
              <a href="">Merchants</a>
            </button>
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <Office size={20} />
              <a href="">Agency</a>
            </button>
            <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg flex justify-between items-center">
              <FerrisWheel size={20} />
              <a href="">Enterprise</a>
            </button>
          </div>
        </div>

        <div className="lg:flex hidden justify-center items-center gap-4 relative z-20">
          <button className="px-3 py-1 bg-primary hover:bg-secondary/10 rounded-lg text-secondary cursor-pointer">
            <a href="">Sign Up</a>
          </button>
          <button className="px-3 py-1 bg-secondary text-primary rounded-lg hover:bg-secondary/90 cursor-pointer">
            <a href="">Login</a>
          </button>
        </div>

        <button onClick={handleMenuToggle} className="z-20 block lg:hidden">
          <Menu size={24} className={`${menuToggle ? "hidden" : "block"}`} />
          <X size={24} className={`${menuToggle ? "block" : "hidden"}`} />
        </button>

        <div
          className={`w-50 lg:hidden ${menuToggle ? "flex" : "hidden"} justify-center items-center flex-col absolute top-15 right-15 border border-excep bg-primary z-20 p-1 rounded-xl gap-1`}
        >
          <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg">
            <a href="">Products</a>
          </button>
          <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg">
            <a href="">Solutions</a>
          </button>
          <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg">
            <a href="">Customers</a>
          </button>
          <button className="w-full hover:bg-excep/30 px-3 py-1 rounded-lg">
            <a href="">Pricing</a>
          </button>
          <button className="w-full bg-primary hover:bg-secondary/10 border border-excep px-3 py-1 rounded-lg">
            <a href="">Login</a>
          </button>
          <button className="w-full bg-secondary text-primary hover:bg-secondary/90  px-3 py-1 rounded-lg">
            <a href="">Sign Up</a>
          </button>
        </div>

        <ProgressiveBlur
          height="110px"
          position="top"
          className={"w-full absolute top-0 left-0 z-10"}
        />
      </div>
    </>
  );
};

export default Navbar;
