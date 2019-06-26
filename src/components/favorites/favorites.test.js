import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from './favorites.jsx';

import {Router} from 'react-router-dom';
import history from '../../history';
import thunk from 'redux-thunk';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createAPI} from '../../api';

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

const mockCities = new Set([
  `Amsterdam`,
  `Budapesht`,
  `Wroclaw`
]);

const api = createAPI();
const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));


it(`Test Favorites Component`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Favorites cities={mockCities} offers={mockOffers}/>
          </Router>
        </Provider>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
