import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  email: z.string(),
  phone: z.string(),
  fio: z.string(),
  gender: z.string(),
  birthday: z.string(),
  role: z.union([
    z.literal("mentor"),
    z.literal("hr"),
    z.literal("candidate"),
    z.literal("curator"),
  ]),
  first_access: z.string(),
  last_access: z.string(),
  last_ip: z.string(),
  active: z.boolean(),
  telegram: z.string().nullable(),
  vk: z.string().nullable(),
});

export type User = z.infer<typeof userSchema>;
