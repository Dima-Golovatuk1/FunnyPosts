import { usePosts } from "../../services/posts";
import type { Posts } from "../../types/api/posts";


export function Posts() {
    const posts = usePosts();

    if (posts.length === 0) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }

    return(
        <section>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        {post.title}
                    </li>
                ))}
            </ul>
        </section>
    )

}