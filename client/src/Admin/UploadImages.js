import React from "react";
import widgetStyle from "./widgetStyle";
import { NavLink } from "react-router-dom";
export default class UploadImages extends React.Component {
  state = {
    images: []
  };
  componentDidMount() {
    this.findImages();
  }
  findImages() {
    fetch(`http://localhost:3001/images/${this.props.match.params.product_id}`)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ images: responseJson });
        //;
      })
      .catch(e => {});
  }
  uploadWidget = () => {
    let self = this;
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "eumar-8",
        upload_preset: "zjwe4avo",
        tags: ["user"],
        stylesheet: widgetStyle
      },
      (error, result) => {
        if (error) {
        } else {
          fetch("http://localhost:3001/images/add", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              photo_url: result[0].secure_url,
              public_id: result[0].public_id,
              productID: self.props.match.params.product_id,
              name: result[0].original_filename
            })
          })
            .then(response => response.json())
            .then(responseJson => {
              this.findImages();
            })
            .catch(e => {});
        }
      }
    );
  };

  render() {
    let { images } = this.state;
    return (
      <div style={styles.container} className="container">
        <div className="flex_upload">
          <div className="upload">
            <button className="button_small" onClick={this.uploadWidget}>
              {" "}
              add photo
            </button>
          </div>
          <div style={styles.gridImages}>
            {images.map((img, i) => {
              return (
                <div>
                  <img
                    src={img.photo_url}
                    alt={img.name}
                    height="100"
                    width="100%"
                  />
                </div>
              );
            })}
          </div>
          <div>
            <NavLink to="/products">
              <button style={styles.button}>Done</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

let styles = {
  gridImages: {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr 1fr",
    gridGap: "1%",
    textAlign: "center",
    marginTop: "30px"
  },
  container: {
    textAlign: "center",
    margin: "40px"
  },
  button: {
    margin: "30px"
  }
};
