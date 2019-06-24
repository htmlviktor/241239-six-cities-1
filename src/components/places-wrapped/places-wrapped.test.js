import React from 'react';
import renderer from 'react-test-renderer';
import PlacesWrapped from './places-wrapped.jsx';
import {Router} from 'react-router-dom';
import history from '../../history';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/index';

import leaflet from 'leaflet';

leaflet.map = () => ({
  setView: () => {},
  addLayer: () => {},
});

const mock = [
  {
    isPremium: true,
    previewImage: ``,
    price: 222,
    isFavorite: true,
    id: 1,
    title: ``,
    type: ``,
  },
  {
    isPremium: true,
    previewImage: ``,
    price: 222,
    isFavorite: true,
    id: 2,
    title: ``,
    type: ``,
  }
];

it(`Test PlacesWrapped Component`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <Router history={history}>
            <PlacesWrapped offers={mock}/>
          </Router>
        </Provider>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
