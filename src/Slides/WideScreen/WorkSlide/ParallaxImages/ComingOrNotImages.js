import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import cmgOrNotTabletImg from '../../../../Assets/Images/Morgan/devfinder-iphone.png';
import cmgOrNotIphoneImg from '../../../../Assets/Images/Morgan/devfinder-ipad.png';


const Iphone = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 12}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-65vh;
left: 0vw;
/* border: 1px dashed red; */
height: 70vh;
`;

const Tablet = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.94)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -17vh;
right:5vw;
/* border: 1px dashed red; */
height: 70vh; 
filter: blur(0.6px);
`;

class ComingOrNotImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    scrollPercent -= scrollOffsetInPercent;

    return (
      <React.Fragment>
        <Tablet src={cmgOrNotTabletImg} scroll={scrollPercent} alt="devfinder-iphone" />
        <Iphone src={cmgOrNotIphoneImg} scroll={scrollPercent} alt="devfinder-ipad" />
      </React.Fragment>
    );
  }
}

ComingOrNotImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ComingOrNotImages;
