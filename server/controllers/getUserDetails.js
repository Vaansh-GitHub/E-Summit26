const { auth, db } = require("../config/firebaseAdmin.js");

async function getUserDetails(req, res) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required",
            });
        }

        const idToken = authHeader.split("Bearer ")[1];

        // Verify the Firebase ID token
        const decodedToken = await auth.verifyIdToken(idToken);
        const uid = decodedToken.uid;

        // Get user details from Firestore
        const userRef = db.collection("users").doc(uid);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const userData = userDoc.data();

        return res.status(200).json({
            success: true,
            user: {
                uid,
                name: userData.name,
                email: userData.email,
                role: userData.role,
                createdAt: userData.createdAt,
            },
        });

    } catch (error) {
        console.error("Get user details error:", error);
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
}

module.exports = getUserDetails;
