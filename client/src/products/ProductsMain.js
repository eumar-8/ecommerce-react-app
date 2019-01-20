import React from "react";
import { Container, Row, Col } from "reactstrap";
//import { NavLink } from "react-router-dom";
import ProductItem from "./ProductItem";
export default class ProductsMain extends React.Component {
  render() {
    let { products } = this.props;
    return (
      <Row>
        {products.map((el, i) => {
          return (
            <Col xs="4">
              <ProductItem product={el} key={i} />
            </Col>
          );
        })}
      </Row>
    );
  }
}

let styles = {
  gridCards: {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr",
    gridGap: "1%",
    textAlign: "center",
    height: " 100hv",
    padding: "15px 15px"
  }
};
