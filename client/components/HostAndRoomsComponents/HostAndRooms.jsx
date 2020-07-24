import React from 'react';
import styled from 'styled-components';
const HostAndRoomsContainer = styled.div`
  padding-top: 15px;
  width: 60%;
  padding-bottom: 15px;
  border-bottom: solid 1px rgb(204, 212, 204);
  font-size: 14px;
  display: flex;
  align-items: row;
  justify-content: space-around;
`;
const ImageUrl =
  'https://s3.amazonaws.com/uifaces/faces/twitter/kevinjohndayy/128.jpg';

const StyledImage = styled.div`
  position: absolute;
`;

const Header = styled.main`
  font-size: 19px;
  font-weight: bold;
`;

const PlaceSummary = styled.summary`
  font-size: 16px;
`;

const HostAndRooms = ({ hostAndRooms }) => {
  let summary = '';
  if (hostAndRooms.entirePlace) {
    summary = `Entire ${hostAndRooms.typeOfPlace} hosted by ${hostAndRooms.name}`;
  } else {
    summary = `Private rooms in ${hostAndRooms.typeOfPlace} hosted by ${hostAndRooms.name}`;
  }
  let accomodationBreakDown = `${hostAndRooms.maxNumberOfGuests} guests ${hostAndRooms.rooms} bedrooms ${hostAndRooms.bedNumber} beds ${hostAndRooms.bathNumber} baths`;

  return (
    <HostAndRoomsContainer>
      <div>
        <Header className="place">{summary}</Header>
        <PlaceSummary className="accomodations">
          {accomodationBreakDown}
        </PlaceSummary>
      </div>
      <img src={ImageUrl} style={{ borderRadius: '50%', height: '70px' }}></img>
    </HostAndRoomsContainer>
  );
};

export default HostAndRooms;
