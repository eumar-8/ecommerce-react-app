const Images = require("../models/ImagesModel");

class ImagesController {
  async addImage(req, res) {
    console.log(req.body);
    let { photo_url, public_id, productID, name } = req.body;
    let newImage = {
      productID: productID,
      photo_url: photo_url,
      public_id: public_id,
      name: name
    };
    try {
      const done = await Images.create(newImage);
      res.status(200).json(done);
      console.log("=====>", done);
    } catch (err) {
      console.log("=====>", err);
      //res.status(500).json(err);
      res.send({ err });
    }
  }

  async getImagesByProductId(req, res) {
    let { productsId } = req.params;
    console.log("=========>", productsId);
    try {
      const images = await Images.find({ productID: productsId });
      res.send(images);
    } catch (e) {
      console.log(e);
      res.send({ e });
    }
  }
}

module.exports = new ImagesController();
