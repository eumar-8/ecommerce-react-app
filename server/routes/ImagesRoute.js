const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/ImagesController");

//router.get("/", controller.getAll);
router.post("/add", controller.addImage);
router.get("/:productsId", controller.getImagesByProductId);
//router.get("/category/:categoryName", controller.getproductsByCategory);
//router.get("/name/:name", controller.getproductByName);
//router.post("/remove", controller.delete);
//router.post("/update", controller.update);
//router.post("/:productsId/:image", controller.update);

// router.get("/:movie", controller.getOne);

module.exports = router;
