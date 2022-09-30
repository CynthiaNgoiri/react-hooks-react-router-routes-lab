import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsInfo=actors.map(actorInfo=>{
    return(
      <div key={actorInfo.name}>
      <h2>{actorInfo.name}</h2>
      <ul>
        {actorInfo.movies.map(movie=>{
          return(
            <li key= {movie}>
              {movie}
            </li>
          )
        })}
      </ul>
      </div>

    )
  })
  return(
    <div>
      <h1>Actors Page</h1>
      {actorsInfo}
    </div>
  )
}

export default Actors;
