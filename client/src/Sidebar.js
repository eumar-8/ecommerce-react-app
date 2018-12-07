import React from "react";

export default class Sidebar extends React.Component {
  render() {
    let { getProductsBycategoty, getProducts } = this.props;
    return (
      <ul className="nav flex-column">
        <li onClick={() => getProducts()} className="nav-item">
          products
        </li>
        <li onClick={() => getProductsBycategoty("Lamps")} className="nav-item">
          Lamps
        </li>
        <li onClick={() => getProductsBycategoty("Vases")} className="nav-item">
          Vases
        </li>
        <li
          onClick={() => getProductsBycategoty("Candles")}
          className="nav-item"
        >
          Candles
        </li>
        <li
          onClick={() => getProductsBycategoty("Mirrors")}
          className="nav-item"
        >
          Mirrors
        </li>
      </ul>
    );
  }
}
