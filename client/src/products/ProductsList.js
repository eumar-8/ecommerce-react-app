import React from "react";
import { NavLink } from "react-router-dom";
import Media from "react-media";
import CarruselCard from "./CarruselCard";
import InputQuantity from "./InputQuantity";
import CartStorage from "../basket/CartStorage";

export default class ProductsList extends React.Component {
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

  handleSubmit = e => {
    this.setState({ quantity: "" });
  };

  render() {
    let { product } = this.state;
    let { handleClickCart, numCart } = this.props;

    return (
      <Media query="(min-width: 799px)">
        {matches =>
          matches ? (
            <div style={styles.gridCardProduct}>
              <div style={styles.contenCenter}>
                <CarruselCard
                  style={styles.carrusel}
                  images={this.state.images}
                />
              </div>
              <div className="basket-cobtainer">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}€</p>
                <InputQuantity
                  style={{ display: "block" }}
                  handleChange={this.handleChange}
                  quantity={this.state.quantity}
                />

                <button
                  onClick={e => {
                    handleClickCart(e);
                    CartStorage(
                      this.state.product,
                      this.state.quantity,
                      numCart
                    );
                    this.handleSubmit();
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
          ) : (
            <div style={styles.gridCardProductone}>
              <div style={styles.contenCenter}>
                <CarruselCard
                  style={styles.carrusel}
                  images={this.state.images}
                />
              </div>
              <div className="basket-cobtainer">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>{product.price}€</p>
                <InputQuantity
                  style={{ display: "block" }}
                  handleChange={this.handleChange}
                  quantity={this.state.quantity}
                />

                <button
                  onClick={e => {
                    handleClickCart(e);
                    CartStorage(
                      this.state.product,
                      this.state.quantity,
                      numCart
                    );
                    this.handleSubmit();
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
          )
        }
      </Media>
    );
  }
}

const styles = {
  gridCardProduct: {
    display: "grid",
    gridTemplateColumns: " 2fr 2fr ",
    gridGap: "5%",
    textAlign: "center",
    padding: "50px 50px",
    height: "100vh"
  },
  gridCardProductone: {
    display: "grid",
    gridTemplateColumns: " 2fr",
    gridGap: "5%",
    textAlign: "center",
    padding: "50px 50px"
  },

  contenCenter: {
    //textAlign: "center",
    //height: "70%"
    marginBottom: "40px"
  },
  carrusel: {
    paddingTop: "40px"
  },
  button: {
    marginBottom: "20px"
  },
  quantityContainer: {
    textAlign: "center"
  }
};
