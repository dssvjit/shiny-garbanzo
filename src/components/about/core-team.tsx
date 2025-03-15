import { CoreTeamList } from "@/lib/lists/team-lists";
import MemberCard from "../team/member-card";
import { Instagram, Linkedin, Users } from "lucide-react";
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
        <div className="flex flex-col justify-center items-center">
          <MemberCard
            image={"https://i.imgur.com/jqGHWUF.jpeg"}
            name={"Yeddanapudi Spandana"}
            description={"DSS Lead"}
          />
          <div className="flex justify-center items-center gap-3 my-2">
            <a
              href="https://www.linkedin.com/in/yeddanapudispandana/"
              target="_blank"
            >
              <Linkedin className="size-5 cursor-pointer hover:border-b hover:border-neutral-800" />
            </a>
            <a
              href="https://www.instagram.com/spandanayeddanapudi/"
              target="_blank"
            >
              <Instagram className="size-5 cursor-pointer hover:border-b hover:border-neutral-800" />
            </a>
          </div>
        </div>
        <div className="relative w-full flex flex-wrap justify-center items-center gap-4 gap-y-5">
          {CoreTeamList.map((member) => (
            <div className="flex flex-col justify-center items-center">
              <MemberCard
                className="cursor-pointer"
                id={member.id}
                name={member.name}
                image={member.image}
                description={member.position}
              />
              <div className="flex justify-center items-center gap-3 my-2">
                <a href={member.linkedin} target="_blank">
                  <Linkedin className="size-5 cursor-pointer hover:border-b hover:border-neutral-800" />
                </a>
                <a href={member.instagram} target="_blank">
                  <Instagram className="size-5 cursor-pointer hover:border-b hover:border-neutral-800" />
                </a>
                <Users
                  onClick={() => handleNavigate(member.href)}
                  className="size-5 cursor-pointer hover:border-b hover:border-neutral-800"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTeam;
