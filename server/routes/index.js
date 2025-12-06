const express = require('express');
const RegisterUser = require('../controllers/RegisterUser');
const getUserRole = require('../controllers/getUserRole');

const router = express.Router();


//Register
router.post('/register',RegisterUser);

//get-role
router.post("/get-role", getUserRole);



module.exports = router;