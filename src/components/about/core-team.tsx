import { useRef } from "react";
import BranchCard from "./branch-card";
import { AnimatedBeam } from "../magicui/animated-beam";

interface CoreTeamProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

const CoreTeam = ({ containerRef }: CoreTeamProps) => {
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const topLeft = useRef<HTMLDivElement>(null);
  const topRight = useRef<HTMLDivElement>(null);
  const bottomLeft = useRef<HTMLDivElement>(null);
  const bottomRight = useRef<HTMLDivElement>(null);
  const center1 = useRef<HTMLDivElement>(null);
  const center2 = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full flex flex-col items-stretch justify-between px-5 gap-10 mb-20 z-50">
      <div className="flex flex-col items-center justify-between gap-10">
        <BranchCard className="w-fit" isDss ref={div1Ref} />
        <BranchCard isLead ref={div2Ref} />
        <div
          ref={gridContainerRef}
          className="coreteam overflow-hidden relative grid grid-cols-2 grid-rows-2 mt-10 w-full gap-4 gap-y-5 sm:gap-16 lg:gap-x-40 lg:gap-y-14 py-20 md:px-20"
        >
          <BranchCard
            isCore
            ref={center1}
            className="w-14 h-14 lg:w-20 lg:h-20 rounded-full absolute top-0 lg:top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-1/2"
          />
          <BranchCard
            isCore
            ref={center2}
            className="lg:hidden w-14 h-14 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"
          />
          <BranchCard
            name="Kaushik Katikala"
            branch="III CSE"
            position="Technical"
            ref={topLeft}
          />
          <BranchCard
            name="Abdus Samee"
            branch="III CSE"
            position="PR-OR"
            ref={topRight}
          />
          <BranchCard
            name="Harshith Pilli"
            branch="III IT"
            position="Non-Technical"
            ref={bottomLeft}
          />
          <BranchCard
            name="Hima Bala"
            branch="III CSE"
            position="Design"
            ref={bottomRight}
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={topLeft}
            toRef={center1}
            curvature={150}
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={topRight}
            toRef={center1}
            curvature={150}
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={bottomLeft}
            toRef={center1}
            curvature={-150}
            className="hidden lg:block"
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={bottomRight}
            toRef={center1}
            curvature={-150}
            className="hidden lg:block"
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={bottomLeft}
            toRef={center2}
            curvature={-150}
            className="lg:hidden block"
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={bottomRight}
            toRef={center2}
            curvature={-150}
            className="lg:hidden block"
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={bottomRight}
            toRef={topRight}
            curvature={-150}
            className="lg:hidden block"
          />
          <AnimatedBeam
            duration={10}
            containerRef={gridContainerRef}
            fromRef={bottomLeft}
            toRef={topLeft}
            curvature={-150}
            className="lg:hidden block"
          />
        </div>
      </div>
      <AnimatedBeam
        duration={10}
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
      />
      <AnimatedBeam
        duration={10}
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={center1}
      />
      <AnimatedBeam
        duration={10}
        containerRef={containerRef}
        fromRef={center1}
        toRef={center2}
        className="lg:hidden block"
      />
    </div>
  );
};

export default CoreTeam;
