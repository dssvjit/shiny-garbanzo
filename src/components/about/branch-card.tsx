import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Ellipsis, Linkedin, UserRoundCog } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type BranchCardProps = {
  className?: string;
  isLead?: boolean;
  isDss?: boolean;
  isCore?: boolean;
  position?: "Technical" | "Design" | "Non-Technical" | "PR-OR";
  name?: string;
  branch?: string;
};

const BranchCard = forwardRef<HTMLDivElement, BranchCardProps>(
  (
    { className, isLead = false, position, name, branch, isDss, isCore },
    ref
  ) => {
    let bgPath;
    let bgClass;

    switch (position) {
      case "Design":
        bgPath = "/assets/images/core-bg/design-bg.png";
        bgClass = "w-20 sm:w-60 absolute bottom-0 right-0 rounded-md";
        break;
      case "Technical":
        bgPath = "/assets/images/core-bg/tech-bg.jpg";
        bgClass = "w-11 sm:w-48 absolute bottom-0 right-0 rounded-md";
        break;
      case "Non-Technical":
        bgPath = "/assets/images/core-bg/nontech-bg.jpg";
        bgClass = "w-16 sm:w-52 absolute bottom-0 right-0 rounded-md";
        break;
      case "PR-OR":
        bgPath = "/assets/images/core-bg/pror-bg.png";
        bgClass = "w-16 sm:w-52 absolute bottom-0 right-0 rounded-md";
        break;
    }

    if (isCore) {
      return (
        <div
          ref={ref}
          className={cn(
            "z-20 flex items-center justify-center border bg-white gap-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
            className
          )}
        >
          <UserRoundCog size={15} color="#3f3f3f" />
        </div>
      );
    }

    if (isDss) {
      return (
        <div
          ref={ref}
          className={cn(
            "z-10 w-full flex items-center justify-center rounded-md gap-3 bg-white",
            className
          )}
        >
          <img
            src="/assets/icons/logo.svg"
            alt="LOGO TEXT"
            className="w-20 sm:w-32 p-3"
          />
        </div>
      );
    }

    if (isLead) {
      return (
        <div
          ref={ref}
          className={cn(
            "z-10 flex items-center justify-center gap-2 p-3 sm:gap-3 bg-white",
            className
          )}
        >
          <img
            src="/assets/images/core/Spandana.jpg"
            alt="image"
            className="rounded-md w-24 h-24 sm:h-32 sm:w-32"
          />
          <div className="h-24 flex flex-col justify-center items-start sm:gap-1 rounded-md">
            <div className="flex justify-between items-center w-full">
              <span className="text-xs sm:text-lg font-light text-neutral-800">
                DSS Lead
              </span>
              <div className="flex justify-end items-center -translate-y-1 gap-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/yeddanapudispandana/"
                >
                  <Linkedin className="h-4 w-4" color="#3f3f3f" />{" "}
                </a>
              </div>
            </div>
            <h4 className="text-lg sm:text-2xl font-medium tracking-tighter">
              Yeddanapudi Spandana
            </h4>
            <span className="text-sm font-light text-neutral-800">III CSE</span>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          "z-20 flex flex-col items-start rounded-md  justify-center border bg-white p-3 sm:p-5 gap-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] relative",
          className
        )}
      >
        <img
          src={bgPath}
          alt="Design bg"
          className={cn("hidden md:block", bgClass)}
        />
        <div className="flex justify-between items-start w-full gap-1">
          <img
            src={`/assets/images/core/${position}.jpg`}
            alt="image"
            className="rounded-md w-20 h-20 sm:h-28 sm:w-28"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-wrap justify-end items-center gap-1 p-2 border rounded-md outline-none">
              <Ellipsis className="h-3 w-3 cursor-pointer" color="#3f3f3f" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="-translate-x-2">
              <DropdownMenuLabel>Details</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <a
                href={`/team/${position?.toLocaleLowerCase()}`}
                className="cursor-pointer"
              >
                <DropdownMenuItem>Team</DropdownMenuItem>
              </a>
              <DropdownMenuItem>LinkedIn</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-col justify-center items-start sm:gap-1">
          <span className="text-xs sm:text-lg font-light text-neutral-800">
            {position} Lead
          </span>
          <h4 className="text-md sm:text-2xl font-medium tracking-tighter">
            {name}
          </h4>
          <span className="text-xs sm:text-md font-light text-neutral-500">
            {branch}
          </span>
        </div>
      </div>
    );
  }
);

export default BranchCard;
