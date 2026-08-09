import CardSwap, {Card} from "@/components/CardSwap";
import AnimatedContent from "@/components/ui/AnimatedContent";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const Ready = () => {
  return (
    <>
      <div className="w-full relative bg-primary flex justify-center items-center">
        <div className="w-full pl-20">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-5xl text-secondary font-semibold "
            delay={0.5}
          >
            Ready to Take Charge of Your Finances?
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-xl text-background pb-3"
            delay={0.8}
          >
            Join thousands of users managing smarter with Coinest
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
            className="pt-3"
          >
            <button className="bg-linear-to-t border-secondary border from-secondary/90 via-secondary/70 to-secondary/70 ring-1 ring-background/30 ring-inset px-5 tracking-tight py-2 text-md rounded-xl font-semibold text-foreground hover:opacity-80 active:translate-y-1 transition-all duration-500 ease-in-out">
              Get Started
            </button>
          </AnimatedContent>
        </div>
        <div className="w-full h-100 relative overflow-hidden">
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <div className="w-full flex flex-row gap-x-2 border-b border-neutral-700 p-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <img
                src="https://framerusercontent.com/images/kz15kqSmJh1Etr7QP5xoyWcfZU.jpg?width=1066&height=766"
                alt=""
                className="w-full"
              />
            </Card>
            <Card>
              <div className="w-full flex flex-row gap-x-2 border-b border-neutral-700 p-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <img
                src="https://framerusercontent.com/images/kz15kqSmJh1Etr7QP5xoyWcfZU.jpg?width=1066&height=766"
                alt=""
                className="w-full"
              />
            </Card>
            <Card>
              <div className="w-full flex flex-row gap-x-2 border-b border-neutral-700 p-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <img
                src="https://framerusercontent.com/images/kz15kqSmJh1Etr7QP5xoyWcfZU.jpg?width=1066&height=766"
                alt=""
                className="w-full"
              />
            </Card>
          </CardSwap>
        </div>
      </div>
    </>
  );
};

export default Ready;
