import BackBoneBlock from "@/components/BackBoneBlock";
import TargetCursor from "@/components/TargetCursor";
import { useRef } from "react";

export default function Backbone() {
  return (
    <div className="w-full px-6 pt-6">
      <div className="w-full border-x border-neutral-300">
        <h2 className="w-full pb-14 text-center text-secondary text-4xl md:text-5xl font-bold">
          The backbone
          <br />
          of global commerce
        </h2>

        <div className="grid w-full h-full overflow-hidden relative grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-neutral-300 cursor-none p-2">
          <TargetCursor
            spinDuration={2}
            hideDefaultCursor
            parallaxOn
            hoverDuration={0.2}
            cursorColor="var(--color-secondary)"
            cursorColorOnTarget="var(--color-secondary)"
          />
          <div className="cursor-target">
            <BackBoneBlock
              num={"135+"}
              desc={"currencies and payment methods supported"}
            />
          </div>
          <div className="cursor-target">
            <BackBoneBlock
              num={"$19tn"}
              desc={"in payments volume processed in 2025"}
            />
          </div>
          <div className="cursor-target">
            <BackBoneBlock
              num={"99.999%"}
              desc={"historical uptime for Stripe services"}
            />
          </div>
          <div className="cursor-target">
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
