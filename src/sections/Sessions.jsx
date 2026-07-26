import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight, Play } from "reicon-react";

const Sessions = () => {
  return (
    <>
      <div className="w-full h-full px-6">
        <div className="w-full h-full relative border-x px-4 border-neutral-300 py-20">
          <img
            src="/images/sessions.png"
            alt=""
            className="w-full h-90 object-cover rounded-xl"
          /> 
          <div className="absolute bottom-23 left-7 flex items-start gap-4 flex-col">
            <h3 className="text-2xl md:text-4xl font-semibold text-primary">Building the economic <br /> infrastructure for AI</h3>
            <Button className={'bg-primary text-secondary'}>Watch now <Play size={16} weight="Filled"/></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sessions;
