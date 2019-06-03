import React, {PureComponent} from 'react';

export const witchAuthorization = (Component) => {
  class WitchAuthorization extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };
      this._changeValueEmail = this._changeValueEmail.bind(this);
      this._changeValuePassword = this._changeValuePassword.bind(this);
    }

    render() {
      return <Component
        onChangeEmail={this._changeValueEmail}
        onChangePassword={this._changeValuePassword}
        emailValue={this.state.email}
        passwordValue={this.state.password}
        {...this.props}/>;
    }

    _changeValueEmail(evt) {
      this.setState({email: evt.target.value});
    }
    _changeValuePassword(evt) {
      this.setState({password: evt.target.value});
    }
  }

  return WitchAuthorization;
};
