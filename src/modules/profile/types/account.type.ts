export type Provider = "GOOGLE";

export type AccountType = "OAUTH";

export interface Account {
    id: string;
    provider: Provider;
    providerId: string;
    type: AccountType;
    accessToken: string | null;
    refreshToken: string | null;
    expiresAt: number | null;
    userId: string;
    createdAt: string;
    updatedAt: string;
}