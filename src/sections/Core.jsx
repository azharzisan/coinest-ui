import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import React from "react";

const Core = () => {
  return (
    <>
      <div className="w-full relative py-10">
        <div className="w-full flex justify-center items-center">
          <div className="px-3 py-1 bg-linear-to-t from-secondary/40 to-secondary/20 tracking-tighter border-secondary flex justify-center items-center gap-2 border rounded-full text-primary ring-1 ring-background/30 ring-inset text-sm font-semibold">
            Our Core
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 px-60 z-30 pt-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-5xl text-primary font-semibold text-center"
            delay={0.5}
          >
            What Sets Coinest Apart
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-xl text-center text-muted"
            delay={0.8}
          >
            We don’t just help you manage money — we empower you with clarity,
            control, and confidence every step of the way.
          </TextAnimate>
        </div>
        <div className="w-full relative px-20 py-10">
          <div className="w-full h-full relative">
            <p>dsfbfdh</p>
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={0.1}
              duration={3}
              repeatDelay={1}
              className={
                "absolute inset-0"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Core;
