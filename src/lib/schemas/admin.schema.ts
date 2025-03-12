import { z } from "zod";

export const adminSchema = z.object({
  password: z.string().min(4).max(50),
  email: z.string().email(),
});
