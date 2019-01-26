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
    let param = this.props.location.param1;
    if (param === undefined) {
      this.getProducts();
    } else {
      this.getProductsByName(param);
      console.log("=======", param);
    }
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

  getProductsByName = name => {
    const url = `http://localhost:3001/products/name/${name}`;
    fetch(url)
      .then(res => {
        res.json().then(resJson => {
          console.log("$$$$$$$$", resJson);
          this.setState({ products: resJson }, () => {
            console.log("SSSSSSSSSS", this.state.products);
          });
        });
      })
      .catch(e => {});

    this.setState({ products: [] });
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
              <div style={styles.wrapper}>
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
                      <ProductsMain
                        removeCard={this.removeCard}
                        products={this.state.products}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            ) : (
              <Container>
                <TopBar
                  getProducts={this.getProducts}
                  getProductsBycategoty={this.getProductsBycategoty}
                />
                <Row>
                  <Col xs="12">
                    <ProductsMain
                      removeCard={this.removeCard}
                      products={this.state.products}
                    />
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
  },
  wrapper: {
    //marginTop: "50px",
    minHeight: "100%"
  }
};
