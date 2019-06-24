import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteList from './favorites-list.jsx';

import {Router} from 'react-router-dom';
import history from '../../history';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/index';

const mockCities = new Set([
  `Amsterdam`,
  `Budapesht`,
  `Wroclaw`
]);

const mockOffers = [
  {
    isPremium: true,
    previewImage: ``,
    price: 222,
    isFavorite: true,
    id: 1,
    title: ``,
    type: ``,
    city: {
      name: `Wroclaw`
    }
  },
  {
    isPremium: true,
    previewImage: ``,
    price: 222,
    isFavorite: true,
    id: 2,
    title: ``,
    type: ``,
    city: {
      name: `Wroclaw`
    }
  },
];

it(`Test FavoriteCard Component`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <Router history={history}>
            <FavoriteList cities={mockCities} offers={mockOffers}/>
          </Router>
        </Provider>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
