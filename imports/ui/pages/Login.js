import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import "../css/login.css";

class Login extends Component {
	//Switches to the registration form.
	handleRegister = e => {};

	render() {
		const { client, user } = this.props;

		return (
			<div className="login-root">
				<LoginForm client={client} user={user} />
			</div>
		);
	}
}

export default Login;
