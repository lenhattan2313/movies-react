import React from "react";
import PropTypes from "prop-types";
import img from "../../assets/image/error.png";
import styled from "styled-components";
MovieItem.propTypes = {
  image: PropTypes.string,
};
MovieItem.defaultProps = {
  image: null,
};

function MovieItem({ image }) {
  return (
    <MovieItemContainer>
      {image == null ? (
        <img src={img} alt="Not have poster" />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          alt="card image"
          style={{ width: "100%", height: 360 }}
        />
      )}
      <div className="detail">
        <a> View Detail</a>
      </div>
    </MovieItemContainer>
  );
}
const MovieItemContainer = styled.div`
  width: 250px;
  .detail {
    border: 1px solid black;
    cursor: pointer;
  }
`;

export default MovieItem;
