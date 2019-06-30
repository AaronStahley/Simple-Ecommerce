import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";
import UsersSchema from "../../api/users/User.graphql";
import UsersResolvers from "../../api/users/resolvers";
import ProductsSchema from "../../api/products/Products.graphql";
import ProductsResolvers from "../../api/products/resolvers";

//------
const typeDefs = [UsersSchema, ProductsSchema];

const resolvers = merge(UsersResolvers, ProductsResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
