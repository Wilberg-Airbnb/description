import React from 'react';
import styled from 'styled-components';

const SleepingArrangementCard = styled.div`
  height: 85px;
  width: 120px;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(221, 221, 221);
  border-radius: 12px;
  margin-right: 10px;
`;

const IconDiv = styled.div`
  margin-right: 50%;
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
      <div className="sleepingArrangement">
        <div>{BedIcon}</div>
        <div className="header">{bedroomDescription.bedroomHeader}</div>
        <div className="description">
          {bedroomDescription.bedroomDescription}
        </div>
      </div>
    </SleepingArrangementCard>
  );
};

export default BedroomCard;
