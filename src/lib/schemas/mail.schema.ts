import { z } from "zod";

export const mailSchema = z.object({
  email: z.string().email(),
});
