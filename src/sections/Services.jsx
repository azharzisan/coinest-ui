import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";
import { BitcoinCircle, Card, Docs, Mobile, Subtitles } from "reicon-react";

const Services = () => {
  return (
    <>
      <div className="border-t border-neutral-300">
        <div className="w-full px-6 py-20">
          <TextAnimate
            animation="blurInUp"
            by="word"
            once
            className="text-2xl lg:text-3xl font-semibold text-secondary"
          >
            Flexible solutions for every business model.
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="word"
            once
            className="text-2xl lg:text-3xl font-semibold text-excep-dark md:pr-10"
          >
            Grow your business with a comprehensive set of payments and
            financial tools designed to work individually or together.
          </TextAnimate>
        </div>

        <div className="w-full px-6 border-t border-neutral-300">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto border-x border-neutral-300 border-b">
            <div className="w-full h-full p-3 flex flex-col gap-4 border-b border-dashed md:border-r lg:border-b-0 border-neutral-300">
              <div className="">
                <Mobile size={24} color="var(--color-excep-dark)" />
              </div>
              <p className="text-lg text-secondary leading-5">
                Accept and optimise payments globally, online and in person with
                ease
              </p>
              <video
                src="https://videos.stripeassets.com/fzn2n1nzq965/4jrlQ5exP5KRjenpdXFNfU/78465530670e4d2154f2772e453fc167/Terminal_S700_English__UK__Full.mp4"
                muted
                autoPlay
                loop
                className="w-full h-60 rounded-lg object-cover"
              ></video>
            </div>
            <div className="w-full h-full p-3 flex flex-col gap-4 border-b border-dashed lg:border-b-0 lg:border-r border-neutral-300">
              <div className="">
                <Docs size={24} color="var(--color-excep-dark)" />
              </div>
              <p className="text-lg text-secondary leading-5">
                Enable any billing model whether for saas, paltform or
                marketplace
              </p>
              <video
                src="https://cdn.prod.website-files.com/680f1cad5b3e38ffb725a94a%2F69a8238974e504ad958240dd_CZupd_mp4.mp4"
                muted
                autoPlay
                loop
                className="w-full h-60 rounded-lg object-cover"
              ></video>
            </div>
            <div className="w-full h-full p-3 flex flex-col gap-4 border-b border-dashed md:border-b-0 md:border-r border-neutral-300">
              <div className="">
                <Card size={24} color="var(--color-excep-dark)" />
              </div>
              <p className="text-lg text-secondary leading-5">
                Create a card issuing program for your services and loyality
                programs
              </p>
              <video
                src="https://video-previews.elements.envatousercontent.com/h264-video-previews/411872ef-5a50-4908-b349-019a405d043c/10915957.mp4"
                muted
                autoPlay
                loop
                className="w-full h-60 rounded-lg object-cover"
              ></video>
            </div>
            <div className="w-full h-full p-3 flex flex-col gap-4 border-b md:border-b-0 border-dashed border-neutral-300">
              <div className="">
                <BitcoinCircle size={24} color="var(--color-excep-dark)" />
              </div>
              <p className="text-lg text-secondary leading-5">
                Access borderless money movement with stablecoins and crypto
              </p>
              <video
                src="https://cdn.dribbble.com/userupload/47510250/file/9a76fea0441f58707d4ac78fcd3b83e1.mp4"
                muted
                autoPlay
                loop
                className="w-full h-60 rounded-lg object-cover"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
