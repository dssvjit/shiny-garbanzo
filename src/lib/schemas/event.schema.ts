import { z } from "zod";

export const eventSchema = z.object({
  name: z.string(),
  date: z.string(),
  description: z.string(),
  image: z.string(),
});
