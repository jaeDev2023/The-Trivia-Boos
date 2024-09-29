const express = require('express');
const dotenv = require('dotenv');
const triviaRoutes = require('./routes/triva');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the trivia routes
app.use('/api/trivia', triviaRoutes);

// Basic home route
app.get('/', (req, res) => {
    res.send('Welcome to Trivia Boos!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});