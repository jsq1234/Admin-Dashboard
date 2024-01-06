const Product = require("../models/product");

const getProducts = async (req, res) => {
  try {
    const productList = await Product.find({});
    return res.json(productList);
  } catch (e) {
    console.log(`Error : ${e.message}`);
    res.status(401).send(e.message);
  }
};

module.exports = {
  getProducts,
};
