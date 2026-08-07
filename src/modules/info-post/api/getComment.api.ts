import type { Comment } from "../types/comments.type";

export async function getComments(id: string): Promise<Comment[]> {
  const response = await fetch(`/api/posts/${id}/comments/show`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch comments with id ${id}: ${response.statusText}`,
    );
  }

  return response.json();
}
