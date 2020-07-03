import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import BedRoomCard from './BedroomCard.jsx';
import { sleepingArrangements } from './sampleDataForTests';

configure({ adapter: new Adapter() });

describe('Testing the Card functionality', () => {
  test('Should display a bed icon if the description is calls for a bed', () => {
    const wrapper = shallow(
      <BedRoomCard bedroomDescription={sleepingArrangements[0]} />
    );
    const BedroomDescription = wrapper.find('.description');
    const BedroomDescriptionText = BedroomDescription.text().split(' ').pop();
    expect(BedroomDescriptionText).toEqual('bed');
  });

  test('Should display a couch icon if the description calls for a couch', () => {
    const wrapper = shallow(
      <BedRoomCard bedroomDescription={sleepingArrangements[4]} />
    );
    const BedroomDescription = wrapper.find('.description');
    const BedroomDescriptionText = BedroomDescription.text().split(' ').pop();
    expect(BedroomDescriptionText).toEqual('couch');
  });
});
