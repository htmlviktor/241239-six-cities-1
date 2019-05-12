import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';

const mock = [
  {title: `Beautiful & luxurious apartment at great location`},
];

it(`Correctly render component MainCard`, () => {
  const tree = renderer
  .create(<PlaceList
    infoCard = {mock}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});


