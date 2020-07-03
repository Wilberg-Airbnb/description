import React from 'react';

const HostAndRooms = ({ hostAndRooms }) => {
  let summary = '';
  if (hostAndRooms.entirePlace) {
    summary = `Entire ${hostAndRooms.typeOfPlace} hosted by ${hostAndRooms.name}`;
  } else {
    summary = `Private rooms in ${hostAndRooms.typeOfPlace} hosted by ${hostAndRooms.name}`;
  }
  let accomodationBreakDown = `${hostAndRooms.maxNumberOfGuests} guests ${hostAndRooms.rooms} bedrooms ${hostAndRooms.bedNumber} beds ${hostAndRooms.bathNumber}`;

  return (
    <div>
      <main className="place">{summary}</main>
      <summary className="accomodations">{accomodationBreakDown}</summary>
    </div>
  );
};

export default HostAndRooms;
