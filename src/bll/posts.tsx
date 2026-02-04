import { useEffect, useState } from "react"
import { getPosts } from "../api/posts"
import type { Posts } from "../types/api/posts.ts"

export const usePosts = () => {
    const [posts, setPosts] = useState<Posts[]>([]);

    useEffect(() => {
        getPosts().then(
            data => setPosts(data)
        )
    }, [])

    return posts
}