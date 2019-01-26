import React from "react";
import { Container, Row, Col } from "reactstrap";

export default class UpdateProduct extends React.Component {
  state = {
    products: [],
    category: "Lamps",
    image: "",
    name: "",
    description: "",
    price: ""
  };

  addProducts = (category, name, description, price) => {
    const url = "http://localhost:3001/products/add",
      self = this;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        category: category,
        name: name,
        description: description,
        price: price
      })
    })
      .then(res => {
        res.json().then(resJson => {
          //;
          self.props.history.push(`/admin/product/${resJson._id}`);
        });
      })
      .catch(e => {});
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addProducts(
      this.state.category,
      this.state.name,
      //this.props.match.params.genreId
      this.state.description,
      this.state.price
    );
    this.setState({ category: "", name: "", description: "", price: "" });
  };
  render() {
    return (
      <div style={{ height: "70vh" }} className="form_update">
        <Container style={{ marginTop: "40px" }}>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <form onSubmit={this.handleSubmit}>
                <div
                  style={{ marginLeft: "30px", width: "100% " }}
                  className="form-group"
                >
                  <label htmlFor="exampleFormControlSelect1">
                    select Category
                  </label>
                  <select
                    name="category"
                    onChange={this.handleChange}
                    className="form-control"
                    id="exampleFormControlSelect1"
                  >
                    {["Lamps", "Vases", "Mirrors", "Candles"].map((ele, i) => (
                      <option key={i} value={ele}>
                        {ele}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="add name"
                />
                <input
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="add description"
                />
                <input
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="add price"
                />
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                  <button type="submit" className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
