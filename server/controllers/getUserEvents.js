const { auth, db } = require("../config/firebaseAdmin.js");

async function getUserEvents(req, res) {
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

        // Get user's event registrations
        const registrationsRef = db.collection("eventRegistrations")
            .where("userId", "==", uid);
        const registrationsSnapshot = await registrationsRef.get();

        if (registrationsSnapshot.empty) {
            return res.status(200).json({
                success: true,
                message: "No registered events found",
                events: [],
            });
        }

        // Get event details for each registration
        const events = [];
        for (const doc of registrationsSnapshot.docs) {
            const registration = doc.data();
            const eventDoc = await db.collection("events").doc(registration.eventId).get();
            
            if (eventDoc.exists) {
                events.push({
                    registrationId: doc.id,
                    eventId: registration.eventId,
                    registeredAt: registration.registeredAt,
                    status: registration.status,
                    event: {
                        id: eventDoc.id,
                        ...eventDoc.data(),
                    },
                });
            }
        }

        return res.status(200).json({
            success: true,
            events,
        });

    } catch (error) {
        console.error("Get user events error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to fetch user events",
        });
    }
}

module.exports = getUserEvents;
