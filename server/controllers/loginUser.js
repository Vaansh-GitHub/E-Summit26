const { auth, db } = require("../config/firebaseAdmin.js");

async function loginUser(req, res) {
    try {
        const { idToken } = req.body;

        if (!idToken) {
            return res.status(400).json({
                success: false,
                message: "ID Token is required",
            });
        }

        // Verify the Firebase ID token
        const decodedToken = await auth.verifyIdToken(idToken);
        const uid = decodedToken.uid;

        // Get user details from Firestore
        const userRef = db.collection("users").doc(uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return res.status(404).json({
                success: false,
                message: "User not found. Please register first.",
            });
        }

        const userData = userDoc.data();

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                uid,
                name: userData.name,
                email: userData.email,
                role: userData.role,
            },
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
}

module.exports = loginUser;
