import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string(),
  email: z
    .string()
    .email({ message: "Invalid Email format" })
    .trim()
    .refine((data) => data.length > 0, { message: "Email is required" }),

  password: z
    .string()
    .trim()
    .refine((data) => data.length > 0, { message: "Password is required" }),
  username: z
    .string()
    .trim()
    .refine((data) => data.length > 0, { message: "UserName is required" }),
});
