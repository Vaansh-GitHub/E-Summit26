const { auth, db } = require("../config/firebaseAdmin.js");

async function getMyOrders(req, res) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization token required",
            });
        }

        const idToken = authHeader.split("Bearer ")[1];
        const decodedToken = await auth.verifyIdToken(idToken);
        const uid = decodedToken.uid;

        // Get user's payment orders
        const ordersRef = db.collection("payments")
            .where("userId", "==", uid)
            .orderBy("createdAt", "desc");
        const ordersSnapshot = await ordersRef.get();

        if (ordersSnapshot.empty) {
            return res.status(200).json({
                success: true,
                message: "No orders found",
                orders: [],
            });
        }

        const orders = [];
        ordersSnapshot.forEach((doc) => {
            orders.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return res.status(200).json({
            success: true,
            orders,
        });

    } catch (error) {
        console.error("Get my orders error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch orders",
        });
    }
}

module.exports = getMyOrders;
