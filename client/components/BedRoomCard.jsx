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

class BedRoomCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const arrangementType = this.props.bedroomDescription.bedroomDescription
      .split(' ')
      .pop();
    let BedIcon;
    if (arrangementType === 'bed') {
      BedIcon = <LocalHotelIcon />;
    } else {
      BedIcon = <WeekendIcon />;
    }
    console.log('The description', arrangementType);
    return (
      <SleepingArrangementCard>
        <div className="sleepingArrangement">
          {BedIcon}
          {this.props.bedroomDescription.bedroomDescription}
        </div>
      </SleepingArrangementCard>
    );
  }
}

export default BedRoomCard;
