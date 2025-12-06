export async function getUserRole(uid, token) {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/get-role`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ uid })
        });

        if (!res.ok) {
            console.error("❌ Backend returned:", res.status);
            return { success: false };
        }

        let data;
        try {
            data = await res.json();
        } catch {
            console.error("❌ Server did not return JSON");
            return { success: false };
        }

        return data;

    } catch (error) {
        console.error("getUserRole error:", error);
        return { success: false };
    }
}
