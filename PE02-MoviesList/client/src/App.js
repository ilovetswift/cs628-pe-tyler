import React, { useState } from 'react';
import { movies } from './data.js';
import './DropList.jsx'
import DropList from './DropList.jsx';
import './MovieList.css'

function MovieList({ items }) {
const handleCardClick = (movie) => {
    alert(`You clicked on ${movie.title}`);
  };
  return (
    <div className="card-list">
      {items.map(movie => (
        <div className="card" key={movie.id} onClick={() => handleCardClick(movie)}>
          <h3>{movie.title}</h3>
          <p>
            Genre: {movie.genre}<br />
            Release Year: {movie.releaseYear}
          </p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);

  let filteredMovies;
  
  if (selectedGenre && selectedGenre.value !== 'all') {
    filteredMovies = movies.filter(movie =>
      movie.genre.toLowerCase().includes(selectedGenre.value.toLowerCase())
    );
  }
  else {
    filteredMovies = movies;
  }

  return (
    <article>
      <h1>Movies</h1>
      <div className='dropdown-container'>
        <DropList selected={selectedGenre} setSelected={setSelectedGenre} />
      </div>
      <MovieList items={filteredMovies}/>
    </article>
  );
}

export default App;
