import React from "react";
import CheckOutForm from "./CheckOutForm";
export default class CheckOut extends React.Component {
  state = {
    name: "",
    lastname: "",
    email: "",
    city: "",
    adress: "",
    telephone: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log("===>", this.state);
  };

  render() {
    return (
      <div>
        <CheckOutForm
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          {...this.state}
        />
      </div>
    );
  }
}
