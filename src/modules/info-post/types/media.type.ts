export interface Media {
    id: string
    path: string
    type: 'IMAGE' | 'VIDEO' | 'image' | 'video';
    postId: string
    createdAt: string
    url: string
}