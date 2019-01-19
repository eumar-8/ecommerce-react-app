import React from "react";

export default class Shops extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="unic"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52815.00944496354!2d2.1046377830617504!3d41.41451657774627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2e96cd68aa3%3A0x48be946b0fef63a6!2sCalle+de+Arag%C3%B3n%2C+347%2C+08009+Barcelona!5e0!3m2!1ses!2ses!4v1543828490708"
          style={{
            width: "100%",
            style: "border:0",
            height: "400px",
            frameborder: "0"
          }}
          allowFullScreen
        />
        <div>
          <h2 style={styles.textShops} className="container">
            We are around Espain Eso sit voluptatem accusantium doloremque
            laudantium.
          </h2>
        </div>
      </div>
    );
  }
}

let styles = {
  textShops: {
    textAlign: "center",
    fontWeight: "700",
    width: "70%",
    marginTop: "40px",
    marginBottom: "40px"
  },
  textH3: {
    textAlign: "center",
    color: "green",
    marginBottom: " 30px"
  }
};
