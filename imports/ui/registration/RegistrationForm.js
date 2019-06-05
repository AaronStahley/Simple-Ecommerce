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

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Registration
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
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
