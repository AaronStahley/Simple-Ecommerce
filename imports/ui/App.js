import React, { Component } from "react";
import NavBar from "./NavBar";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import "./css/index.css";

const App = ({ user, loading, client }) => {
  if (loading) return null;
  return (
    <div>
      <NavBar user={user} client={client} />
    </div>
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
