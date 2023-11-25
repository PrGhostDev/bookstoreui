import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, onBookClick }) => {
  return (
    <div className="Listing">
      <h2>More Books</h2>
      <div className="book-list">      
        {books.map((book) => (
          <div key={book.id} className="book-item" onClick={() => onBookClick(book)}>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />           
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
