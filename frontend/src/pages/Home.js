import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import '../CSS/UserHome.css'; // Custom CSS file for styling

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");  // State for search input
    const [searchResults, setSearchResults] = useState([]);  // State for search results
    const [popularBooks, setPopularBooks] = useState([]);  // State for popular books
    const [categories, setCategories] = useState([]);  // State for categories
    const [loading, setLoading] = useState(false);  // State for loading
    const [favorites, setFavorites] = useState(new Set());  // Track favorites
     
    const GOOGLE_BOOKS_API_KEY = 'AIzaSyBYNIOQ0-2vwqQSUEntsng8EGa0L5FaVg0';  // Your API key directly

    // Fetch popular books and categories on component mount
    useEffect(() => {
        setLoading(true);

        // Fetch popular books (best selling)
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=best+selling&key=${GOOGLE_BOOKS_API_KEY}`)
            .then((response) => {
                setPopularBooks(response.data.items);
            })
            .catch((error) => console.error("Error fetching popular books:", error))
            .finally(() => setLoading(false));

        // Fetch categories (fiction as an example)
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=${GOOGLE_BOOKS_API_KEY}`)
            .then((response) => {
                setCategories(response.data.items.map(item => item.volumeInfo.categories).flat());
            })
            .catch((error) => console.error("Error fetching categories:", error));
    }, []);

    // Search books based on the query
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === "") return;

        setLoading(true);
        setSearchResults([]);  // Clear previous search results before making a new request
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${GOOGLE_BOOKS_API_KEY}`)
            .then((response) => {
                console.log(response.data);  // Log to check the response
                setSearchResults(response.data.items);
            })
            .catch((error) => console.error("Error searching books:", error))
            .finally(() => setLoading(false));
    };

    // Add book to favorites
    const handleAddToFavorites = (book) => {
        const newFavorites = new Set(favorites);
        if (newFavorites.has(book.id)) {
            newFavorites.delete(book.id); // Remove from favorites
        } else {
            newFavorites.add(book.id); // Add to favorites
        }
        setFavorites(newFavorites);
    };

    return (

        <div>
        <div>
            
            <Navbar />
        
        <div className="home">
        <br />
        <br />
        <br />
        <br />
            <h1>Welcome to Book Store</h1>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search books by title, author, or genre..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button" disabled={loading}>
                    {loading ? "Searching..." : "Search"}
                </button>
            </form>

            {/* Loading Indicator */}
            {loading && <div className="loading">Loading...</div>}


            {/* Search Results Section */}
            {searchQuery && searchResults.length > 0 && (
                <div className="search-results">
                    <h2>Search Results</h2>
                    <div className="book-list">
                        {searchResults.map((book) => (
                            <div key={book.id} className="book-card">
                                <img
                                    src={book.volumeInfo.imageLinks?.thumbnail}
                                    alt={book.volumeInfo.title}
                                    className="book-image"
                                />
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.join(", ")}</p>
                                <button
                                    className={`favorite-button ${favorites.has(book.id) ? "added" : ""}`}
                                    onClick={() => handleAddToFavorites(book)}
                                >
                                    {favorites.has(book.id) ? "Added to Favorites" : "Add to Favorites"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Popular Books Section */}
            <div className="popular-books">
                <h2>Popular Books</h2>
                <div className="book-list">
                    {popularBooks.length > 0 ? (
                        popularBooks.map((book) => (
                            <div key={book.id} className="book-card">
                                <img
                                    src={book.volumeInfo.imageLinks?.thumbnail}
                                    alt={book.volumeInfo.title}
                                    className="book-image"
                                />
                                <h3>{book.volumeInfo.title}</h3>
                                <p>{book.volumeInfo.authors?.join(", ")}</p>
                                <button
                                    className={`favorite-button ${favorites.has(book.id) ? "added" : ""}`}
                                    onClick={() => handleAddToFavorites(book)}
                                >
                                    {favorites.has(book.id) ? "Added to Favorites" : "Add to Favorites"}
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>Loading popular books...</p>
                    )}
                </div>
            </div>


            {/* Categories Section */}
            <div className="categories">
                <h2>Book Categories</h2>
                <div className="category-list">
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <span key={index} className="category">{category}</span>
                        ))
                    ) : (
                        <p>Loading categories...</p>
                    )}
                </div>
            </div>


            {/* Show message if no results found */}
            {searchQuery && searchResults.length === 0 && (
                <p>No books found for "{searchQuery}". Please try a different search.</p>
            )}
        </div>
        </div>
        
        <Footer/>
        </div>
    );
};

export default Home;
