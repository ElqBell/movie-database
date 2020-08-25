import React from "react"
import MovieCard from '../movie-card';

export default function Movies({movies, genres}) {
  // sort descending by popularity and render only 3 movie information cards
  movies.sort((a, b) => b.popularity - a.popularity);
  const results = movies.map((movie, index) => {
      if(index < 3)
        return <MovieCard key={movie.id} movie={movie} genres={genres}/>
  });

  return (
      <div className="results-wrapper">
          {results ? results : null}
      </div>
  );
}
