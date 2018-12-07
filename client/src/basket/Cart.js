import React from "react";
import Carts from "./Carts";
import OrderCart from "./OrderCart";

export default class Cart extends React.Component {
  state = {
    products: [],
    totalToPay: 0
  };

  handleTotalToPay = amount => {
    let total = (this.state.totalToPay += amount);
    this.setState({ totalToPay: total }, () => {
      console.log("============", this.state.totalToPay);
    });
  };
  componentDidMount() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    this.setState({ products: cart }, () => {
      //console.log("-------------->", cart);
    });
  }

  render() {
    return (
      <div className="container" style={styles.wrapper}>
        <div style={styles.gridCart}>
          <div>
            <Carts
              handleTotalToPay={this.handleTotalToPay}
              products={this.state.products}
            />
          </div>

          <div>
            <OrderCart
              totalToPay={this.state.totalToPay}
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
