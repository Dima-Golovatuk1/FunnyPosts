import type { LoginData } from "../types/login.type";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/login.api";

export function useLogin() {

    const {
        data,
        mutate,
        isError,
        isSuccess,
        error,
        reset,
        isPending
    } = useMutation({
        mutationFn: (data: LoginData) => loginApi(data.email, data.password)

    })

    return {
        login: mutate,
        loginData: data,
        isError,
        isSuccess,
        error,
        reset,
        isPending
    }
}