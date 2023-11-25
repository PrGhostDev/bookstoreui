import React from 'react';

const BookDetail = ({ book }) => {
  if (!book || !book.volumeInfo || !book.volumeInfo.imageLinks) {
    console.log('No book selected or missing properties.');
    return <div>No book selected</div>;
  }

  return (
    <section className="book-detail">
      <div className="left">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      </div>
      <div className="right">
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</h4>
        <p className="descrip">{book.volumeInfo.description}</p>
        <div className="details-info">
          <p>Rating: {book.volumeInfo.averageRating || 'N/A'}</p>
          <p>Publisher: {book.volumeInfo.publisher || 'N/A'}</p>
          <p>Language: {book.volumeInfo.language || 'N/A'}</p>
        </div>
        <div className='btns'>
          <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
            <button>Now Read!</button>
          </a>
          <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
            <button>More Info</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
