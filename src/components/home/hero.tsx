import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

const HeroSection = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center h-svh px-3 py-24 sm:py-12">
      <img
        src="/assets/vectors/vjitcrane.svg"
        alt="VJIT"
        className="absolute right-0 top-48 hidden lg:block"
      />
      <img
        src="/assets/vectors/heroteam.svg"
        alt="EVENT"
        className="absolute -z-[1] w-full bottom-0 hidden sm:block"
      />
      <img
        src="/assets/vectors/heroteam-mobile.svg"
        alt="EVENT"
        className="absolute -z-[1] w-full bottom-0 sm:hidden"
      />

      <div className="flex flex-col justify-center items-center gap-4 -translate-y-36 sm:-translate-y-24 md:-translate-y-36 lg:-translate-y-56">
        <div className="flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-neutral-300 bg-neutral-50 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 hover:border-neutral-400"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-3 transition ease-out text-neutral-700 hover:text-neutral-900 hover:duration-300">
              <span className="text-[9px] sm:text-xs">
                For the Students ✨ By the Students
              </span>
            </AnimatedShinyText>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-[2.5rem] text-center text-neutral-800 tracking-tighter font-semibold">
            {"A community Empowering Student".toUpperCase()}
            <br />
            {"Developers".toUpperCase()}
          </h2>
          <p className="text-sm sm:text-lg tracking-tighter font-light text-center text-neutral-600 mt-2">
            DSS at VJIT College is a thriving community of developers,
            designers, and tech enthusiasts who collaborate to learn,
            <br />
            build, and grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
