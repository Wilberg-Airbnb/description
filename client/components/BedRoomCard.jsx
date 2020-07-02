import React from 'react';
import styled from 'styled-components';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import WeekendIcon from '@material-ui/icons/Weekend';

const SleepingArrangementCard = styled.div`
  height: 85px;
  width: 120px;
  border-style: solid;
  border-width: 2px;
  border-color: #d7e6e8;
  border-radius: 15px;
`;

const BedroomCard = ({ bedroomDescription }) => {
  const arrangementType = bedroomDescription.bedroomDescription
    .split(' ')
    .pop();
  let BedIcon;
  if (arrangementType === 'bed') {
    BedIcon = <LocalHotelIcon />;
  } else {
    BedIcon = <WeekendIcon />;
  }
  return (
    <SleepingArrangementCard>
      <div className="sleepingArrangement">
        {BedIcon}
        <div className="header">{bedroomDescription.bedroomHeader}</div>
        <div className="description">
          {bedroomDescription.bedroomDescription}
        </div>
      </div>
    </SleepingArrangementCard>
  );
};

export default BedroomCard;
