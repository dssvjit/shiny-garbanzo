import { addEmail } from "@/lib/api/email.api";
import { useMutation } from "@tanstack/react-query";

export const useAddEmail = () => {
  return useMutation({
    mutationFn: (email: string) => addEmail(email),
  });
};
