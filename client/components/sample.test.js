import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sample from './Sample';

configure({ adapter: new Adapter() });

it('should have an h2 component with some text', () => {
  const wrapper = shallow(<Sample />);
  const header1Text = wrapper.find('h1').text();

  expect(header1Text).toBe('Working?');
});
