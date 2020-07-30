import React from 'react';
import styled from 'styled-components';

// Display Svgs in column format
const Container = styled.div`
  #description & {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-bottom: 25px;
  }
  /* margin-left: 15%; */
`;

// Within the flex box, display the icon and the description inline as rows
const Row = styled.div`
  #description & {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
`;

const OverViewDiv = styled.div`
  #description & {
    margin-left: 5px;
  }
`;

const MainHeader = styled.span`
  #description & {
    font-weight: bold;
    font-size: 10px;
  }
`;

const HeaderDescription = styled.span`
  #description & {
    font-size: 8px;
  }
`;

const Overview = ({
  cancellationPolicy,
  overview,
  entirePlace,
  strictCancellation,
}) => {
  let iconsToDisplay = [];
  if (overview.length !== 0) {
    overview.forEach((item, i) => {
      if (item.mainHeader === 'Clean and tidy') {
        iconsToDisplay.push(
          <Row key={item._id}>
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
          <Row key={item._id}>
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
          <Row key={item._id}>
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
          <Row key={item._id}>
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
          <Row key={item._id}>
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
          <Row key={item._id}>
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
          <Row key={item._id}>
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
      <Row key={'entirePlace'}>
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
      <Row key={'Strict'}>
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
