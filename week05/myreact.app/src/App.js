import React, { useState, useEffect } from 'react';
import './App.css';

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
  {
    title: 'The Book Thief',
    author: 'Markus Zusak',
    genre: 'Historical Fiction',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Adventure',
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    genre: 'Horror',
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    genre: 'Classic',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Classic',
  },
  {
    title: 'The Outsiders',
    author: 'S.E. Hinton',
    genre: 'Fiction',
  },
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    genre: 'Dystopian',
  },
  {
    title: 'The Secret Garden',
    author: 'Frances Hodgson Burnett',
    genre: 'Classic',
  },
  {
    title: 'The Godfather',
    author: 'Mario Puzo',
    genre: 'Crime Fiction',
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
    genre: 'Satire',
  },
  {
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    genre: 'Science Fiction',
  },
  {
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    genre: 'Dystopian',
  },
  {
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    genre: 'Classic',
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    genre: 'Post-apocalyptic',
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley',
    genre: 'Horror',
  },
  {
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    genre: 'Fantasy',
  },
  {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    author: 'Douglas Adams',
    genre: 'Science Fiction',
  },
  {
    title: 'The Girl on the Train',
    author: 'Paula Hawkins',
    genre: 'Thriller',
  },
  {
    title: 'The Invisible Man',
    author: 'H.G. Wells',
    genre: 'Science Fiction',
  },
  {
    title: 'The Time Machine',
    author: 'H.G. Wells',
    genre: 'Science Fiction',
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    genre: 'Historical Fiction',
  },
  {
    title: 'The Great Expectations',
    author: 'Charles Dickens',
    genre: 'Classic',
  },
  {
    title: 'The Diary of a Young Girl',
    author: 'Anne Frank',
    genre: 'Biography',
  },
  {
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    genre: 'Fiction',
  },
  {
    title: 'The Art of War',
    author: 'Sun Tzu',
    genre: 'Philosophy',
  },
  {
    title: 'The Fault in Our Stars',
    author: 'John Green',
    genre: 'Romance',
  },
  {
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    genre: 'Historical Fiction',
  },
  {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Classic',
  },
  {
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    genre: 'Fiction',
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
  },
  {
    title: 'To the Lighthouse',
    author: 'Virginia Woolf',
    genre: 'Fiction',
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    genre: 'Fantasy',
  },
  {
    title: 'The Road to Serfdom',
    author: 'Friedrich Hayek',
    genre: 'Non-fiction',
  },
  {
    title: 'The Fountainhead',
    author: 'Ayn Rand',
    genre: 'Philosophy',
  },
  {
    title: 'A Tale of Two Cities',
    author: 'Charles Dickens',
    genre: 'Classic',
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Dystopian',
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    genre: 'Fiction',
  },
  {
    title: 'The Secret History',
    author: 'Donna Tartt',
    genre: 'Thriller',
  },
  {
    title: 'The Light Between Oceans',
    author: 'M.L. Stedman',
    genre: 'Romance',
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    genre: 'Thriller',
  },
  {
    title: 'The Goldfinch',
    author: 'Donna Tartt',
    genre: 'Fiction',
  },
  {
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    genre: 'Romance',
  },
  {
    title: 'Big Little Lies',
    author: 'Liane Moriarty',
    genre: 'Mystery',
  },
  {
    title: 'The Night Manager',
    author: 'John le Carré',
    genre: 'Thriller',
  },
  {
    title: 'The Seven Deaths of Evelyn Hardcastle',
    author: 'Stuart Turton',
    genre: 'Mystery',
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Fiction',
  },
  {
    title: 'The Tattooist of Auschwitz',
    author: 'Heather Morris',
    genre: 'Historical Fiction',
  },
  {
    title: 'The Midnight Library',
    author: 'Matt Haig',
    genre: 'Fiction',
  },
  {
    title: 'The Silent Corner',
    author: 'Dean Koontz',
    genre: 'Thriller',
  },
  {
    title: 'The Girl with the Louding Voice',
    author: 'Abi Daré',
    genre: 'Fiction',
  },
  {
    title: 'The Rosie Project',
    author: 'Graeme Simsion',
    genre: 'Romance',
  },
];

const genres = ['All Genres', 'Fiction', 'Dystopian', 'Fantasy', 'Adventure', 'Classic'];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  useEffect(() => {
    filterBooks(searchQuery, selectedGenre); // Initialize filtered books
  }, []); // Empty array means this effect runs only once on mount

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
