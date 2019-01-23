import React from "react";
import { Container, Row, Col } from "reactstrap";
import Media from "react-media";
import ProductsMain from "./ProductsMain";
import Sidebar from "../Sidebar";
import TopBar from "../TopBar";

export default class ProductsPage extends React.Component {
  state = {
    product: "",
    products: []
  };

  componentDidMount() {
    this.getProducts();
  }

  removeCard = id => {
    console.log(id);
    const url = "http://localhost:3001/products/remove";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: id
      })
    })
      .then(res => {
        this.getProducts();
      })
      .catch(e => {});
  };

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
      <div>
        <Media query="(min-width: 900px)">
          {matches =>
            matches ? (
              <Container fluid={true} style={styles.container}>
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
                    {/* <Container> */}
                    <ProductsMain
                      removeCard={this.removeCard}
                      products={this.state.products}
                    />
                    {/* </Container> */}
                  </Col>
                </Row>
              </Container>
            ) : (
              <Container>
                <TopBar
                  getProducts={this.getProducts}
                  getProductsBycategoty={this.getProductsBycategoty}
                />
                <Row>
                  <Col xs="12">
                    {/* <Container> */}
                    <ProductsMain
                      removeCard={this.removeCard}
                      products={this.state.products}
                    />
                    {/* </Container> */}
                  </Col>
                </Row>
              </Container>
            )
          }
        </Media>
      </div>
    );
  }
}
const styles = {
  container: {
    marginTop: "30px"
  }
};
