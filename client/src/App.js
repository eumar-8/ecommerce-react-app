import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./home/Home";
import Products from "./products/Products";
import Shops from "./shops/Shops";
import Bascket from "./bascket/Bascket";

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
            <Route path="/bascket" component={Bascket} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
