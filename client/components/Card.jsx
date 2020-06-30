import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const StyledCard = styled.div`
  height: 200px;
  width: 150px;
  margin-left: 30px;
  margin-right: 30px;
  background-color: #fff;
  filter: drop-shadow(0px 0px 0px #fff);
  flex: 1;
`;

const Photo = styled.div`
  content: url(${(props) => props.photo});
`;

const Description = styled.p`
  font-size: 10px;
  font-family: 'Verdana';
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: none;
  ${StyledCard}:hover & {
    display: block;
  }
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledCard>
        <Photo photo={this.props.thingsToDo.activityPhoto}></Photo>
        <Description>{this.props.thingsToDo.activityDescription}</Description>
        <Description id="description">
          From ${this.props.thingsToDo.pricePerPerson}/person · Sports
        </Description>
        <Icon id="likeIcon">
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </Icon>
      </StyledCard>
    );
  }
}
export default Card;
