import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mock = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: `120`,
    degree: `Apartment`,
    order: `Premium`,
    photo: `img/apartment-01.jpg`
  },
];

it(`Correctly render component ItemCard`, () => {
  const testHandler = jest.fn();
  const tree = renderer
  .create(<PlaceCard
    onClick={testHandler}
    onDeHover={testHandler}
    onHover={testHandler}
    index={0}
    data={mock[0]}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

