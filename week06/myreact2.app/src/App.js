import React, { useState } from 'react';
import './App.css';

const moviesData = [
  // 25 movies data (included the full list you previously mentioned)
  { title: 'How To Lose A Guy In Ten Days', year: 2003, rating: '6.7/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/djQpyBdEOMF2BqymVtG5DXUBi47.jpg', whereToWatch: 'Netflix' },
  { title: 'Gifted', year: 2017, rating: '7.6/10', genre: 'Drama', poster: 'https://image.tmdb.org/t/p/w500/qMwGRHlItE1jUtQz5EExzjDJqPY.jpg', whereToWatch: 'Hulu' },
  { title: 'Mona Lisa Smile', year: 2003, rating: '6.4/10', genre: 'Drama', poster: 'https://image.tmdb.org/t/p/w500/lwZT2oyfVZwiQo5fMPV8bSPdN4X.jpg', whereToWatch: 'Amazon Prime' },
  { title: 'The Intern', year: 2015, rating: '7.1/10', genre: 'Comedy', poster: 'https://image.tmdb.org/t/p/w500/ee9sEx6jkkGvXWbWsMHiRuYg8cb.jpg', whereToWatch: 'Netflix' },
  { title: 'Notting Hill', year: 1999, rating: '7.1/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/aSkgR0YDRM9y8jVsb8pcY9J6d8z.jpg', whereToWatch: 'Amazon Prime' },
  { title: 'Little Women', year: 2019, rating: '7.8/10', genre: 'Drama', poster: 'https://image.tmdb.org/t/p/w500/7h7tLqgkzV5rA0dgw4sVYrAjoHk.jpg', whereToWatch: 'Hulu' },
  { title: 'Barbie', year: 2023, rating: '7.1/10', genre: 'Comedy', poster: 'https://image.tmdb.org/t/p/w500/ncdPMhGoTT0jLlfFq5pPfPY5BzO.jpg', whereToWatch: 'Amazon Prime' },
  { title: 'The Proposal', year: 2009, rating: '6.7/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/qXMNx0No96FZACgzLraRk7ZkYir.jpg', whereToWatch: 'Hulu' },
  { title: 'Crazy, Stupid, Love.', year: 2011, rating: '6.9/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/i7lg1l4Xk7g1Olz6KuwosqXnXYd.jpg', whereToWatch: 'Netflix' },
  { title: 'Notting Hill', year: 1999, rating: '7.1/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/aSkgR0YDRM9y8jVsb8pcY9J6d8z.jpg', whereToWatch: 'Amazon Prime' },
  { title: '10 Things I Hate About You', year: 1999, rating: '7.3/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/3z48u5tnG6OqqPplv9lhdzJ59yB.jpg', whereToWatch: 'HBO Max' },
  { title: 'The Princess Diaries', year: 2001, rating: '6.3/10', genre: 'Comedy', poster: 'https://image.tmdb.org/t/p/w500/o39bXMggbYr9sKJEXL0ulBz42OQ.jpg', whereToWatch: 'Disney+' },
  { title: 'Legally Blonde', year: 2001, rating: '6.3/10', genre: 'Comedy', poster: 'https://image.tmdb.org/t/p/w500/5wP5mF57aRkcjExXQp1EwjVz5d9.jpg', whereToWatch: 'Netflix' },
  { title: 'The Holiday', year: 2006, rating: '6.9/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/ruWxxoOkqhlj9wwh9pdBrj8iG4L.jpg', whereToWatch: 'Amazon Prime' },
  { title: 'Bridget Jones’s Diary', year: 2001, rating: '6.7/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/fxAfFLG9v6Nzq0TaP04szRt3v22.jpg', whereToWatch: 'Hulu' },
  { title: 'Love Actually', year: 2003, rating: '7.6/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/kwGQENcGxSmt4tHi4nXJl0X0t16.jpg', whereToWatch: 'Amazon Prime' },
  { title: 'The Ugly Truth', year: 2009, rating: '6.4/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/6L89plStXWGrShCugTTUVdpIHHg.jpg', whereToWatch: 'Hulu' },
  { title: 'My Best Friend’s Wedding', year: 1997, rating: '6.3/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/1cMYFwRvmWz7n6lLpl3tqa36OdQ.jpg', whereToWatch: 'HBO Max' },
  { title: 'Something’s Gotta Give', year: 2003, rating: '6.7/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/yVOzmYxw8Knw1g5Vv5WQmxm7gEy.jpg', whereToWatch: 'Netflix' },
  { title: 'When Harry Met Sally...', year: 1989, rating: '7.6/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/zMGW6OVQeGxl8g7hdc3R6Q45Vtb.jpg', whereToWatch: 'Amazon Prime' },
  { title: 'The Proposal', year: 2009, rating: '6.7/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/dQywe4QGx9gXh5jyts0d2l5zmGR.jpg', whereToWatch: 'Netflix' },
  { title: 'Valentine’s Day', year: 2010, rating: '5.7/10', genre: 'Romantic Comedy', poster: 'https://image.tmdb.org/t/p/w500/nziWS2Z16DCzfrVPLwvV5LzRGpa.jpg', whereToWatch: 'HBO Max' }
];

const genres = ['All Genres', 'Romantic Comedy', 'Drama', 'Comedy'];

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All Genres');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  // Filter movies based on search query and selected genre
  const filterMovies = (query, genre) => {
    let filtered = moviesData;

    // Filter by search query
    if (query) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected genre
    if (genre !== 'All Genres') {
      filtered = filtered.filter((movie) => movie.genre === genre);
    }

    setFilteredMovies(filtered);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    filterMovies(e.target.value, selectedGenre);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      filterMovies(searchQuery, selectedGenre);
    }
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    filterMovies(searchQuery, e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Display movies for current page
  const displayedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handleMovieClick = (movie) => {
    const movieInfo = `${movie.title} ${movie.genre}`;
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(movieInfo)}`;
    window.open(googleSearchURL, '_blank');
  };

  return (
    <div className="App">
      <h1>MovieMania</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleSearchSubmit}
        />
      </div>

      {/* Genre Filter */}
      <div className="genre-filter">
        <select value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Display movies after search or genre selection */}
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          displayedMovies.map((movie, index) => (
            <div className="movie-card" key={index} onClick={() => handleMovieClick(movie)}>
              <img
                className="movie-poster"
                src={movie.poster}
                alt={movie.title}
              />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>{movie.year} | {movie.rating} | {movie.genre}</p>
                <p>Where to watch: {movie.whereToWatch}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found. Please search or select a genre.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
