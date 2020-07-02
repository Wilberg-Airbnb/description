import React from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
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

class ThingsToDoCarousel extends React.Component {
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
    let cards = this.props.thingsToDo.map((card, i) => {
      return <Card thingsToDo={card}></Card>;
    });

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
            {cards}
          </Wrapper>
        </Slider>
      </CenterContainer>
    );
  }
}
export default ThingsToDoCarousel;
