import React from "react";
//import UploadImages from "./UploadImages";

export default class UpdateProduct extends React.Component {
  state = {
    products: [],
    category: "Lamps",
    image: "",
    name: "",
    description: "",
    price: ""
  };
  // componentDidMount() {
  //   this.getMoviesByGenre(this.props.match.params.genreId);
  // }

  // getMoviesByGenre = genreId => {
  //   const url = "http://localhost:3001/movies/genreId/" + genreId;
  //   fetch(url)
  //     .then(res => {
  //       res.json().then(resJson => {
  //         this.setState({ movies: resJson });
  //       });
  //     })
  //     .catch(e => {});
  // };

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
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Example select</label>
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

          <button type="submit" className="btn btn-primary">
            Continue
          </button>
        </form>
      </div>
    );
  }
}
