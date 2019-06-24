import React from 'react';
import renderer from 'react-test-renderer';
import Reviews from './reviews.jsx';
import {Router} from 'react-router-dom';
import history from '../../history';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/index';

const mock = [
  {
    user: {
      name: `viktor`,
      // eslint-disable-next-line camelcase
      avatar_url: ``
    },
    comment: `This is testinf`
  },
];

it(`Test Reviews Component`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <Router history={history}>
            <Reviews reviews={mock}/>
          </Router>
        </Provider>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
