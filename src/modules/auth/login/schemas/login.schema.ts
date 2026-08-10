import z from "zod";
import type { LoginData } from "../types/login.type";


export const loginSchema: z.ZodType<LoginData> = z.object({
    email: z
        .email("Invalid email")
        .nonempty("Email is required"),
    password: z
        .string()
        .nonempty("Password is required")
        .min(6, "Password must have min 6 symbols"),
})