import React from 'react';
import styled from 'styled-components';

// Display Svgs in column format
const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
  width: 33%;
  border-top: solid 1px rgb(204, 212, 204);
  /* margin-left: 15%; */
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
  let iconsToDisplay = [];
  if (overview.length !== 0) {
    overview.forEach((item) => {
      if (item.mainHeader === 'Clean and tidy') {
        iconsToDisplay.push(
          <Row>
            <img
              src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/cleanandtidy.png"
              style={{ maxHeight: '25px' }}
            ></img>
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
        iconsToDisplay.push(
          <Row>
            <img
              src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/greatlocation.png"
              style={{ maxHeight: '25px' }}
            ></img>
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
        iconsToDisplay.push(
          <Row>
            <img
              src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/enhancedclean.png"
              style={{ maxHeight: '25px' }}
            ></img>
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
        iconsToDisplay.push(
          <Row>
            <img
              src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/selfcheckin.png"
              style={{ maxHeight: '25px' }}
            ></img>
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
        iconsToDisplay.push(
          <Row>
            <img
              src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/greatcheckinexperience.png"
              style={{ maxHeight: '25px' }}
            ></img>
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
        iconsToDisplay.push(
          <Row>
            <img
              src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/greatcommunication.png"
              style={{ maxHeight: '25px' }}
            ></img>
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
        iconsToDisplay.push(
          <Row>
            <img
              src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/outstandinghospitality.png"
              style={{ maxHeight: '25px' }}
            ></img>
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
    iconsToDisplay.push(
      <Row>
        <img
          src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/entirehome.png"
          style={{ maxHeight: '25px' }}
        ></img>
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
    iconsToDisplay.push(
      <Row>
        <img
          src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/cancellation.png"
          style={{ maxHeight: '25px' }}
        ></img>
        <OverViewDiv>
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
        </OverViewDiv>
      </Row>
    );
  }

  return <Container>{iconsToDisplay}</Container>;
};

export default Overview;
