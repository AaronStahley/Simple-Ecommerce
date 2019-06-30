import Products from "./products";

export default {
  Query: {
    Products: () => Products.find()
  },
  Mutation: {
    createProduct(obj, { id, name, catagory, price, description, quantity }) {
      const productId = Products.insert({
        id,
        name,
        catagory,
        price,
        description,
        quantity
      });
      return Products.findOne(productId);
    }
  }
};
