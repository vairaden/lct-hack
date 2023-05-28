import { z } from "zod";

export const applicationSchema = z.object({
  course: z.string(),
  education: z.string(),
  resume: z.string(),
  citizenship: z.string(),
  graduation_date: z.string(),
  city: z.string(),
  id: z.number(),
  status: z.union([
    z.literal("unverified"),
    z.literal("verified"),
    z.literal("approved"),
    z.literal("declined"),
  ]),
});

export type Application = z.infer<typeof applicationSchema>;
