import type { TwoFactorType } from "../types/twoFactor.type";
import { useMutation } from "@tanstack/react-query";
import { twoFactorApi } from "../api/twoFactor.api";
import { useNavigate } from "react-router-dom";

export function useTwoFactor() {
    const navigator = useNavigate()

    const {
        data,
        mutate,
        isError,
        isSuccess,
        error,
        reset,
        isPending
    } = useMutation({
        mutationFn: (data: TwoFactorType) => twoFactorApi(data.email, data.code),
        onSuccess: () => {
            navigator("/posts");
        }

    })

    return {
        twoFactor: mutate,
        twoFactorData: data,
        isError,
        isSuccess,
        error,
        reset,
        isPending
    }
}