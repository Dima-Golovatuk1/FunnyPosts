export async function twoFactorApi(email: string, code: string) {
    const response = await fetch(`/api/two-factor/verify-code`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            code
        })
    })

    const data = await response.json()

    if(!response.ok){
        throw new Error(data.message || "Two-factor verification failed")
    }

    return data
}