import type { Posts } from "modules/posts/types/posts.type";

export const getPosts = async (
  limit: number,
  cursor: string | null,
): Promise<Posts> => {
  const url = cursor
    ? `/api/posts?cursor=${encodeURIComponent(cursor)}&limit=${limit}`
    : `/api/posts?limit=${limit}`;

    const response = await fetch(url)

    if(!response.ok){
        throw new Error('Network response was not ok');
    }

    return response.json()
};
