import { NavLists } from "@/lib/lists/nav-lists";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";

const FooterSection = () => {
  const { pathname } = useLocation();
  return (
    <footer className="w-full relative flex flex-col justify-center items-center py-10 border-t border-t-neutral-300">
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src="/assets/icons/logo-text.svg"
          alt="LOGO TEXT"
          className="w-40 md:w-60"
        />
        <span className="text-xs md:text-[14px] w-4/5 text-neutral-500 text-center">
          DSS VJIT is more than just a club, it’s a thriving ecosystem where
          students grow, innovate, and transform into future tech leaders!
        </span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3 py-5 px-10">
        {NavLists.map((navItem) => (
          <NavLink
            to={navItem.route}
            className={cn(
              "text-lg text-neutral-600",
              navItem.route === pathname
                ? "text-neutral-900"
                : "text-neutral-600"
            )}
          >
            {navItem.name}
          </NavLink>
        ))}
      </div>
      <div className="bg-neutral-200/60 absolute w-full text-center py-3 border-t border-t-neutral-300 bottom-0 ">
        @2024 DSS VJIT. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
