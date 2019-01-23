import React from "react";
import { NavLink } from "react-router-dom";

export default class Sidebar extends React.Component {
  render() {
    let { getProductsBycategoty, getProducts } = this.props;
    return (
      <ul className="sidebar">
        <li onClick={() => getProducts()}>products</li>
        <li onClick={() => getProductsBycategoty("Lamps")}>Lamps</li>
        <li onClick={() => getProductsBycategoty("Vases")}>Vases</li>
        <li onClick={() => getProductsBycategoty("Candles")}>Candles</li>
        <li onClick={() => getProductsBycategoty("Mirrors")}>Mirrors</li>
        <li>
          <NavLink to="/admin/update">
            <span>add</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}
