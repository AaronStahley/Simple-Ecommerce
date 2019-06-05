import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";

const typeDefs = [];

// const resolvers = merge();

// const schema = makeExecutableSchema({
//   typeDefs
//   // resolvers
// });

createApolloServer({});
