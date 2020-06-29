import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const StyledCard = styled.div`
  height: 200px;
  width: 150px;
  padding: 0;
  background-color: #fff;
  filter: drop-shadow(0px 0px 5px #666);
`;

const Photo = styled.div`
  content: url('https://picsum.photos/150/100');
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
  render() {
    return (
      <StyledCard>
        <Photo></Photo>
        <Description>Porto Accessible Sailing Tour</Description>
        <Description>From $52/person · Sports</Description>
        <Icon>
          <FavoriteBorderIcon></FavoriteBorderIcon>
        </Icon>
      </StyledCard>
    );
  }
}
export default Card;
