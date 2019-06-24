import React from 'react';
import renderer from 'react-test-renderer';
import ButtonFeature from './button-feature.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../../reducer/index';

it(`Test ButtonFeature Component`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(reducer)}>
          <ButtonFeature />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
