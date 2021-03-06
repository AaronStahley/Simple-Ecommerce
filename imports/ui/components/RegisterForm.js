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
import { Redirect, Link } from "react-router-dom";
import Home from "../pages/Home";

class RegistrationForm extends Component {
  state = {
    redirect: false,
    email: "",
    password: "",
    confimPassword: "",
    createAccountError: false,
    passwordMatchError: false
  };

  handleEmail = e => {
    this.setState({ email: e.target.value.trim() });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value.trim() });
  };

  handleConfirmPassword = e => {
    this.setState({ confimPassword: e.target.value.trim() });
  };

  registerUser = e => {
    e.preventDefault();

    console.log(this.state.password);
    console.log(this.state.confimPassword);
    console.log(this.state.password === this.state.confimPassword);

    //Creates an account with the user info.
    if (this.state.password === this.state.confimPassword) {
      Accounts.createUser(
        {
          email: this.state.email,
          password: this.state.password
        },
        err => {
          if (!err) {
            this.setState(
              {
                redirect: true
              },
              () => {
                this.props.client.resetStore();
              }
            );
          } else {
            this.setState({
              createAccountError: true
            });
            console.log(err);
          }
        }
      );
    } else {
      console.log("Passwords dont match");
      this.setState({
        passwordMatchError: true
      });
    }
  };

  render() {
    const {
      redirect,
      email,
      password,
      confimPassword,
      error,
      passwordMatchError
    } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    const enabled =
      email.length > 0 && password.length > 0 && password === confimPassword;

    const passwordMatchErr =
      password === confimPassword || confimPassword.length === 0;

    return (
      <div>
        <Paper>
          <Typography variant="h5" component="h3">
            <form onSubmit={this.registerUser}>
              <DialogTitle id="form-dialog-title">Register</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={this.handleEmail}
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  id="register-password"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={this.handlePassword}
                  fullWidth
                  required
                />
                <TextField
                  margin="dense"
                  id="register-confirm-password"
                  label="Confirm Password"
                  type="password"
                  value={confimPassword}
                  onChange={this.handleConfirmPassword}
                  fullWidth
                  required
                  error={!passwordMatchErr}
                  helperText={
                    !passwordMatchErr ? "Password does not match." : ""
                  }
                />
              </DialogContent>
              <DialogActions>
                <Button color="primary" component={Link} to="/">
                  Cancel
                </Button>
                <Button type="submit" color="primary" disabled={!enabled}>
                  Register
                </Button>
              </DialogActions>
            </form>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default RegistrationForm;
