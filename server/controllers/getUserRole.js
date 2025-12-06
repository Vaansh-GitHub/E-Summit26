const { db } = require("../config/firebaseAdmin.js");

async function getUserRole(req, res) {
    try {
        const { uid } = req.body;

        if (!uid) {
            return res.status(400).json({
                success: false,
                message: "UID missing"
            });
        }

        const userRef = db.collection("users").doc(uid);
        const userDoc = await userRef.get();

        console.log("UserRole",userDoc.data())
        return res.json({
            success: true,
            role: userDoc.data().role
        });

    } catch (err) {
        console.error("🔥 getUserRole Error:", err.message);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
}

module.exports = getUserRole;
