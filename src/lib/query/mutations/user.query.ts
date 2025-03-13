import { useMutation } from "@tanstack/react-query";
import { getUserDetails } from "@/lib/api/user.api";

export const useGetUserDetails = () => {
  return useMutation({
    mutationFn: () => getUserDetails(),
  });
};
