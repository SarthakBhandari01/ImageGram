import { z } from "zod";

export const zodSignInSchema = z.object({
  email: z.string({ message: "Email is Required" }).email(),
  password: z.string().min(4),
});
