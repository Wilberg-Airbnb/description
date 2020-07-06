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
};

const ULStyle = {
  padding: '0',
  listStyleType: 'none',
};

const AmenitiesModal = ({ toggleModal, listItems, headers }) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();
  let itemsToList;
  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      toggleModal();
    }
  };
  let mapOfHeaders = {};
  headers.forEach((header) => {
    mapOfHeaders[header] = [];
  });
  listItems.map((item) => {
    mapOfHeaders[item.subheader].push(item);
  });

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  let organizedHeaders = [];
  if (listItems.length > 0) {
    for (let item in mapOfHeaders) {
      organizedHeaders.push(<li style={ListItemStyle}>{item}</li>);
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
        <ul style={ULStyle}>{organizedHeaders}</ul>
      </div>
    </div>
  );
};

export default AmenitiesModal;
