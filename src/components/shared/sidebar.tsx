import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

import Logo from "@/components/shared/logo";
import { Github, Instagram, Linkedin, X } from "lucide-react";
import { NavLists } from "@/lib/lists/nav-lists";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <SheetContent className="p-5">
      <SheetHeader className="border-b border-neutral-200 pb-4">
        <SheetTitle className="flex items-center justify-between h-16 px-2 relative">
          <Logo withText className="h-24 w-24" />
          <SheetClose className="absolute right-2 top-2">
            <X />
          </SheetClose>
        </SheetTitle>
        <SheetDescription className="text-start text-xs px-2">
          We host workshops, hackathons, and mentorship programs to help
          students grow as developers and innovators.
        </SheetDescription>
      </SheetHeader>
      <div className="w-full flex flex-col py-3 px-2">
        <h3 className="text-md px-2 font-semibold text-neutral-800 underline">
          Menu
        </h3>
        <div className="flex flex-col px-2 text-xl p-1 border-b pb-4 text-neutral-800">
          {NavLists.map((navItem, index) => (
            <NavLink
              key={navItem.route}
              to={navItem.route}
              className={cn(
                "transition-colors duration-300 tracking-tighter border-t py-2",
                navItem.route === pathname ? "text-black" : "text-neutral-600",
                index === 0 ? "border-transparent" : "border-neutral-200"
              )}
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col py-3 gap-2 px-2">
        <h3 className="text-md px-2 font-semibold text-neutral-800 underline">
          Community
        </h3>
        <div className="flex gap-5 px-2 text-xl p-1 border-b pb-4">
          <Instagram className="text-neutral-700" />
          <Linkedin className="text-neutral-700" />
          <Github className="text-neutral-700" />
        </div>
      </div>
    </SheetContent>
  );
};

export default Sidebar;
