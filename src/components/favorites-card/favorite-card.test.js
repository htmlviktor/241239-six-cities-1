import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteCard from './favorite-card.jsx';
import {Router} from 'react-router-dom';
import history from '../../history';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/index';


const mock = {
  isPremium: true,
  previewImage: ``,
  price: 222,
  isFavorite: true,
  id: 1,
  title: ``,
  type: ``,
};

it(`Test FavoriteCard Component`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <Router history={history}>
            <FavoriteCard offer={mock}/>
          </Router>
        </Provider>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
