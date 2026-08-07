import { useQuery } from "@tanstack/react-query";
import { getComments } from "../api/getComment.api";

export function useGetComment(postId: string){
    const {
        data,
        status,
        isError,
        isLoading,
        error,

    } = useQuery({
        queryKey: ['comments', postId],
        queryFn: () => getComments(postId),
        enabled: Boolean(postId)
    })

    return {
        comments: data,
        status,
        isLoading,
        isError,
        error,
    }
}