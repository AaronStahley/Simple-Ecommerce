import { Mongo } from "meteor/mongo";

//Sets up new MongoDb called products
const Products = new Mongo.Collection("products");

export default Products;
