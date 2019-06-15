import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function LoginForm(props) {
  const [open, setOpen] = React.useState(false);
  const { client } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
      <Button color="inherit" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="primary">
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default LoginForm;
