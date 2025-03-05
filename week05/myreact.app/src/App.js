import React, { useState } from 'react';
import './App.css';

// Sample books data with fictional books, including the Harry Potter series
const booksData = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
  },
  {
    title: 'Percy Jackson & The Olympians',
    author: 'Rick Riordan',
    genre: 'Fantasy',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    genre: 'Fantasy',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Dystopian',
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
  },
  {
    title: 'Ender\'s Game',
    author: 'Orson Scott Card',
    genre: 'Science Fiction',
  },
  {
    title: 'The Maze Runner',
    author: 'James Dashner',
    genre: 'Dystopian',
  },
  {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
  },
  // Add more books as needed...
];

const genres = ['All Genres', 'Fiction', 'Dystopian', 'Fantasy', 'Adventure', 'Classic'];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5; // Set how many books per page

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      filterBooks(searchQuery, selectedGenre);
    }
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    filterBooks(searchQuery, e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterBooks = (query, genre) => {
    let filtered = booksData;

    if (query) {
      filtered = filtered.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (genre !== 'All Genres') {
      filtered = filtered.filter((book) => book.genre === genre);
    }

    setFilteredBooks(filtered);
  };

  const clearSearch = () => {
    setSearchQuery('');
    filterBooks('', selectedGenre);
  };

  const displayedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handleBookClick = (book) => {
    const bookInfo = `${book.title} ${book.genre}`;
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(bookInfo)}`;
    window.open(googleSearchURL, '_blank');
  };

  return (
    <div className="App">
      <h1 className="app-heading">ReaderSays</h1>

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmit}
        />
        <button onClick={clearSearch}>Clear Search</button>
      </div>

      {/* Genre dropdown */}
      <div className="genre-filter">
        <select value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Loading Spinner */}
      {filteredBooks.length === 0 ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div className="book-list">
          <h2>Books</h2>
          <div className="book-grid">
            {displayedBooks.map((book, index) => (
              <div className="book-card" key={index} onClick={() => handleBookClick(book)}>
                <div className="book-graphic">
                  <div className="book-title">{book.title}</div>
                  <div className="book-author">{book.author}</div>
                  <div className="book-genre">{book.genre}</div>
                </div>
                <div className="book-info">
                  <strong>{book.title}</strong>
                  <p>{book.author}</p>
                  <em>{book.genre}</em>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
