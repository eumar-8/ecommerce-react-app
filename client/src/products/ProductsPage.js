import React from "react";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "../Sidebar";
//import DataBase from "../DataBase";
import ProductsMain from "./ProductsMain";
import { NavLink } from "react-router-dom";

export default class ProductsPage extends React.Component {
  state = {
    product: "",
    products: []
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const url = "http://localhost:3001/products";
    fetch(url)
      .then(res => {
        res.json().then(resJson => {
          this.setState({ products: resJson });
        });
      })
      .catch(e => {});
  };

  getProductsBycategoty = category => {
    const url = "http://localhost:3001/products/category/" + category;
    fetch(url)
      .then(res => {
        res.json().then(resJson => {
          this.setState({ products: resJson });
        });
      })
      .catch(e => {});
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs="2">
            <div className="sidebar ">
              <Sidebar
                getProducts={this.getProducts}
                getProductsBycategoty={this.getProductsBycategoty}
              />
            </div>
          </Col>
          <Col xs="10">
            <NavLink to="/admin/update">
              <button>add product</button>
            </NavLink>
            <Container>
              <ProductsMain products={this.state.products} />
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}
const styles = {
  gridCardProduct: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    gridGap: "1%",
    textAlign: "center",
    padding: "15px 15px"
  }
};
