import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';

const AmenitiesModal = ({ toggleModal, listItems }) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();
  let itemsToList;
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
  if (listItems.length > 0) {
    itemsToList = listItems.map((item) => {
      return (
        <li>
          {item.title}
          {item.amenityDescription}
          {item.subHeader}
        </li>
      );
    });
  }
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <div
        ref={myRef}
        onClick={handleClickInside}
        style={{
          padding: 20,
          background: '#fff',
          borderRadius: '2px',
          display: 'inline-block',
          minHeight: '300px',
          margin: '1rem',
          position: 'relative',
          minWidth: '300px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          justifySelf: 'center',
        }}
      >
        {itemsToList}
      </div>
    </div>
  );
};

export default AmenitiesModal;
