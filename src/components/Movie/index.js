import React from "react";
import PropTypes from "prop-types";

Movie.propTypes = {
  title: PropTypes.string,
};
Movie.defaultProps = {
  title: "",
};

function Movie({ title }) {
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Movie;
