import React from "react";
import { Row, Col, Jumbotron } from "reactstrap";
//import { NavLink } from "react-router-dom";
import ProductItem from "./ProductItem";
export default class ProductsMain extends React.Component {
  render() {
    let { products, removeCard } = this.props;
    return (
      <Row>
        {products.length === 0 ? (
          <div>
            <Col xs="12">
              <Jumbotron style={{ backgroundColor: "snow" }}>
                <h3 className="display-3">hey!!</h3>
                <p className="lead">
                  We are sorry, we dont have any product with this name
                </p>
                <hr className="my-2" />
              </Jumbotron>
            </Col>
          </div>
        ) : (
          products.map((el, i) => {
            return (
              <Col sm="10" md="5" lg="4" key={i}>
                <ProductItem removeCard={removeCard} product={el} />
              </Col>
            );
          })
        )}
      </Row>
    );
  }
}
