const axios = require('axios');
const Book = require('../models/book');
const User = require('../models/user');

// Search books
exports.searchBooks = async (req, res) => {
    const { query } = req.query;

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.GOOGLE_BOOKS_API_KEY}`);
        const books = response.data.items.map(item => ({
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
            description: item.volumeInfo.description || 'No description available',
            image: item.volumeInfo.imageLinks?.thumbnail || null,
            rating: item.volumeInfo.averageRating || 'N/A',
            googleId: item.id
        }));

        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching books' });
    }
};

// Add to Favorites
exports.addToFavorites = async (req, res) => {
    const { userId, book } = req.body;

    try {
        const user = await User.findById(userId);
        const newBook = await Book.create(book);

        user.favorites.push(newBook);
        await user.save();

        res.json({ message: 'Book added to favorites', book: newBook });
    } catch (err) {
        res.status(500).json({ error: 'Error adding to favorites' });
    }
};
