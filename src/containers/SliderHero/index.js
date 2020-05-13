import React from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { connect } from "react-redux";
import * as sliderActions from "../../actions/slider";
import { bindActionCreators } from "redux";
import SliderItem from "../../components/SliderItem";

class SliderHero extends React.Component {
  componentDidMount() {
    const { sliderActionCreator } = this.props;
    const { fetchSlider } = sliderActionCreator;
    fetchSlider();
  }
  handleClick = () => {};
  renderSlider = () => {
    const { sliders } = this.props;
    console.log(sliders);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    let xhtml = null;
    xhtml = (
      <Slider {...settings}>
        {sliders.map((slider, index) => (
          <SliderItem key={index} slider={slider} />
        ))}
      </Slider>
    );
    return xhtml;
  };
  render() {
    return <div className="wrapperSlider">{this.renderSlider()}</div>;
  }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(SliderHero);
