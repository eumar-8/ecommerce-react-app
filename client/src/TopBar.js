import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class TopBar extends React.Component {
  render() {
    let { getProductsBycategoty, getProducts } = this.props;
    return (
      <div>
        <Nav className="top-bar">
          <NavItem>
            <NavLink href="#">
              <span onClick={() => getProducts()}>products</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span onClick={() => getProductsBycategoty("Lamps")}>Lamps</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span onClick={() => getProductsBycategoty("Vases")}>Vases</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span onClick={() => getProductsBycategoty("Candles")}>
                Candles
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span onClick={() => getProductsBycategoty("Mirrors")}>
                Mirrors
              </span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/admin/update">add</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
