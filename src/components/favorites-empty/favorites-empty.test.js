import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty.jsx';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/index';

import {Router} from 'react-router-dom';
import history from '../../history';

it(`Test FavoritesEmpty Component`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <Router history={history}>
            <FavoritesEmpty />
          </Router>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
