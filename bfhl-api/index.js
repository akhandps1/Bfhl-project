const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bfhlRoutes = require('./src/routes/bfhlRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', bfhlRoutes);

app.get('/', (req, res) => {
    res.send('BFHL API Running');
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;