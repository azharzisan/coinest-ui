import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";
import React from "react";
import { ArrowRight, ArrowRightUp, Safe } from "reicon-react";

const Hero = () => {
  return (
    <>
      <div className="w-full h-screen relative flex justify-center items-center flex-col gap-6 bg-primary border-b border-neutral-300">
        <BlurFade delay={0.25} inView className={"z-30"}>
          <ShimmerButton>
            Introducing Orchestration{" "}
            <Safe size={18} color="var(--color-secondary)" />
          </ShimmerButton>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView className={"z-30"}>
          <h2 className="text-4xl md:text-5xl text-center font-bold text-secondary z-30">
            It's time for agentic payment system.
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 3} inView className={"z-30"}>
          <p className="w-full px-10 lg:px-70 text-center text-excep-dark text-lg md:text-xl z-30">
            Circle Pay is the payment system that automates pipeline, advances
            billing and grows accounts around the clock.
          </p>
        </BlurFade>
        <BlurFade delay={0.25 * 4} inView className={"z-30"}>
          <div className="flex justify-center items-center gap-4 z-30">
            <button className="px-3 py-1 bg-primary hover:bg-neutral-200 border border-secondary rounded-lg text-secondary cursor-pointer">
              <a href="">Talk to sales</a>
            </button>
            <button className="px-3 py-1 bg-secondary rounded-lg text-primary cursor-pointer">
              <a href="">Start for free</a>
            </button>
          </div>
        </BlurFade>

        <div className="w-full h-full absolute top-0 left-0 z-25 bg-linear-to-t from-transparent via-primary to-primary"></div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={1}
          repeatDelay={1}
          className={cn("h-full w-full absolute bottom-0 left-0 z-20 pt-2")}
        />
      </div>

      <div className="w-full px-6">
        <div className="w-full text-center border-x border-b border-neutral-300">
          <p className="text-sm md:text-lg font-semibold text-excep-dark py-2">
            Trusted by 70% of Fortune 500
          </p>
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-2 lg:flex lg:justify-center lg:items-center border-x border-neutral-300">
          <div className="w-full flex justify-center items-center py-5 relative border-r border-b border-neutral-300 lg:border-b-0">
            <ArrowRightUp
              size={20}
              className="absolute top-2 right-2 text-secondary"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 222"
              className="size-6 lg:size-10"
              fill="var(--color-excep-dark)"
            >
              <path d="m128 0l128 221.705H0z" />
            </svg>
          </div>

          <div className="w-full flex justify-center items-center py-5 border-b border-neutral-300 lg:border-b-0 lg:border-r">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 lg:size-10"
              viewBox="0 0 256 250"
            >
              <path
                fill="var(--color-excep-dark)"
                d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0m-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931m6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66m4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08m7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27m9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622m10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868m10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403"
              />
            </svg>
          </div>

          <div className="w-full flex justify-center items-center py-5 relative border-r border-neutral-300">
            <ArrowRightUp
              size={20}
              className="absolute top-2 right-2 text-secondary"
            />
            <svg
              fill="var(--color-excep-dark)"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 lg:size-10"
            >
              <path d="m5.99,1.62a8.54,8.54 0 0 0 -2.54,6.83c0.35,4.4 4.51,7.99 8.28,7.99c3.5,0 4.88,-3.06 4.54,-5.14a4.32,4.32 0 0 0 -0.95,-2.07c0.63,0.34 1.24,0.77 1.81,1.3c1.52,1.41 2.44,3.23 2.58,5.1c0.33,4.13 -2.73,8.37 -7.85,8.37c-1.69,0 -3.48,-0.43 -4.98,-1.14c-4.06,-1.92 -6.88,-6.06 -6.88,-10.86c0,-4.43 2.41,-8.3 5.99,-10.38zm6.15,-1.62c1.69,0 3.48,0.43 4.98,1.14a12,12 0 0 1 6.88,10.86c0,4.43 -2.41,8.3 -5.99,10.38a8.54,8.54 0 0 0 2.54,-6.83c-0.35,-4.4 -4.51,-7.99 -8.28,-7.99c-3.5,0 -4.88,3.06 -4.54,5.14a4.3,4.3 0 0 0 0.96,2.07a8.72,8.72 0 0 1 -1.81,-1.3c-1.52,-1.41 -2.44,-3.23 -2.59,-5.1c-0.33,-4.13 2.73,-8.37 7.85,-8.37z" />
            </svg>
          </div>

          <div className="w-full flex justify-center items-center py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 lg:size-10"
              viewBox="0 0 256 176"
            >
              <path
                fill="var(--color-excep-dark)"
                d="m147.487 0l70.081 175.78H256L185.919 0zM66.183 106.221l23.98-61.774l23.98 61.774zM70.07 0L0 175.78h39.18l14.33-36.914h73.308l14.328 36.914h39.179L110.255 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
