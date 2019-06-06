import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function RegistrationForm() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  registerUser = e => {
    e.preventDefault();
    console.log(this.email.value);

    //Creates an account with the user info.
    Accounts.createUser(
      {
        email: this.email.value,
        password: this.password.value
      },
      err => {
        if (!err) {
          console.log(Accounts.userId());
          //   this.props.client.resetStore();
        }
        console.log(err);
      }
    );
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
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
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
              autoFocus
              margin="dense"
              id="register-password"
              label="Password"
              type="password"
              inputRef={input => (this.password = input)}
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

// class RegistrationForm extends Component {
//   registerUser = e => {
//     e.preventDefault();

//     //Creates an account with the user info.
//     Accounts.createUser(
//       {
//         email: this.email.value,
//         password: this.password.value
//       },
//       err => {
//         if (!err) {
//           //   this.props.client.resetStore();
//         }
//         console.log(err);
//       }
//     );
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.registerUser}>
//           <label>Email: </label>
//           <input type="email" ref={input => (this.email = input)} />
//           <br />
//           <br />
//           <label>Password: </label>
//           <input type="password" ref={input => (this.password = input)} />
//           &nbsp;
//           <br /> <br />
//           <button type="submit">Register User</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RegistrationForm;
