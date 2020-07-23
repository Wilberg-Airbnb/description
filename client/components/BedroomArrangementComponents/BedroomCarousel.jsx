import React from 'react';
import styled from 'styled-components';
import BedroomCard from './BedroomCard.jsx';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/Io';

// Align arrows in the middle by calculating the
// size of the card
// Use position absoulute to take arrows out of flow of container to then overlap
const ArrowWrapperLeft = styled.div`
  padding-top: 40px;
  position: absolute;
  margin-left: -10px;
`;
const ArrowWrapperRight = styled.div`
  padding-top: 40px;
  float: right;
  margin-left: -25px;
`;

// Wrapper will show all cards in a row as per the flex direction
// Use flex start to always have cards spaced to the left so when there
// are less than 3 cards they dont spread
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
`;
// Added border
const Slider = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  display: inline-block;
  border-bottom: solid 1px rgb(221, 221, 221);
  padding-top: 24px;
  padding-bottom: 30px;
  margin-left: 15%;
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
      // <CenterContainer>
      <Slider className="slider">
        <div>
          <h4>Sleeping Arrangements</h4>
        </div>

        <Wrapper className="wrap" left={this.state.left}>
          {/* Conditionally render the left arrow if you're NOT on the first page */}
          {this.state.currentSlide === 0 ? null : (
            <ArrowWrapperLeft>
              <IoIosArrowDropleft size={25} onClick={this.moveLeft} />
            </ArrowWrapperLeft>
          )}
          {bedroomcards}
          {/* Conditionally render the right arrow if you're NOT at the last slide */}
          {this.state.slidesShown >
          this.props.sleepingArrangements.length ? null : (
            <ArrowWrapperRight>
              <IoIosArrowDropright size={25} onClick={this.moveRight} />
            </ArrowWrapperRight>
          )}
        </Wrapper>
      </Slider>
      // </CenterContainer>
    );
  }
}

export default BedroomCarousel;
