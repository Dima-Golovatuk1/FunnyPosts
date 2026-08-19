import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/getProfile.api";
import { useNavigate } from "react-router-dom";

export function useProfile(){
    const navigate = useNavigate()

    const {
        data,
        status,
        isError,
        isLoading,
        error,
    } = useQuery({
        queryKey: ['useProfile'],
        queryFn: () => getProfile()
    })

    if(error?.message === "Unauthorized"){
        navigate("/auth/registration")
    }

    return {
        profileData: data,
        status,
        isLoading,
        isError,
        error,
    }
}