import React from "react";
import CartItem from "./CartItem";
import { Jumbotron } from "reactstrap";

export default class Carts extends React.Component {
  render() {
    return !this.props.products ? (
      <div>
        <Jumbotron style={{ backgroundColor: "snow" }}>
          <h5 className="display-3">hey!!</h5>
          <p className="lead">The cart is empty</p>
          <hr className="my-2" />
        </Jumbotron>
      </div>
    ) : (
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
