import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import voistrapHomeImg from '../../../../Assets/Images/Morgan/element-iphone.png';
import voistrapMeetingsImg from '../../../../Assets/Images/Morgan/element-ipad.png';
import voistrapScoreImg from '../../../../Assets/Images/Morgan/element-ipad-side.png';


const VoistrapPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:1vw;
/* border: 1px dashed red; */
height: 70vh; 
`;

const VoistrapPhoneMeetings = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 3vw;
/* border: 1px dashed red; */
height: 75vh;
filter: blur(0.6px);
`;

const VoistrapPhoneScore = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-85vh;
left:-1.5vw;
position: absolute;
/* border: 1px dashed red; */
height: 75vh;
filter: blur(0.8px);
`;


class VoistrapImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <VoistrapPhoneScore src={voistrapScoreImg} scroll={scrollPercent} alt="element-ipad-side" />
        <VoistrapPhoneMeetings src={voistrapMeetingsImg} scroll={scrollPercent} alt="element-ipad" />
        <VoistrapPhoneHome src={voistrapHomeImg} scroll={scrollPercent} alt="element-iphone" />
      </React.Fragment>
    );
  }
}

VoistrapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapImages;
