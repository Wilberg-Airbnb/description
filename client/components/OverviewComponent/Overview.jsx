import React from 'react';
import styled from 'styled-components';
import Cancellation from '../Icons/Cancellation.svg';
import Cleanandtidy from '../Icons/Cleanandtidy.svg';
import EnhancedClean from '../Icons/EnhancedClean.svg';
import EntireHome from '../Icons/EntireHome.svg';
import Greatcheckinexperience from '../Icons/Greatcheckinexperience.svg';
import Outstandinghospitality from '../Icons/Outstandinghospitality.svg';
import GreatLocation from '../Icons/GreatLocation.svg';
import Greatcommunication from '../Icons/Greatcommunication.svg';
import Selfcheckin from '../Icons/Selfcheckin.svg';
import { overView } from '../../../database/helpers';

// Display Svgs in column format
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

// Within the flex box, display the icon and the description inline as rows
const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const OverViewDiv = styled.div`
  margin-left: 15px;
`;

const MainHeader = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

const HeaderDescription = styled.span`
  font-size: 10px;
`;

const Overview = ({ strictCancellation, overview, entirePlace }) => {
  let svgsToDisplay = [];
  if (overview.length !== 0) {
    overview.forEach((item) => {
      if (item.mainHeader === 'Clean and tidy') {
        svgsToDisplay.push(
          <Row>
            <Cleanandtidy height={50} width={50}></Cleanandtidy>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription>{item.description}</HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Great Location') {
        svgsToDisplay.push(
          <Row>
            <GreatLocation height={50} width={50}></GreatLocation>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription>{item.description}</HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Enhanced Clean') {
        svgsToDisplay.push(
          <Row>
            <EnhancedClean height={50} width={50}></EnhancedClean>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription>{item.description}</HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Self check-in') {
        svgsToDisplay.push(
          <Row>
            <Selfcheckin height={50} width={50}></Selfcheckin>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription>{item.description}</HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Great check-in experience') {
        svgsToDisplay.push(
          <Row>
            <Greatcheckinexperience
              height={50}
              width={50}
            ></Greatcheckinexperience>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription>{item.description}</HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Great communication') {
        svgsToDisplay.push(
          <Row>
            <Greatcommunication height={50} width={60}></Greatcommunication>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription>{item.description}</HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Outstanding hospitality') {
        svgsToDisplay.push(
          <Row>
            <Outstandinghospitality
              height={30}
              width={50}
            ></Outstandinghospitality>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription>{item.description}</HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
    });
  }
  if (entirePlace.bathNumber && entirePlace.entirePlace === true) {
    svgsToDisplay.push(
      <Row>
        <EntireHome height={50} width={50}></EntireHome>
        <OverViewDiv>
          <MainHeader>Entire {entirePlace.typeOfPlace}</MainHeader>
          <br></br>
          <HeaderDescription>
            You'll have the {entirePlace.typeOfPlace} to yourself
          </HeaderDescription>
        </OverViewDiv>
      </Row>
    );
  }

  return (
    <div>
      <Container>{svgsToDisplay}</Container>
    </div>
  );
};

export default Overview;
