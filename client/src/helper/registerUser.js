export async function registerUser(user, token) {
    try {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                uid: user.uid,
                name: user.displayName,
                email: user.email
            })
        });
        return true;
    } catch (error) {
        console.error("registerUser error:", error);
        return false;
    }
}
