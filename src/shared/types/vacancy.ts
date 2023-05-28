import { z } from "zod";

export const vacancySchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  start_date: z.string(),
  end_date: z.string(),
  tags: z.string().array(),
  test: z.string(),
  status: z.union([
    z.literal("hidden"),
    z.literal("pending"),
    z.literal("accepted"),
    z.literal("published"),
    z.literal("closed"),
  ]),
});

export type Vacancy = z.infer<typeof vacancySchema>;
