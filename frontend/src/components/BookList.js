import React from "react";

const BookList = ({ books }) => {
    return (
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
    );
};

export default BookList;
