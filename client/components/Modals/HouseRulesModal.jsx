import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalBackgroundStyle = styled.div`
  #description-modal-root & {
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
    z-index: 9999;
  }
`;

const ModalStyle = styled.div`
  #description-modal-root & {
    padding: 20;
    background: #fff;
    border-radius: 8px;
    display: inline-block;
    height: 550px;
    border-radius: 15px;
    margin: 1rem;
    position: relative;
    min-width: 650px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    justify-self: center;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`;
const RulesContainer = styled.div`
  #description-modal-root & {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const HouseRulesHeader = styled.div`
  #description-modal-root & {
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
`;
const Url = 'https://rpt21-airbrb-description.s3-us-west-1.amazonaws.com/';

const Paragaraph = styled.p`
  #description-modal-root & {
    font-size: 12px;
    margin-bottom: 1px;
  }
`;

const AdditionalRulesHeader = styled.div`
  #description-modal-root & {
    font-size: 17px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 30px;
  }
`;
const RulesListContainer = styled.div`
  #description-modal-root & {
    margin-top: 10px;
    display: flex;
    width: 30%;
    flex-direction: column;
    margin-left: 20px;
  }
`;

const AdditionalRulesParagraph = styled.div`
  #description-modal-root & {
  }
  display: flex;
  margin-left: 20px;
  font-size: 12px;
  width: 625px;
  word-wrap: break-word;
  overflow: hidden;
`;

const HouseRulesModal = ({ toggleModal, houseRules, additionalRules }) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
      toggleModal('houseRulesModal');
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  const rules = houseRules.map((houseRule, i) => {
    let wordArray = houseRule.safetyDescription.split(' ');
    let lastWord = wordArray[wordArray.length - 1].toLowerCase();
    return (
      <span key={houseRule._id}>
        <Paragaraph>
          <img
            src={`${Url}${lastWord}.png`}
            style={{ maxHeight: '15px' }}
          ></img>{' '}
          {houseRule.safetyDescription}
        </Paragaraph>
      </span>
    );
  });

  useEffect(() => {
    // Check for outside clicks, and prevent scrolling when the modal is open
    document.addEventListener('mousedown', handleClickOutside);
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = 'no';
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <ModalBackgroundStyle>
      <ModalStyle ref={myRef} onClick={handleClickInside}>
        <RulesContainer>
          <HouseRulesHeader>House Rules</HouseRulesHeader>
          <RulesListContainer>{rules}</RulesListContainer>
          <AdditionalRulesHeader>Additional Rules</AdditionalRulesHeader>
          <AdditionalRulesParagraph>
            <p>{additionalRules.safetyDescription}</p>
          </AdditionalRulesParagraph>
        </RulesContainer>
      </ModalStyle>
    </ModalBackgroundStyle>
  );
};
export default HouseRulesModal;
