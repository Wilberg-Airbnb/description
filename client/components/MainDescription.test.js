import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainDescription from './MainDescription.jsx';

configure({ adapter: new Adapter() });

describe('Make sure that the component has an array of descriptions as its state', () => {
  it('Make sure that the componentDidMount is successfully called', () => {
    const wrapper = shallow(<MainDescription />);
    const props = wrapper.props;

    expect(props).toBe(1);
  });
});
