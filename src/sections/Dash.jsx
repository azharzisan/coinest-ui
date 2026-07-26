import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import React from "react";

const Dash = () => {
  return (
    <>
      <div className="w-full px-6">
        <div className="w-full flex justify-center items-center relative flex-col gap-6 border-x border-b border-neutral-300">
          <div className="absolute bottom-0 left-0 w-full z-30 h-50 bg-linear-to-t from-primary to-transparent"></div>
          <h2 className="text-center md:leading-11 px-3 font-bold text-secondary text-4xl md:text-5xl pt-30">
            A financial dashbaord for <br /> your payment system
          </h2>
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="outline"
              className={"text-secondary border-secondary"}
            >
              Try now
            </Button>
            <Button
              variant=""
              className={"bg-secondary hover:bg-secondary/80 text-primary"}
            >
              Get started
            </Button>
          </div>
          <div className="w-full h-50 md:h-100 px-2 md:px-4 pt-10">
            <div className="w-full h-full relative overflow-hidden bg-transparent rounded-t-2xl p-2 md:p-0">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              <img
                src="/images/Dashboard.png"
                alt=""
                className="w-full h-full object-top object-cover md:rounded-t-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dash;
