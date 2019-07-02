import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import ProductCard from "../components/ProductCard";
import "../css/home.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto"
  }
}));

function Home(props) {
  const classes = useStyles();

  if (props.loading) return null;
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        {props.Products.map(product => (
          <Grid item xs={6} sm={3} key={"Grid" + product._id}>
            <ProductCard key={product._id} product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

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
