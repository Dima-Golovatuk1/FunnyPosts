import type { Author } from "./author.type"

export interface Comment {
    id: string
    text: string
    userId: string
    postId: string
    createdAt: string
    user: Author
}