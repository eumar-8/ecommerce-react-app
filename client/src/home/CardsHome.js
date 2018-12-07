import React from "react";

//import tileData from "./tileData";

export default class CardsHome extends React.Component {
  render() {
    return (
      <div style={styles.gridHome}>
        <p style={styles.flex}>
          commodo voluptate. Pariatur non ullamco proident laboris ullamco
          cupidatat excepteur excepteur cupidatat reprehenderit pariatur laboris
          ut enim. Ipsum cillum irure do excepteur ex est anim. Commodo
          adipisicing amet adipisicing eu amet excepteur et duis ipsum magna.
          Elit sint quis reprehenderit dolore magna. Enim adipisicing in
          exercitation enim in mollit ad eiusmod officia Lorem. Labore in sint
        </p>

        <div>
          <img
            style={styles.img}
            alt=""
            src="https://res.cloudinary.com/eumar-8/image/upload/v1543577885/hojas_arbol_arbcwv.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            style={styles.img}
            src="https://res.cloudinary.com/eumar-8/image/upload/v1543577875/disco_fs4xcc.jpg"
          />
        </div>

        <p style={styles.flex}>
          commodo voluptate. Pariatur non ullamco proident laboris ullamco
          cupidatat excepteur excepteur cupidatat reprehenderit pariatur laboris
          ut enim. Ipsum cillum irure do excepteur ex est anim. Commodo
          adipisicing amet adipisicing eu amet excepteur et duis ipsum magna.
          Elit sint quis reprehenderit dolore magna. Enim adipisicing in
          exercitation enim in mollit ad eiusmod officia Lorem. Labore in sint
        </p>
        <p style={styles.flex}>
          commodo voluptate. Pariatur non ullamco proident laboris ullamco
          cupidatat excepteur excepteur cupidatat reprehenderit pariatur laboris
          ut enim. Ipsum cillum irure do excepteur ex est anim. Commodo
          adipisicing amet adipisicing eu amet excepteur et duis ipsum magna.
          Elit sint quis reprehenderit dolore magna. Enim adipisicing in
          exercitation enim in mollit ad eiusmod officia Lorem. Labore in sint
        </p>

        <div>
          <img
            alt=""
            style={styles.img}
            src="https://res.cloudinary.com/eumar-8/image/upload/v1543577885/hojas_arbol_arbcwv.jpg"
          />
        </div>
      </div>
    );
  }
}
const styles = {
  gridHome: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap: "1%",
    textAlign: "center"
  },
  img: {
    width: "100%"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  }
};
