import React from "react";
import PropTypes from "prop-types";

SliderItem.propTypes = {
  slider: PropTypes.object,
};
SliderItem.defaultProps = {
  slider: {},
};

function SliderItem({ slider }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${slider.poster_path}`}
        alt="img"
      />
    </div>
  );
}

export default SliderItem;
