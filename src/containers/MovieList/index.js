import React from "react";
import { MOVIE_LIST } from "../../constant/movies";
import Movie from "../../components/Movie";

function MovieList(props) {
  const renderList = () => (
    <div>
      {MOVIE_LIST.map((movie) => {
        return <Movie key={movie.title} title={movie.title} />;
      })}
    </div>
  );
  return (
    <>
      <h1>Movies</h1>
      {renderList()}
    </>
  );
}

export default MovieList;
