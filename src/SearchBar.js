import React, { useState } from 'react';

const SearchBar = ({ fetchBooks, fetchInitialBooks }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      fetchBooks(trimmedQuery);
    } else {      
      fetchInitialBooks();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
