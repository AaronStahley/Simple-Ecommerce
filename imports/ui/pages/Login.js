import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import "../css/login.css";

export default class Login extends Component {
  render() {
    const { client, user } = this.props;

    return (
      <div className="login-root">
        <LoginForm client={client} user={user} />
      </div>
    );
  }
}
