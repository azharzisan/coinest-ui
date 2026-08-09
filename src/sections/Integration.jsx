import { IntegConnect } from "@/components/IntegConnect";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const Integration = () => {
  return (
    <>
      <div className="w-full relative py-20">
        <div className="w-full flex justify-center items-center">
          <div className="px-3 py-1 bg-linear-to-t from-secondary/90 to-secondary/40 tracking-tighter border-secondary flex justify-center items-center gap-2 border-[1.5px] rounded-full text-primary ring-1 ring-background/30 ring-inset text-sm font-semibold">
            Integrations
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 px-10 md:px-20 lg:px-60 z-30 pt-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center"
            delay={0.5}
          >
            Seamless Integrations with Your Favorite Tools
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-lg lg:text-xl text-center text-foreground"
            delay={0.8}
          >
            Sync effortlessly across banking, payment, and productivity
            platforms.
          </TextAnimate>
          <AnimatedContent
            distance={50}
            direction="vertical"
            reverse={false}
            duration={1}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={1}
            className=" flex justify-center items-center flex-col"
          >
            <Button text={"Integrate now"} />
            <p className="text-center text-muted text-xs pt-1">
              *It's damn ease
            </p>
          </AnimatedContent>
        </div>
        <div className="w-full h-80 md:h-70 relative">
          <IntegConnect />
        </div>
      </div>
    </>
  );
};

export default Integration;
