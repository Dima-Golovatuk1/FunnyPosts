import type { LoginData } from "../types/login.type";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/login.api";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setEmailAuth } from "store/auth/authEmail.slice";

export function useLogin() {
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const {
        data,
        mutate,
        isError,
        isSuccess,
        error,
        reset,
        isPending
    } = useMutation({
        mutationFn: (data: LoginData) => loginApi(data.email, data.password),
        onSuccess: (data, variables) => {
            if (data.message === "Two-factor code has been sent") {
                dispatch(setEmailAuth(variables.email));

                navigator("/auth/two-factor");

                return;
            }
            
            navigator("/posts");
        }

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