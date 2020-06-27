import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainDescription from './MainDescription.jsx';
import Index from '../Index.jsx';
import { sampleDescriptions } from './sampleDataForTests';
configure({ adapter: new Adapter() });

describe('Make sure that the component has an array of descriptions as its state', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainDescription descriptions={sampleDescriptions} />);
  });

  test('Should only one section upon initial render', () => {
    const numberOfSections = wrapper.find('section').length;
    expect(numberOfSections).toBe(1);
  });

  test('Verify the state is changed on click to true', () => {
    const seeMore = wrapper.find('#seeMore');
    seeMore.simulate('click');
    expect(wrapper.state().showMore).toBe(true);
  });

  test('Should render all the components upon clicking #seeMore', () => {
    const seeMore = wrapper.find('#seeMore');
    seeMore.simulate('click');
    const numberOfSections = wrapper.find('section').length;
    expect(numberOfSections).toEqual(3);
  });
});
