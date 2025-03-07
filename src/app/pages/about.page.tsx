import CoreTeam from "@/components/about/core-team";
import { useRef } from "react";

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative min-h-svh flex flex-col w-full items-center justify-start px-5 pt-32 sm:py-14 gap-10"
      ref={containerRef}
    >
      <img
        src="/assets/vectors/team-left.svg"
        alt="SVG LEFT"
        className="absolute top-60 left-0 w-[300px] lg:w-[500px] hidden md:block"
      />
      <img
        src="/assets/vectors/team-right.svg"
        alt="SVG RIGHT"
        className="absolute top-60 right-0 w-[300px] lg:w-[500px] hidden md:block"
      />
      <div className="sm:w-4/5 flex flex-col justify-center items-center">
        <h2 className="text-lg sm:text-3xl tracking-tighter font-semibold text-center text-neutral-800">
          {"We are the people who make up".toUpperCase()}
        </h2>
        <h1 className="text-2xl sm:text-4xl tracking-tighter font-semibold text-center text-neutral-900">
          {"Developer Student Society VJIT".toUpperCase()}
        </h1>
        <p className="text-center text-xs sm:text-lg text-neutral-700 mt-2 sm:w-4/5 font-light tracking-tighter ">
          Our philosophy is to create a community of developers who are eager to
          learn and grow together. We are a group of students who are passionate
          about technology and are always looking for ways to improve our
          skills.
        </p>
      </div>

      <CoreTeam containerRef={containerRef} />
    </div>
  );
}

export default AnimatedBeamDemo;
