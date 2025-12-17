async function logoutUser(req, res) {
    try {
        // Clear any server-side session/cookies if you're using them
        res.clearCookie('session', { path: '/' });

        return res.status(200).json({
            success: true,
            message: "Logout successful",
        });

    } catch (error) {
        console.error("Logout error:", error);
        return res.status(500).json({
            success: false,
            message: "Logout failed",
        });
    }
}

module.exports = logoutUser;
