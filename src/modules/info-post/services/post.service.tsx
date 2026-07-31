import { useQuery } from "@tanstack/react-query";
import { getPost } from "../api/getPost.api";

export function useGetPost(id: string){
    const {
        data,
        status,
        isError,
        error,

    } = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(id),
        enabled: Boolean(id)
    })

    return {
        post: data,
        isLoading: status === 'pending',
        isError,
        error,
    }
}