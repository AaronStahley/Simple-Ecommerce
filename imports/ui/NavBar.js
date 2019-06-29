import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/ListAlt";
import BuyAgainIcon from "@material-ui/icons/Replay";
import OrdersIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  navBar: {
    backgroundColor: "#424242"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#424242",
    paddingLeft: 10,
    color: "#fff"
  }
}));

function NavBar(props) {
  const { user, client } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.banner}>
        <Avatar className={classes.avatar}>AS</Avatar>
        <h5 style={{ paddingLeft: 10 }}>Hello, user</h5>
      </div>
      <List>
        <ListItem component={Link} to="/" button key={"home"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem component={Link} to={"/orders"} button key={"Your Orders"}>
          <ListItemIcon>
            <OrdersIcon />
          </ListItemIcon>
          <ListItemText primary={"Your Orders"} />
        </ListItem>
        <ListItem component={Link} to={"/buyagain"} button key={"Buy Again"}>
          <ListItemIcon>
            <BuyAgainIcon />
          </ListItemIcon>
          <ListItemText primary={"Buy Again"} />
        </ListItem>
        <ListItem component={Link} to={"/list"} button key={"Your List"}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary={"Your List"} />
        </ListItem>
        <ListItem component={Link} to={"/account"} button key={"Your Account"}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={"Your Account"} />
        </ListItem>
        {user._id ? (
          <ListItem
            button
            key={"Logout"}
            onClick={() => {
              Meteor.logout();
              client.resetStore();
            }}
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItem>
        ) : null}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Title Of The Site
          </Typography>
          {user._id ? (
            <div>
              <IconButton
                aria-label="Cart of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                component={Link}
                to={user._id ? "/cart" : "/"}
              >
                <Badge badgeContent={11} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          ) : (
            <React.Fragment>
              <IconButton
                aria-label="Cart of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ShoppingCart />
              </IconButton>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
