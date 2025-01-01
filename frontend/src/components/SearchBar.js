import React, { useState } from "react";
import axios from "axios";

const Search = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const searchBooks = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/books/search?query=${query}`);
            setBooks(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Search Books</h2>
            <input
                type="text"
                placeholder="Search for books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchBooks}>Search</button>
            <div>
                {books.map((book) => (
                    <div key={book.googleId}>
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>{book.description}</p>
                        <p>Rating: {book.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;
