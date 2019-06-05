import React, { Component } from "react";

export default class LoginForm extends Component {
  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(this.email.value, this.password.value, err => {
      if (!err) {
        console.log(Accounts.userId());
        // this.props.client.resetStore();
      }
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <label>Email: </label>
          <input type="email" ref={input => (this.email = input)} />
          <br />
          <br />
          <label>Password: </label>
          <input type="password" ref={input => (this.password = input)} />
          &nbsp;
          <br /> <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
