import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Overview from './Overview';
import { overview } from '../sampleDataForTests.js';

configure({ adapter: new Adapter() });

describe('Overview testing', () => {
  test('Render a div with a class name of header for each item" ', () => {
    let wrapper = shallow(
      <Overview
        overview={overview}
        entirePlace={{ bathNumber: 1, entirePlace: false }}
      />
    );
    let headerDivs = wrapper.find('.header').length;
    expect(headerDivs).toBe(4);
  });

  test('Render a div with a class name of dscription for each item" ', () => {
    let wrapper = shallow(<Overview overview={overview} />);

    let descriptionDivs = wrapper.find('.description').length;
    expect(descriptionDivs).toBe(4);
  });
});
