import React from "react";

export default class CarruselCard extends React.Component {
  render() {
    let { images } = this.props;
    let image = images.map((el, i) => {
      if (i === 0) {
        return (
          <div key={i} className="carousel-item active">
            <img className="d-block w-100" src={el.photo_url} alt={el.name} />
          </div>
        );
      } else {
        return (
          <div key={i} className="carousel-item">
            <img className="d-block w-100" src={el.photo_url} alt={el.name} />
          </div>
        );
      }
    });
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">{image}</div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
