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

function LoginForm(props) {
  const { client } = props;

  login = e => {
    e.preventDefault();

    //Logins the user with email and pass given.
    Meteor.loginWithPassword(this.email.value, this.password.value, err => {
      if (!err) {
        console.log(Accounts.userId());
        client.resetStore();
      }
      console.log(err);
    });
  };

  return (
    <div>
      <Paper>
        <Typography variant="h5" component="h3">
          <form onSubmit={this.login}>
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
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
                id="login-password"
                label="Password"
                type="password"
                inputRef={input => (this.password = input)}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button>Register</Button>
              <Button color="primary">Cancel</Button>
              <Button type="submit" color="primary">
                Login
              </Button>
            </DialogActions>
          </form>
        </Typography>
      </Paper>
    </div>
  );
}

export default LoginForm;
