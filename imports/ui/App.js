import React, { Component } from "react";
import NavBar from "./NavBar";
import LoginForm from "../ui/login/LoginForm";
import RegistrationFrom from "../ui/registration/RegistrationForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br />
        {/* <RegistrationFrom /> */}
        <LoginForm />
        <br />
        <hr />
        <br />
      </div>
    );
  }
}
