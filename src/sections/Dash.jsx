import { Button } from "@/components/ui/button";
import React from "react";

const Dash = () => {
  return (
    <>
      <div className="w-full px-6">
        <div className="w-full flex justify-center items-center relative flex-col gap-6 border-x border-b border-neutral-300">
          <div className="absolute bottom-0 left-0 w-full h-50 bg-linear-to-t from-primary to-transparent"></div>
          <h2 className="text-center leading-11 font-bold text-secondary text-5xl pt-30">
            A financial dashbaord for <br /> your payment system
          </h2>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              className={"text-secondary border-secondary"}
            >
              Try now
            </Button>
            <Button variant="" className={"bg-secondary hover:bg-secondary/80 text-primary"}>
              Get started
            </Button>
          </div>
          <div className="w-full h-100 px-4 pt-10">
            <img
              src="/images/dashbaord.jpg"
              alt=""
              className="w-full h-full object-top object-cover border-x-2 border-t-2 rounded-t-2xl border-excep-dark"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
