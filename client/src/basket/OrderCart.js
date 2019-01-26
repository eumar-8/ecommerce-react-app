import React from "react";
import Modal from "./Modal";

export default class OrderCart extends React.Component {
  state = {
    products: [],
    qty: 0,
    price: 0,
    total: 0
  };
  handleQuantity = arr => {
    let sum = 0;
    if (arr) {
      arr.map(el => {
        sum = sum + parseInt(el.qty);
      });
      this.setState({ qty: sum });
    }
  };

  renderTotaltoPay = arr => {
    console.log("$$$$$$$$$$", arr);
    let sum = 0;
    arr.map(el => {
      let multyply = parseInt(el.price) * parseInt(el.qty);
      sum = sum + multyply;
    });
    console.log("+++++++++++", sum);
    this.setState({ total: sum });
    // return sum;
  };

  componentDidMount() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    this.setState({ products: cart }, () => {
      this.renderTotaltoPay(this.props.products);
    });
    this.handleQuantity(cart);

    console.log(this.props.totalTopay);
  }
  render() {
    console.log("total a pagar", this.props.totalToPay);
    let { totalToPay } = this.props;
    return (
      <div style={styles.wrapperTotal}>
        <h1>Order sumary</h1>
        <h2>
          {this.state.products === null
            ? " 0 Items "
            : this.state.qty + " items"}
        </h2>
        <div style={styles.containerTotal}>
          <h3>total</h3>
          <p>
            {this.state.products === null
              ? " 0 Items "
              : this.state.total + " €"}
          </p>
        </div>
        {/* <NavLink to="/checkout"> */}

        <Modal />
        {/* </NavLink> */}
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
