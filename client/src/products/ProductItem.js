import React from "react";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";
export default class ProductItem extends React.Component {
  state = {
    image: ""
  };
  findImages = id => {
    fetch(`http://localhost:3001/images/${id}`).then(response => {
      if (response.ok) {
        response.json().then(responseJson => {
          //;
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

  componentDidMount() {
    this.findImages(this.props.product._id);
  }
  componentWillReceiveProps(nextProp) {
    if (this.props.product._id !== nextProp.product._id) {
      //debugger;
      this.findImages(nextProp.product._id);
    }
  }
  render() {
    let { product, removeCard } = this.props;

    return (
      <div>
        <Button
          onClick={() => removeCard(product._id)}
          className="card_icon_delete"
          close
        />
        <NavLink
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
          className="cardLink"
          to={`products/${product._id}`}
        >
          <div>
            <div className="card">
              <img
                style={styles.image}
                className="card-img-top"
                src={this.state.image}
                alt=""
              />
              <div className="card-body text-center">
                <p style={styles.textName} className="text-center card-text">
                  {product.name}
                </p>
                <p className="card-text-price">{product.price}€</p>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}

let styles = {
  image: {
    width: "200px",
    height: " 200px",
    margin: "auto",
    paddingTop: "20px"
  },
  textName: {
    fontWeight: "500",
    color: "black"
  }
};
