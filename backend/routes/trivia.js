const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Get a trivia question
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM questions LIMIT 1');
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send('Error fetching trivia question');
    }
});

module.exports = router;
