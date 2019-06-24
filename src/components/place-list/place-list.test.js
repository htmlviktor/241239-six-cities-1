import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from './place-list.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../reducer/index';
import {Router} from 'react-router-dom';
import history from '../../history';

const mock = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    degree: `Apartment`,
    order: `Premium`,
    photo: `img/apartment-01.jpg`,
    id: 1
  },
];

it(`Correctly render component MainCard`, () => {
  const tree = renderer
  .create(
      <Provider store={createStore(reducer)}>
        <Router history={history}>
          <PlaceList
            offers = {mock}
          />
        </Router>
      </Provider>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});


