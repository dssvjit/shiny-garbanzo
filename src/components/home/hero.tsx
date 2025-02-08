const HeroSection = () => {
  return (
    <div className="relative w-full flex flex-col justify-center items-center h-svh md:py-16 md:mb-10">
      <img
        src="/event.svg"
        alt="EVENT"
        className="absolute -z-[1] w-[200px] h[200px] md:w-[400px] md:h-[400px] top-[60px] right-0"
      />
      <img
        src="/note.svg"
        alt="NOTE"
        className="absolute -z-[1] w-[170px] h[170px] md:w-[400px] md:h-[400px] bottom-0 left-0"
      />
      <div className="flex flex-col justify-center items-center md:mt-20 z-10">
        <div className="border border-neutral-400 rounded-lg p-[2px] px-3 bg-white shadow-sm">
          <h1 className="text-[9px] md:text-xs text-center">
            For the Students ✨ By the students
          </h1>
        </div>
        <img
          src="/hero.svg"
          alt="HERO SECTION"
          className="pointer-events-none w-[280px] h-[280px] md:w-[430px] md:h-[430px]"
        />
        <span className="w-60 md:w-80 text-xs md:text-lg text-center text-neutral-800">
          A community Empowering Student Developers{" "}
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
