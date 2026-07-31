export async function isHasLike(postId: string) {
  const response = await fetch(`/api/posts/${postId}/isHasLike`, {});

    if (response.status === 401) {
        throw new Error("UNAUTHORIZED");
    }

    if (!response.ok) {
        throw new Error("SERVER_ERROR");
    }

  return response.json();
}
