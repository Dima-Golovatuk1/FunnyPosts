import type { Author } from "./author.type"
import type { Comment } from "./comments.type"
import type { Media } from "./media.type"

export interface Post {
    id: string
    title: string
    description: string
    coverUrl: string
    authorId: string
    createdAt: string
    updatedAt: string
    author: Author
    media: Media[]
    comments: Comment[]
}

