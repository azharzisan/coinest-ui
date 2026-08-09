import React, { useState } from "react";
import { Globe2, Leaf, Star3 } from "reicon-react";

const Pricing = () => {
  const [pricingTerm, setPricingTerm] = useState(true);
  const handlePricingTerm = () => {
    setPricingTerm((prev) => !prev);
  };
  return (
    <>
      <div className="w-full relative py-20 px-10 flex justify-center items-center flex-col">
        <div className="w-full flex justify-center items-center pb-8">
          <div className="px-3 py-1 bg-linear-to-t from-secondary/90 to-secondary/40 tracking-tighter border-secondary flex justify-center items-center gap-2 border-[1.5px] rounded-full text-primary ring-1 ring-background/30 ring-inset text-sm font-semibold">
            Pricing
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-4 px-50 z-30 pb-4">
          <h2 className="text-6xl text-primary font-semibold text-center">
            Choose the Plan That Fits Your Finances
          </h2>
        </div>
        <div className="w-fit flex justify-center items-center gap-1 p-1 border bg-background shadow-2xs shadow-muted/20 border-muted/30 rounded-2xl">
          <button
            onClick={handlePricingTerm}
            className={`${pricingTerm ? "bg-linear-to-t border-secondary" : ""} border border-background from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset px-3 tracking-tight py-1 text-sm rounded-xl font-semibold text-primary hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out`}
          >
            Monthly
          </button>
          <button
            onClick={handlePricingTerm}
            className={`${pricingTerm ? "" : "bg-linear-to-t border-secondary"} border border-background from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset px-3 tracking-tight py-1 text-sm rounded-xl font-semibold text-primary hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out`}
          >
            Annual
          </button>
        </div>

        <div className="w-full flex justify-center items-center gap-8 py-10">
          <div className="w-full p-4 flex flex-col gap-3 border border-muted/20 rounded-2xl shadow-md shadow-muted/20 hover:bg-linear-to-t transition-all duration-300 ease-in-out from-secondary/30 via-secondary/20 to-background">
            <div>
              <Star3 size={30} className="text-primary" />
            </div>
            <h4 className="text-3xl font-bold text-foreground">Hobby</h4>
            <div className="w-full flex justify-start items-end">
              <h5 className="text-5xl">$0</h5>
              <p className="text-md text-muted">/month</p>
            </div>
            <button className="w-full bg-linear-to-t border-secondary border from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset px-3 tracking-tight py-2 text-md rounded-xl font-semibold text-primary hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out">
              Try now
            </button>
            <div className="pl-4">
              <ul className="text-foreground list-disc text-md">
                <li>Track up to 2 accounts</li>
                <li>Monthly budget insights</li>
                <li>1 active saving plan</li>
                <li>Basic financial dashboard</li>
                <li>Manual expense categorization</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4 flex flex-col gap-3 border border-muted/20 rounded-2xl shadow-md shadow-muted/20 hover:bg-linear-to-t transition-all duration-300 ease-in-out from-secondary/30 via-secondary/20 to-background">
            <div>
              <Leaf size={30} className="text-primary" />
            </div>
            <h4 className="text-3xl font-bold text-foreground">Core</h4>
            <div className="w-full flex justify-start items-end text-foreground">
              <h5 className="text-5xl">{pricingTerm ? "$20" : "$18"}</h5>
              <p className="text-muted">/month</p>
            </div>
            <button className="w-full bg-linear-to-t border-secondary border from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset px-3 tracking-tight py-2 text-md rounded-xl font-semibold text-primary hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out">
              Upgrade
            </button>
            <div className="pl-4">
              <ul className="text-foreground list-disc text-md">
                <li>Unlimited accounts</li>
                <li>Custom spend alerts</li>
                <li>Up to 5 saving plans</li>
                <li>Income & expense analytics</li>
                <li>Recurring transaction setup</li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4 flex flex-col gap-3 border border-muted/20 rounded-2xl shadow-md shadow-muted/20 hover:bg-linear-to-t transition-all duration-300 ease-in-out from-secondary/30 via-secondary/20 to-background">
            <div>
              <Globe2 size={30} className="text-primary" />
            </div>
            <h4 className="text-3xl font-bold text-foreground">Pro</h4>
            <div className="w-full flex justify-start items-end text-foreground">
              <h5 className="text-5xl">{pricingTerm ? "$99" : "$79"}</h5>
              <p className="text-muted">/month</p>
            </div>
            <button className="w-full bg-linear-to-t border-secondary border from-secondary/90 via-secondary/70 to-secondary/50 ring-1 ring-background/30 ring-inset px-3 tracking-tight py-2 text-md rounded-xl font-semibold text-primary hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out">
              Upgrade
            </button>
            <div className="pl-4">
              <ul className="list-disc text-foreground text-md">
                <li>Unlimited saving goals</li>
                <li>Smart saving suggestions and tips</li>
                <li>Investment tracking dashboard</li>
                <li>Financial forecasting and reports</li>
                <li>Priority customer support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
