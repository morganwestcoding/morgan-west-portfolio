import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import paths from '../../../../Assets/Images/Morgan/notif-ipad.png';
import bigBubble from '../../../../Assets/Images/Morgan/notif-iphone.png';



const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(1.25)`,
  }),
})`
bottom: -20vh;
left: 3vw;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
filter: blur(0.2px);
`;

const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(1.5)`,
  }),
})`
bottom: 0vh;
right: 5vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 45vh;
filter: blur(0.2px);
`;

class VoistrapWebImages extends Component {
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
        <Paths src={paths} scroll={scrollPercent} alt="notifpage-iphone" />
        <BigBubble src={bigBubble} scroll={scrollPercent} alt="notifpage-ipad" />
      </React.Fragment>
    );
  }
}

VoistrapWebImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapWebImages;
