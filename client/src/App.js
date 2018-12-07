import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home/Home";
import Shops from "./shops/Shops";
import Products from "./products/Products";
import Cart from "./basket/Cart";
import Card from "./products/Card";
import Footer from "./Footer";
import Login from "./Admin/Login";
import AddProduct from "./Admin/AddProduct";
import UploadImages from "./Admin/UploadImages";

import CheckOut from "./basket/CheckOut";

class App extends Component {
  state = {
    num: 0
  };
  handleNumelementscart() {
    let total = (this.state.num = +1);
    this.setState({ num: total });
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar num={this.state.num} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/shops" component={Shops} />
            <Route path="/cart" component={Cart} />
            <Route path="/products/:product" component={Card} />
            <Route path="/checkOut" component={CheckOut} />
            <Route path="/admin/login" component={Login} />
            <Route path="/admin/update" component={AddProduct} />
            <Route path="/admin/product/:product_id" component={UploadImages} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
