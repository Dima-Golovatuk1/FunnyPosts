export async function registrationApi(
    name: string,
    email: string,
    password: string,
    passwordRepeat: string,
) {
    const response = await fetch("/api/auth/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            passwordRepeat,
        }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
}
