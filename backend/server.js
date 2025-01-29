const express = require('express');
const cors = require('cors');
const triviaRoutes = require('./routes/trivia');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/trivia', triviaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});