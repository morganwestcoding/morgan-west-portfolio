import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import englishHome from '../../../../Assets/Images/Morgan/pallete-ipad.png';
import jpnHome from '../../../../Assets/Images/Morgan/pallete-iphone.png';

const JapaneseTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-160vh;
left: 0vw;
/* border: 1px dashed red; */
height: 80vh;

`;

const EnglishTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -100vh;
right:0.5vw;
/* border: 1px dashed red; */
filter: blur(0.6px);
height: 80vh; 
`;



class KosenImages extends Component {
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
        <EnglishTab src={englishHome} scroll={scrollPercent} alt="pallete-ipad" />
        <JapaneseTab src={jpnHome} scroll={scrollPercent} alt="pallete-iphone" />
      </React.Fragment>
    );
  }
}

KosenImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default KosenImages;
