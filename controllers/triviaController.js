const pool = require('../config/database'); // Import database connection

// Fetch trivia questions
exports.getQuestions = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM trivia_questions');
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};