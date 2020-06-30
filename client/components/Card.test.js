import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card.jsx';
import { thingsToDo } from './sampleDataForTests';

configure({ adapter: new Adapter() });

describe('Testing the Card functionality', () => {
  test('Should have a like icon with a display set to none', () => {
    const wrapper = shallow(<Card thingsToDo={thingsToDo[0]} />);
    const Child = wrapper.find('#likeIcon');
    expect(Child).toHaveStyleRule('display', 'none');
  });

  test('Should pass down the props price per person to the text', () => {
    const wrapper = shallow(<Card thingsToDo={thingsToDo[0]} />);
    const price = wrapper
      .find('#description')
      .text()
      .split('')
      .filter((letter) => Number(letter))
      .join('');
    expect(Number(price)).toBe(
      wrapper.instance().props.thingsToDo.pricePerPerson
    );
  });
});
