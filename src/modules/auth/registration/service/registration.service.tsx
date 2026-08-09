import { useMutation } from "@tanstack/react-query";

import { registrationApi } from "../api/registration.api";
import type { RegistrationData } from "../types/registration.type";

export function useRegistration() {
    const {
        mutate,
        data,
        isError,
        isSuccess,
        error,
        reset,
        isPending
    } = useMutation({
        mutationFn: (data: RegistrationData) =>
            registrationApi(
                data.name,
                data.email,
                data.password,
                data.passwordRepeat
            ),
    });

    return {
        registration: mutate,
        registrationData: data,
        isError,
        isSuccess,
        error,
        reset,
        isPending
    };
}
