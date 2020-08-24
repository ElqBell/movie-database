import React, { useState } from "react"
import Movies from '../movies';

export default function Main({genres}) {
  const [movies, setMovies] = useState();

  // get movies that match the input
  const getMovies = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=20bbccce1133a0c3fa23ae9af625a36b&language=en-US&query=${query}`)
    .then(res => res.json())
    .then(data => setMovies(data.results));
  };

  // only execute fetch if the input is at least 3 characters
  const handleSearch = (e) => {
    if(e.target.value.length >= 3) {
      getMovies(e.target.value);
    }
  };

  return (
      <main>
        <div className="search-wrapper">
          <label htmlFor="movie">Search for a movie</label><br/>
          <input type="text/css" name="movie" id="movie" onChange={handleSearch}/>
        </div>
        {movies ? <Movies movies={movies} genres={genres}/> : null}
      </main>
  );
}