import AccordionGallery from "@/components/AccordionGallery";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const Sessions = () => {
    const items = [
      {
        image:
          "https://img.magnific.com/free-photo/online-radio-talk-show-host-pausing-conversation-with-guest-answer-live-call-from-listener-home-studio-closeup-man-recording-podcast-using-professional-audio-equipment-microphone_482257-48492.jpg",
        label: "Updates",
        link: "#",
      },
      {
        image: "https://s321.ae/wp-content/uploads/2025/05/1.1-1.webp",
        label: "Session",
        link: "#",
      },
      {
        image:
          "https://media.istockphoto.com/id/2191212366/photo/people-talking-during-a-podcast-at-studio.jpg?s=612x612&w=0&k=20&c=etjbG6Lry2_0qshtUjtxc0FDC6KYm7ig2KRtm2IxuBc=",
        label: "Guidelines",
        link: "#",
      },
      {
        image:
          "https://images-cdn.castos.com/2023/07/4-Person-Podcast-Setup.jpg",
        label: "Finances",
        link: "#",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzfP_W5t60z8tEsCOcC8OoOH_LOdU7017R0yPl_Jf7k6_IRxssSJ-7iRz&s=10",
        label: "Management",
        link: "#",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYLKTEiKlzOuCiQyUHPYZFQW0IVLsYd-n7FYGGyGbLyNMTJWZyGNEGs3yY&s=10",
        label: "Developers",
        link: "#",
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5J2FsYQGVcT57bdwtGrqymCbdH94XtZEqnAXNUbSYpbO9ljp_AMqkM6KY&s=10",
        label: "Events",
        link: "#",
      },
    ];
  return (
    <>
      <div className="w-full relative pb-10">
        <div className="w-full flex justify-center items-center">
          <div className="px-3 py-1 bg-linear-to-t from-secondary/90 to-secondary/40 tracking-tighter border-secondary flex justify-center items-center gap-2 border-[1.5px] rounded-full text-primary ring-1 ring-background/30 ring-inset text-sm font-semibold">
            Coinest Sessions
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 px-60 z-30 pt-8">
          <TextAnimate
            animation="slideUp"
            by="word"
            className="text-5xl text-primary font-semibold text-center"
            delay={0.5}
          >
            From Budget Tips to Investment Insights
          </TextAnimate>
          <TextAnimate
            animation="fadeIn"
            by="line"
            as="p"
            className="text-xl text-center text-muted"
            delay={0.8}
          >
            Stay informed with expert articles and real-time updates.
          </TextAnimate>
        </div>
        <div className="w-full relative px-20 py-10">
          <AccordionGallery
            items={items}
            defaultIndex={2}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#ffffff"
            overlayColor="#060010"
            textColor="#ffffff"
            grayscale
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={0}
            stagger={0.06}
            height={460}
            gap={10}
            radius={16}
            orientation="horizontal"
          />
        </div>
      </div>
    </>
  );
};

export default Sessions;
