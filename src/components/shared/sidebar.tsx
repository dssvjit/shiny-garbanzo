import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import Logo from "@/components/shared/logo";
import { X } from "lucide-react";
import { NavLists } from "@/lib/lists/nav-lists";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { isTokenExpired } from "@/lib/jwt";
import { useLogout } from "@/lib/query/mutations/auth.query";
import Profile from "./profile";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { mutateAsync: logout } = useLogout();

  return (
    <SheetContent className="p-5">
      <SheetHeader className="border-b border-neutral-200 pb-4">
        <SheetTitle className="flex items-center justify-between h-16 px-2 relative">
          <Logo withText className="h-24 w-24" />
          <SheetClose className="absolute right-2 top-2">
            <X />
          </SheetClose>
        </SheetTitle>
        <SheetDescription className="text-start text-md px-2">
          We host workshops, hackathons, and mentorship programs to help
          students grow as developers and innovators.
        </SheetDescription>
      </SheetHeader>
      <div className="w-full flex flex-col py-3 px-2">
        <h3 className="text-md px-2 font-semibold text-neutral-800 underline">
          Menu
        </h3>
        <div className="flex flex-col px-2 text-lg p-1 border-b pb-4 text-neutral-800">
          {NavLists.map((navItem, index) => (
            <a
              key={navItem.route}
              href={navItem.route}
              className={cn(
                "transition-colors duration-300 tracking-tighter pt-1",
                navItem.route === pathname ? "text-black" : "text-neutral-600",
                index === 0 ? "border-transparent" : "border-neutral-200"
              )}
            >
              {navItem.name}
            </a>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col py-3 gap-2 px-2">
        {isTokenExpired(localStorage.getItem("dss-accessToken") || "") ? (
          <>
            <h3 className="text-md px-2 font-semibold text-neutral-800 underline">
              Sign In
            </h3>
            <p className="text-neutral-500 text-md px-2">
              Sign in to access exclusive content, resources, and opportunities.
            </p>
            <Button onClick={() => navigate("/auth")} className="mt-5">
              Sign In
            </Button>
          </>
        ) : (
          <>
            <h3 className="text-md px-2 font-semibold text-neutral-800 underline">
              Your profile
            </h3>
            <p className="text-neutral-500 text-md px-2">
              Manage your account settings and access exclusive content.
            </p>
            <div className="flex justify-between items-center p-2">
              <Profile
                isBig
                className="flex flex-row p-0 py-2"
                contentClassName="items-start"
                imgClassName="w-14 h-14"
              />
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button
                    className="text-red-400 w-fit p-2"
                    variant={"link"}
                    onClick={() => {}}
                  >
                    Sign Out
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-sm rounded-md">
                  <AlertDialogTitle>
                    Are you sure you want to sign out?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Signing out will log you out of all devices and you will
                    need to sign in again to access your account
                  </AlertDialogDescription>
                  <div className="flex justify-start items-center gap-3">
                    <AlertDialogAction
                      onClick={async () => {
                        await logout();
                        navigate("/");
                      }}
                      className="h-10 mt-2 px-6"
                    >
                      Yes
                    </AlertDialogAction>
                    <AlertDialogCancel className="h-10 px-8">
                      No
                    </AlertDialogCancel>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </>
        )}
      </div>
    </SheetContent>
  );
};

export default Sidebar;
