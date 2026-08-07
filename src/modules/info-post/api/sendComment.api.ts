export async function sendCommentApi(postId: string, text: string) {
  const response = await fetch(`/api/posts/${postId}/comments/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text })
  });

  if (response.status === 401) {
    throw new Error("UNAUTHORIZED");
  }

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}
