import React from 'react';
import styled from 'styled-components';
import ThingsToDoCard from './ThingsToDoCard.jsx';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/Io';
import axios from 'axios';
const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  overflow: hidden;
  width: 60%;
  margin: auto;
  text-align: left;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: auto;
`;

class ThingsToDoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      left: 0,
      right: 5,
      slidesShown: 5,
      listingId: window.location.pathname.slice(1, -1),
      thingsToDo: null,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }
  componentDidMount() {
    axios
      .get(`http://52.14.166.9:4000/api/description/${this.state.listingId}`)
      .then(({ data }) => {
        this.setState({
          thingsToDo: data.thingsToDo,
        });
      })
      .catch((error) => {
        console.log('Error retrieving data!', error);
      });
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
    let cards;
    if (this.state.thingsToDo !== null) {
      cards = this.state.thingsToDo
        .map((card, i) => {
          return (
            <ThingsToDoCard key={card._id} thingsToDo={card}></ThingsToDoCard>
          );
        })
        .slice(this.state.left, this.state.right + 1);
    }
    return (
      <Container>
        <Header>
          <h4>Things to do nearby</h4>
          <br></br>
          <div>
            <IoIosArrowDropleft
              id="moveLeft"
              onClick={this.moveLeft}
            ></IoIosArrowDropleft>
            <IoIosArrowDropright
              id="moveRight"
              onClick={this.moveRight}
            ></IoIosArrowDropright>
          </div>
        </Header>

        <Wrapper className="wrap" left={this.state.left}>
          {cards}
        </Wrapper>
      </Container>
    );
  }
}
export default ThingsToDoCarousel;
