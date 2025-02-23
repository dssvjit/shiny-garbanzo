import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/shared/sidebar";
import { AlignJustify } from "lucide-react";
import Logo from "@/components/shared/logo";
import { NavLists } from "@/lib/lists/nav-lists";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { isTokenExpired } from "@/lib/jwt";
import { useEffect, useState } from "react";
import { getUserDetails } from "@/lib/api/user.api";
import { UserDetailsType } from "@/lib/types/user.types";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null);

  const handleSignIn = () => {
    navigate("/auth");
  };

  useEffect(() => {
    const token = localStorage.getItem("dss-accessToken");

    if (!token || token === null) {
      return;
    }

    if (isTokenExpired(token)) {
      return;
    }

    getUserDetails().then((data) => {
      setUserDetails(data);
    });
  }, []);

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
      {isTokenExpired(localStorage.getItem("dss-accessToken") || "") ? (
        <>
          <Button onClick={handleSignIn} className="px-6 hidden md:block">
            Sign In
          </Button>

          <Sheet>
            <SheetTrigger className="cursor-pointer md:hidden">
              {}
              <AlignJustify className="h-7 w-7 text-neutral-600" />
            </SheetTrigger>
            <Sidebar />
          </Sheet>
        </>
      ) : (
        <>
          {userDetails ? (
            <div className="hidden md:flex items-center gap-4">
              <img
                src={userDetails.imageUrl}
                alt={userDetails.name}
                className="w-10 h-10 rounded-full"
              />
            </div>
          ) : (
            <></>
          )}

          <Sheet>
            <SheetTrigger className="cursor-pointer md:hidden">
              {userDetails ? (
                <div className="flex items-center gap-4">
                  <img
                    src={userDetails.imageUrl}
                    alt={userDetails.name}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              ) : (
                <AlignJustify className="h-7 w-7 text-neutral-600" />
              )}
            </SheetTrigger>
            <Sidebar />
          </Sheet>
        </>
      )}
    </nav>
  );
};

export default Navbar;
