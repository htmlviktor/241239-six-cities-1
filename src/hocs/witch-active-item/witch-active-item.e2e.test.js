import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import witchActiveItem from './witch-active-item';

configure({adapter: new Adapter()});
const MockComponent = () => <div />;
const MockComponentWrapped = witchActiveItem(MockComponent);

it(`Test HOC Component`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.props().activeItem).toEqual(null);

  wrapper.props().onActiveItemChange(2);
  expect(wrapper.props().activeItem).toEqual(2);
});

