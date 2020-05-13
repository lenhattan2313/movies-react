import React from "react";
import PropTypes from "prop-types";
import MovieItem from "../MovieItem";
import styled from "styled-components";
MovieList.propTypes = {
  movies: PropTypes.array,
};
MovieList.defaultProps = {
  movies: [],
};

function MovieList({ movies }) {
  return (
    <MovieListContainer className="movieList">
      {movies.map((movie, index) => {
        return <MovieItem key={index} image={movie.poster_path} />;
      })}
    </MovieListContainer>
  );
}
const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 10px;
`;
export default MovieList;
