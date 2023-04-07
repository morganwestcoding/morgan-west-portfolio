import React, { Component } from 'react';
import styled from 'styled-components';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.4;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: '#1',
        projectName: 'Elements',
        projectDesc: '2 Player game designed to showcase a battle amongst the four elements.',
        projectType: 'WEB APP',
        roles: ['HTML / Javascript'],
      },
      {
        number: '#2',
        projectName: 'Password Generator',
        projectDesc: 'A password creation tool to help increase your cyber security by creating unique and intricate codes.',
        projectType: 'WEB APP',
        roles: ['HTML', 'Javascript'],
      },
      {
        number: '#3',
        projectName: 'DevFinder',
        projectDesc: 'Web platform developed to curate web developer roles around the world, along with various filters for Location and job type.',
        projectType: 'WEB APP',
        roles: ['HMTL', 'Javascript'],
      },
      {
        number: '#4',
        projectName: 'Todo',
        projectDesc: 'A checklist application to organize and enhance overall productivity for my daily tasks.',
        projectType: 'WEB APP',
        roles: ['HTML', 'Javascript'],
      },
      {
        number: '#5',
        projectName: 'Color Pallete Generator',
        projectDesc: 'Creative application to generate endless color pallete schemes for creative projects and execution.',
        projectType: 'WEB APP',
        roles: ['HTML', 'Javascript'],
      },
      {
        number: '#6',
        projectName: 'Notifications Page',
        projectDesc: 'A notification page mockup for social media platforms displaying various user actions and engagements.',
        projectType: 'WEB CONCEPT',
        roles: ['HTML', 'Javascript'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState(
      {
        vh: Math.round(
          window.document.documentElement.clientHeight * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
