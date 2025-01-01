const express = require('express');
const { searchBooks, addToFavorites } = require('../controllers/bookController');

const router = express.Router();

router.get('/search', searchBooks);
router.post('/add-to-favorites', addToFavorites);

module.exports = router;
