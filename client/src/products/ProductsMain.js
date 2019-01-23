import React from "react";
import { Row, Col } from "reactstrap";
//import { NavLink } from "react-router-dom";
import ProductItem from "./ProductItem";
export default class ProductsMain extends React.Component {
  render() {
    let { products, removeCard } = this.props;
    return (
      <Row>
        {products.map((el, i) => {
          return (
            <Col sm="10" md="5" lg="4" key={i}>
              <ProductItem removeCard={removeCard} product={el} />
            </Col>
          );
        })}
      </Row>
    );
  }
}
