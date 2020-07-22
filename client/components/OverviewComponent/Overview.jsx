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
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  width: 33%;
  border-top: solid 1px rgb(204, 212, 204);
`;

// Within the flex box, display the icon and the description inline as rows
const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

const OverViewDiv = styled.div`
  margin-left: 5px;
`;

const CancellationOverViewDiv = styled.div`
  margin-left: 25px;
`;

const MainHeader = styled.span`
  font-weight: bold;
  font-size: 10px;
`;

const HeaderDescription = styled.span`
  font-size: 8px;
`;

const Overview = ({
  cancellationPolicy,
  overview,
  entirePlace,
  strictCancellation,
}) => {
  let svgsToDisplay = [];
  if (overview.length !== 0) {
    overview.forEach((item) => {
      if (item.mainHeader === 'Clean and tidy') {
        svgsToDisplay.push(
          <Row>
            <Cleanandtidy height={30} width={50}></Cleanandtidy>
            <OverViewDiv>
              <MainHeader>{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription className="description">
                {item.description}
              </HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Great Location') {
        svgsToDisplay.push(
          <Row>
            <GreatLocation height={30} width={50}></GreatLocation>
            <OverViewDiv>
              <MainHeader clasName="header">{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription className="description">
                {item.description}
              </HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Enhanced Clean') {
        svgsToDisplay.push(
          <Row>
            <EnhancedClean height={30} width={50}></EnhancedClean>
            <OverViewDiv>
              <MainHeader clasName="header">{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription className="description">
                {item.description}
              </HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Self check-in') {
        svgsToDisplay.push(
          <Row>
            <Selfcheckin height={30} width={50}></Selfcheckin>
            <OverViewDiv>
              <MainHeader clasName="header">{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription className="description">
                {item.description}
              </HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Great check-in experience') {
        svgsToDisplay.push(
          <Row>
            <Greatcheckinexperience
              height={30}
              width={50}
            ></Greatcheckinexperience>
            <OverViewDiv>
              <MainHeader clasName="header">{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription className="description">
                {item.description}
              </HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
      if (item.mainHeader === 'Great communication') {
        svgsToDisplay.push(
          <Row>
            <Greatcommunication height={30} width={50}></Greatcommunication>
            <OverViewDiv>
              <MainHeader clasName="header">{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription className="description">
                {item.description}
              </HeaderDescription>
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
              <MainHeader clasName="header">{item.mainHeader}</MainHeader>
              <br></br>
              <HeaderDescription className="description">
                {item.description}
              </HeaderDescription>
            </OverViewDiv>
          </Row>
        );
      }
    });
  }
  if (entirePlace.bathNumber && entirePlace.entirePlace === true) {
    svgsToDisplay.push(
      <Row>
        <EntireHome height={45} width={50}></EntireHome>
        <OverViewDiv>
          <MainHeader clasName="header">
            Entire {entirePlace.typeOfPlace}
          </MainHeader>
          <br></br>
          <HeaderDescription className="description">
            You'll have the {entirePlace.typeOfPlace} to yourself
          </HeaderDescription>
        </OverViewDiv>
      </Row>
    );
  }
  // Take care of async call for strictCancellation since it will return undefined first
  if (
    strictCancellation !== undefined &&
    strictCancellation.flexible === true
  ) {
    svgsToDisplay.push(
      <Row>
        <Cancellation height={25} width={25}></Cancellation>
        <CancellationOverViewDiv>
          <MainHeader clasName="header">
            Free cancellation until {strictCancellation.timeBeforeCancellation}
            hours before check-in.
          </MainHeader>
          <br></br>
          <HeaderDescription className="description">
            After that, cancel before check-in and get a
            {strictCancellation.percentRefund}, minus first night and service
            fee.
          </HeaderDescription>
        </CancellationOverViewDiv>
      </Row>
    );
  }

  return <Container>{svgsToDisplay}</Container>;
};

export default Overview;
