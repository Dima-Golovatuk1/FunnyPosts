export interface FullInfoPost {
    id: string
    title: string
    description: string
    coverUrl: string
    authorId: string
    createdAt: string
    updatedAt: string
    author : {
        id: string
        name: string
        picture: string
    }
    media: [{
        id: string
        path: string
        type: string
        postId: string
        createdAt: string
        url: string
    }]
}