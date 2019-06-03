import React from 'react';
import MainPage from '../main-page/main-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {connect} from 'react-redux';
import {getAutorizationStatus} from '../../reducer/user/selectors';
import {witchAuthorization} from '../../hocs/witch-authorization/witch-authorization';

const SignInWrapped = witchAuthorization(SignIn);

const App = ({isAutorization}) => {
  if (isAutorization) {
    return <MainPage />;
  } else {
    return <SignInWrapped />;
  }

};

const mapStateToProps = (state) => {
  return {
    isAutorization: getAutorizationStatus(state),
  };
};

export default connect(mapStateToProps)(App);
