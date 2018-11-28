import React from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
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
            <NavLink to="/basket">
              <i className="fa fa-shopping-basket" />
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
    gridTemplateColumns: "4fr 1fr 1fr 1fr",
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
