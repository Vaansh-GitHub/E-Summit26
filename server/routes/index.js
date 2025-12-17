const express = require('express');
const RegisterUser = require('../controllers/RegisterUser');
const loginUser = require('../controllers/loginUser');
const logoutUser = require('../controllers/logoutUser');
const getUserDetails = require('../controllers/getUserDetails');
const getUserRole = require('../controllers/getUserRole');
const createRazorpayOrder = require('../controllers/createRazorpayOrder');
const verifyRazorpayOrder = require('../controllers/verifyRazorpayOrder');
const storePayment = require('../controllers/storePayment');
const getEvents = require('../controllers/getEvents');
const getEventById = require('../controllers/getEventById');
const registerForEvent = require('../controllers/registerForEvent');
const getUserEvents = require('../controllers/getUserEvents');
const getPasses = require('../controllers/getPasses');
const purchasePass = require('../controllers/purchasePass');
const createRazorpayOrder = require('../controllers/createRazorpayOrder');
const verifyRazorpayOrder = require('../controllers/verifyRazorpayOrder');
const getMyOrders = require('../controllers/getMyOrders');
const storePayment = require('../controllers/storePayment');

// Admin controllers
const getAdminEvents = require('../controllers/admin/getAdminEvents');
const createAdminEvent = require('../controllers/admin/createAdminEvent');
const updateAdminEvent = require('../controllers/admin/updateAdminEvent');
const deleteAdminEvent = require('../controllers/admin/deleteAdminEvent');
const getAdminUsers = require('../controllers/admin/getAdminUsers');
const getAdminUserById = require('../controllers/admin/getAdminUserById');
const exportRegistrations = require('../controllers/admin/exportRegistrations');

const router = express.Router();

//Auth endpoints
router.post('/register', RegisterUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/details', getUserDetails);

//get-role
router.post("/get-role", getUserRole);

//Event endpoints
router.get("/events", getEvents);
router.get("/events/:eventId", getEventById);
router.post("/events/:eventId/register", registerForEvent);

//payment-end points
router.post("/create-order",createRazorpayOrder);
router.post("/verify-order",verifyRazorpayOrder);
router.post("/store-payment",storePayment)

//User endpoints
router.get("/users/me/events", getUserEvents);

//Pass endpoints
router.get("/passes", getPasses);
router.post("/passes/:passId/purchase", purchasePass);

//Payment endpoints
router.post("/payments/create-order", createRazorpayOrder);
router.post("/payments/verify", verifyRazorpayOrder);
router.get("/payments/my-orders", getMyOrders);

//Admin endpoints
router.get("/admin/events", getAdminEvents);
router.post("/admin/events", createAdminEvent);
router.patch("/admin/events/:eventId", updateAdminEvent);
router.delete("/admin/events/:eventId", deleteAdminEvent);
router.get("/admin/users", getAdminUsers);
router.get("/admin/users/:userId", getAdminUserById);
router.get("/admin/registrations/export", exportRegistrations);

// Legacy payment endpoints (keeping for backward compatibility)
router.post("/create-order", createRazorpayOrder);
router.post("/verify-order", verifyRazorpayOrder);
router.post("/store-payment", storePayment);

module.exports = router;