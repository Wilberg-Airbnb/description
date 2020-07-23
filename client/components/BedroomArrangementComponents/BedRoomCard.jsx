import React from 'react';
import styled from 'styled-components';

const SleepingArrangementCard = styled.div`
  height: 110px;
  width: 135px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(221, 221, 221);
  border-radius: 5px;
  margin-right: 10px;
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
      <img src="assets/singlebed.png" style={{ maxHeight: '25px' }}></img>
    );
  }
  if (arrangementType === 'Double') {
    BedIcon = (
      <img src="assets/doublebed.png" style={{ maxHeight: '25px' }}></img>
    );
  }
  if (arrangementType === 'Queen') {
    BedIcon = (
      <img src="assets/queenbed.png" style={{ maxHeight: '25px' }}></img>
    );
  }
  if (arrangementType === 'King') {
    BedIcon = (
      <img src="assets/kingbed.png" style={{ maxHeight: '25px' }}></img>
    );
  }
  if (arrangementType === 'Couch') {
    BedIcon = <img src="assets/couch.png" style={{ maxHeight: '25px' }}></img>;
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
