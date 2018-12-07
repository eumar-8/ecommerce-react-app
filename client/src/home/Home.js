import React from "react";
import Search from "./Search";
import CardsHome from "./CardsHome";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="banner">
            <div className="banner-content">
              <h1>Welcome to DecoHome</h1>
              <Search />
            </div>
          </div>
        </section>
        <section>
          <CardsHome />
        </section>
      </div>
    );
  }
}
