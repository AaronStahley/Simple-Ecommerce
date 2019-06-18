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
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";

function RegistrationForm(props) {
	const { client } = props;

	registerUser = e => {
		e.preventDefault();

		//Creates an account with the user info.
		if (this.password.value === this.confirmPassword.value) {
			Accounts.createUser(
				{
					email: this.email.value,
					password: this.password.value
				},
				err => {
					if (!err) {
						console.log(Accounts.userId());
						client.resetStore();
					}
					console.log(err);
				}
			);
		} else {
			console.log("Passwords dont match");
		}
	};

	return (
		<div>
			<Paper>
				<Typography variant="h5" component="h3">
					<form onSubmit={registerUser}>
						<DialogTitle id="form-dialog-title">Register</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								id="email"
								label="Email"
								type="email"
								inputRef={input => (this.email = input)}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="register-password"
								label="Password"
								type="password"
								inputRef={input => (this.password = input)}
								fullWidth
							/>
							<TextField
								margin="dense"
								id="register-confirm-password"
								label="Confirm Password"
								type="password"
								inputRef={input => (this.confirmPassword = input)}
								fullWidth
							/>
						</DialogContent>
						<DialogActions>
							<Button color="primary" component={Link} to="/">
								Cancel
							</Button>
							<Button type="submit" color="primary">
								Register
							</Button>
						</DialogActions>
					</form>
				</Typography>
			</Paper>
		</div>
	);
}

export default RegistrationForm;
