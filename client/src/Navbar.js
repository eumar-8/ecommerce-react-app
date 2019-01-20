import React from "react";
import { NavLink } from "react-router-dom";
import Media from "react-media";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import { NumCart } from "./NumCart";
export default class GenericNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  componentDidMount() {
    // console.log("i am num cart", NumCart);
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      //console.log("navbar========", cart[cart.length - 1].count);
      //this.setState({ num: cart.length });
    }
  }
  render() {
    let { numCart } = this.props;
    let cart = JSON.parse(localStorage.getItem("cart"));
    let num = !cart ? numCart : cart[cart.length - 1].count;
    return (
      <div>
        <Media query="(min-width: 599px)">
          {matches =>
            matches ? (
              <div className="nav_bar">
                <ul style={styles.navbar}>
                  <li style={styles.left}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li style={styles.right}>
                    <NavLink to="/products">Products</NavLink>
                  </li>
                  <li style={styles.right}>
                    <NavLink to="/shops">Shops</NavLink>
                  </li>
                  <li style={styles.right}>
                    <NavLink to="/cart">
                      <i className="basketIcon fa fa-shopping-basket" />
                      <span className="numCart">({num})</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <div>
                  <Navbar style={styles.containerDrop} color="faded" light>
                    <NavbarBrand style={styles.a} href="/" className="mr-auto">
                      Home
                    </NavbarBrand>
                    <NavbarToggler
                      onClick={this.toggleNavbar}
                      className="mr-2"
                    />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                      <Nav navbar>
                        <NavItem>
                          <NavLink style={styles.a} to="/products">
                            Products
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink style={styles.a} to="/shops">
                            Shops
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink style={styles.a} to="/cart">
                            <i className="basketIcon fa fa-shopping-basket" />
                            <span className="numCart">({num})</span>
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  }
}

const styles = {
  navbar: {
    display: "grid",
    gridTemplateColumns: "8fr 1fr 1fr 1fr ",
    gridGap: "2%",
    textAlign: "center",
    backgroundImage: "linear-gradient(rgb(97, 121, 148), rgb(56, 75, 93))",
    height: "60px",
    listStyle: "none",
    padding: "15px 15px"
  },
  left: {
    textAlign: "left",
    color: "#EFE2E2"
  },

  right: {
    textAlign: "left",
    color: "#EFE2E2"
  },
  containerDrop: {
    backgroundImage: "linear-gradient(rgb(97, 121, 148), rgb(56, 75, 93))"
  },
  a: {
    color: "#EFE2E2",
    paddingTop: 20
  }
};
