import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import ThingsToKnowSection from './ThingsToKnow.jsx';
import {
  cancellationPolicy,
  safety,
  houseRules,
} from '../sampleDataForTests.js';

configure({ adapter: new Adapter() });

describe('Testing the ThingsToKnow  component', () => {
  test('Should test that 3 divs with classNames of "houseRules", "safetyProperty", and "cancellationPolicy" exist', () => {
    let wrapper = shallow(
      <ThingsToKnowSection
        houseRules={houseRules}
        safetyProperty={safety}
        cancellationPolicy={cancellationPolicy}
      />
    );
    expect(wrapper.exists('.houseRules')).to.equal(true);
    expect(wrapper.exists('.safetyProperty')).to.equal(true);
    expect(wrapper.exists('.cancellationPolicy')).to.equal(true);
  });

  test('Should test that each section has a header class with text "House Rules", "Safety & Property" and "Cancellation Policy" rescpectively', () => {
    let wrapper = shallow(
      <ThingsToKnowSection
        houseRules={houseRules}
        safetyProperty={safety}
        cancellationPolicy={cancellationPolicy}
      />
    );
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
    expect(cancellationPolicyText).toEqual('Cancellation Policy');
  });

  test('Should show 5 rules for House Rules and 2 for Safety & Property', () => {
    let wrapper = shallow(
      <ThingsToKnowSection
        houseRules={houseRules}
        safetyProperty={safety}
        cancellationPolicy={cancellationPolicy}
      />
    );
    const numberOfHouseRulesShown = wrapper.find('.houseRules').find('details')
      .length;
    const numberOfSafetyRulesShown = wrapper
      .find('.safetyProperty')
      .find('details').length;
    expect(numberOfHouseRulesShown).toEqual(5);
    expect(numberOfSafetyRulesShown).toEqual(2);
  });
});
