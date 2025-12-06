const { db } = require("../config/firebaseAdmin.js");

async function RegisterUser(req, res) {
    try {
        const { name, email, uid } = req.body;

        console.log("Saving user:", name, email);

        if (!uid || !email) {
            return res.status(400).json({
                success: false,
                message: "UID and Email are required",
            });
        }

        const userRef = db.collection("users").doc(uid);
        const userDoc = await userRef.get();

        let role = "user";

        if (!userDoc.exists) {
            await userRef.set({
                name,
                email,
                role: role,
                createdAt: new Date(),
            });

        } else {
            const storedRole = userDoc.data().role;
            role = storedRole ?? role;

            
            await userRef.update({
                name,
                email,
                updatedAt: new Date(),
            });
        }

        return res.status(201).json({
            success: true,
            message: "User saved successfully",
            role,  
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || error,
        });
    }
}

module.exports = RegisterUser;
