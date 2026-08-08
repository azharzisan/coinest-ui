import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";
import { HexagonPattern } from "@/components/ui/hexagon-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="w-full relative">
        <div className="w-full flex justify-center items-center pb-10">
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
            delay={0}
          >
            <div className="pl-1 py-1 pr-3 bg-linear-to-t from-secondary/40 to-secondary/20 tracking-tighter border-secondary flex justify-center items-center gap-2 border rounded-full text-primary ring-1 ring-background/30 ring-inset">
              <div className="bg-background text-xs px-2 py-1 rounded-full border border-secondary text-md ">
                Introducing
              </div>
              <h6 className="text-sm font-semibold">Cross Border Payments</h6>
            </div>
          </AnimatedContent>
        </div>

        <div className="w-full flex justify-center items-center flex-col gap-4 px-50 z-30">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-6xl text-primary font-semibold text-center"
            delay={0.5}
          >
            Take Full Control of your Finances with Coinest
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-xl text-center text-muted"
            delay={0.8}
          >
            Smart, secure and scalable finance management built for modern
            individuals and businesses.
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
            <Button text={"Get Started for Free"} />
            <p className="text-center text-muted text-xs pt-1">
              *No credit card required
            </p>
          </AnimatedContent>
        </div>
        <div className="w-full h-125 relative z-30 overflow-hidden">
          <div className="w-full absolute top-0 left-0 pt-15 px-13">
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
              delay={0.2}
              className=" flex justify-center items-center flex-col"
            >
              <img
                src="/dash.svg"
                alt=""
                className="w-full h-full object-top object-cover border-t-4 border-x-4 rounded-t-3xl border-secondary/40"
              />
            </AnimatedContent>
          </div>
        </div>
        <div className="w-full h-full bg-linear-to-t from-secondary/60 via-secondary/30 via-10% to-transparent absolute bottom-0 left-0 -z-10"></div>
        <HexagonPattern
          radius={40}
          x={-1}
          y={-1}
          className={cn(
            "mask-[linear-gradient(to_top,white,#ffffff60,transparent)] -z-20",
          )}
        />
      </div>
    </>
  );
};

export default Homepage;
