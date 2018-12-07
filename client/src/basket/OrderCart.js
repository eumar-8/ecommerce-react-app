import React from "react";
import { NavLink } from "react-router-dom";

export default class CartItem extends React.Component {
  render() {
    let { totalToPay } = this.props;
    return (
      <div style={styles.wrapperTotal}>
        <h1>Order sumary</h1>
        <h2>
          {this.props.products === null
            ? " 0 Items "
            : this.props.products.length + "items"}
        </h2>
        <div style={styles.containerTotal}>
          <h3>total</h3>
          <p>{totalToPay}€</p>
        </div>
        <NavLink to="/checkout">
          <button type="button" className="btn btn-outline-dark">
            Process Order
          </button>
        </NavLink>
      </div>
    );
  }
}
let styles = {
  containerTotal: {
    display: "flex",
    alignItems: "center",
    paddingTop: "20px",
    marginBottom: "30px",
    borderBottom: "1px solid rgba(220, 224, 244, 0.4)",
    justifyContent: "space-around"
  },
  wrapperTotal: {
    border: "1px solid rgba(134, 134, 136, 0.4)",
    padding: "40px 10px 40px"
  }
};
