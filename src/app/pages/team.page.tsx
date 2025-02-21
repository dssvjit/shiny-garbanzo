import { TeamContentList } from "@/lib/lists/team-lists";
import { useParams } from "react-router-dom";

type Domain = "technical" | "design" | "non-technical" | "pr-or";

const TeamPage = () => {
  const { domain } = useParams<{ domain: Domain }>();

  if (!domain) {
    return;
  }

  if (!TeamContentList[domain]) {
    return <h1>Invalid Domain</h1>;
  }

  return (
    <section className="w-full min-h-svh flex flex-col justify-center items-start px-5 gap-4 sm:gap-7 py-10 sm:pb-20 pt-24 sm:pt-8">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl text-center text-neutral-800 tracking-tighter font-semibold">
          {TeamContentList[domain].title}
          <br />
        </h2>
        <p className="text-md sm:text-xl lg:w-5/6 tracking-tighter font-light text-center text-neutral-700 mt-2">
          {TeamContentList[domain].description}
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <h4 className="text-2xl text-neutral-700 tracking-tighter font-semibold">
            Meet our {TeamContentList[domain].position} Lead
          </h4>
          <img
            src={TeamContentList[domain].leadImage}
            alt={domain}
            className="w-36 lg:w-40 rounded-md"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <h5 className="text-xl text-center text-neutral-700 tracking-tighter font-semibold">
            Introducing Our {TeamContentList[domain].position} Team Members
          </h5>
          <div className="w-full flex flex-wrap justify-center items-center gap-2">
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
            <div className="p-3 h-40 md:w-60 w-40 md:h-60 bg-neutral-200">
              hi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
