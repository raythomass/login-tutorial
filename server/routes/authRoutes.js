const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registarUser, loginUser, getProfile} = require('../controllers/authController');

//Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.get('/', test);
router.post('/registar', registarUser);
router.post('/login', loginUser);
router.get('/profile', getProfile)

module.exports = router