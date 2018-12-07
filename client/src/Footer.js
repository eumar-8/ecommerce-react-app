import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-links">
          {/* <a href="#"> */}
          <i className="fab fa-github" />
          {/* </a> */}
          {/* <a href="#"> */}
          <i className="fab fa-instagram" />
          {/* </a> */}
          {/* <a href="#"> */}
          <i className="fab fa-facebook" />
          {/* </a> */}
          {/* <a href="#"> */}
          <i className="fab fa-twitter" />
          {/* </a> */}
          {/* <a href="#"> */}
          <i className="fab fa-linkedin" />
          {/* </a> */}
        </div>
        <div className="footer-copyright">
          This footer is made with <i className="fas fa-heart" /> by Eugenia
        </div>
      </div>
    );
  }
}
