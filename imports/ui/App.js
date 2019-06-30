import React, { Component } from "react";
import NavBar from "./NavBar";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import "./css/index.css";
import LoadingIcon from "./components/LoadingIcon";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Account from "./pages/Account";
import BuyAgain from "./pages/BuyAgain";
import Home from "./pages/Home";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = ({ user, loading, client }) => {
  //Makes sure the user is authenticated before seeing the page. Else it redirects to login
  function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authed !== null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }

  if (loading) return <LoadingIcon />;

  console.log(user._id);

  return (
    <Router>
      <div>
        <NavBar user={user} client={client} />
        <Route
          exact
          path="/login"
          render={() => <Login user={user} client={client} />}
        />
        <Route
          exact
          path="/register"
          render={() => <Register user={user} client={client} />}
        />
        <PrivateRoute
          authed={user._id}
          exact
          path="/account"
          component={Account}
        />
        <PrivateRoute
          authed={user._id}
          exact
          path="/buyagain"
          component={BuyAgain}
        />
        <Route authed={user._id} exact path="/" component={Home} />
        <PrivateRoute authed={user._id} path="/List" component={List} />
        <PrivateRoute authed={user._id} path="/orders" component={Orders} />
        <PrivateRoute authed={user._id} path="/cart" component={Cart} />
      </div>
    </Router>
  );
};

const userQuery = gql`
  query user {
    user {
      _id
    }
  }
`;

export default graphql(userQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
