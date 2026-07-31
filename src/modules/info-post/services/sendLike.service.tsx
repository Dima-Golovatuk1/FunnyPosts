import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendLikeApi } from "../api/sendLike.api";
import { useNavigate } from "react-router-dom";

export function useSendLike(postId: string) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {
        mutate,
        data,
        status,
        isError,
        error
    } = useMutation({
        mutationFn: () => sendLikeApi(postId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['isHasLike', postId] })
        },
    })

    if (error?.message === "UNAUTHORIZED") {
        navigate("/auth");
    }

    return {
        sendLike: mutate,
        sendLikeData: data,
        status,
        isError,
        error
    }
}