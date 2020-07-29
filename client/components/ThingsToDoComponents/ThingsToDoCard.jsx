import React from 'react';
import styled from 'styled-components';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
const StyledCard = styled.div`
  margin-right: 15px;
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
  margin-right: 40px;
  ${StyledCard}:hover & {
    display: block;
  }
`;
const ReviewAndStars = styled.span`
  font-size: 10px;
`;

const ThingsToDoCard = ({ thingsToDo }) => {
  return (
    <StyledCard>
      <Photo photo={thingsToDo.activityPhoto}></Photo>
      <Icon id="likeIcon">
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </Icon>
      <Description>{thingsToDo.activityDescription}</Description>
      <Description className="description">
        From ${thingsToDo.pricePerPerson}/person · Sports
      </Description>

      <ReviewAndStars>
        <StarIcon style={{ fontSize: 12 }}></StarIcon> {thingsToDo.stars} (
        {thingsToDo.numberOfReviews})
      </ReviewAndStars>
    </StyledCard>
  );
};

export default ThingsToDoCard;
