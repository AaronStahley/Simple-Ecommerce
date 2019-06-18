import React, { Component } from "react";
import RegisterForm from "../components/RegisterForm";
import "../css/register.css";
export default class Register extends Component {
	render() {
		const { client, user } = this.props;

		return (
			<div className="register-root">
				<RegisterForm client={client} user={user} />
			</div>
		);
	}
}
