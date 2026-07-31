export async function sendLikeApi(postId: string) {
  const response = await fetch(`/api/posts/${postId}/like`, {
    method: "POST",
  });

  if (response.status === 401) {
    throw new Error("UNAUTHORIZED");
  }

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}
