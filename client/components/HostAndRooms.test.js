import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  hostAndRoomsEntirePlace,
  hostAndRoomsNotEntirePlace,
} from './sampleDataForTests';
import HostAndRooms from './HostAndRooms';

configure({ adapter: new Adapter() });

describe('Testing the house and rooms widget when the entire place is available', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HostAndRooms hostAndRooms={hostAndRoomsEntirePlace} />);
  });

  test('Properly display the number of max guests, bedrooms, beds & baths', () => {
    const houseSection = wrapper
      .find('.accomodations')
      .text()
      .split('')
      .filter((word) => Number(word));
    expect(houseSection.length).toEqual(4);
  });

  test('Should confirm that the entire place is available', () => {
    const houseSection = wrapper.find('.place').text().split(' ');
    const script = ['Entire', 'hosted', 'by'];
    expect(expect.arrayContaining(script)).toEqual(houseSection);
  });
});

describe('Testing the house and rooms widget when the entire place is not availabe', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <HostAndRooms hostAndRooms={hostAndRoomsNotEntirePlace} />
    );
  });

  test('Should confirm that the entire place is not available', () => {
    const houseSection = wrapper.find('.place').text().split(' ');
    const script = ['Private', 'rooms'];
    expect(expect.arrayContaining(script)).toEqual(houseSection);
  });
});
