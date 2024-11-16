import { z } from "zod";

export const zodSignUpSchema = z.object({
  username: z.string({ message: "Username is required " }).min(1),
  email: z.string({ message: "Email is required" }).email(),
  password: z.string({ message: "password is required" }).min(5),
});
