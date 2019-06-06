import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import RegistrationForm from "./registration/RegistrationForm";
import LoginForm from "./login/LoginForm";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const { user, client } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Title Of Site
          </Typography>
          {user._id ? (
            <Button
              type="submit"
              onClick={() => {
                Meteor.logout();
                client.resetStore();
              }}
              color="inherit"
            >
              Logout
            </Button>
          ) : (
            <React.Fragment>
              <LoginForm client={client} />
              <RegistrationForm client={client} />
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
