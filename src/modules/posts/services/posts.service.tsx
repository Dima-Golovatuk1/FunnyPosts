import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts.api";

export function usePosts  (limit: number = 10) {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
        isError,
        error

    } = useInfiniteQuery({
        queryKey: ['posts', limit],
        queryFn: ({ pageParam }) => getPosts(limit, pageParam),
        initialPageParam: null as string | null,
        getNextPageParam: (lastPage) => lastPage.nextCursor
    })

    const posts = data?.pages.flatMap((page) => page.items) ?? []

    return {
        posts,
        isLoading: status === "pending",
        isFetchingNextPage,
        hasNextPage,
        isError,
        error,
        fetchNextPage,
    };
}; 