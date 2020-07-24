import React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalBackgroundStyle = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalStyle = styled.div`
  padding: 2;
  background: #fff;
  border-radius: 8px;
  display: inline-block;
  height: 320px;
  border-radius: 15px;
  margin: 1rem;
  position: relative;
  min-width: 650px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  justify-self: center;
`;

const SafetyModal = ({ toggleModal }) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      toggleModal('safetyModal');
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    // Prevent Scrolling
    document.addEventListener('mousedown', handleClickOutside);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <ModalBackgroundStyle>
      <ModalStyle ref={myRef} onClick={handleClickInside}>
        SafetyModal
      </ModalStyle>
    </ModalBackgroundStyle>
  );
};

export default SafetyModal;
