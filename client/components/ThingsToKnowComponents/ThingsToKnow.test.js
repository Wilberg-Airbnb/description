import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import ThingsToKnowSection from './ThingsToKnow.jsx';
import { thingsToKnow } from '../sampleDataForTests.js';

configure({ adapter: new Adapter() });

describe('Testing the ThingsToKnow  component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ThingsToKnowSection thingsToKnow={thingsToKnow} />);
  });

  test('Should test that 3 divs with classNames of "houseRules", "safetyProperty", and "cancellationPolicy" exist', () => {
    expect(wrapper.exists('.houseRules')).toEqual(true);
    expect(wrapper.exists('.safetyProperty')).toEqual(true);
    expect(wrapper.exists('.cancellationPolicy')).toEqual(true);
  });

  test('Should test that each section has a header class with text "House Rules", "Safety & Property" and "Cancellation Policy" rescpectively', () => {
    const houseRulesText = wrapper.find('.houseRules').find('.header').text();
    const safetyPropertyText = wrapper
      .find('.safetyProperty')
      .find('.header')
      .text();
    const cancellationPolicyText = wrapper
      .find('.cancellationPolicy')
      .find('.header')
      .text();

    expect(houseRulesText).toEqual('House Rules');
    expect(safetyPropertyText).toEqual('Safety & Property');
    expect(cancellationPolicyText).toEqual('Cancellation policy');
  });

  test('Should show 5 rules for House Rules and 2 for Safety & Property', () => {
    const numberOfHouseRulesShown = wrapper.find('.houseRules').find('span')
      .length;
    const numberOfSafetyRulesShown = wrapper
      .find('.safetyProperty')
      .find('span').length;
    expect(numberOfHouseRulesShown).toEqual(5);
    expect(numberOfSafetyRulesShown).toEqual(2);
  });
});
