import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const HouseRulesModal = ({ toggleModal }) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      toggleModal('houseRulesModal');
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    // Check for outside clicks, and prevent scrolling when the modal is open
    document.addEventListener('mousedown', handleClickOutside);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <div
      style={{
        position: 'fixed',
        padding: '0',
        margin: '0',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        ref={myRef}
        onClick={handleClickInside}
        style={{
          padding: 20,
          background: '#fff',
          borderRadius: '8px',
          display: 'inline-block',
          height: '525px',
          borderRadius: '15px',
          margin: '1rem',
          position: 'relative',
          minWidth: '550px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          justifySelf: 'center',
        }}
      >
        House rules
      </div>
    </div>
  );
};
export default HouseRulesModal;
