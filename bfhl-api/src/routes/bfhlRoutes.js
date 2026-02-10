const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

const EMAIL = process.env.EMAIL || "test@chitkara.edu.in";

// POST /bfhl
router.post('/bfhl', bfhlController.handleBfhl);

// GET /health
router.get('/health', (req, res) => {
    res.status(200).json({
        is_success: true,
        official_email: EMAIL
    });
});

module.exports = router;