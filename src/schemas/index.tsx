import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
