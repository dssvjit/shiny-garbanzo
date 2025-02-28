import { z } from "zod";

export const LoginWithEmailSchema = z.object({
  email: z.string().min(2).max(50),
});

export const VerifyOtpSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 6 characters.",
  }),
});
