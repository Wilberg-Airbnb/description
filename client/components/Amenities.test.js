import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Amenities from './Amenities';
import { sampleAmenities } from './sampleDataForTests';

configure({ adapter: new Adapter() });

describe('Amenities basic functionality', () => {
  let wrapper;
  let showMoreButton;
  beforeEach(() => {
    wrapper = shallow(<Amenities amenities={sampleAmenities} />);
    showMoreButton = wrapper.find('#showMore');
  });

  test('Should have a showMore state variable that is toggled true when a showMore button is clicked', () => {
    showMoreButton.simulate('click');
    expect(wrapper.state().showModal).toBe(true);
  });

  test('Should have a showMore state variable that is toggled false when a showMore button is clicked twice', () => {
    showMoreButton.simulate('click');
    showMoreButton.simulate('click');
    expect(wrapper.state().showModal).toBe(false);
  });

  test('Should have a showMore state variable that is toggled false when a showMore button is clicked twice', () => {
    showMoreButton.simulate('click');
    showMoreButton.simulate('click');
    expect(wrapper.state().showModal).toBe(false);
  });

  test('Render only 10 amenities', () => {
    let numberOfSectionsShowing = wrapper.find('section').length;
    expect(numberOfSectionsShowing).toBe(10);
  });
  // sampleAmenities length is 32..... will refactor later....
  test('Have button show many components exist', () => {
    let numOfAmenitiesToShow = showMoreButton.text().split(' ')[2];
    expect(numOfAmenitiesToShow).toBe('32');
  });
});
