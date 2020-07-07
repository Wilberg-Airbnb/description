import React from 'react';
import styled from 'styled-components';
import BedroomCard from './BedroomCard.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: flex-end;
  overflow: hidden;
`;

const Slider = styled.div`
  position: relative;
  width: 30%;
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
      right: 2,
      slidesShown: 3,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveLeft() {
    if (this.state.currentSlide > 0) {
      this.setState({
        left: this.state.left - 3,
        right: this.state.right - 3,
        currentSlide: this.state.currentSlide - 1,
        slidesShown: this.state.slidesShown - 3,
      });
    }
  }

  moveRight() {
    if (this.state.slidesShown < this.props.sleepingArrangements.length) {
      this.setState({
        left: this.state.left + 3,
        right: this.state.right + 3,
        currentSlide: this.state.currentSlide + 1,
        slidesShown: this.state.slidesShown + 3,
      });
    }
  }

  render() {
    let bedroomcards = this.props.sleepingArrangements
      .map((card, i) => {
        return (
          <BedroomCard key={card._id} bedroomDescription={card}></BedroomCard>
        );
      })
      .slice(this.state.left, this.state.right + 1);
    return (
      <CenterContainer>
        <button id="moveLeft" onClick={this.moveLeft}>
          Move Left
        </button>
        <button id="moveRight" onClick={this.moveRight}>
          Move Right
        </button>
        <Slider className="slider">
          <Wrapper className="wrap" left={this.state.left}>
            {bedroomcards}
          </Wrapper>
        </Slider>
      </CenterContainer>
    );
  }
}

export default BedroomCarousel;
