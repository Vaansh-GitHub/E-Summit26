const admin = require("firebase-admin");
const path = require("path");

// Your Firebase admin SDK JSON file
const serviceAccount = require(path.resolve("./firebase-admin.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = { admin, db };
