import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { sendCommentApi } from "../api/sendComment.api";

export function useSendComment(postId: string, comment: string) {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {
        mutate,
        data,
        status,
        isError,
        error
    } = useMutation({
        mutationFn: () => sendCommentApi(postId, comment),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['comments', postId] })
        },
    })

    if (error?.message === "UNAUTHORIZED") {
        navigate("/auth");
    }

    return {
        sendComment: mutate,
        sendCommentData: data,
        status,
        isError,
        error
    }
}