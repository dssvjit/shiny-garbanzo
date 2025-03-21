import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/shared/sidebar";
import { AlignJustify, Menu } from "lucide-react";
import Logo from "@/components/shared/logo";
import { NavLists } from "@/lib/lists/nav-lists";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { isTokenExpired } from "@/lib/jwt";
import Profile from "@/components/shared/profile";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogout } from "@/lib/query/mutations/auth.query";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { mutateAsync: logout } = useLogout();

  const handleSignIn = () => {
    navigate("/auth");
  };

  return (
    <nav className="w-full absolute sm:relative top-0 flex items-center justify-between h-[60px] px-6 border-b border-b-neutral-300 bg-[#ffffff81] z-50 backdrop-blur-sm">
      <Link to="/">
        <Logo withText className="w-[70px] h-[70px]" />
      </Link>
      <ul className="hidden md:flex items-center gap-5 pr-2 absolute left-1/2 -translate-x-1/2">
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
              <AlignJustify className="h-7 w-7 text-neutral-600" />
            </SheetTrigger>
            <Sidebar />
          </Sheet>
        </>
      ) : (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="hidden md:flex">
              <Profile />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-7">
              <DropdownMenuLabel className="text-center">
                My Profile
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Profile imgClassName="w-20 h-20" isBig />
              <DropdownMenuSeparator />
              <AlertDialog>
                <AlertDialogTrigger className="text-red-400 p-1 w-full text-sm hover:underline">
                  Sign Out
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-xs sm:max-w-lg rounded-md">
                  <AlertDialogTitle>
                    Are you sure you want to sign out?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Signing out will log you out of all devices and you will
                    need to sign in again to access your account
                  </AlertDialogDescription>
                  <div className="flex justify-start items-center gap-3">
                    <AlertDialogAction
                      onClick={async () => await logout()}
                      className="h-10 px-6"
                    >
                      Yes
                    </AlertDialogAction>
                    <AlertDialogCancel className="h-10 px-8">
                      No
                    </AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger className="cursor-pointer md:hidden">
              {localStorage.getItem("dss-accessToken") ? (
                <>
                  <Profile className="block md:hidden" />
                </>
              ) : (
                <>
                  <Menu />
                </>
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
