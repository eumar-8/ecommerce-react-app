const express = require("express"),
  router = express.Router(),
  controller = require("../controllers/ProductsController");

router.get("/", controller.getAll);
router.post("/add", controller.add);
router.get("/category/:category", controller.getproductsByCategory);
router.get("/product/:id", controller.getproductById);
router.get("/name/:name", controller.getproductByName);
router.post("/remove", controller.delete);
router.post("/update", controller.update);
router.post("/:productsId/:image", controller.update);

// router.get("/:movie", controller.getOne);

module.exports = router;
