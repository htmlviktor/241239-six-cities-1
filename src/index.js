import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk';
import {compose} from 'recompose';
import {createAPI} from './api';
import reducer from './reducer/index';
import {BrowserRouter} from 'react-router-dom';

import App from './components/app/app.jsx';

import {Operation} from './reducer/data/data';
import {Operation as OperationUser} from './reducer/user/user';
import history from './history';


const init = () => {
  const api = createAPI(() => history.push(`/login`));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operation.loadOffers());
  store.dispatch(OperationUser.userSaveCockie());
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      , document.getElementById(`root`)
  );
};

init();
