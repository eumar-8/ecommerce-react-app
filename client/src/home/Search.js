import React from "react";
import Media from "react-media";
import { Link, withRouter } from "react-router-dom";

class Search extends React.Component {
  state = {
    name: "",
    productsbyname: []
  };

  componentDidMount() {
    console.log(this.state.productsbyname);
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value }, () => {});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: "" });
  };

  render() {
    const newTo = {
      pathname: `/products`,
      param1: this.state.name
    };
    return (
      <div>
        <Media query="(min-width: 432px)">
          {matches =>
            matches ? (
              <form onSubmit={this.handleSubmit} className="search-bar">
                <input
                  type="text"
                  placeholder="Search any procuct..."
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <Link to={newTo}>
                  <button type="submit">
                    <i className="fa fa-search" />
                    <span>search</span>
                  </button>
                </Link>
              </form>
            ) : (
              <form onSubmit={this.handleSubmit} className="search-bar">
                <input
                  type="text"
                  placeholder="Search any procuct..."
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <Link to={newTo}>
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </Link>
              </form>
            )
          }
        </Media>
      </div>
    );
  }
}

export default withRouter(Search);
