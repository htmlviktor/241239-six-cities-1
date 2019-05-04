import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemCard from './item-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Click on link - 'Head in Card'`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<ItemCard
    title = {`Hello world`}
    onClickTitle = {clickHandler}
  />);

  const titleLink = app.find(`.place-card__name a`);
  titleLink.simulate(`click`, {preventDefault() {}});


  expect(clickHandler).toHaveBeenCalledTimes(1);
});

it(`Click on link - 'Image in Card'`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<ItemCard
    title = {`Hello world`}
    onClickImage = {clickHandler}
  />);

  const imageLink = app.find(`.place-card__image-wrapper a`);
  imageLink.simulate(`click`, {preventDefault() {}});


  expect(clickHandler).toHaveBeenCalledTimes(1);
});
