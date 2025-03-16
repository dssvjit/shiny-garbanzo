import Members from "@/components/team/members";
import { Button } from "@/components/ui/button";
import { TeamContentList } from "@/lib/lists/team-lists";
import { ChevronLeft } from "lucide-react";
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
    <section className="relative flex flex-col justify-center items-center px-5 gap-2 py-14 pt-20 sm:pt-10">
      <Button
        variant={"link"}
        onClick={() => window.history.back()}
        className="absolute top-0 left-0 mt-2 ml-2"
      >
        <ChevronLeft />
        Back
      </Button>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-[2.5rem] text-center text-neutral-800 tracking-tighter font-semibold">
          {TeamContentList[domain].title}
          <br />
        </h2>
        <p className="text-md sm:text-xl lg:w-5/6 tracking-tighter font-light text-center text-neutral-700 mt-2">
          {TeamContentList[domain].description}
        </p>
      </div>
      <Members domain={domain} />
    </section>
  );
};

export default TeamPage;
