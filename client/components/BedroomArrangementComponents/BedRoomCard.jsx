import React from 'react';
import styled from 'styled-components';

const SleepingArrangementCard = styled.div`
  height: 125px;
  width: 165px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(221, 221, 221);
  border-radius: 10px;
  margin-right: 20px;
`;

const SleepingArrangementContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-content: center;
  margin-top: 15px;
  margin-left: 18px;
`;

const SleepingHeader = styled.div`
  font-weight: bold;
  font-size: 11px;
`;

const SleepingDescription = styled.div`
  font-size: 10px;
`;

const BedroomCard = ({ bedroomDescription }) => {
  // Get first word to determine the type of bed
  const arrangementType = bedroomDescription.bedroomDescription.split(' ')[1];
  let BedIcon;
  console.log('The arrangement', arrangementType);
  if (arrangementType === 'Single') {
    BedIcon = (
      <img
        src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/singlebed.png"
        style={{ maxHeight: '25px' }}
      ></img>
    );
  }
  if (arrangementType === 'Double') {
    BedIcon = (
      <img
        src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/doublebed.png"
        style={{ maxHeight: '25px' }}
      ></img>
    );
  }
  if (arrangementType === 'Queen') {
    BedIcon = (
      <img
        src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/queenbed.png"
        style={{ maxHeight: '25px' }}
      ></img>
    );
  }
  if (arrangementType === 'King') {
    BedIcon = (
      <img
        src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/kingbed.png"
        style={{ maxHeight: '25px' }}
      ></img>
    );
  }
  if (arrangementType === 'Couch') {
    BedIcon = (
      <img
        src="https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/couch.png"
        style={{ maxHeight: '25px' }}
      ></img>
    );
  }
  return (
    <SleepingArrangementCard>
      <SleepingArrangementContainer>
        <div>{BedIcon}</div>
        <SleepingHeader className="header">
          {bedroomDescription.bedroomHeader}
        </SleepingHeader>
        <SleepingDescription className="description">
          {bedroomDescription.bedroomDescription}
        </SleepingDescription>
      </SleepingArrangementContainer>
    </SleepingArrangementCard>
  );
};

export default BedroomCard;
