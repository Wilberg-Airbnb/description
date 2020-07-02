import React from 'react';
import styled from 'styled-components';
import BedroomCard from './BedroomCard.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
  overflow: hidden;
  left: ${(props) => props.left}%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: inline-block;
`;

const CenterContainer = styled.div`
  text-align: center;
`;

class BedroomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      left: 0,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveLeft() {
    if (this.state.currentSlide > 0) {
      this.setState({
        left: this.state.left + 100,
        currentSlide: this.state.currentSlide - 6,
      });
    }
  }

  moveRight() {
    if (this.state.currentSlide < this.props.length) {
      this.setState({
        left: this.state.left - 100,
        currentSlide: this.state.currentSlide + 6,
      });
    }
  }

  render() {
    let bedroomcards = this.props.sleepingArrangements.map((card, i) => {
      return <BedroomCard bedroomDescription={card}></BedroomCard>;
    });

    return (
      <CenterContainer>
        <button id="moveLeft" onClick={this.moveLeft}>
          Move Left
        </button>
        <button id="moveRight" onClick={this.moveRight}>
          Move Right
        </button>

        {/* <Slider className="slider"> */}
        <Wrapper className="wrap" left={this.state.left}>
          {bedroomcards}
        </Wrapper>
        {/* </Slider> */}
      </CenterContainer>
    );
  }
}
export default BedroomCarousel;
