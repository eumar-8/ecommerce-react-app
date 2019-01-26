import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GenericNavbar from "./Navbar";
import Home from "./home/Home";
import Shops from "./shops/Shops";
import Cart from "./basket/Cart";
import ProductsPage from "./products/ProductsPage";
import Footer from "./Footer";
import Login from "./Admin/Login";
import AddProduct from "./Admin/AddProduct";
import UploadImages from "./Admin/UploadImages";
import ProductsList from "./products/ProductsList";
import CheckOut from "./basket/CheckOut";

class App extends Component {
  state = {
    num: 0
  };
  handleClickCart = e => {
    let sum = this.state.num + 1;
    this.setState({ num: sum });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <GenericNavbar numCart={this.state.num} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductsPage} />
            <Route name="products" exact path="/:name" handler={ProductsPage} />
            <Route path="/shops" component={Shops} />
            <Route path="/cart" component={Cart} />
            <Route
              exact
              path="/products/:product"
              render={props => (
                <ProductsList
                  {...props}
                  numCart={this.state.num}
                  handleClickCart={this.handleClickCart}
                />
              )}
            />
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
