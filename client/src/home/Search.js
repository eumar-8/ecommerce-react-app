import React from "react";

export default class Search extends React.Component {
  render() {
    return (
      <form className="search-bar">
        <input type="text" placeholder="Search any procuct..." name="search" />
        <button type="submit">
          <i className="fa fa-search" />
          <span>search</span>
        </button>
      </form>
    );
  }
}
