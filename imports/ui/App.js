import React, { Component } from "react";
import NavBar from "./NavBar";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import "./css/index.css";
import LoadingIcon from "./LoadingIcon";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Account from "./pages/Account";
import BuyAgain from "./pages/BuyAgain";
import Home from "./pages/Home";
import List from "./pages/List";
import Orders from "./pages/Orders";

const App = ({ user, loading, client }) => {
  if (loading) return <LoadingIcon />;

  return (
    <Router>
      <div>
        <NavBar user={user} client={client} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/buyagain" component={BuyAgain} />
        <Route exact path="/" component={Home} />
        <Route exact path="/List" component={List} />
        <Route exact path="/orders" component={Orders} />
      </div>
    </Router>
  );
};

const userQuery = gql`
  query Resolutions {
    user {
      _id
    }
  }
`;

export default graphql(userQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
