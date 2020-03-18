import React from 'react';

export default class LoginHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="login-header d-flex justify-content-center align-items-center">
        <img src="images/logo.png" alt="logo" className="logo"/>
      </div>
    );
  }
}
