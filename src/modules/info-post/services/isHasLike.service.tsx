import { useQuery } from "@tanstack/react-query";
import { isHasLike } from "../api/isHasLike.api";

export function useIsHasLike(postId: string) {
    const {
        data,
        status,
        isError,
        error,
    } = useQuery({
        queryKey: ['isHasLike', postId],
        queryFn: () => isHasLike(postId),
    })

    if (error?.message === "UNAUTHORIZED") {
        return {
            data: false
        }
    }

    return {
        data,
        status,
        isError,
        error,
    }
}