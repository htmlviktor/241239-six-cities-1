import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';

const witchPrivateRoute = (Component, isLoggedIn, URL = `/`) => {
  class WitchPrivateRoute extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (isLoggedIn) {
        return <Component {...this.props}/>;
      } else {
        return <Redirect to={URL}/>;
      }
    }
  }

  return WitchPrivateRoute;
};

export default witchPrivateRoute;
