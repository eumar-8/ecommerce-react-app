const Products = require("../models/ProductsModel");

class ProductsController {
  async getAll(req, res) {
    try {
      const products = await Products.find({});
      //res.status(200).json(done);
      res.send(products);
    } catch (err) {
      //res.status(500).json(err);
      res.send({ err });
    }
  }

  async getproductsByCategory(req, res) {
    console.log("==========================", req.params);
    let { category } = req.params;
    try {
      const products = await Products.find({ categoryName: category });
      console.log("products=======", products);
      res.send(products);
    } catch (e) {
      console.log(e);
      res.send({ e });
    }
  }

  async getproductById(req, res) {
    console.log("==========================", req.params);
    let { id } = req.params;
    try {
      const products = await Products.findOne({ _id: id });
      console.log("products=======", products);
      res.send(products);
    } catch (e) {
      console.log(e);
      res.send({ e });
    }
  }
  async getproductByName(req, res) {
    console.log(req.params);
    let { name } = req.params;
    try {
      const product = await Products.find({ name: { $regex: name } });
      res.send(product);
    } catch (e) {
      console.log(e);
      res.send({ e });
    }
  }

  async add(req, res) {
    console.log(req.body);
    let { category, name, description, price } = req.body;
    console.log("***************>", req.body);
    let newProduct = {
      categoryName: category,
      name: name,
      description: description,
      price: price
    };
    try {
      const product = await Products.create(newProduct);
      res.status(200).json(product);
      console.log("=====>", product);
    } catch (err) {
      console.log("=====>", err);
      //res.status(500).json(err);
      res.send({ err });
    }
  }

  async delete(req, res) {
    const { _id } = req.body;
    console.log(req.body);
    try {
      const product = await Products.remove({ _id });
      console.log(product);
      //res.status(200).json(done);
      res.send(done);
    } catch (err) {
      //res.status(500).json(err);
      res.send({ err });
    }
  }

  async update(req, res) {
    let { _id, newName, newPrice, newDescription } = req.body;

    console.log("====>>>>>", req.body);

    try {
      const oldProduct = Products.findOne({ _id });
      const product = await Products.update(
        { _id },
        {
          $set: {
            name: newName || oldProduct.name,
            price: newPrice || oldProduct.price,
            description: newDescription || oldProduct.description
          }
        }
      );
      // const movies = await Movies.find({ genreId: genreId });
      res.status(200).json(product);
      //res.send(genre);
    } catch (e) {
      res.send({ e });
    }
  }
}

module.exports = new ProductsController();
