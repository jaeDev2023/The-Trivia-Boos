const express = require('express');
const router = express.Router();
const triviaController = require('../controllers/triviaController');

// GET trivia questions
router.get('/', triviaController.getQuestions);

module.exports = router;