import React from 'react';
import PropTypes from 'prop-types';

import {Switch, Route, Redirect} from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.jsx';
import Favorites from '../../components/favorites/favorites.jsx';
import Property from '../../components/property/property.jsx';

import {witchAuthorization} from '../../hocs/witch-authorization/witch-authorization';
import witchPrivateRoute from '../../hocs/witch-private-route/witch-private-route';

const SignInWrapped = witchAuthorization(SignIn);
/* Проверка на приватный маршрут */


const witchRoute = (Component) => {
  class WitchRoute extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {

      const {isLoggedIn} = this.props;
      const SignInWrappedPrivate = witchPrivateRoute(SignInWrapped, !isLoggedIn);
      const FavoritesPrivate = witchPrivateRoute(Favorites, isLoggedIn, `/login`);
      return (
        <Switch>
          <Route path="/" exact render={() => {
            return <Component {...this.props}/>;
          }} />
          <Route path="/login" exact component={SignInWrappedPrivate} />
          <Route path="/favorites" exact component={FavoritesPrivate} />
          <Route path="/offer/:id" exact render={({match}) => <Property offerId={match.params.id} />} />
          <Redirect to="/"/>
        </Switch>
      );
    }

  }


  WitchRoute.propTypes = {
    isLoggedIn: PropTypes.bool,
    offers: PropTypes.array
  };

  return WitchRoute;
};

export default witchRoute;
