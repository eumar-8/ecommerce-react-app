import React from "react";
//import { NavLink } from "react-router-dom";
import ItemCards from "./ItemCards";
export default class Cards extends React.Component {
  render() {
    let { products } = this.props;
    return (
      <div style={styles.gridCards}>
        {products.map((el, i) => {
          return <ItemCards product={el} key={i} />;
        })}
      </div>
    );
  }
}

let styles = {
  gridCards: {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr",
    gridGap: "1%",
    textAlign: "center",
    height: " 100hv",
    padding: "15px 15px"
  }
};
