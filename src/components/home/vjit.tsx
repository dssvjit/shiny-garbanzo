const VjitSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-3 py-16 px-3 bg-stone-100/30 border-y border-y-neutral-300 ">
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-2xl md:text-4xl font-bold text-neutral-800 text-center">
            {"VJIT’s Gateway to  Technology".toUpperCase()}
          </h3>
          <span className="text-sm md:text-lg w-4/5 text-neutral-600 font-semibold text-center">
            Empowering Innovators at Vidya Jyothi Institute of Technology (VJIT)
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="bg-white rounded-lg shadow-lg border">
            <img
              src="/vjit.svg"
              alt="VJIT"
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
            />
          </div>
          <p className="text-md md:text-xl w-5/6 md:w-2/3 text-neutral-700 text-center">
            DSS at VJIT College is a thriving community of developers,
            designers, and tech enthusiasts who collaborate to learn, build, and
            grow together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VjitSection;
