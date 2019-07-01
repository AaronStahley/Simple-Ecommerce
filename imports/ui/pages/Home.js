import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import ProductCard from "../components/ProductCard";
import "../css/home.css";

const Home = ({ loading, Products }) => {
  if (loading) return null;
  return (
    <div className="root-container">
      <div className="products-list">
        {Products.map(product => (
          <p key={product._id}>
            <ProductCard
              name={product.name}
              description={product.description}
            />
          </p>
        ))}
      </div>
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
