import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getAutorizationStatus} from '../../reducer/user/selectors';
import {Operation} from '../../reducer/user/user';

import Header from '../header/header.jsx';

const SignIn = ({emailValue,
  passwordValue,
  onChangeEmail,
  onChangePassword,
  userLogin}) => {
  return <React.Fragment>
    <Header />
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              userLogin(emailValue, passwordValue);
            }}
            className="login__form form"
            action="#"
            method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                value={emailValue}
                onChange={onChangeEmail}
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                value={passwordValue}
                onChange={onChangePassword}
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required />
            </div>
            <button className="login__submit form__submit button" type="submit">Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    isAutorization: getAutorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  userLogin: (email, password) => dispatch(Operation.userSaveData(email, password))
});

SignIn.propTypes = {
  userLogin: PropTypes.func,
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
