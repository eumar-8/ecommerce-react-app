import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar";
import CarruselCard from "./CarruselCard";
import InputQuantity from "./InputQuantity";
import CartStorage from "../basket/CartStorage";

export default class Card extends React.Component {
  state = { product: {}, images: [], quantity: "" };

  componentDidMount() {
    const id = this.props.match.params.product;
    this.getProductById(id);
    this.findImages(id);
  }

  findImages = id => {
    fetch(`http://localhost:3001/images/${id}`).then(response => {
      if (response.ok) {
        response.json().then(responseJson => {
          //;
          if (responseJson.length > 0) {
            //console.log(responseJson);
            this.setState({ images: responseJson }, () => {
              //console.log(this.state);
            });
          }
        });
      }
    });
  };

  getProductById = id => {
    const url = "http://localhost:3001/products/product/" + id;
    fetch(url)
      .then(res => {
        res.json().then(resJson => {
          this.setState({ product: resJson });
        });
      })
      .catch(e => {});
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state.quantity);
    });
  };

  render() {
    let { product } = this.state;
    return (
      <div style={styles.gridCardProduct}>
        <div style={styles.ul}>
          <Sidebar />
        </div>

        <div style={styles.contenCenter}>
          <CarruselCard images={this.state.images} />
        </div>
        <div className="basket-cobtainer">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}€</p>
          <InputQuantity
            handleChange={this.handleChange}
            quantity={this.state.quantity}
          />

          <button
            onClick={() => {
              CartStorage(this.state.product, this.state.quantity);
            }}
            style={styles.button}
            type="button"
            className="btn btn-outline-dark"
          >
            Add to basket
          </button>
          <NavLink to="/cart">
            <p>go to my cart</p>
          </NavLink>
        </div>
      </div>
    );
  }
}

const styles = {
  gridCardProduct: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr ",
    gridGap: "1%",
    textAlign: "center",
    padding: "15px 15px",
    height: "100vh"
  },
  ul: {
    textAlign: "left",
    marginTop: "74px"
  },
  contenCenter: {
    textAlign: "center"
  },
  button: {
    marginBottom: "20px"
  }
};
