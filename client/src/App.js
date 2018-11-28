import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home/Home";
import Products from "./products/Products";
import Shops from "./shops/Shops";
import Basket from "./basket/Basket";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/shops" component={Shops} />
            <Route path="/basket" component={Basket} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
