import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import React from "react";
import {
  Bolt,
  CircleGraph,
  Earth,
  Medal2,
  Search3,
  Wallet3,
} from "reicon-react";

const Core = () => {
  return (
    <>
      <div className="w-full relative py-10">
        <div className="w-full flex justify-center items-center">
          <div className="px-3 py-1 bg-linear-to-t from-secondary/90 to-secondary/40 tracking-tighter border-secondary flex justify-center items-center gap-2 border-[1.5px] rounded-full text-primary ring-1 ring-background/30 ring-inset text-sm font-semibold">
            Our Core
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 px-10 md:px-20 lg:px-60 z-30 pt-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center"
            delay={0.5}
          >
            What Sets Coinest Apart
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-lg lg:text-xl text-center text-muted"
            delay={0.8}
          >
            We don’t just help you manage money — we empower you with clarity,
            control, and confidence every step of the way.
          </TextAnimate>
        </div>
        <div className="w-full relative grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 px-5 lg:px-14 pt-15 py-10">
          <div className="border border-muted/30 shadow-md shadow-muted/20 relative p-3 rounded-lg text-primary bg-linear-to-tr from-background via-background to-transparent">
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={1}
              duration={3}
              repeatDelay={1}
              className={"absolute inset-0 rounded-lg -z-10"}
            />
            <div className="flex w-full h-full flex-col justify-between items-start">
              <div className="mb-1 p-1">
                <Bolt size={28} weight="Filled" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Its Faaast!</h3>
                <p className="text-md text-muted leading-4">
                  Send and receive money in seconds, not days.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-start-1 relative row-start-2 border border-muted/30 shadow-md shadow-muted/20 p-3 rounded-lg text-primary bg-linear-to-tr from-background via-background to-transparent">
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={1}
              duration={3}
              repeatDelay={1}
              className={"absolute inset-0 rounded-lg -z-10"}
            />
            <div className="flex w-full h-full flex-col justify-between items-start">
              <div className="mb-1 p-1">
                <Earth size={28} weight="Filled" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Global Transfers</h3>
                <p className="text-md text-muted leading-4">
                  Make seamless cross-border payments with ease.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-start-1 md:row-start-3 border border-muted/30 shadow-md shadow-muted/20 relative p-3 rounded-lg text-primary bg-linear-to-tr from-background via-background to-transparent">
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={1}
              duration={3}
              repeatDelay={1}
              className={"absolute inset-0 rounded-lg -z-10"}
            />
            <div className="flex w-full h-full flex-col justify-between items-start">
              <div className="mb-1 p-1">
                <Wallet3 size={28} weight="Filled" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Multi-Currency Wallet</h3>
                <p className="text-md text-muted leading-4">
                  Manage multiple currencies from one simple wallet.
                </p>
              </div>
            </div>
          </div>
          <div className="md:row-span-3 md:col-start-2 md:row-start-1 p-4 flex justify-center items-center">
            <img src="/core-img.svg" alt="" className="object-cover" />
          </div>
          <div className="md:col-start-3 md:row-start-1 border border-muted/30 shadow-md shadow-muted/20 relative p-3 rounded-lg text-primary bg-linear-to-tr from-background via-background to-transparent">
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={1}
              duration={3}
              repeatDelay={1}
              className={"absolute inset-0 rounded-lg -z-10"}
            />
            <div className="flex w-full h-full flex-col justify-between items-start">
              <div className="mb-1 p-1">
                <Search3 size={28} weight="Filled" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Real-Time Tracking</h3>
                <p className="text-md text-muted leading-4">
                  Track every transaction with instant status updates.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-start-3 md:row-start-2 border border-muted/30 shadow-md shadow-muted/20 relative p-3 rounded-lg text-primary bg-linear-to-tr from-background via-background to-transparent">
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={1}
              duration={3}
              repeatDelay={1}
              className={"absolute inset-0 rounded-lg -z-10"}
            />
            <div className="flex w-full h-full flex-col justify-between items-start">
              <div className="mb-1 p-1">
                <Medal2 size={28} weight="Filled" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bank-Grade Security</h3>
                <p className="text-md text-muted leading-4">
                  Keep your money and data protected with advanced security.
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-start-3 md:row-start-3 border border-muted/30 shadow-md shadow-muted/20 relative p-3 rounded-lg text-primary bg-linear-to-tr from-background via-background to-transparent">
            <AnimatedGridPattern
              numSquares={20}
              maxOpacity={1}
              duration={3}
              repeatDelay={1}
              className={"absolute inset-0 rounded-lg -z-10"}
            />
            <div className="flex w-full h-full flex-col justify-between items-start">
              <div className="mb-1 p-1">
                <CircleGraph size={28} weight="Filled" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Smart Payment Insights
                </h3>
                <p className="text-md text-muted leading-4">
                  Get clear insights into your spending and transaction
                  activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Core;
