import React from "react";
import Media from "react-media";

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Media query="(min-width: 432px)">
          {matches =>
            matches ? (
              <form className="search-bar">
                <input
                  type="text"
                  placeholder="Search any procuct..."
                  name="search"
                />
                <button type="submit">
                  <i className="fa fa-search" />
                  <span>search</span>
                </button>
              </form>
            ) : (
              <form className="search-bar">
                <input
                  type="text"
                  placeholder="Search any procuct..."
                  name="search"
                />
                <button type="submit" className="text-center">
                  <i className="fa fa-search" />
                </button>
              </form>
            )
          }
        </Media>
      </div>
    );
  }
}
