export interface PostItem {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    name: string;
    picture: string;
  };
}

export interface Posts {
  items: PostItem[];
  nextCursor: string | null;
}
