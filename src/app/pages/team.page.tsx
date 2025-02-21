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
    <section className="min-h-svh flex flex-col justify-center items-center px-5 gap-2 py-10 sm:pb-20 pt-24 sm:pt-8">
      <div className="flex flex-col justify-center items-center my-5">
        <h2 className="text-3xl sm:text-[2.5rem] text-center text-neutral-800 tracking-tighter font-semibold">
          {TeamContentList[domain].title}
          <br />
        </h2>
        <p className="text-md sm:text-xl lg:w-5/6 tracking-tighter font-light text-center text-neutral-700 mt-2">
          {TeamContentList[domain].description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-4">
          <img
            src={TeamContentList[domain].leadImage}
            alt={domain}
            className="w-48 md:w-40 rounded-md"
          />
          <div className="h-32 md:h-40 flex flex-col justify-center items-center md:items-start gap-1 md:gap-3 ">
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="text-sm md:text-base text-neutral-700 tracking-tighter">
                {TeamContentList[domain].position} Lead
              </span>
              <h5 className="text-2xl text-neutral-700 tracking-tighter font-semibold">
                {TeamContentList[domain].name}
              </h5>
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="text-sm md:text-base text-neutral-700 tracking-tighter">
                {TeamContentList[domain].position} Team
              </span>
              <h3 className="text-lg text-neutral-700 tracking-tight font-semibold">
                {TeamContentList[domain].team.length} Members
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-7 mt-6">
          {TeamContentList[domain].team.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-center items-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-64 h-64 md:w-52 md:h-52 rounded-md"
              />
              <h5 className="text-xl text-neutral-700 tracking-tighter font-semibold mt-1">
                {member.name}
              </h5>
              <span className="text-xs md:text-base text-neutral-700 tracking-tighter font-light">
                {member.year} {member.branch}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
