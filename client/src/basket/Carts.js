import React from "react";
import CartItem from "./CartItem";

export default class Carts extends React.Component {
  render() {
    return (
      this.props.products &&
      this.props.products.map((el, i) => {
        return (
          <CartItem
            handleTotalToPay={this.props.handleTotalToPay}
            handleQuantity={this.props.handleQuantity}
            product={el}
            key={i}
          />
        );
      })
    );
  }
}
