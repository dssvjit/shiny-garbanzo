import CoreTeam from "@/components/about/core-team";

export function AboutPage() {
  return (
    <div className="flex flex-col w-full items-center justify-center px-5 gap-5 py-5 pt-20 sm:pt-6 sm:py-8 pb-8">
      <div className="sm:w-4/5 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-[2.5rem] text-center text-neutral-800 tracking-tighter font-semibold">
            {"Developers Student Society"}
            <br />
          </h2>
          <p className="text-md sm:text-xl lg:w-5/6 tracking-tighter font-light text-center text-neutral-700 mt-2">
            Our philosophy is to create a community of developers who are eager
            to learn and grow together. We are a group of students who are
            passionate about technology and are always looking for ways to
            improve our skills.
          </p>
        </div>
      </div>

      <CoreTeam />
    </div>
  );
}

export default AboutPage;
