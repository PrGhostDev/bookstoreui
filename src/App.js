import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import BookDetail from "./BookDetail";
import SearchBar from "./SearchBar";
import "./App.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchInitialBooks();
  }, []);

  const fetchInitialBooks = async () => {
    try {
      const harryPotterResponse = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
      );
      const sherlockHolmesResponse = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes"
      );

      const harryPotterData = await harryPotterResponse.json();
      const sherlockHolmesData = await sherlockHolmesResponse.json();

      setBooks([...harryPotterData.items, ...sherlockHolmesData.items]);
    } catch (error) {
      console.error("Error fetching initial books:", error);
    }
  };

  const fetchBooks = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <Router>
      <div className="app">
        <SearchBar
          fetchBooks={fetchBooks}
          fetchInitialBooks={fetchInitialBooks}
        />

        {selectedBook && <BookDetail book={selectedBook} />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <BookList books={books} onBookClick={handleBookClick} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
