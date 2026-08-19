import type { User } from "../types/user.type";

export async function getProfile(): Promise<User>{
  const response = await fetch(`/api/users/profile`)

  if (!response.ok) {
    if (response.status === 401) {
            throw new Error("Unauthorized");
        }

    throw new Error(
      `Failed to fetch profile`,
    );
  }

  return response.json();
}
