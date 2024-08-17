const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registarUser} = require('../controllers/authController');

//Middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    })
);

router.get('/', test);
router.post('/registar', registarUser);

module.exports = router