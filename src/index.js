import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import mock from './mocks/offers.js';

import reducer from './reducer';

const store = createStore(reducer);

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          data={mock}
        />
      </Provider>
      , document.getElementById(`root`)
  );
};

init();
