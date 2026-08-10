import { z } from "zod";

import type { RegistrationData } from "../types/registration.type";

export const registrationSchema: z.ZodType<RegistrationData> = z.object({
    name: z
        .string()
        .nonempty("Name is required")
        .min(2, "Name must have min 2 symbols")
        .max(60, "Name must have max 60 symbols")
        .regex(/^\S+$/, "Spaces are not allowed"),
    email: z
        .email("Invalid email")
        .nonempty("Email is required"),
    password: z
        .string()
        .nonempty("Password is required")
        .min(6, "Password must have min 6 symbols"),
    passwordRepeat: z
        .string()
        .nonempty("Password confirmation is required")
        .min(6, "Password must have min 6 symbols")
}).refine(
    (data) => data.password === data.passwordRepeat,
    {
        message: "Passwords do not match",
        path: ["passwordRepeat"],
    }
)
