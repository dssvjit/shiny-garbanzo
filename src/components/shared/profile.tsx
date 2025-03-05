import { isTokenExpired } from "@/lib/jwt";
import { useGetUserDetails } from "@/lib/query/mutations/user.query";
import { UserDetailsType } from "@/lib/types/user.types";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import { cn } from "@/lib/utils";

interface ProfileProps {
  className?: string;
  imgClassName?: string;
  isBig?: boolean;
}

const Profile = ({ className, imgClassName, isBig = false }: ProfileProps) => {
  const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null);
  const { mutateAsync: getUserDetails, isPending } = useGetUserDetails();

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
  }, [getUserDetails]);

  if (!userDetails) {
    return <></>;
  }

  if (isBig) {
    return (
      <>
        {isPending ? (
          <>
            <div className="flex flex-col items-center gap-4 p-6">
              <div
                className={cn("hidden md:flex items-center gap-4", className)}
              >
                <div
                  className={cn(
                    "w-10 h-10 rounded-full bg-neutral-200 flex justify-center items-center",
                    imgClassName
                  )}
                >
                  <Spinner color="#4a4a4a" width="15" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-lg text-neutral-900 font-semibold ">
                  Unknown
                </span>
                <span className="text-neutral-600 text-xs">
                  unknown@mail.com
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center gap-4 p-6">
              <div
                className={cn("hidden md:flex items-center gap-4", className)}
              >
                <img
                  src={userDetails.imageUrl}
                  alt={userDetails.name}
                  className={cn("w-10 h-10 rounded-full", imgClassName)}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <span className="text-lg text-neutral-900 font-semibold ">
                  {userDetails.name}
                </span>
                <span className="text-neutral-600 text-xs">
                  {userDetails.email}
                </span>
              </div>
            </div>
          </>
        )}
      </>
    );
  }

  return (
    <>
      {isPending ? (
        <>
          <div className="w-10 h-10 bg-neutral-100 border border-neutral-300 rounded-full flex justify-center items-center">
            <Spinner color="#4a4a4a" width="15" />
          </div>
        </>
      ) : (
        <div className={cn("hidden md:flex items-center gap-4", className)}>
          <img
            src={userDetails.imageUrl}
            alt={userDetails.name}
            className={cn("w-10 h-10 rounded-full", imgClassName)}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
