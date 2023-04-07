import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import paths from '../../../../Assets/Images/Morgan/notif-ipad.png';
import bigBubble from '../../../../Assets/Images/Morgan/notif-iphone.png';


const BigBubble = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.8)`,
  }),
})`
bottom:-160vh;
left:2vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
width: 80vw;
filter: blur(0.5px);
`;

const Paths = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.7)`,
  }),
})`
bottom:-120vh;
right: 2vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
width: 80vw;
filter: blur(0.8px);
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
        <Paths src={paths} scroll={scrollPercent} alt="notifpage-ipad" />
        <BigBubble src={bigBubble} scroll={scrollPercent} alt="notifpage-iphone" />
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
