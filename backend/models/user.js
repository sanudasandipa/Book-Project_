const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    recentSearches: [String]
});

module.exports = mongoose.model('User', userSchema);
