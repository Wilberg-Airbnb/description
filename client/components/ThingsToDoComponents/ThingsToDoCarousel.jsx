import React from 'react';
import styled from 'styled-components';
import ThingsToDoCard from './ThingsToDoCard.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: hidden;
  width: 60%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  border-top: solid 1px rgb(221, 221, 221);
  border-bottom: solid 1px rgb(221, 221, 221);
  padding-top: 24px;
  padding-bottom: 30px;
`;

class ThingsToDoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      left: 0,
      right: 5,
      slidesShown: 5,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveLeft() {
    if (this.state.currentSlide > 0) {
      this.setState({
        left: this.state.left - 5,
        right: this.state.right - 5,
        currentSlide: this.state.currentSlide - 1,
        slidesShown: this.state.slidesShown - 5,
      });
    }
  }

  moveRight() {
    if (this.state.slidesShown < this.props.thingsToDo.length) {
      this.setState({
        left: this.state.left + 5,
        right: this.state.right + 5,
        currentSlide: this.state.currentSlide + 1,
        slidesShown: this.state.slidesShown + 5,
      });
    }
  }

  render() {
    let cards = this.props.thingsToDo
      .map((card, i) => {
        return (
          <ThingsToDoCard key={card._id} thingsToDo={card}></ThingsToDoCard>
        );
      })
      .slice(this.state.left, this.state.right + 1);
    return (
      <div>
        <button id="moveLeft" onClick={this.moveLeft}>
          Move Left
        </button>
        <button id="moveRight" onClick={this.moveRight}>
          Move Right
        </button>
        {/* <Slider className="slider"> */}
        <Wrapper className="wrap" left={this.state.left}>
          {cards}
        </Wrapper>
        {/* </Slider> */}
      </div>
    );
  }
}
export default ThingsToDoCarousel;
