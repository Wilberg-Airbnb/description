import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';

const PositioningStyle = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.3)',
};

const ScrollBoxStyle = {
  padding: 20,
  background: '#fff',
  borderRadius: '15px',
  display: 'inline-block',
  minHeight: '600px',
  margin: '1rem',
  position: 'relative',
  minWidth: '400px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  justifySelf: 'center',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '540px',
  width: '100%',
};

const ListItemStyle = {
  width: '100%',
  marginTop: '24px',
  paddingBottom: '15px',
  borderBottom: 'solid 1px rgb(204, 212, 204)',
  marginBottom: '24px',
  fontFamily: 'brandon-grotesque", sans-serif',
  fontSize: '12px',
};

const ULStyle = {
  padding: '0',
  listStyleType: 'none',
};

const AmenitiesModal = ({ toggleModal, listItems, headers }) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  // Clicking Outside of the modal logic
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      toggleModal();
    }
  };
  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  // Creating a map of subheaders
  let mapOfHeaders = {};
  headers.forEach((header) => {
    // Initializing each value to an array
    mapOfHeaders[header] = [];
  });
  // Pushing each amenity into its respective subheader
  listItems.map((item) => {
    mapOfHeaders[item.subheader].push(item);
  });

  let organizedHeaders = [];
  if (listItems.length > 0) {
    // Looping thru the map with each subHeader
    for (let item in mapOfHeaders) {
      // Pushing the respective subHeader into the organizedHeaders array
      organizedHeaders.push(
        <li style={ListItemStyle}>
          <b> {item}</b>
        </li>
      );
      // Pushing the children of THAT subheader into the organizedHeaders array
      mapOfHeaders[item].forEach((item) => {
        organizedHeaders.push(
          <li style={ListItemStyle}>
            {item.title}
            {item.amenityDescription}
          </li>
        );
      });
    }
  }
  return (
    <div style={PositioningStyle}>
      <div ref={myRef} onClick={handleClickInside} style={ScrollBoxStyle}>
        <h3>Amenities</h3>
        <ul style={ULStyle}>{organizedHeaders}</ul>
      </div>
    </div>
  );
};

export default AmenitiesModal;
