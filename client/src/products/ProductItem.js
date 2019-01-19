import React from "react";
import { NavLink } from "react-router-dom";
export default class ProductItem extends React.Component {
  state = {
    image: ""
  };
  findImages = id => {
    fetch(`http://localhost:3001/images/${id}`).then(response => {
      if (response.ok) {
        response.json().then(responseJson => {
          //;
          if (responseJson.length > 0) {
            //console.log(responseJson);
            this.setState({ image: responseJson[0].photo_url }, () => {
              //console.log(this.state);
            });
          }
        });
      }
    });
  };
  componentDidMount() {
    this.findImages(this.props.product._id);
  }
  componentWillReceiveProps(nextProp) {
    if (this.props.product._id !== nextProp.product._id) {
      debugger;
      this.findImages(nextProp.product._id);
    }
  } 
  render() {
    let { product } = this.props;

    return (
      <NavLink to={`products/${product._id}`}>
        <div>
          <i className="fa fa-trash-alt" />
          <div className="card">
            <img
              style={styles.image}
              className="card-img-top"
              src={this.state.image}
              alt=""
            />
            <div className="card-body">
              <p style={styles.textName} className="card-text">
                {product.name}
              </p>
              <p className="card-text">{product.price}€</p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}

let styles = {
  image: {
    width: "300px",
    height: " 200px",
    margin: " 20px"
  },
  textName: {
    whiteSpace: "nowrap",
    width: "250px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontWeight: "500"
  }
};
