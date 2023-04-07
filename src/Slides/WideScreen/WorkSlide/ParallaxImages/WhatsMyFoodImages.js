import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import homeImg from '../../../../Assets/Images/Morgan/pass-weak-iphone.png';
import restaurantImg from '../../../../Assets/Images/Morgan/pass-strong-iphone.png';
import addFoodImg from '../../../../Assets/Images/Morgan/pass-med-ipad.png';

const Restaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

const AddFood = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(1.1)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-85vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.2px);
`;

const AddRestaurant = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: 5vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(1.2px);
`;

class WhatsMyFoodImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <AddFood src={addFoodImg} scroll={scrollPercent} alt="pass-med-ipad" />
        <Home src={homeImg} scroll={scrollPercent} alt="pass-weak-iphone" />
        <Restaurant src={restaurantImg} scroll={scrollPercent} alt="pass-strong-iphone" />
      </React.Fragment>
    );
  }
}

WhatsMyFoodImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default WhatsMyFoodImages;
