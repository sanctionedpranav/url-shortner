import { z } from "zod";

const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid Email Format"),

  password: z
    .string()
    .min(8, "Password must be greater than 8 characters")
    .max(25, "Password must be less than 25 characters"),

  name: z
    .string()
    .min(3, "Name must be greater than 3 characters")
    .max(25, "Name must be less than 25 characters")
    .trim(),
});

export default registerSchema;
