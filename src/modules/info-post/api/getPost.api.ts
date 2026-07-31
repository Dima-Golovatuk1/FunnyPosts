import type { Post } from "../types/post.type";

export async function getPost(id: string): Promise<Post> {
  const response = await fetch(`/api/posts/${id}`);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch post with id ${id}: ${response.statusText}`,
    );
  }

  return response.json();
}
