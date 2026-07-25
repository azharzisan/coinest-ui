import BackBoneBlock from "@/components/BackBoneBlock";
import { useEffect, useRef } from "react";

export default function Backbone() {
  const containerRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  const targetX = useRef(0);
  const currentX = useRef(0);

  const BORDER_WIDTH = 250;

  useEffect(() => {
    const container = containerRef.current;

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();

      // Mouse position relative to container
      targetX.current = e.clientX - rect.left;
    };

    const handleLeave = () => {
      // Optional: return to center
      targetX.current = BORDER_WIDTH / 2;
    };

    container.addEventListener("mousemove", handleMove);
    container.addEventListener("mouseleave", handleLeave);

    let frame;

    const animate = () => {
      currentX.current += (targetX.current - currentX.current) * 0.12;

      const containerWidth = container.clientWidth;

      // Center the bar on cursor
      let left = currentX.current - BORDER_WIDTH / 2;

      // Clamp inside container
      left = Math.max(0, Math.min(left, containerWidth - BORDER_WIDTH));

      if (topRef.current) {
        topRef.current.style.left = `${left}px`;
      }

      if (bottomRef.current) {
        bottomRef.current.style.left = `${left}px`;
      }

      frame = requestAnimationFrame(animate);
    };

    // Start from center
    targetX.current = container.clientWidth / 2;
    currentX.current = targetX.current;

    animate();

    return () => {
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="px-6">
      <div className="border-x border-neutral-300">
        <h2 className="pb-10 text-center text-secondary text-5xl font-bold">
          The backbone
          <br />
          of global commerce
        </h2>

        <div
          ref={containerRef}
          className="relative flex h-full items-center justify-center border-y border-neutral-300 overflow-hidden"
        >
          {/* Animated top border */}
          <div
            ref={topRef}
            className="absolute top-0 left-0 h-0.5 bg-linear-to-r from-transparent via-secondary to-transparent"
            style={{ width: BORDER_WIDTH }}
          />

          {/* Animated bottom border */}
          <div
            ref={bottomRef}
            className="absolute bottom-0 left-0 h-0.5 bg-linear-r from-transparent via-secondary to-transparent"
            style={{ width: BORDER_WIDTH }}
          />

          <div className="grid w-full grid-cols-4">
            <BackBoneBlock
              num={"135+"}
              desc={"currencies and payment methods supported"}
            />
            <BackBoneBlock
              num={"$19tn"}
              desc={"in payments volume processed in 2025"}
            />
            <BackBoneBlock
              num={"99.999%"}
              desc={"historical uptime for Stripe services"}
            />
            <BackBoneBlock
              num={"200m+"}
              desc={"active subscriptions managed on Stripe Billing"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
