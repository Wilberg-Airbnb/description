import React from 'react';
import styled from 'styled-components';
import BedroomCard from './BedroomCard.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: hidden;
  width: 100%;
`;

const Slider = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  display: inline-block;
`;

const CenterContainer = styled.div`
  /* text-align: center; */
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
    // Reversed array to show arrangements in sequetnial order by room
    let bedroomcards = this.props.sleepingArrangements
      .reverse()
      .map((card, i) => {
        return (
          <BedroomCard key={card._id} bedroomDescription={card}></BedroomCard>
        );
      })
      .slice(this.state.left, this.state.right + 1);
    return (
      <CenterContainer>
        <div>
          <button id="moveLeft" onClick={this.moveLeft}>
            Move Left
          </button>
          <button id="moveRight" onClick={this.moveRight}>
            Move Right
          </button>
        </div>
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
