import React from "react";
import { movies } from "../data";

function Movies() {
  const films = movies.map((film) => {
    return (
      <div key={film.title}>
        <h2>Title: {film.title}</h2>
        <p>Time: {film.time}</p>
        <p>Genre</p>
        <ul>
          {film.genres.map(genre => 
          ( <li key={genre}>{genre}</li>)
          )}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {films}
    </div>
  );
}

export default Movies;
