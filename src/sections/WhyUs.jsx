import GradientWaves from "@/components/GradientWaves";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const WhyUs = () => {
  return (
    <>
      <div className="w-full relative py-20 px-14 bg-secondary">
        <GradientWaves
          horizonColor="#1E4942"
          waveColor="#1E4942"
          crestColor="#1E4942"
          speed={0.4}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.05}
          className="z-10"
        />
        <div className="w-full flex justify-center items-center">
          <div className="px-3 py-1 bg-linear-to-t from-primary/90 to-primary/40 tracking-tighter border-primary flex justify-center items-center gap-2 border-[1.5px] rounded-full text-background ring-1 ring-background/30 ring-inset text-sm font-semibold">
            Why Us?
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 px-0 md:px-10 lg:px-60 z-30 pt-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center"
            delay={0.5}
          >
            Confidence Backed by Performance
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-lg lg:text-xl text-center text-foreground"
            delay={0.8}
          >
            Powering smarter financial decisions for individuals and businesses
            around the globe backed by real
          </TextAnimate>
        </div>
        <div className="w-full flex justify-around items-center flex-col md:flex-row gap-10 md:gap-0 pt-20">
          <div className="w-full flex justify-center items-center flex-col gap-0 md:gap-2">
            <div className="w-full flex justify-center items-center text-6xl lg:text-7xl">
              <p>$</p>
              <NumberTicker
                value={125}
                className="font-medium tracking-tight whitespace-pre-wrap text-black dark:text-white"
              />
              <p>m+</p>
            </div>
            <h6 className="text-lg lg:text-xl font-semibold">Transfered using Coinest</h6>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-0 md:gap-2">
            <div className="w-full flex justify-center items-center text-6xl lg:text-7xl">
              <NumberTicker
                value={92}
                className="font-medium tracking-tight whitespace-pre-wrap text-black dark:text-white"
              />
              <p>%</p>
            </div>
            <h6 className="text-lg lg:text-xl font-semibold">Current Uptime</h6>
          </div>
          <div className="w-full flex justify-center items-center flex-col gap-0 md:gap-2">
            <div className="w-full flex justify-center items-center text-6xl lg:text-7xl">
              <NumberTicker
                value={1.5}
                decimalPlaces={1}
                className="font-medium tracking-tight whitespace-pre-wrap text-black dark:text-white"
              />
              <p>m+</p>
            </div>
            <h6 className="text-lg lg:text-xl font-semibold">Transactions</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
