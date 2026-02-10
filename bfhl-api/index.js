const express = require('express');
const cors = require('cors');
const bfhlRoutes = require('./src/routes/bfhlRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enables public access
app.use(express.json()); // Parses JSON body

// Routes
app.use('/', bfhlRoutes);

// Root endpoint for testing deployment
app.get('/', (req, res) => {
    res.send('BFHL API is running.');
});

// Start Server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app; // Export for Vercel