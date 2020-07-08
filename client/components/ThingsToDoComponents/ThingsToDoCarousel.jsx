import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import ThingsToDoCard from './ThingsToDoCard.jsx';

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
      listingId: window.location.pathname.slice(1, -1),
      thingsToDo: [],
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
    if (this.state.currentSlide < this.state.thingsToDo.length) {
      this.setState({
        left: this.state.left - 100,
        currentSlide: this.state.currentSlide + 6,
      });
    }
  }
  componentDidMount() {
    console.log('For Things to do carousel');
    axios
      .get(`http://localhost:4000/api/description/${this.state.listingId}`)
      .then(({ data }) => {
        this.setState({
          thingsToDo: data.thingsToDo,
        });
      })
      .catch((error) => {
        console.log('Error retrieving data!', error);
      });
  }

  render() {
    let cards = this.state.thingsToDo.map((card, i) => {
      return <ThingsToDoCard key={card._id} thingsToDo={card}></ThingsToDoCard>;
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
