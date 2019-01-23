import React from "react";

export default class Carts extends React.Component {
  state = {
    image: "",
    price: 0
  };
  componentDidMount() {
    let { product } = this.props;
    this.findImages(product._id);
    this.handlePrice(product.price, product.qty);
  }

  findImages = id => {
    fetch(`http://localhost:3001/images/${id}`).then(response => {
      if (response.ok) {
        response.json().then(responseJson => {
          if (responseJson.length > 0) {
            //console.log(responseJson);
            this.setState({ image: responseJson[0].photo_url }, () => {
              //console.log(this.state);
            });
          }
        });
      }
    });
  };
  handlePrice = (price, qty) => {
    let total = parseInt(price) * parseInt(qty);
    this.setState({ price: total }, () => {
      this.props.handleTotalToPay(total);
      // this.props.handleQuantity(parseInt(qty));
    });
  };

  render() {
    let { product } = this.props;

    return (
      <div className="cart">
        <img alt="" src={this.state.image} />
        <div className="cart-name">
          <h3>{product.name}</h3>
          <p>Ref:12345678</p>
        </div>

        <div className="cart-body">
          <p>
            <strong>Quantity</strong>
          </p>
          <p>{product.qty}</p>
        </div>
        <div className="cart-price">
          <p className="status pending">Price</p>
          <p className="price">{this.state.price}€</p>
        </div>
      </div>
    );
  }
}
