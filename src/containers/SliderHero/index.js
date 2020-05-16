import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import * as sliderActions from "../../actions/slider";
import { bindActionCreators } from "redux";
import SliderItems from "../../components/SliderItem";
import { Carousel, Container } from "react-bootstrap";
import SearchBox from "../../components/SearchBox";
import styled from "styled-components";
const SliderHero = ({ sliders, sliderActionCreator, dispatch }) => {
  React.useEffect(() => {
    const { fetchSlider } = sliderActionCreator;
    fetchSlider();
  }, [sliderActionCreator]);
  return (
    <Container>
      <SliderHeroContainer>
        <Carousel>
          {sliders.map((slider, index) => {
            return (
              <Carousel.Item key={slider.backdrop_path}>
                <SliderItems slider={slider} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </SliderHeroContainer>
    </Container>
  );
};
SliderHero.propTypes = {
  sliders: PropTypes.array,
};
SliderHero.defaultProps = {
  sliders: [],
};
const mapStateToProps = (state) => {
  return {
    sliders: state.sliders.slider.results,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sliderActionCreator: bindActionCreators(sliderActions, dispatch),
  };
};
const SliderHeroContainer = styled.div`
  .carousel-indicators {
    display: none;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(SliderHero);
