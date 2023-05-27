import { z } from "zod";

export const userSchema = z.object({
  email: z.string(),
  phone: z.string(),
  fio: z.string(),
  gender: z.literal("M").or(z.literal("F")),
  birthday: z.string(),
  role: z.literal("mentor").or(z.literal("hr")).or(z.literal("candidate")),
  first_access: z.string(),
  last_access: z.string(),
  last_ip: z.string(),
  active: z.boolean(),
  password: z.string(),
});

export type User = z.infer<typeof userSchema>;
