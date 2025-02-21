import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/shared/sidebar";
import { AlignJustify } from "lucide-react";
import Logo from "@/components/shared/logo";
import { NavLists } from "@/lib/lists/nav-lists";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="w-full absolute sm:relative top-0 flex items-center justify-between h-[60px] px-6 border-b border-b-neutral-300 bg-[#ffffff81] z-50 backdrop-blur-sm">
      <Link to="/">
        <Logo withText className="w-[70px] h-[70px]" />
      </Link>
      <ul className="hidden md:flex items-center gap-5 pr-2">
        {NavLists.map((navItem) => (
          <NavLink
            key={navItem.route}
            to={navItem.route}
            className={cn(
              "transition-colors duration-300",
              navItem.route === pathname
                ? "text-neutral-950"
                : "text-neutral-600"
            )}
          >
            {navItem.name}
          </NavLink>
        ))}
      </ul>
      <Sheet>
        <SheetTrigger className="cursor-pointer md:hidden">
          <AlignJustify className="h-7 w-7 text-neutral-600" />
        </SheetTrigger>
        <Sidebar />
      </Sheet>
    </nav>
  );
};

export default Navbar;
