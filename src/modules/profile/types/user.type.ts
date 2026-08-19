export type UserRole = "REGULAR" | "ADMIN";

export type AuthMethod = "CREDENTIALS" | "GOOGLE";

export interface User {
    id: string;
    name: string;
    lastName: string | null;
    description: string | null;
    picture: string;
    email: string;
    password: string;
    role: UserRole;
    isVerified: boolean;
    isTwoFactorEnabled: boolean;
    createdAt: string;
    updatedAt: string;
    method: AuthMethod;
}