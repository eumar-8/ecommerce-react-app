import React from "react";
import Search from "./Search";

export default class Home extends React.Component {
  render() {
    return (
      <div className="banner">
        <h1>WELCOME TO DECOHOME </h1>
        <div>
          <Search />
        </div>
      </div>
    );
  }
}
