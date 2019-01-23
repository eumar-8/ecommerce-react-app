import React from "react";
import Carts from "./Carts";
import OrderCart from "./OrderCart";

export default class Cart extends React.Component {
  state = {
    products: [],
    totalToPay: 0,
    quantity: 0
  };
  handleQuantity = amount => {
    let quantity = this.state.quantity;
    let total = (quantity += amount);
    this.setState({ quantity: total });
  };

  handleTotalToPay = amount => {
    let totalTopay = this.state.totalToPay;
    let total = (totalTopay += amount);
    this.setState({ totalToPay: total });
  };
  componentDidMount() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log("============", cart);

    this.setState({ products: cart });
  }

  render() {
    return (
      <div className="container" style={styles.wrapper}>
        <div style={styles.gridCart}>
          <div>
            <Carts
              handleTotalToPay={this.handleTotalToPay}
              handleQuantity={this.handleQuantity}
              products={this.state.products}
            />
          </div>

          <div>
            <OrderCart
              totalToPay={this.state.totalToPay}
              quantity={this.state.quantity}
              products={this.state.products}
            />
          </div>
        </div>
      </div>
    );
  }
}

let styles = {
  gridCart: {
    display: "grid",
    gridTemplateColumns: "4fr 2fr",
    gridGap: "1%",
    textAlign: "center",
    padding: "15px 15px"
  },
  wrapper: {
    marginTop: "50px",
    height: "100vmin"
  }
};
