import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Carousel, Button } from "react-bootstrap";
SliderItem.propTyes = {
  slider: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
  }),
};
SliderItem.defaultProps = {
  slider: {},
};
function SliderItem({ slider }) {
  return (
    <SliderItemContainer>
      <img
        src={`https://image.tmdb.org/t/p/original${slider.backdrop_path}`}
        alt="img"
        className="backgroundSlider"
      />
      <Carousel.Caption>
        <h1 className="title">{slider.original_title}</h1>
        <h5>{slider.release_date}</h5>
        <Button href="#" className="btn">
          Watch it
        </Button>
      </Carousel.Caption>
    </SliderItemContainer>
  );
}
const SliderItemContainer = styled.div`
  img {
    width: 100%;
  }
  .title {
    color: #fefedf;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    text-shadow: 2px 0 0 #333, -2px 0 0 #333, 0 2px 0 #333, 0 -2px 0 #333,
      1px 1px #333, -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333;
  }
  h5 {
    color: #fefedf;
  }
  .carousel-caption {
    text-align: left;
    margin-top: 20rem;
    bottom: none !important;
    top: -20px !important;
  }
  .btn {
    border: 1.5px #43877b solid;
    background: #43877b;
    color: #fefedf;
    transition: all 0.5s ease;
    :hover {
      color: #fff;
      background: none;
    }

    :active:focus {
      background: none;
      box-shadow: none;
    }
  }
`;
export default SliderItem;
