import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import { withApollo } from "react-apollo";

const Home = ({ loading, Products }) => {
  if (loading) return null;
  return (
    <div>
      <h1>Home</h1>
      <h3>Products</h3>
      <ul>
        {Products.map(product => (
          <li key={product._id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

const productsQuery = gql`
  query Products {
    Products {
      _id
      name
      catagory
      price
      description
      quantity
    }
  }
`;

export default graphql(productsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(Home));
