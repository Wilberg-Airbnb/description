import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import Overview from './Overview.jsx';
import { overview } from '../sampleDataForTests.js';

configure({ adapter: new Adapter() });

describe('Testing the presentation of the overview', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Overview overview={overview} />);
  });

  test('There should be a summary tag for each overview point', () => {
    const numberOfSummaries = wrapper.find('summary').length;
    expect(numberOfSummaries).toBe(4);
  });

  test('There should be a section tag for each overview point', () => {
    const numberOfSections = wrapper.find('section').length;
    expect(numberOfSections).toBe(4);
  });
});
