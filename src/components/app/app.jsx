import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../../components/main-page/main-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Favorites from '../favorites/favorites.jsx';
import Property from '../../components/property/property.jsx';

import {witchAuthorization} from '../../hocs/witch-authorization/witch-authorization';
import witchPrivateRoute from '../../hocs/witch-private-route/witch-private-route';

import {connect} from 'react-redux';
import {getAutorizationStatus} from '../../reducer/user/selectors';

import {Switch, Route, Redirect, Router} from 'react-router-dom';
import history from '../../history';

const SignInWrapped = witchAuthorization(SignIn);


const App = ({isAutorization}) => {
  const SignInWrappedPrivate = witchPrivateRoute(SignInWrapped, !isAutorization);
  const FavoritesPrivate = witchPrivateRoute(Favorites, isAutorization, `/login`);
  return <Router history={history}>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={SignInWrappedPrivate} />
      <Route path="/favorites" exact component={FavoritesPrivate} />
      <Route path="/offer/:id" exact render={({match}) => <Property offerId={match.params.id} />} />
      <Redirect to="/"/>
    </Switch>
  </Router>;
};

const mapStateToProps = (state) => {
  return {
    isAutorization: getAutorizationStatus(state),
  };
};


App.propTypes = {
  getRoute: PropTypes.func,
  isAutorization: PropTypes.bool
};
export default connect(mapStateToProps)(App);
