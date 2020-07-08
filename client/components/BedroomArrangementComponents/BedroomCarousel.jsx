import React from 'react';
import styled from 'styled-components';
import BedroomCard from './BedroomCard.jsx';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

// Align arrows in the middle by calculating the
// size of the card
const ArrowWrapper = styled.div`
  padding-top: 30px;
`;
// Wrapper will show all cards in a row as per the flex direction
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: hidden;
  width: 100%;
`;
// Added border
const Slider = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  display: inline-block;
  border-top: solid 1px rgb(221, 221, 221);
  border-bottom: solid 1px rgb(221, 221, 221);
  padding-top: 24px;
  padding-bottom: 30px;
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
            <ArrowWrapper>
              <ArrowBackRoundedIcon onClick={this.moveLeft} />
            </ArrowWrapper>
          )}
          {bedroomcards}
          {/* Conditionally render the right arrow if you're NOT at the last slide */}
          {this.state.slidesShown >
          this.props.sleepingArrangements.length ? null : (
            <ArrowWrapper>
              <ArrowForwardRoundedIcon onClick={this.moveRight} />
            </ArrowWrapper>
          )}
        </Wrapper>
      </Slider>
      // </CenterContainer>
    );
  }
}

export default BedroomCarousel;
