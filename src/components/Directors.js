import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page </h1>
      { directors.map((directorInfo) =>
      { return(
        <div key={directorInfo.name}>
          <h2>{directorInfo.name}</h2>
          <ul>
            {directorInfo.movies.map((movie) => (
              <li key={movie}>{movie}</li>
            ))}
          </ul>
        </div>

      )}
      )}
    </div>
  );
}

export default Directors;
