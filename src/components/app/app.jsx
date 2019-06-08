import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../../components/main-page/main-page.jsx';

import {connect} from 'react-redux';
import {getAutorizationStatus} from '../../reducer/user/selectors';
import witchRoute from '../../hocs/witch-route/witch-route';

const MainPageWrapped = witchRoute(MainPage);

const App = ({isAutorization}) => {

  return <MainPageWrapped isLoggedIn={isAutorization}/>;
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
