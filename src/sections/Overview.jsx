import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";
import DriftWall from "@/components/DriftWall";
import AnimatedContent from "@/components/ui/AnimatedContent";
import Button from "@/components/ui/Button";

const Overview = () => {
  const items = [
    {
      image:
        "https://cdn.dribbble.com/userupload/18926507/file/original-a16c4c2967229fa52683443ee0c26903.png?resize=2048x1536&vertical=center",
      title: "Peaks",
      href: "https://example.com/one",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/39907630/file/original-592f0a3353554842307330694d1df9f5.png?resize=2048x1536&vertical=center",
      title: "Pup",
      href: "https://example.com/two",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/40707505/file/original-b32a43d30f48dc875a18915fa7da4ec0.png?resize=1504x1128&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/17835899/file/original-abe494fd8c4a11a21b2be9148b9843d6.png?resize=2048x1534&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/40707505/file/original-b32a43d30f48dc875a18915fa7da4ec0.png?resize=1504x1128&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/17835899/file/original-abe494fd8c4a11a21b2be9148b9843d6.png?resize=2048x1534&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/37339002/file/original-035803eddc397853173eb8b1f18111c3.png?resize=1200x900&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/17835899/file/original-abe494fd8c4a11a21b2be9148b9843d6.png?resize=2048x1534&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/37339002/file/original-035803eddc397853173eb8b1f18111c3.png?resize=1200x900&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/16719718/file/original-d3a8e665105232bd0a8fae8d4413182c.png?resize=1976x1482&vertical=center",
      title: "Falls",
      href: "https://example.com/three",
    },
  ];

  return (
    <>
      <div className="w-full relative">
        <div className="w-full flex justify-center items-center">
          <div className="px-3 py-1 bg-linear-to-t from-secondary/90 to-secondary/40 tracking-tighter border-secondary flex justify-center items-center gap-2 border-[1.5px] rounded-full text-primary ring-1 ring-background/30 ring-inset text-sm font-semibold">
            The Analytics
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 px-10 md:px-20 lg:px-60 z-30 pt-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold text-center leading-8 md:leading-none"
            delay={0.5}
          >
            Discover The Power of Real-Time Financial Insights
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-lg md:text-xl text-center text-muted"
            delay={0.8}
          >
            Stay ahead of your financial goals with intelligent tools that
            track, analyze, and simplify your daily money decisions.
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
            className="pt-3 flex justify-center items-center flex-col"
          >
            <Button text={"Try now"} />
            <p className="text-center text-muted text-xs pt-1">
              *You will love it!
            </p>
          </AnimatedContent>
        </div>
        <div className="w-full relative h-100">
          <DriftWall
            items={items}
            columns={5}
            tileWidth={200}
            tileHeight={132}
            gap={18}
            tilt={16}
            turn={-14}
            perspective={1200}
            depth={120}
            speed={42}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0.6}
            dim={0.55}
            overlayColor="#060010"
            radius={8}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
          />
        </div>
      </div>
    </>
  );
};

export default Overview;
