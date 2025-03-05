import { TeamContentList } from "@/lib/lists/team-lists";
import MemberCard from "./member-card";

type MembersPropsType = {
  domain: "technical" | "design" | "non-technical" | "pr-or";
};

function Members({ domain }: MembersPropsType) {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <div className="flex justify-center items-center gap-4">
        <img
          src={TeamContentList[domain].leadImage}
          alt={domain}
          className="w-32 md:w-40 rounded-md"
        />
        <div className="h-32 md:h-40 flex flex-col justify-center items-start md:gap-3">
          <div className="flex flex-col justify-center items-start">
            <p className="text-sm md:text-base text-neutral-700 tracking-tighter">
              {TeamContentList[domain].position} Lead
            </p>
            <h5 className="text-xl md:text-2xl text-neutral-700 tracking-tighter font-semibold">
              {TeamContentList[domain].name}
            </h5>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h5 className="text-sm md:text-base text-neutral-700 tracking-tighter">
              {TeamContentList[domain].position} Team
            </h5>
            <p className="text-lg text-neutral-700 tracking-tight font-semibold">
              {TeamContentList[domain].team.length} Members
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center items-center gap-3 mt-6">
        {TeamContentList[domain].team.map((member) => (
          <MemberCard
            id={member.id}
            image={member.image}
            name={member.name}
            description={`${member.branch} ${member.year}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Members;
