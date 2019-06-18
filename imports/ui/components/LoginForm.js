import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
	Redirect,
	Route,
	Link,
	BrowserRouter as Router
} from "react-router-dom";
import Home from "../pages/Home";

class LoginForm extends Component {
	state = {
		redirect: false,
		email: "",
		password: "",
		error: false
	};

	handleEmail = e => {
		this.setState({ email: e.target.value });
	};

	handlePassword = e => {
		this.setState({ password: e.target.value });
	};

	handleLogin = e => {
		e.preventDefault();

		//Logins the user with email and pass given.
		Meteor.loginWithPassword(this.state.email, this.state.password, err => {
			if (!err) {
				this.props.client.resetStore();
				this.setState({
					redirect: true,
					error: false
				});
			}
			this.setState({
				error: true
			});
		});
	};

	render() {
		const { redirect, email, password, error } = this.state;

		if (redirect) {
			return <Redirect to="/" />;
		}

		const enabled = email.length > 0 && password.length > 0;

		return (
			<div>
				<Paper>
					<Typography variant="h5" component="h3">
						<form onSubmit={this.handleLogin}>
							<DialogTitle id="form-dialog-title">Login</DialogTitle>
							<DialogContent>
								<TextField
									autoFocus
									margin="dense"
									id="email"
									label="Email"
									type="email"
									// inputRef={input => (this.email = input)}
									fullWidth
									required
									value={email}
									onChange={this.handleEmail}
									error={error}
								/>
								<TextField
									margin="dense"
									id="login-password"
									label="Password"
									type="password"
									// inputRef={input => (this.password = input)}
									fullWidth
									required
									value={password}
									onChange={this.handlePassword}
									error={error}
									helperText={error ? "Wrong email or password" : ""}
								/>
							</DialogContent>
							<DialogActions>
								<Button color="primary" component={Link} to="/register">
									Register
								</Button>
								<Button color="primary" component={Link} to="/">
									Cancel
								</Button>
								<Button type="submit" color="primary" disabled={!enabled}>
									Login
								</Button>
							</DialogActions>
						</form>
					</Typography>
				</Paper>
			</div>
		);
	}
}

export default LoginForm;
