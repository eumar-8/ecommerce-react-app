import React from "react";
import Carts from "./Carts";
import Media from "react-media";
import OrderCart from "./OrderCart";

export default class Cart extends React.Component {
  state = {
    products: [],
    totalToPay: 0,
    arr: []
  };

  handleTotalToPay = amount => {
    this.state.arr.push(amount);
    this.sumTotal(this.state.arr);
    console.log(this.state.arr);
  };

  sumTotal = arr => {
    let sum = 0;
    arr.map(el => {
      sum += el;
    });
    this.setState({ totalToPay: sum });
  };

  componentDidMount() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    this.setState({ products: cart });
  }

  render() {
    return (
      <Media query="(min-width: 773px)">
        {matches =>
          matches ? (
            <div style={styles.wrapper}>
              <div className="container">
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
              </div>{" "}
            </div>
          ) : (
            <div style={styles.wrapper}>
              <div className="container">
                <div style={styles.gridCartOne}>
                  <div>
                    <OrderCart
                      totalToPay={this.state.totalToPay}
                      quantity={this.state.quantity}
                      products={this.state.products}
                    />
                  </div>
                  <Carts
                    handleTotalToPay={this.handleTotalToPay}
                    handleQuantity={this.handleQuantity}
                    products={this.state.products}
                  />
                  <div />
                </div>
              </div>
            </div>
          )
        }
      </Media>
    );
  }
}

let styles = {
  gridCart: {
    display: "grid",
    gridTemplateColumns: "4fr 4fr",
    gridGap: "1%",
    textAlign: "center",
    padding: "15px 15px",

    overflow: "auto"
  },
  wrapper: {
    //marginTop: "50px",
    height: "100vh"
    //minHeight: "100%"
  },
  gridCartOne: {
    display: "grid",
    gridTemplateColumns: "2fr",
    gridGap: "1%",
    textAlign: "center",
    padding: "15px 15px"
  }
};
