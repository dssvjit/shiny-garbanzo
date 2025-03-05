import { CoreTeamList } from "@/lib/lists/team-lists";
import MemberCard from "../team/member-card";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CoreTeam = () => {
  const navigate = useNavigate();

  const handleNavigate = (href: string) => {
    window.scrollTo(0, 0);
    navigate(href);
  };

  return (
    <div className="w-full flex flex-col items-stretch justify-between gap-10">
      <div className="flex flex-col items-center justify-between gap-4">
        <MemberCard
          image={"/assets/images/Spandana.jpg"}
          name={"Yeddanapudi Spandana"}
          description={"DSS Lead"}
        />
        <div className="relative w-full flex flex-wrap justify-center items-center gap-3">
          {CoreTeamList.map((member) => (
            <div className="flex flex-col justify-center items-center">
              <MemberCard
                className="cursor-pointer"
                id={member.id}
                name={member.name}
                image={member.image}
                description={member.position}
              />
              <Button
                onClick={() => handleNavigate(member.href)}
                variant={"link"}
                className="text-md"
              >
                Team
                <ExternalLink />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
