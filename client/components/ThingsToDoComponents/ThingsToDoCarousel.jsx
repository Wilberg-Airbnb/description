import React from 'react';
import styled from 'styled-components';
import ThingsToDoCard from './ThingsToDoCard.jsx';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/Io';
import axios from 'axios';

const DivContainer = styled.div`
  #things-to-do-carousel & {
    height: 400px;
    width: 100%;
    background-color: rgb(247, 247, 247);
  }
`;

const ScrollButton = styled.button`
  #things-to-do-carousel & {
    color: black;
    background-color: white;
    text-align: center;
    display: inline-block;
    font-size: 1.6vmin;
    height: 2.6vmin;
    width: 2.6vmin;
    box-shadow: rgb(169, 169, 169) 0.5px 0.5px 0.5px 1px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    text-decoration: none;
    margin: 1vmin 0.5vmin;
    border-radius: 50%;
    outline: none !important;
  }
`;

const Wrapper = styled.div`
  #things-to-do-carousel & {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    margin: auto;
    text-align: left;
  }
`;

const Header = styled.div`
  #things-to-do-carousel & {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;
  }
`;

const ThingsToDoTitle = styled.h4`
  #things-to-do-carousel & {
    font-size: 30px;
  }
`;

class ThingsToDoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      left: 0,
      right: 6,
      slidesShown: 5,
      listingId: window.location.pathname.slice(1, -1),
      thingsToDo: null,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }
  componentDidMount() {
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

  moveLeft() {
    if (this.state.currentSlide > 0) {
      this.setState({
        left: this.state.left - 6,
        right: this.state.right - 6,
        currentSlide: this.state.currentSlide - 1,
        slidesShown: this.state.slidesShown - 6,
      });
    }
  }

  moveRight() {
    if (this.state.slidesShown < this.state.thingsToDo.length - 1) {
      this.setState({
        left: this.state.left + 6,
        right: this.state.right + 6,
        currentSlide: this.state.currentSlide + 1,
        slidesShown: this.state.slidesShown + 6,
      });
    }
  }

  render() {
    let cards;
    let numberOfSlidesAvailabile;
    if (this.state.thingsToDo !== null) {
      numberOfSlidesAvailabile = this.state.thingsToDo.length / 6;
      cards = this.state.thingsToDo
        .map((card, i) => {
          return (
            <ThingsToDoCard key={card._id} thingsToDo={card}></ThingsToDoCard>
          );
        })
        .slice(this.state.left, this.state.right);
    }
    return (
      <DivContainer>
        <Header>
          <ThingsToDoTitle>Things to do nearby</ThingsToDoTitle>
          <br></br>
          <div>
            {this.state.currentSlide + 1} / {numberOfSlidesAvailabile}
            <ScrollButton id="moveLeft" onClick={this.moveLeft}>
              {'<'}
            </ScrollButton>
            <ScrollButton id="moveRight" onClick={this.moveRight}>
              {'>'}
            </ScrollButton>
          </div>
        </Header>
        <Wrapper className="wrap" left={this.state.left}>
          {cards}
        </Wrapper>
      </DivContainer>
    );
  }
}
export default ThingsToDoCarousel;
