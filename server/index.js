const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  productsRoute = require("./routes/ProductsRoute"),
  imagesRoute = require("./routes/ImagesRoute"),
  bodyParser = require("body-parser");
// =================== initial settings ===================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// connnect to mongo
mongoose.connect(
  "mongodb://127.0.0.1/ecomercedb",
  () => {
    console.log("connected to mongodb");
  }
);
// routes
app.use("/products", productsRoute);
app.use("/images", imagesRoute);
// Set the server to listen on port 3001
app.listen(3001, () => console.log(`listening on port 3001`));
