import React from "react";
import { NavLink } from "react-router-dom";
//import { NumCart } from "./NumCart";

export default class Navbar extends React.Component {
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
              <i className="fa fa-shopping-basket" />({num})
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const styles = {
  navbar: {
    display: "grid",
    gridTemplateColumns: "12fr 1fr 1fr 1fr ",
    gridGap: "1%",
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
    textAlign: "right",
    color: "#EFE2E2"
  }
};
