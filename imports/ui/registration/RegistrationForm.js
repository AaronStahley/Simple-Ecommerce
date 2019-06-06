import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function RegistrationForm(props) {
  const [open, setOpen] = React.useState(false);
  const { client } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

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
            this.props.client.resetStore();
          }
          console.log(err);
        }
      );
    } else {
      console.log("Passwords dont match");
      setOpen(true);
    }
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Register
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" onClick={handleClose} color="primary">
              Register
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default RegistrationForm;
