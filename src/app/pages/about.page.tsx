"use client";

import BranchCard from "@/components/about/branch-card";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useRef } from "react";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const topLeft = useRef<HTMLDivElement>(null);
  const topRigt = useRef<HTMLDivElement>(null);
  const bottomLeft = useRef<HTMLDivElement>(null);
  const bottomRight = useRef<HTMLDivElement>(null);
  const center = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative min-h-svh flex flex-col bg-gradient-to-b from-white to-neutral-100 w-full items-center justify-start pt-32 gap-10"
      ref={containerRef}
    >
      <div className="w-4/5 flex flex-col justify-center items-center">
        <h2 className="text-2xl tracking-tighter font-semibold text-center text-neutral-700">
          {"We are the people who make up".toUpperCase()}
        </h2>
        <h2 className="text-4xl tracking-tighter font-semibold text-center text-neutral-800">
          {"Developer Student Society VJIT".toUpperCase()}
        </h2>
        <p className="text-center text-md text-neutral-600 mt-2 w-4/5">
          Our philosophy is to create a community of developers who are eager to
          learn and grow together. We are a group of students who are passionate
          about technology and are always looking for ways to improve our
          skills.
        </p>
      </div>

      <div className="w-full flex flex-col items-stretch justify-between gap-10">
        <div className="flex flex-col items-center justify-between gap-10">
          <BranchCard className="w-fit" isDss ref={div1Ref} />
          <BranchCard isLead ref={div2Ref} />
          <div
            ref={gridContainerRef}
            className="relative grid grid-cols-2 grid-rows-2 mt-10 w-2/3 gap-x-60 gap-y-14"
          >
            <BranchCard
              isCore
              ref={center}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full p-5"
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
              ref={topRigt}
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
              toRef={center}
            />
            <AnimatedBeam
              duration={10}
              containerRef={gridContainerRef}
              fromRef={topRigt}
              toRef={center}
            />
            <AnimatedBeam
              duration={10}
              containerRef={gridContainerRef}
              fromRef={bottomLeft}
              toRef={center}
            />
            <AnimatedBeam
              duration={10}
              containerRef={gridContainerRef}
              fromRef={bottomRight}
              toRef={center}
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
          toRef={center}
        />
      </div>
    </div>
  );
}

export default AnimatedBeamDemo;
