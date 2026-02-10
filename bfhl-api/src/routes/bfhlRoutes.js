const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

router.post('/bfhl', bfhlController.handleBfhl);

router.get('/health', (req, res) => {
    res.status(200).json({
        is_success: true,
        official_email: process.env.EMAIL || "user@chitkara.edu.in"
    });
});

module.exports = router;